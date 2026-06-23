import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostsByTag } from "../api/dummyjson";
import PostCard from "../components/PostCard";

export default function TagPosts() {
  const { tag } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    load();
  }, [tag]);

  const load = async () => {
    const data = await getPostsByTag(tag);
    setPosts(data);
  };

  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
      <h1>#{tag}</h1>

      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
}