import React from 'react'
import {useParams} from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import { useEffect, useState } from 'react'
import PostService from '../API/PostService'
import Loader from '../components/UI/Loader/Loader'


function PostPage() {
    const params=useParams()
    const [post, setPost] = useState({})
    const [comments, setPostComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async(id)=>{
        const response = await PostService.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading, comError] = useFetching(async(id)=>{
        const response = await PostService.getCommentsById(id)
        setPostComments(response.data);
    })
    useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])

    return (
        <div>
            <h1>You just opened a post with ID {params.id}!</h1>
            {isLoading?<Loader/>:<div>{post.id}{post.title}</div>}
            <h1>Comments</h1>
            {isComLoading?<Loader/>:<div>{comments.map(c=><div style={{margin:'15px'}} key={c.postId+c.id+c.email}><h3>Name: {c.name}</h3><p> Comment:{c.body}</p></div>)}</div>}


        </div>
    )
}

export default PostPage
