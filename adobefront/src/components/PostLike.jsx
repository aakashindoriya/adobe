import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import {IconButton} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { dislikePost, likePost } from '../redux/actions/post.actions';
export default function PostLike({_id}) {
    const state=useSelector(s=>s.post)
    const dispatch=useDispatch()
    const [islike,setisLike]=useState(true)

    function handelLike(){
        dispatch(dislikePost(_id))
        setisLike(true)
    }
    function handleDislike(){
        dispatch(likePost(_id))
        setisLike(false)
    }
  return (
    <>
    {islike? 
        <IconButton
          icon={<AiOutlineLike />}
          isLoading={state.loading}
          aria-label="Unlike Post"
          variant="ghost"
          colorScheme="green"
          onClick={() => handleDislike()}
        />
      : 
        <IconButton
          icon={<AiOutlineDislike />}
          aria-label="Like Post"
          variant="ghost"
          colorScheme="gray"
          isLoading={state.loading}
          onClick={() => handelLike()}
        />
      }
      </>
  )
}
