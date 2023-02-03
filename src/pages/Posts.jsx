import React from "react";
import { useState, useEffect } from "react";
import "../styles/App.css";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef()

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts,...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPagesCount(totalCount, limit));
    }
  );

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  useEffect(()=>{

  }, [])

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const changePage = (page) => {
    setPage(page)
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} posts={posts} />
      </MyModal>
      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error ${postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchedPost} />
      {isPostLoading && <div style={{display: "flex",justifyContent: "center",marginTop: "50px"}}>
      <Loader/></div>}
      <div style={{height:'20px'}}></div>
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;

//2-47-43 React From Ubi
