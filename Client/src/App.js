
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import{Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import OpenRoute from './components/OpenRoutes';
function App() {

  return (
    <div className="App">
  <Routes>
  <Route path="/" element={
            <OpenRoute>
              <Home  />
            </OpenRoute>
          }
        />
<Route path="/login" element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
<Route path="/signup" element={
            <OpenRoute>
              <Signup  />
            </OpenRoute>
          }
        />
</Routes>
    </div>


  );
}

export default App;
