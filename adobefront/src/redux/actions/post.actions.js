import {ADD_NEW_POST,DELETE_POST,DISLIKE,ERROR,GET_All_POST,GET_POST_BY_ID,LIKE,LOADING,UPDATE_POST} from "../actionTypes/post.actionType"
import axios from "axios"
export const addNewPost=(data)=>async(dispatch)=>{
try {
    dispatch({type:LOADING})
    const {content ,user_id} =data
    const res=await axios.post(`${process.env.REACT_APP_BASE_URL}/posts/`,{content ,user_id})
    data.toast({
        title: "Success!",
        description: "Post created successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
    })
    return dispatch({type:ADD_NEW_POST,payload:res.data})
} catch (error) {
    return dispatch({type:ERROR,payload:error.response.data})
}
}

export const getAllposts=()=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const res=await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/all`)
        
        return dispatch({type:GET_All_POST,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const updatePost=(data)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const {content,_id}=data
        const res=await axios.put(`${process.env.REACT_APP_BASE_URL}/posts/${_id}`,{content})
        return dispatch({type:UPDATE_POST,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const deletePost=(id)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const res=await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        return dispatch({type:DELETE_POST,payload:id})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const getPostById=(id)=>async(dispatch)=>{
    try {
        dispatch({type:LOADING})
        const res=await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        return dispatch({type:GET_POST_BY_ID,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const likePost=(id)=>async(dispatch)=>{
    console.log(id)
    try {
        dispatch({type:LOADING})
        const res=await axios.post(`${process.env.REACT_APP_BASE_URL}/posts/${id}/like`)
        return dispatch({type:LIKE,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }

 export const dislikePost=(id)=>async(dispatch)=>{
    console.log(id)
    try {
        dispatch({type:LOADING})
        const res=await axios.post(`${process.env.REACT_APP_BASE_URL}/posts/${id}/unlike`)
        return dispatch({type:DISLIKE,payload:res.data})
    } catch (error) {
        return dispatch({type:ERROR,payload:error.response.data})
    }
 }