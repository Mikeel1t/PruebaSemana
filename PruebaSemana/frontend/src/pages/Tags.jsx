import { useEffect, useState } from "react";
import { getTags } from "../api/dummyjson";
import { Link } from "react-router-dom";

export default function Tags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await getTags();
    setTags(data);
  };

  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs hover:bg-neutral-secondary-medium">
      <h1>Tags</h1>

      {tags.map((t) => (
        <Link key={t} to={`/tags/${t}`}>
          #{t}{" "}
        </Link>
      ))}
    </div>
  );
}