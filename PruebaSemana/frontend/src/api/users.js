const API = "https://dummyjson.com";

export const getUsers = async () => {
  const res = await fetch(`${API}/users`);
  const data = await res.json();
  return data.users;
};

export const getUserById  = async (id) => {
  const res = await fetch(`${API}/users/${id}`);
  const data = await res.json();
  return data;
};