import { BrowserRouter } from "react-router-dom";
import Router from "./routes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
      <>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <ToastContainer position="top-right" autoClose={3000} />
      </>
  );
} 
export default App;  
 