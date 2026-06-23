const API = "https://dummyjson.com";

export const getPosts = async () => {
  const res = await fetch(`${API}/posts`);
  const data = await res.json();
  return data.posts;
};

export const getPostById = async (id) => {
  const res = await fetch(`${API}/posts/${id}`);
  return res.json();
};

export const getPostsByUser = async (userId) => {
  const res = await fetch(`${API}/posts/user/${userId}`);
  const data = await res.json();
  return data.posts;
};

export const getTags = async () => {
  const res = await fetch(`${API}/posts/tags`);
  return res.json();
};

export const getPostsByTag = async (tag) => {
  const res = await fetch(`${API}/posts/tag/${tag}`);
  const data = await res.json();
  return data.posts;
};