import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    // 여기서 Destory 하면 내뱉은 CleanUp function
    return () => console.log("Destoryed :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
