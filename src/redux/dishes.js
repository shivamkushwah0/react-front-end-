import * as ActionTypes from "./ActionTypes"

export const Dishes = (state={
    isLoading:true,
    err:null,
    dishes:[]
} , action) =>
{
    switch(action.type) {
        case ActionTypes.ADD_DISH:
            return {...state, isLoading : false , err:null , dishes : action.payload}

        case ActionTypes.DISH_LOADING:
            return {...state , isLoading:true , err: null , dishes:[]}
        case ActionTypes.DISH_FAILED:
            return {...state , isLoading:false , err:action.payload , dishes:[]}

        default : return state;
    }
}