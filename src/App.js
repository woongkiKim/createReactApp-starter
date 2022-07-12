import { useState, useEffect } from "react";

function App() {
  // To do에 대한 State
  const [toDo, setTodo] = useState("");
  // To do에 대한 함수
  const onChange = (event) => setTodo(event.target.value);
  // To do Submit에 대한 함수
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoList((currentArray) => [toDo, ...currentArray]); // 사용법임. "..."은 currentArray를 가져오란 뜻
    setTodo("");
  };
  // toDo를 받을 수 있는 array
  const [toDoList, setToDoList] = useState([]);
  console.log(toDoList);
  return (
    <div>
      <h1>My To Do list ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add to Do</button>
      </form>
    </div>
  );
}

export default App;
