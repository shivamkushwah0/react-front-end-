import {COMMENTS} from "../shared/comments";
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
            comment.id=state.length;
            comment.date = new Date().toISOString();
            return state.comment.concat(comment); 
            
        default : return state;
    }
}