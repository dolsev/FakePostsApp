import React from "react";
import MyButton from "./UI/button/MyButton";

function Post(props) {
  return (
    <div>
      <div className="post" id={props.post.id}>
        <div className="post__content">
          <strong>
            {props.number}. {props.post.title}
          </strong>
        </div>
        <div>{props.post.body}</div>
        <div className="post__btns">
          <MyButton onClick={()=>props.remove(props.post)}>Delete</MyButton>
        </div>
      </div>
    </div>
  );
}

export default Post;
 