import { useEffect } from "react";
import Main_Home from "./component/Main_Home"
import AppRoute from "./route/AppRoute"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.clear(); // Clear local storage on page unload
  //   };

  //   window.addEventListener('beforeunload', handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);

  return (
    <div>
      <AppRoute/>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  )
}

export default App
