import "../App.css";
import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue, update, remove } from "firebase/database";
import { useState, useEffect } from "react";

function Skill2() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleToDoChange = (e) => {
    setTodo(e.target.value);
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });
    setTodo("");
  };

  //update

  const handleUpdate = (todo) => {
  //  const userInput = prompt("masukkan teks :");
  //  const updatedTodo = userInput + defaultText;
  //   todo.todo = updatedTodo;
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,
    });

    setTodo("");
    setIsEdit(false);
  };

  //delete

  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };

  return (
    //=====================
    //=======================
    <div className="App py-10 " id="skill">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Skill</span>
      </h2>

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
        {todos.map((todo) => (
          <div
            key={todo.uuid}
            className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl flex flex-col "
          >
            <h1 className="text-gray-600 overflow-hidden text-ellipsis">
              {todo.todo}
            </h1>
            <div className="flex justify-around mt-auto">
            <button
              className="text-white bg-gray-700 hover:bg-gray-800  font-bold py-2 px-4 rounded "
              onClick={() => handleUpdate(todo)}
            >
              update
            </button>
            <button
              className="text-white bg-gray-700 hover:bg-gray-800 font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(todo)}
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
