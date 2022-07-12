// import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  // useEffect []라서 리엑트가 아무것도 감시를 안함, 그래서 한번만 일어남
  useEffect(() => {
    console.log("I run only once.");
  }, []);
  // userEffect가 keyword를 감시하고 있어서, keyword가 바뀔때마다 일어남
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  // couter 감시 중
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  // keyword, counter 둘다 감시 중
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search Here...."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button onClick={onClick} text={"Click Me"} /> */}
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
