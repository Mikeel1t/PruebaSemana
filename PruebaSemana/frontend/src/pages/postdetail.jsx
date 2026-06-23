import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById } from "../api/dummyjson";
import { getUserById } from "../api/users";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const data = await getPostById(id);
    setPost(data);
  };

  useEffect(() => {
    if (post?.userId) {
      loadUser(post.userId);
    }
  }, [post]);

  const loadUser = async (userId) => {
    const data = await getUserById(userId);
    setUser(data);
  };

  if (!post)
    return (
      <p className="text-center text-gray-500 mt-10">
        Cargando...
      </p>
    );

  return (
    <div className="max-w-2xl mx-auto mt-10">

      {/* Botón volver */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition"
      >
        ← Volver
      </button>

      {/* Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">

        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          {post.title}
        </h1>

        <p className="text-xs text-gray-400 mb-4">
          publicado por:{" "}
          <span className="text-gray-500 font-medium">
            {user?.username || ""}
          </span>
        </p>

        {/* Body */}
        <p className="text-gray-700 leading-relaxed mb-6">
          {post.body}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-center">

          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">👁 Views</p>
            <p className="text-lg font-semibold text-gray-800">
              {post.views}
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">👍 Likes</p>
            <p className="text-lg font-semibold text-green-600">
              {post.reactions.likes}
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">👎 Dislikes</p>
            <p className="text-lg font-semibold text-red-500">
              {post.reactions.dislikes}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}