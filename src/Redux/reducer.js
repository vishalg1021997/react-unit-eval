import { Add_Item, LOGIN_SUCCESS, LOGOUT, Remove_Item, Update_Item } from "./actiontypes";

const initstate = {
    loginstate: 0,
    todo :[]
}

export const reducer = (state=initstate,action) =>{
    switch(action.type){
        case Add_Item:
            return{
                ...state,
        todo: [...state.todo, action.payload]
            }
        case Remove_Item:
            return{
                ...state,
        todo: [state.todo.filter((el) => el.id !== action.payload)]
            }
        case Update_Item:
            return{
                
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                loginstate: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                loginstate: action.payload
            }
        default:
            return state;
    }   
}