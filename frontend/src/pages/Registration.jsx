import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import LoadingIndicator from "../components/LoadingIndicator";

const Registration = () => {
  const mySwal = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary",
      cancelButton: "btn btn-secondary",
    },
    buttonsStyling: false,
  });

  // Declare state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    debugger;
    setLoading(true);
    e.preventDefault();
    try {
      if (password !== rePassword) {
        mySwal.fire({
          title: "Warning",
          text: "The retyped password is not correct",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return;
      }

      if (!username || !password || !rePassword) {
        mySwal.fire({
          title: "Warning",
          text: "A required field is empty",
          icon: "warning",
          confirmButtonText: "Ok",
        });
        return;
      }
      const result = await api.post("/api/user/register/", {
        username,
        password,
      });
      // localStorage.setItem(ACCESS_TOKEN, result.data.access);
      // localStorage.setItem(REFRESH_TOKEN, result.data.refresh);
      if (result.statusText !== "created") {
        mySwal.fire({
          title: "Error",
          text: "Failed to register user. Try again!",
          icon: "error",
          confirmButtonText: "Ok",
        });
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div
          className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
          style={{ minHeight: 400 }}
        >
          <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">
            Registration
          </h1>
          <div className="d-inline-flex mb-lg-5">
            <p className="m-0 text-white">
              <a className="text-white" href="/">
                Home
              </a>
            </p>
            <p className="m-0 text-white px-2">/</p>
            <p className="m-0 text-white">Registration</p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="container d-flex align-items-center justify-content-center pt-0 pt-lg-5">
          <form onSubmit={handleSubmit} className="authForm p-5">
            <div className="input-group">
              <label htmlFor="inputLogin">Login Name: </label>
              <br />
              <input
                type="text"
                id="inputLogin"
                aria-describedby="loginHelp"
                placeholder="Enter login"
                style={{ width: "100%" }}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <small id="loginHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="input-group">
              <label htmlFor="inputPassword">Password: </label>
              <br />
              <input
                type="password"
                id="inputPassword"
                aria-describedby="passwordHelp"
                style={{ width: "100%" }}
                placeholder="Enter Pasword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="input-group">
              <label htmlFor="inputRePassword">Retype Password: </label>
              <br />
              <input
                type="password"
                id="inputRePassword"
                aria-describedby="rePasswordHelp"
                style={{ width: "100%" }}
                placeholder="Re Enter Pasword"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <div
                className="btn-group me-2"
                role="group"
                aria-label="Button Group"
              >
                <button type="submit" className="btn btn-primary mt-2">
                  Registration
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/login")}
                  className="btn btn-primary mt-2 ml-2"
                >
                  Go Back
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
