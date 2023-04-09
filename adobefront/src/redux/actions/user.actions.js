import {ADD_NEW_USER,DELETE_USER,ERROR,GET_All_USERS,GET_USER_BY_ID,LOADING,UPDATE_USER} from "../actionTypes/user.actionTypes"
import axios from "axios"
export const addNewUser=(data)=>async(dispatch)=>{
try {
    dispatch({type:LOADING})
    const {email,bio,name} =data
    const res=await axios.post(`${process.env.REACT_APP_BASE_URL}/users/`,{email,bio,name})
    
    return dispatch({type:ADD_NEW_USER,payload:res.data})
} catch (error) {
    return dispatch({type:ERROR,payload:error.response.data})
}
}

export const getAllusers=()=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const res=await axios.get(`${process.env.REACT_APP_BASE_URL}/users/all`)
        
        return dispatch({type:GET_All_USERS,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const updateUser=(data)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const {_id,name,bio}=data
        const res=await axios.put(`${process.env.REACT_APP_BASE_URL}/users/${_id}`,{name,bio})
        return dispatch({type:UPDATE_USER,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const deleteUser=(id)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const res=await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/${id}`)
        return dispatch({type:DELETE_USER,payload:id})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const getUserById=(id)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const res=await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${id}`)
        console.log(res)
        return dispatch({type:GET_USER_BY_ID,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }