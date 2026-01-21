import Header from "./header/header.jsx";
import Footer from "./footer/footer.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}