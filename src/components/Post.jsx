import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

function Post(props) {
    const navigate=useNavigate()
    return (
    <div>
      <div className="post" id={props.post.id}>
        <div className="post__content">
          <strong>
            {props.post.id}. {props.post.title}
          </strong>
        </div>
        <div>{props.post.body}</div>
        <div className="post__btns">
          <MyButton onClick={()=>navigate('/posts/'+props.post.id)}>Open Post</MyButton>
          <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
 