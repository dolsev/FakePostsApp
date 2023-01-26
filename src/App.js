import React from "react";
import { useState, useMemo} from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
 

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "Cunt", body: "Fuck yous" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
      };
  
  const [modal, setModal]=useState(false)

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

const [filter, setFilter] = useState({sort:'', query:''})

  const sortedPosts = useMemo(()=>{
    console.log("Fun")
    if (filter.sort) {
      return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
    }
    else {return posts}
  },[filter.sort, posts])

  const sortedAndSearchedPost = useMemo(
    ()=>{return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))},[filter.query, sortedPosts]
    )
    
  return (
    <div className="App">
      <MyButton style={{marginTop:'30px'}} onClick={()=>setModal(true)}>Create user</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} posts={posts} /></MyModal>
      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPost} />

    </div>
  );
}

export default App;

//1-23-04 React From Ubi
