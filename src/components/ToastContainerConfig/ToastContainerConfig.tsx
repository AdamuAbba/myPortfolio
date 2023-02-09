import { IToastContainerConfig } from './types';
import { ToastContainer } from 'react-toastify';

const ToastContainerConfig: IToastContainerConfig = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
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
};

export default ToastContainerConfig;
