import { useContext, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../Pages/Context/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      swal({
        title: 'You need to log in first',
        buttons: {
          login: {
            text: 'Log In',
            value: 'login',
          },
        },
        dangerMode: true,
      }).then((value) => {
        if (value === 'login') {
          window.location.href = '/login'; // Replace with your login page URL
        }
      });
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
