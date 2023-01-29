import React from "react";
import { useState, useEffect} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from './hooks/usePosts'
import PostService from './API/PostService';


function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({sort:'', query:''})
  const [modal, setModal]=useState(false)
  const sortedAndSearchedPost = usePosts(posts,  filter.sort, filter.query)
  const [isPostLoading, setIsPostLoading] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
      };
  
  async function fetchPosts (){
  setIsPostLoading(true)
  const posts = await PostService.getAll();
  setPosts(posts)
  setIsPostLoading(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect( ()=>{
    fetchPosts()
    console.log('Use Effects')
  },[] )


  return (
    <div className="App">
      <MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} posts={posts} /></MyModal>
      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {isPostLoading?<h1>Wait, posts are loading</h1>:<PostList remove={removePost} posts={sortedAndSearchedPost} />}
      

    </div>
  );
}

export default App;

//1-41-04 React From Ubi
