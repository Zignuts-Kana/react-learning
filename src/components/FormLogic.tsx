function FormLogic({
  count,
  setCount,
}: {
  count: number;
  setCount: (c: number) => void;
}) {
  console.log("form");

  return <button onClick={() => setCount(count + 1)}>BTN</button>;
}

export default FormLogic;
