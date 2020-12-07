import * as ActionTypes from "./ActionTypes"
import {DISHES} from "../shared/dishes";
import {baseUrl} from "../shared/baseURL";
import fetch from "cross-fetch";

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

    return fetch(baseUrl+"dishes")
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
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
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    return fetch(baseUrl+"promotions")
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
}
export const promosLoading = ( ) => {
    return {
        type: ActionTypes.PROMOS_LOADING , 
        
    };
}
export const addPromos=(promos) => {
    return {
        type:ActionTypes.ADD_PROMOS,
        payload:promos
    }
}
export const promosFailed = (mess) => {
    return {
        type:ActionTypes.PROMOS_FAILED,
        payload : mess
    }
}
export const fetchComments = () => (dispatch) => {
    
    return fetch(baseUrl+"comments")
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
}
export const addComments=(comments) => {
    return {
        type:ActionTypes.ADD_COMMENTS,
        payload:comments
    }
}
export const commentsFailed = (mess) => {
    return {
        type:ActionTypes.COMMENTS_FAILED,
        payload : mess
    }
}
