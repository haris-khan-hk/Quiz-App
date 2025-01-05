// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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
  storageBucket: "jawanpakistan-9acc9.appspot.com",
  messagingSenderId: "442622661405",
  appId: "1:442622661405:web:23c5891d78b4aa72ac87f4",
  measurementId: "G-YQ398Y1G2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

window.submitQuiz = function () {
  let score = 0;

  // Quiz Start
  let question1 = document.querySelector('input[name="Q1-options"]:checked');
  let question2 = document.querySelector('input[name="Q2-options"]:checked');
  let question3 = document.querySelector('input[name="Q3-options"]:checked');
  let question4 = document.querySelector('input[name="Q4-options"]:checked');
  let question5 = document.querySelector('input[name="Q5-options"]:checked');

  if (question1 && question1.value === "Displays a pop-up box with a message") {
    score++;
  }
  if (question2 && question2.value === "object") {
    score++;
  }
  if (question3 && question3.value === "arr.length") {
    score++;
  }
  if (question4 && question4.value === "Character") {
    score++;
  }
  if (question5 && question5.value === "concat()") {
    score++;
  }

  let resultText = document.getElementById("quizResult");
  if (resultText) {
    resultText.innerHTML = `You scored ${score} out of 5.`;
  } else {
    console.error("Result element not found.");
  }

  let resultDiv = document.querySelector(".QuizResult");
  if (resultDiv) {
    resultDiv.style.display = "block";
  }

  let userId = auth.currentUser ? auth.currentUser.uid : "anonymous";
  let resultData = {
    userId: userId,
    score: score,
    timestamp: new Date(),
  };

  setDoc(doc(db, "quizResults", userId), resultData)
    .then(() => {
      alert(`Quiz submitted successfully! You scored ${score} out of 5.`);
    })
    .catch((error) => {
      alert(`Error saving quiz results: ${error.message}`);
    });
};
