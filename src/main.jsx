import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CategoryProvider } from './context/category/CategoryProvider.jsx';
import TypeCourseProvider from "./context/TypeCourse/TypeCourseProvider.jsx";
import './index.css';
import App from './App.jsx';
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CategoryProvider>
            <TypeCourseProvider>
               <App />
            </TypeCourseProvider>
        </CategoryProvider>      
    </StrictMode>,
);