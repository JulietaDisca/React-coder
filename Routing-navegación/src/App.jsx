import "./App.css";

//REACT-ROUTER-DOM
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";

//COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

//PAGES
import HomePage from "./pages/HomePage/HomePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/about" element={ <AboutPage /> }/>
          <Route path="/contact" element={ <ContactPage /> }/>
          <Route path="*" element={ <ErrorPage /> }/>
          <Route path="/detail/:id" element={ <DetailPage /> }/>
          <Route path="/category/:categoryId" element={ <CategoryPage /> }/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;