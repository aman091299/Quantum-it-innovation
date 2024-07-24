
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import{Route,Routes} from "react-router-dom"
import Home from './pages/Home';
import OpenRoute from './components/OpenRoutes';
import Nav from './pages/Nav';
import Logout from './pages/Logout';
function App() {
  
  return (
    <div className="App">
      <div>
         <Nav/>
      </div>
  <Routes>
  <Route path="/" element={
            <OpenRoute>
              <Home  />
            </OpenRoute>
          }
        />
<Route path="/login" element={
              <Login />
          }
        />
<Route path="/signup" element={

              <Signup  />
          }
        />
   <Route path="/logout" element={

<Logout />
}
/>    

</Routes>
    </div>


  );
}

export default App;
