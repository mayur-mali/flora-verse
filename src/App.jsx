import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContext } from "./context/AuthContext";
import { useContext } from "react";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { auth } from "./firebase-config";

function App() {
  const { user, logout } = useContext(UserContext);
  // const [email, setEmail] = useState("");
  // const handleResetPassword = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await sendPasswordResetEmail(auth, email);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const routes = [
    {
      path: "/",
      component: user ? (
        <div>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <Navigate to="/login" replace={true} />
      ),
    },
    {
      path: "/login",
      component: !user ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/register",
      component: !user ? <SignUp /> : <Navigate to="/" />,
    },
  ];

  return (
    <div>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
