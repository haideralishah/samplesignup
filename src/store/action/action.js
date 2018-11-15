
import ActionTypes from '../constant/constant';
import history from '../../History';
import firebase from 'firebase';




export function changeUserName() {
    return dispatch => {
        dispatch({ type: ActionTypes.USERNAME, payload: 'Ali' })
    }
}


export function signupAction(user) {

    return dispatch => {
        console.log('user', user);

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((createdUser) => {
                console.log('signed up successfully', createdUser.uid);
                delete user.password;
                user.uid = createdUser.uid;
                firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                    .then(() => {
                        firebase.database().ref('users/').once('value')
                            .then((userData) => {
                                let allUsers = userData.val();
                                let currentUserInf = {
                                    id: firebase.auth().currentUser.uid,
                                    name: user.username
                                }
                                console.log(currentUserInf)
                                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers })
                                dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserInf })

                                history.push('/signin');
                            })

                    })
            })






    }
}



export function signinAction(user) {
    return dispatch => {
        console.log('user in signin', user);
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((signedinUser) => {
                firebase.database().ref('users/').once('value')
                    .then((userData) => {
                        let allUsers = userData.val();
                        let currentUserUid = firebase.auth().currentUser.uid;
                        let allUsersArr = [];
                        for (var key in allUsers) {
                            allUsersArr.push(allUsers[key]);
                        }
                        console.log(allUsersArr);
                        dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr })
                        dispatch({ type: ActionTypes.CURRENTUSER, payload: currentUserUid })
                    })
            })


    }
}

