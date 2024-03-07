import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchUsers } from "../redux/asyncThunk/users";
import { TableV2 } from "../components/TableV2";

const About = () => {
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchUsers());
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="container">
      <div className="flex justify-center">
        <span className="text-3xl font-bold text-green-gradient">About</span>
      </div>
      <hr />
      <div className="p-3">
        <TableV2 users={users} />
      </div>
    </div>
  );
};

export default About;
