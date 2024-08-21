import "../App.css";
import { db } from "../src/firebase";
import { uid } from "uid";
import { set, ref, onValue, update, remove } from "firebase/database";
import { useState, useEffect } from "react";

function Skill2() {
  const [item, setItem] = useState({title: "", todo: ""});
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setItem({ ...item, title: e.target.value})
  };
  const handleToDoChange = (e) => {
    setTodo(e.target.value);
    setItem({ ...item, todo: e.target.value})
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((item) => {
          setTodos((oldArray) => [
            ...oldArray,
            { title: item.title, todo: item.todo, uuid: item.uuid },
          ]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      title: title,
      todo: todo,
      uuid,
    });
    setTodos([...todos, {title, todo, uuid}])
    setTitle("");
    setTodo("");
  };

  //update

  const handleUpdate = (item) => {
    setIsEdit(true);
    setTempUuid(item.uuid);

    setTitle(item.title);

    setTodo(item.todo);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      title,
      todo,
      uuid: tempUuid,
    });
    const updatedTodos = todos.map((todo) => {
      if (todo.uuid == tempUuid) {
        return { title, todo, uuid: tempUuid };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTitle("");
    setTodo("");
    setIsEdit(false);
  };

  //delete

  const handleDelete = (item) => {

    remove(ref(db, `/${item.uuid}`));
    const updatedTodos = todos.filter((todo) => todo.uuid !== item.uuid);
    setTodos(updatedTodos);
  };


  return (
    <div className="App py-10 " id="skill">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Skill</span>
      </h2>

      <input
        type="text"
        value={title}
        className=""
        onChange={handleTitleChange}
      />
      <br />
      <input
        type="text"
        value={todo}
        className=""
        onChange={handleToDoChange}
      />

      {isEdit ? (
        <>
          <button
            className=" bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded "
            onClick={handleSubmitChange}
          >
            {" "}
            Simpan perubahan
          </button>
          <button
            className="text-white bg-gray-700 hover:bg-gray-800 font-bold py-1 px-4 rounded ml-1"
            onClick={() => {
              setIsEdit(false);
              setTitle("");
              setTodo("");
            }}
          >
            {" "}
            X {"  "}
          </button>
        </>
      ) : (
        <button
          className="text-white bg-gray-700 hover:bg-gray-800 font-bold py-1 px-4 rounded"
          onClick={writeToDatabase}
        >
          submit
        </button>
      )}
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8 mt-8">
        {todos.map((item) => (
          <div
            key={item.uuid}
            className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl flex flex-col "
          >
            <h1 className="text-gray-600 overflow-hidden text-ellipsis">
              {item.title}
            </h1>
            <p className="text-white">{item.todo}</p>

            <div className="flex justify-around mt-auto">
              <button
                className="text-white bg-gray-700 hover:bg-gray-800  font-bold py-2 px-4 rounded "
                onClick={() => handleUpdate(item)}
              >
                update
              </button>
              <button
                className="text-white bg-gray-700 hover:bg-gray-800 font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(item)}
              >
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill2;
