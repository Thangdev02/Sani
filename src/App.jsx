import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductPage"
import ProductDetail from "./pages/ProductDetailPage/ProductDetailPage"
import NewsList from "./pages/NewsListPage/NewsListPage"
import NewsDetail from "./pages/NewsDetailPage/NewsDetailPage"
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import { LanguageProvider } from "./LanguageContext"
import "bootstrap/dist/css/bootstrap.min.css"
import ProductsManager from "./pages/Admin/ProductsManager"
import PostsManager from "./pages/Admin/PostsManager"
import LoginPage from "./pages/Login/LoginPage"
import AdminLayout from "./pages/Admin/AdminLayouts"
import ChatWidget from "./components/ChatWidget/ChatWidget"
import SettingHomePage from "./pages/Admin/Setting/SettingHomePage"
import SettingAboutPage from "./pages/Admin/Setting/SettingAboutPage"

function App() {
  // ✅ kiểm tra login qua localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"

  return (
    <LanguageProvider>
      <Router>
        <div className="App" style={{ fontFamily: "Inter" }}>
        <ChatWidget />

          <Header />

          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/san-pham" element={<ProductsPage />} />
            <Route path="/san-pham/:id" element={<ProductDetail />} />
            <Route path="/gioi-thieu" element={<IntroductionPage />} />
            <Route path="/tin-tuc" element={<NewsList />} />
            <Route path="/tin-tuc/:id" element={<NewsDetail />} />
            <Route path="/lien-he" element={<ContactPage />} />
            <Route path="/loginsani" element={<LoginPage />} />

            {/* Admin routes */}
            <Route
              path="/admin"
              element={isAuthenticated ? <AdminLayout /> : <Navigate to="/loginsani" />}
            >
              <Route path="products" element={<ProductsManager />} />
              <Route path="posts" element={<PostsManager />} />
              <Route path="sthome" element={<SettingHomePage />} />
              <Route path="stintro" element={<SettingAboutPage />} />
            </Route>
          </Routes>

          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
