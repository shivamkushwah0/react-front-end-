import * as ActionTypes from "./ActionTypes"
import {DISHES} from "../shared/dishes";

export const AddComment = (dishId , rating , author , comment) => {
    console.log(dishId +" " +rating +" " + author +" " + comment +" " );
    return {
        type: ActionTypes.ADD_COMMENT,
        payload : {
            dishId : dishId ,
            rating : rating ,
            author : author ,
            comment : comment
        }
    }
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout(() => {                                      // this is a thunk so it will return a function instead of a object 
        dispatch(addDishes(DISHES));
    }, 1000);
}

export const dishesLoading = ( ) => {
    return {
        type: ActionTypes.DISH_LOADING , 
        
    };
}
export const addDishes=(dishes) => {
    return {
        type:ActionTypes.ADD_DISH,
        payload:dishes
    }
}
export const dishFailed = (mess) => {
    return {
        type:ActionTypes.DISH_FAILED,
        payload : mess
    }
}


