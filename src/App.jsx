import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import Footer from "./components/Footer/Footer"
import ProductDetail from "./pages/ProductDetailPage/ProductDetailPage"
import NewsList from "./pages/NewsListPage/NewsListPage"
import NewsDetail from "./pages/NewsDetailPage/NewsDetailPage"
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage"


function App() {
  return (
    <Router>
      <div className="App" style={{fontFamily: "Monserrat"}}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/san-pham" element={<ProductsPage />} />
          <Route path="/san-pham/:id" element={<ProductDetail />} />
          <Route path="/gioi-thieu" element={<IntroductionPage />} />
          <Route path="/tin-tuc" element={<NewsList />} />
          <Route path="/tin-tuc/:id" element={<NewsDetail />} />
          <Route path="/lien-he" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
