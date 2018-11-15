import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: 'Haider',
    currentUser:'',
    users: [],
    messages: [],
    recipientID: '',
    showMsgBox : false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.USERNAME:
            return ({
                ...state,
                userName: action.payload
            })
        case ActionTypes.CURRENTUSER:
            return ({
                ...state,
                currentUser: action.payload
            })   
        case ActionTypes.ALLUSERS:
            return ({
                ...state,
                users: action.payload
            }) 
        case ActionTypes.CHANGERECPUID:
            return ({
                ...state,
                recipientID: action.payload,
                showMsgBox : true
            })
        case ActionTypes.MESSAGES:
            return ({
                ...state,   
                messages: action.payload
            })
        case ActionTypes.GET_BACK_TO_INBOX:
            return ({
                ...state,
                showMsgBox : false
            })
        case  ActionTypes.DELETE_TODO :
            return ({
                 ...state,
                 messages : action.payload
            })
        case ActionTypes.EDIT_TODO :
              return ({
              ...state,
              messages : action.payload
              })
        default:
            return state;
    }

}