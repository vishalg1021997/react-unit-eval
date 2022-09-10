import { Add_Item, Remove_Item, Update_Item,LOGIN_SUCCESS } from "./actiontypes";


export const addItem = (payload) => ({
    type: Add_Item,
    payload:payload
})

export const removeItem = (payload) => ({
    type: Remove_Item,
    payload:payload
})

export const updateItem = (payload) => ({
    type:Update_Item,
    payload:payload
})

export const login = (payload) => ({
    type:LOGIN_SUCCESS,
    payload:payload
})

export const logout = (payload) => ({
    type:LOGOUT,
    payload:payload
})