import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import LoginPage from "./pages/Auth/LoginPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./routes/privateRoutes";
import SignUpPage from "./pages/Auth/SignUpPage";
import AuthLayout from "./components/layout/Auth";
import CategoryPage from "./pages/Product/CategoryPage";
import ProductPage from "./pages/Product/ProductPage";
import CartPage from "./pages/Product/CartPage";
import NewsPage from "./pages/News/NewsPage";
import NewsPage1 from "./pages/News/NewsPage1";
import CategoryPagev2 from "./pages/Product/CategoryPagev2";
import ModelKitDetails from "./pages/Product/ChiTietDeepseek";
import ProductDetailPage from "./pages/Product/ChiTiet";
import ModelKitDetailPage from "./pages/Product/DetailProduct";
import PostDetail from "./pages/News/PostDetail";

function MainLayout() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/product" element={<ProductPage />} />
        {/* Private Route */}
        <Route element={<PrivateRoute />}>
          <Route path="/about" element={<AboutPage />} />
        </Route>

        <Route path="/collections" element={<CategoryPagev2 />} />
        <Route path="/collections/:category" element={<CategoryPagev2 />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/assemble-tool" element={<CartPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:blogId" element={<PostDetail />} />
        <Route path="/news1" element={<NewsPage1 />} />
        <Route path="/chitiet" element={<ModelKitDetails />} />
        <Route path="/chitiet2" element={<ModelKitDetailPage />} />
        <Route path="/chitiet1" element={<ProductDetailPage />} />
        <Route path="/*" element={<> Không tìm thấy trang </>} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Routes với AuthLayout (không có Header/Footer) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Route>

      {/* Routes với MainLayout (có Header/Footer) */}
      <Route path="/*" element={<MainLayout />} />

      {/* Route 404 - có thể thêm vào MainLayout hoặc tạo layout riêng */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
