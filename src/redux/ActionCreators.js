import * as ActionTypes from "./ActionTypes"
import {baseUrl} from "../shared/baseURL";
import fetch from "cross-fetch";

export const AddComment = (comment) => {
   
    return {
        type: ActionTypes.ADD_COMMENT,
        payload : comment
    }
}

export const postComment = (dishId , rating , author , comment) => (dispatch) => {
    const comments = {
        dishId : dishId,
        rating : rating,
        author : author,
        comment : comment
    }
    comments.date = new Date().toISOString();

    return fetch (baseUrl + "comments" , {
        method : "POST" ,
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(comments),
        credentials : "same-origin"
    })
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
    .then(response => response.json() )
    .then(response => dispatch(AddComment(response)))
    
    .catch(err => {
        console.log("post comments " +err.message ); 
        alert ( "your comment was not posted: Error " + err.message);
    })


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

export const addLeaders = (boolean) => {
    return {
        type: ActionTypes.ADD_LEADERS ,
        payload : boolean
    }
}
export const leadersFailed = (err) => {
    return {
        type : ActionTypes.LEADERS_FAILED,
        payload : err
    }
}
export const leadersLoading = () =>
{
    return {
        type: ActionTypes.LEADERS_LOADING 
    }
}

export const fetchLeaders = () => (dispatch) => {
    dispatch( leadersLoading(true)) ;
    
   return  fetch(baseUrl + "leaders")
    .then(response => {
        if(response.ok)
        return response ; 

        else {
            var error= new Error("ERROR :" + response.status + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        console.log("ERROR : " + error.message);
        var err = new Error(error.message)
        throw err;
    }
    )
    .then(response => response.json())
    .then(response => dispatch(addLeaders(response)))
    .catch(err => dispatch(leadersFailed(err)))

    
}

export const postfeedback = (feedback , author, email , conType , contact , agree) => (dispatch) => {
    fetch(baseUrl + "feedback" , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        } ,
        body : JSON.stringify({
            name : author ,
            feedack : feedback ,
            agree : agree ,
            conType : conType ,
            email : email ,
            Telephone: contact    
        }) ,
        credentials : "same-origin"
    })
    .then(response => {
        if(response.ok) 
        return response ;

        else {
            var error = new Error ( "ERROR : " + response.status + response.statusText);
            error.response = response;
            throw error ;
        }
    }  , error => {
        var err = new Error(error.message)
        throw err;
    })
    .then(response => response.json())
    .then(response => {
        alert("Your feedback is successfully submitted with the following credentials :" + 
        JSON.stringify(response) )
    })
    .catch(err => {
        alert("Sorry, Your feedback was not submitted due to the following error : \n" + err.message)
    })
}