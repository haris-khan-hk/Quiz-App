// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDI73gE5-AsZlwW8OOF4wlk-TTBFClr498",
  authDomain: "jawanpakistan-9acc9.firebaseapp.com",
  projectId: "jawanpakistan-9acc9",
  storageBucket: "jawanpakistan-9acc9.firebaseapp.com",
  messagingSenderId: "442622661405",
  appId: "1:442622661405:web:23c5891d78b4aa72ac87f4",
  measurementId: "G-YQ398Y1G2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signInButton");
const signInForm = document.getElementById("signIn");
const signUpForm = document.getElementById("signup");

// For Display Pages
// Start
signUpButton.addEventListener("click", function () {
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
});
signInButton.addEventListener("click", function () {
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
});
// End

// FOR SignUp
// signUp Start

document.getElementById("submitSignUp").onclick = function (event) {
  event.preventDefault();

  const email = document.getElementById("rEmail").value;
  const password = document.getElementById("rPassword").value;
  const firstName = document.getElementById("fName").value;
  const lastName = document.getElementById("lName").value;

  createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        firstName,
        lastName,
      });
      window.location.href = "index.html";
    }
  );
};
// signUp End

// FOR signIn
// signIn Start
document.getElementById("submitSignIn").onclick = function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    localStorage.setItem("loggedInUserId", userCredential.user.uid);
    window.location.href = "QuizPage.html";
  });
};
// signIn End
