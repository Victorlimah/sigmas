import { useContext } from "react";
import { Navigate } from "react-router-dom";

import Swal from "sweetalert2";
import { AppContext } from "../../providers/AppContext";

const PrivateRoute = ({ children }) => {
  const { user, setUser } = useContext(AppContext);
  const token = localStorage.getItem("token");

  if (!token) {
    Swal.fire({
      title: "Acesso negado",
      text: "Você precisa estar logado para acessar esta página.",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return <Navigate to="/signin" />;
  }

  if (!user && token) setUser(JSON.parse(atob(token.split(".")[1])));

  return children;
};

export default PrivateRoute;
