import { useCallback } from "react";

const Home = ({
  number,
  setCount,
}: {
  number: number;
  setCount: (c: number) => void;
}) => {
  console.log("home");
  const handleSubmit = useCallback(() => {
    if (number) {
      console.log(number);

      setCount(number + number);
    }
  }, [number, setCount]);
  return (
    <div>
      <div>
        <input
          type="number"
          name="number"
          value={number}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Home;
