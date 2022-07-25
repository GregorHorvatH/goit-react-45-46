import { toast } from 'react-toastify';

toast.options = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const showSuccess = (message) => toast.success(message);

export const sum = (a, b) => a + b;
