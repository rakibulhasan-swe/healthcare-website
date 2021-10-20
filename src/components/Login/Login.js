import React, { useContext, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import swal from "sweetalert";
import { Link, useHistory, useLocation } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig";
import logo from "../../images/logo.png";
import { UserContext } from "../../App";

initializeApp(firebaseConfig);

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    success: false,
  });
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        swal("Good job!", "Login Successfully!", "success");
        history.replace(from);
      })
      .catch((error) => {
        const errorCode = error.code;
        swal("Error", errorCode, "error");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          setUser(newUserInfo);
          swal("Good job!", "Account Create Successfully!", "success");
        })
        .catch((error) => {
          const errorCode = error.code;
          const newUserInfo = { ...user };
          setUser(newUserInfo);
          swal("Error", errorCode, "error");
        });
    }
    if (!newUser && user.email && user.password) {
      console.log(newUser);
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          swal("Good job!", "login Successfully!", "success");
          history.replace(from);
        })
        .catch((error) => {
          var errorCode = error.code;
          const newUserInfo = { ...user };
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          swal("Authentication Problem!", errorCode, "error");
        });
    }
  };

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password" && event.target.value !== "") {
      isFieldValid =
        event.target.value.length > 6 && /\d{1}/.test(event.target.value);
      if (!isFieldValid && newUser) {
        swal(
          "Authentication Problem!",
          "Password is too short and using numbers and letters",
          "error"
        );
      }
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  const checkPassword = () => {
    let formBasicPassword = document.getElementById("formBasicPassword").value;
    let formBasicConfirmPassword = document.getElementById(
      "formBasicConfirmPassword"
    ).value;
    if (
      formBasicPassword !== formBasicConfirmPassword &&
      formBasicPassword !== ""
    ) {
      swal("Authentication Problem!", "Password not match", "error");
    }
  };

  document.title = newUser ? "Create Your account" : "Login Page";

  return (
    <>
      <Container className="mt-5 pt-5">
        <Row className="w-50 mx-auto">
          <Col md={12} className="border px-3 py-5">
            <Container className="d-flex justify-content-center">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="bg-info p-2 rounded mb-3"
                  style={{ width: "150px" }}
                />
              </Link>
            </Container>
            {newUser ? (
              <h3 className="mt-0 text-center ">Create an account</h3>
            ) : (
              <h3 className="mt-0 text-center">Login</h3>
            )}
            <Form onSubmit={handleSubmit}>
              {newUser && (
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    className="my-3"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    onBlur={handleBlur}
                    required
                  />
                </Form.Group>
              )}
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  className="my-3"
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  className="my-3"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onBlur={handleBlur}
                  required
                />
              </Form.Group>
              {newUser && (
                <Form.Group controlId="formBasicConfirmPassword">
                  <Form.Control
                    className="my-3"
                    type="password"
                    placeholder="Confirm Password"
                    name="ConfirmPassword"
                    onBlur={checkPassword}
                    required
                  />
                </Form.Group>
              )}
              {newUser ? (
                <button type="submit" className="btn btn-info w-100">
                  Create an account
                </button>
              ) : (
                <button type="submit" className="btn btn-info w-100">
                  Login
                </button>
              )}

              <div className="text-center mt-2">
                <span className="me-2">Create an account?</span>
                <input
                  type="checkbox"
                  className="my-3"
                  name="newUser"
                  onChange={() => setNewUser(!newUser)}
                />
                <span>Sign up</span>
              </div>
            </Form>
            <Col md={12} className="mt-3 text-center">
              {!newUser && (
                <button
                  className="btn border signInBtn"
                  type="button"
                  onClick={handleSingIn}
                >
                  <i className="bi bi-google me-2"></i>
                  Continue with Google
                </button>
              )}
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
