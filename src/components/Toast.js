import { ToastContainer  } from 'react-toastify';

const Toast = () => {
    return ( 
      <ToastContainer 
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" 
        />
        
     );
}
 
export default Toast;