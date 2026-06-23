import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../api/users";
export default function PostCard({ post }) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (post?.userId) {
          loadUser(post.userId);
        }
      }, [post]);
    
      const loadUser = async (userId) => {
        const data = await getUserById(userId);
        setUser(data);
      };
    return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {post.title}
      </h3>
      <p className="text-xs text-gray-400 mb-4">
          publicado por:{" "}
          <span className="text-gray-500 font-medium">
            {user?.username || ""}
          </span>
        </p>
      <p className="text-gray-600 text-sm mb-4">
        {post.body.slice(0, 100)}...
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full"
          >
            #{t}
          </span>
        ))}
      </div>

      <Link
        to={`/post/${post.id}`}
        className="inline-block text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Ver detalle
      </Link>
    </div>
  );
}