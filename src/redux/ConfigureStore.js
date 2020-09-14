import {createStore} from 'redux';
import {reducer, initialState } from './Reducer';



export const ConfigureStore = () => 
{
    const store= createStore(
        reducer , initialState 
    );
    return store;
}