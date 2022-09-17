

import {combineReducers, legacy_createStore} from "redux";


let initialState={

    counter:{
        count:0,
    }

}  
const counterReducer=(state=initialState,action)=>{

    switch(action.type){
        case"ADD":{

            return{
              count:state.count+1 ,
            }

        }
        case"minus":{
              return{ 
                count:state.count-1 ,
              }
        }
        default:{
            return  state;
        }
    }
}

let rootReducer=combineReducers({
     counter:counterReducer
})
export const store = legacy_createStore(  rootReducer, initialState);


