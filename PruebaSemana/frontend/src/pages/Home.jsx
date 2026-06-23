import { useEffect, useState } from "react";
import { getPosts, getPostsByUser } from "../api/dummyjson";
import { getUsers } from "../api/users";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    loadPosts();
    loadUsers();
  }, []);

  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleFilter = async (id) => {
    setUserId(id);

    if (!id) return loadPosts();

    const data = await getPostsByUser(id);
    setPosts(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          <h1 className="text-lg font-bold text-gray-800">
            MyBlog
          </h1>

          <div className="flex items-center gap-4">

            <Link
              to="/login"
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </Link>

          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-4">

        <div className="mb-6">
          <select
            className="w-full md:w-64 appearance-none rounded-md bg-white py-2 px-3 text-sm text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => handleFilter(e.target.value)}
            value={userId}
          >
            <option value="">Filtrar por usuario</option>
            {users.map((u) => (
              <option key={u.id} value={u.id}>
                {u.firstName}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}