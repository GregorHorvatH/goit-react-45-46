import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
  const { token } = useSelector((state) => state.user);

  return token ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoutes;
