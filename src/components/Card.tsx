import { useDispatch } from "react-redux";
import Button from "./Button";
import { PostDetails, removePost } from "../redux/slice/postSlice";

const Card = ({
  title,
  description,
  id,
  setOpen,
  setEditData,
  setIsCreatePost,
}: {
  title: string;
  description: string;
  id: string;
  setOpen: (open: boolean) => void;
  setEditData: (data: PostDetails) => void;
  setIsCreatePost: (isCreatePost: boolean) => void;
}) => {
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className="p-4 bg-white shadow-lg gradient-border w-[300px] flex flex-col justify-between"
    >
      <div className="flex justify-center">
        <p className="mb-4 text-green-gradient"> {title} </p>
        <p className="mb-4 text-green-gradient"> {description} </p>
      </div>

      <div className="flex justify-between max-xl:flex-col">
        <Button
          text="Update"
          onClick={() => {
            setIsCreatePost(false);
            setEditData({ title, description, id });
            setOpen(true);
          }}
        />
        <Button text="Delete" onClick={() => dispatch(removePost(id))} />
      </div>
    </div>
  );
};

export default Card;
