import { useEffect, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { PostDetails, addPost, updatePost } from "../redux/slice/postSlice";

const Post = ({
  open,
  setOpen,
  isCreatePost = false,
  post,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  isCreatePost: boolean;
  post?: PostDetails;
}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener to update windowWidth when window is resized
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
    }
  }, [post]);

  const handleClose = () => {
    setOpen(!open);
  };

  const addPostInRedux = () => {
    if (!(title.length || description.length)) {
      alert("Please enter title and description");
      return;
    }
    const id = Math.random().toString(36).slice(2);

    dispatch(addPost({ title, description, id }));
    setTitle("");
    setDescription("");
    setOpen(!open);
  };

  const updatePostInRedux = () => {
    if (!(title.length || description.length)) {
      alert("Title and description are required");
      return;
    }
    dispatch(updatePost({ id: post!.id, title, description }));
    setOpen(!open);
  };

  return (
    <dialog
      open={open}
      className={`z-50 shadow-2xl min-w-[calc(250*${windowWidth}/1080)px] max-w-1/4 gradient-border`}
    >
      <p className="flex text-xl justify-center py-2 text-green-gradient">
        {isCreatePost ? "Create Post" : "Update Post"}
      </p>
      <div className="p-4 bg-white min-w-[(246*w-100/1080)px] max-w-1/4">
        <Input
          placeholder="Title"
          type="text"
          className="mb-4 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Description"
          type="text"
          className="mb-4 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-between max-xl:flex-col">
          <Button
            text={isCreatePost ? "Create" : "Update"}
            onClick={() =>
              isCreatePost ? addPostInRedux() : updatePostInRedux()
            }
          />
          <Button text="Close" onClick={handleClose} />
        </div>
      </div>
    </dialog>
  );
};

export default Post;
