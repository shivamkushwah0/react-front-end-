import * as ActionTypes from "./ActionTypes"

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


