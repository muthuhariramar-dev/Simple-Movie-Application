import "./css/App.css";
import NavBar from './components/NavBar.jsx';
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import {Routes,Route} from "react-router-dom";
import {MovieProvider} from "./contexts/MovieContext.jsx";

function App() {
  const movieNumber = 2;
return(
    <MovieProvider>
    <main className="main-content">
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/favorite" element={<Favorites/>} />
        </Routes>
    </main>
    </MovieProvider>
);
}



export default App
