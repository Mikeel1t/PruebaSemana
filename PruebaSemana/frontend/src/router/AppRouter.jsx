import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import PostDetail from "../pages/PostDetail";
import Tags from "../pages/Tags";
import TagPosts from "../pages/TagPosts";
import Login from "../pages/Login";
import Users from "../pages/Users";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/tags/:tag" element={<TagPosts />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/platform-users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}