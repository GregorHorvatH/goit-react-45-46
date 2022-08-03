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

export const sum = (a = 0, b = 0) => a + b;

export const min = (arr) => (arr?.length ? Math.min(...arr) : undefined);

export const max = (arr) => (arr?.length ? Math.max(...arr) : undefined);
