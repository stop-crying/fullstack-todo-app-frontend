import axios from "axios";

const baseUrl = "https://fullstack-todo-app-backend-ctev.onrender.com";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then((data) => {
    console.log("Data.......>", data);
    setToDo(data.data);
  });
};

const addToDo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (toDOid, text, setToDo, setText, setIsUpDating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDOid, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpDating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteTodo = (_id, setToDo) => {
    axios
      .post(`${baseUrl}/delete`, {_id})
      .then((data) => {
       console.log(data)
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
  };
export { getAllToDo, addToDo, updateTodo, deleteTodo };
