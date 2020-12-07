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
    .then(response => {
        if(response.ok)
        return response;
        else 
        {
            var error = new Error("ERROR : " + response.statusText + response.statusText)
            error.response = response;
            console.log(error);
            throw error;
        }
    } , error => {
        var err = new Error(error.message)
        throw err;
    } )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishFailed(error.message)))
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
    .then(response => {
        if(response.ok)
        return response;
        else 
        {
            var error = new Error("ERROR : " + response.statusText + response.statusText)
            error.response = response;
            console.log(error);
            throw error;
        }
    } , error => {
        var err = new Error(error.message)
        throw err;
    } )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)))
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
    .then(response => {
        if(response.ok)
        return response;
        else 
        {
            var error = new Error("ERROR : " + response.statusText + response.statusText)
            error.response = response;
            console.log(error);
            throw error;
        }
    } , error => {
        var err = new Error(error.message)
        throw err;
    } )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error)))
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
