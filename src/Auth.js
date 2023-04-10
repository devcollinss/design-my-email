import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Auth = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  const [loading, setLoading] = useState(true);
  //   localStorage.setItem(
  //     "token",
  //     "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MTAzMzgzMywiaWF0IjoxNjgxMDMzODMzfQ.wEWJ-NCP_ThmnBUA-43olv50-oCNcQVX1XbutwGvJw0"
  //   );
  useEffect(() => {
    const token = localStorage.getItem("token");

    // Check if there's a token
    if (token) {
      // Check if the token is expired or invalid
      const decodedToken = jwt_decode(token);
      if (decodedToken.exp < Date.now() / 10000) {
        localStorage.removeItem("token");
        setCurrentUser(null);
      } else {
        setCurrentUser({ id: decodedToken.id, name: decodedToken.name });
      }
    } else {
      setCurrentUser(null);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default Auth;
