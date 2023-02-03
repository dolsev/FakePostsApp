import React from "react";
import Post from "./Post";
import {TransitionGroup,CSSTransition} from 'react-transition-group'

function PostList({ posts,remove, title }) {

  if (!posts.length){
    return (
      <h1 style={{textAlign:'center'}}>
        We literally can't find a post, please try to create a new one, darling</h1>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      <TransitionGroup>
      {posts.map((item, index) => (
        <CSSTransition
        key={item.id} 
        timeout={500}
        classNames="item">
        <Post remove={remove} number={index + 1} post={item} />
        </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
