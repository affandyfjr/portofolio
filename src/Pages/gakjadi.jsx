import "../App.css";
import { db, storage } from "../firebase";
import { uid } from "uid";
import { set, ref, onValue, update, remove } from "firebase/database";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../component/AuthProvider";
import { uploadBytes, getDownloadURL } from "firebase/storage";


function Skill2() {
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState("");
    const [image, setImage] = useState(null);
    const [todos, setTodos] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const todosRef = ref(db, '/items');
      onValue(todosRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          const updateTodos = Object.values(data);
          setTodos(updateTodos);
        } else {
          setTodos([]);
        }
      });
    }, []);
  
    const handleChange = (e) => {
      const selectedImage = e.target.files ? e.target.files[0] : null;
      if (selectedImage) {
        if (!['image/jpeg', 'image/png', 'image/svg+xml'].includes(selectedImage.type)) {
          setError('Tipe file salah, hanya JPG, PNG, dan SVG yang diperbolehkan.');
          setImage(null);
        } else {
          setError(null);
          setImage(selectedImage);
        }
      }
    };
  
    const handleGambarUpload = () => {
      if (!image) {
        setError('Tolong pilih file');
        return;
      }
      setUploading(true);
      const storageRef = ref(storage, `images/${image.name}`);
      uploadBytes(storageRef, image)
        .then(() => getDownloadURL(storageRef))
        .then((url) => {
          setUploading(false);
          alert(`File berhasil di-upload. Download URL: ${url}`);
          setImage(null); // Menghapus nilai file setelah upload
        })
        .catch((err) => {
          setUploading(false);
          setError(`Upload failed: ${err.message}`);
        });
    };
  
    const writeToDatabase = () => {
      const uidValue = uid();
      set(ref(db, `/items/${uidValue}`), {
        title,
        todo,
        image: null, // Menyimpan URL gambar bukan file itu sendiri
        uid: uidValue,
      });
      setTodos([...todos, { title, todo, image: null, uid: uidValue }]);
      setTitle("");
      setTodo("");
      setImage(null);
    };
  
    const handleUpdate = (item) => {
      setIsEdit(true);
      setEditingItem(item);
      setTitle(item.title);
      setTodo(item.todo);
      // Tidak perlu mengatur state `image` dengan file
    };
  
    const handleSubmitChange = () => {
      if (editingItem) {
        const uidValue = editingItem.uid;
        update(ref(db, `/items/${uidValue}`), {
          title,
          todo,
          image: null, // Menyimpan URL gambar bukan file itu sendiri
          uid: editingItem.uid,
        });
        const updatedTodos = todos.map((item) => {
          if (item.uid === uidValue) {
            return { title, todo, image: null, uid: uidValue };
          }
          return item;
        });
        setTodos(updatedTodos);
        setTitle("");
        setTodo("");
        setImage(null);
        setIsEdit(false);
        setEditingItem(null);
      }
    };
  
    const handleDelete = (item) => {
      console.log(`Deleting item with UID: ${item.uid}`);
  
      const confirmDelete = window.confirm(`Yakin ingin dihapus "${item.title}"?`);
      if (confirmDelete) {
        remove(ref(db, `/items/${item.uid}`))
          .then(() => {
            console.log(`Successfully deleted item with UID: ${item.title}`);
          })
          .catch((error) => {
            console.error(`Error deleting item with UID: ${item.title}`, error);
          });
      }
    };
  
    const context = useContext(AuthContext);
    const user = context.user;
  
    if (user === null) {
      return (
        <div id="skilllogin">
          <div className="App py-10">
            <h2 className="mb-8 text-3xl text-white text-center">
              My <span>Skill</span>
            </h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8 mt-8">
              {todos.map((item) => (
                <div
                  key={item.uid}
                  className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl flex flex-col place-content-between"
                >
                  <div>
                    <p className="text- overflow-hidden text-ellipsis">
                      <img src={item.image} className="px-5" alt={item.title} />
                    </p>
                    <h1 className="text-gray-600 overflow-hidden text-ellipsis">
                      {item.title}
                    </h1>
                    <p className="text-white overflow-hidden text-ellipsis">
                      {item.todo}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="App py-10 " id="skill">
        <h2 className="mb-8 text-3xl text-white text-center">
          My <span>Skill</span>
        </h2>
        <div className="mx-[300px] text-black relative bg-gray-700/20 p-6 rounded-3xl flex flex-col">
          <input
            type="file"
            className="rounded pt-[5px]"
            onChange={handleChange}
            accept=".jpg,.png,.svg"
          />
          <button onClick={handleGambarUpload} disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <br />
          <input
            type="text"
            value={title || ""}
            className="rounded pt-[5px]"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Skill"
          />
          <br />
          <input
            type="text"
            value={todo || ""}
            className="rounded pt-[5px]"
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Deskripsi"
          />
          {isEdit ? (
            <div>
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-4 rounded mr-1"
                onClick={handleSubmitChange}
              >
                Simpan Perubahan
              </button>
              <button
                className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-4 rounded"
                onClick={() => setIsEdit(false)}
              >
                Batal
              </button>
            </div>
          ) : (
            <button
              className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-4 rounded"
              onClick={writeToDatabase}
            >
              Simpan
            </button>
          )}
          {todos.length === 0 && <p>Loading ...</p>}
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8 mt-8">
            {todos.map((item) => (
              <div
                key={item.uid}
                className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl flex flex-col place-content-between"
              >
                <div>
                  <p className="text- overflow-hidden text-ellipsis">
                    <img src={item.image} className="px-5" alt={item.title} />
                  </p>
                  <h1 className="text-gray-600 overflow-hidden text-ellipsis">
                    {item.title}
                  </h1>
                  <p className="text-white overflow-hidden text-ellipsis">
                    {item.todo}
                  </p>
                </div>
                <div className="absolute bottom-1 left-0 right-0 flex justify-between">
                  <button
                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mr-1"
                    onClick={() => handleUpdate(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDelete(item)}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  export default Skill2;