
import * as ActionTypes from './ActionTypes';

export const Comments = (state={
    isLoading:true,
    err:null,
    comments:[]
} , action) =>
{
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading : false , err:null ,comments:action.payload }
            
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading : false , err:action.payload }
    
        case ActionTypes.ADD_COMMENT :
        
            var comment = action.payload;
            console.log(state);
            return {...state, isLoading:false , comments:state.comments.concat(comment) , err : null}
            
        default : return state;
    }
}