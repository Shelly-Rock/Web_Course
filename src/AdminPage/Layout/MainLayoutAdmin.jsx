import { Outlet } from "react-router-dom";
import HeaderAdmin from  "./Header/Header.jsx";
import Sidebar from  "./Sidebar/Sidebar.jsx";
import "./MainLayoutAdmin.css"
export default function MainLayoutAdmin() {
  return (
    <>
      <div className ="contain-layoutAdmin">
        <HeaderAdmin/>
        <main className="mainLayoutAdmin">
          <div className ="container-sidebar">
              <Sidebar />
          </div>
          <div className="container-mainAdmin">
              <Outlet/>
          </div>
        </main>  
      </div>
    </>
  );
}