// import "../App.css";
// import { db } from "./firebase";
// import { uid } from "uid";
// import { set, ref, onValue, update, remove } from "firebase/database";
// import { useState, useEffect } from "react";


// function crud() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [tempUuid, setTempUuid] = useState("");

//   const handleToDoChange = (e) => {
//     setTodo(e.target.value);
//   };

//   //read
//   useEffect(() => {
//     onValue(ref(db), (snapshot) => {
//       setTodos([]);
//       const data = snapshot.val();
//       if (data !== null) {
//         Object.values(data).map((todo) => {
//           setTodos((oldArray) => [...oldArray, todo]);
//         });
//       }
//     });
//   }, []);

//   //write
//   const writeToDatabase = () => {
//     const uuid = uid();
//     set(ref(db, `/${uuid}`), {
//       todo,
//       uuid,
//     });
//     setTodo("");
//   };

//   //update

//   const handleUpdate = (todo) => {
//     setIsEdit(true);
//     setTempUuid(todo.uuid);
//     setTodo(todo.todo);
//   };

//   const handleSubmitChange = () => {
//     update(ref(db, `/${tempUuid}`), {
//       todo,
//       uuid: tempUuid,
//     });

//     setTodo("");
//     setIsEdit(false);
//   };

//   //delete

//   const handleDelete = (todo) => {
//     remove(ref(db, `/${todo.uuid}`));
//   };

//   return (
//     <div className="App">
//       <input type="text" value={todo} onChange={handleToDoChange} />
//       {isEdit ? (
//         <>
//           <button className="text-white" onClick={handleSubmitChange}>
//             {" "}
//             Submit Change
//           </button>
//           <button
//             onClick={() => {
//               setIsEdit(false);
//               setTodo("");
//             }}
//           >
//             {" "}
//             X{" "}
//           </button>
//         </>
//       ) : (
//         <button onClick={writeToDatabase}>submit</button>
//       )}
//       {todos.map((todo) => (
//         <>
//           <h1 className="text-white">{todo.todo}</h1>
//           <button className="text-white" onClick={() => handleUpdate(todo)}>
//             update
//           </button>
//           <button className="text-white" onClick={() => handleDelete(todo)}>
//             delete
//           </button>
//         </>
//       ))}
//     </div>
//   );
// }

// export default crud;





//==========-=-=-=-=-=-=-==-=-=---------------
// import "../App.css";
// import { db } from "./firebase";
// import { uid } from "uid";
// import { set, ref, onValue, update, remove } from "firebase/database";
// import { useState, useEffect, useCallback} from "react";


// function Skill2() {
//   const [title, setTitle] = useState("");
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const [isEdit, setIsEdit] = useState(false);
//   const [editingItem, setEditingItem] = useState(null);

 
//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleToDoChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const writeToDatabase = () => {
//     const uidValue = uid();
//     set(ref(db, `/${uidValue}`), {
//       title,
//       todo,
//       uid: uidValue,
//     });
//     setTodos([...todos, { title, todo, uid: uidValue }]);
//     setTitle("");
//     setTodo("");
//   };

//   const handleUpdate = (item) => {
//     setIsEdit(true);
//     setEditingItem(item);
//     setTitle(item.title);
//     setTodo(item.todo);
//   };

  // const handleSubmitChange = () => {
  //   if (editingItem) {
  //     update(ref(db, `/${editingItem.uid}`), {
  //       title,
  //       todo,
  //       uid: editingItem.uid,
  //     });
  //     const updatedTodos = todos.map((todo) => {
  //       if (todo.uid === editingItem.uid) {
  //         return { title, todo, uid: editingItem.uid };
  //       }
  //       return todo;
  //     });
  //     setTodos(updatedTodos);
  //     setTitle("");
  //     setTodo("");
  //     setIsEdit(false);
  //     setEditingItem(null);
  //   }
  // };

//   const handleSubmitChange = () => {
//     if (editingItem) {
//       update(ref(db, `/${editingItem.uid}`), {
//         title,
//         todo,
//         uid: editingItem.uid,
//       });
//       const updatedTodos = todos.map((todo) => {
//         if (todo.uid === editingItem.uid) {
//           return { title, todo, uid: editingItem.uid };
//         }
//         return todo;
//       });
//       setTodos(updatedTodos);
//       setTitle("");
//       setTodo("");
//       setIsEdit(false);
//       setEditingItem(null);
//     }
//   };

//   useEffect(() => {
//     onValue(ref(db), (snapshot) => {
     
//       const data = snapshot.val();
//       if (data !== null) {
//         const updateTodos = Object.values(data).map((item) => item)
//           setTodos(updateTodos);
        
//       }
//     });
//     console.log("Komponen re-render!");
//   }, [db]);

//   setTodos((prevTodos) => {
//     const updatedTodos = prevTodos.map((todo) => {
//       if (todo.uid === editingItem.uid) {
//         return { title, todo, uid: editingItem.uid };
//       }
//       return todo;
//     });
//     //dikasih console
//     console.log("Todoss e deweewe: ", updatedTodos);
//     return updatedTodos;
//   });
//   //=================================
//   const handleDelete = (item) => {
//     remove(ref(db, `/${item.uid}`));
//     setTodos(todos.filter((todo) => todo.uid !== item.uid));
//   };
// //pendeteksi loop
//   let loopCounter = 0;
// setTodos((prevTodos) => {
//   const updatedTodos = prevTodos.map((todo) => {
//     if (todo.uid === editingItem.uid) {
//       return { title, todo, uid: editingItem.uid };
//     }
//     return todo;
//   });
//   loopCounter++;
//   console.log("Counter loop:", loopCounter);
//   if (loopCounter > 10) {
//     console.error("Loop tak terhingga terdeteksi!");
//   }
//   return updatedTodos;
// });
//   return (
//     <div className="App py-10 " id="skill">
//       <h2 className="mb-8 text-3xl text-white text-center">
//         My <span>Skill</span>
//       </h2>

//       <input
//         type="text"
//         value={title}
//         className=""
//         onChange={handleTitleChange}
//         placeholder="Title"
//       />
//       <br />
//       <input
//         type="text"
//         value={todo}
//         className=""
//         onChange={handleToDoChange}
//         placeholder="Todo"
//       />

//       {isEdit ? (
//         <>
//           <button
//             className=" bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-4 rounded "
//             onClick={handleSubmitChange}
//           >
//             {" "}
//             Simpan perubahan
//           </button>
//           <button
//             className="text-white bg-gray-700 hover:bg-gray-800 font-bold py-1 px-4 rounded ml-1"
//             onClick={() => {
//               setIsEdit(false);
//               setTitle("");
//               setTodo("");
//               setEditingItem(null);
//             }}
//           >
//             {" "}
//             X {"  "}
//           </button>
//         </>
//       ) : (
//         <button
//           className="text-white bg-gray-700 hover:bg-gray-800 font-bold py-1 px-4 rounded"
//           onClick={writeToDatabase}
//         >
//           submit
//         </button>
//       )}
//       <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8 mt-8">
//         {todos.map((item, index) => (
//           <div
//             key={index}
//             className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl flex flex-col "
//           >
//             <h1 className="text-gray-600 overflow-hidden text-ellipsis">
//               {item.title}
//             </h1>
//             <p className="text-white">{item.todo}</p>

//             <div className="flex justify-around mt-auto">
//               <button
//                 className="text-white bg-gray-700 hover:bg-gray-800  font-bold py-2 px-4 rounded "
//                 onClick={() => handleUpdate(item)}
//               >
//                 update
//               </button>
//               <button
//                 className="text-white bg-gray-700 hover:bg-gray-800 font-bold py-2 px-4 rounded"
//                 onClick={() => handleDelete(item)}
//               >
//                 delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Skill2;
