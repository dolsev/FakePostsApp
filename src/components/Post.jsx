import React from "react";
import MyButton from "./UI/button/MyButton";
import { useHistory } from "react-router-dom";

function Post(props) {
  const router = useHistory()
  console.log 
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
          <MyButton onClick={()=>props.remove(props.post)}>Open Post</MyButton>
          <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
 