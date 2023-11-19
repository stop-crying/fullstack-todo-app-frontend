import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateTodo, deleteTodo } from "./utilities/HandleApi";

function App() {
  const [todo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpDtaing, setIsUpDating] = useState(false);
  const [toDoid, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpDating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo...."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpDtaing
                ? () =>
                    updateTodo(toDoid, text, setToDo, setText, setIsUpDating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpDtaing ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((items) => (
            <ToDo
              key={items._id}
              text={items.text}
              updateToDo={() => updateMode(items._id, items.text)}
              deleteToDo={() => deleteTodo(items._id, setToDo)}
            />  
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
