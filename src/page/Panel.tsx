import { useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import type { PostDetails } from "../redux/slice/postSlice";
import { fetchPosts } from "../redux/asyncThunk/posts";

const Panel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [post, setPost] = useState<boolean>(false);
  const [editData, setEditData] = useState<PostDetails>({
    id: "",
    description: "",
    title: "",
  });
  const [isCreatePost, setIsCreatePost] = useState(true);
  const { posts } = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchPosts());
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <div className="container">
      <div onClick={() => setPost(false)}></div>
      <header className="flex justify-between p-3 flex-wrap">
        <h1 className="text-3xl font-bold text-green-gradient">Post</h1>
        <Button text="New Post" size="m" onClick={() => setPost(!post)} />
      </header>
      <Post
        open={post}
        setOpen={setPost}
        isCreatePost={isCreatePost}
        post={editData}
      />
      <hr />
      <div className="w-full h-full">
        <p className="flex text-xl justify-center py-2 text-green-gradient">
          List of posts
        </p>
        <div className="flex flex-wrap gap-2 justify-around mt-5">
          {posts && posts.length ? (
            posts.map((post: PostDetails) => (
              <Card
                key={post.id}
                title={post.title}
                description={post.description}
                id={post.id}
                setOpen={setPost}
                setEditData={setEditData}
                setIsCreatePost={setIsCreatePost}
              />
            ))
          ) : (
            <p className="text-green-gradient">
              No any post created yet. create new post...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Panel;
