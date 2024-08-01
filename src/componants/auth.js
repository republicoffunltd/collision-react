//Update the below URL with the appropriate version if necessary.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut

} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import {getFirestore, doc, collection, addDoc, setDoc, query, getDocs, orderBy, limit, serverTimestamp}
        from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyD8MLYlUL6FyGTiwR4GDDkpDQmxWJEvCZE",
authDomain: "collisiondetect-fauth.firebaseapp.com",
projectId: "collisiondetect-fauth",
storageBucket: "collisiondetect-fauth.appspot.com",
messagingSenderId: "641503615143",
appId: "1:641503615143:web:ed8208b04a28edb40da382",
measurementId: "G-BNC91K2VFJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const authForm = document.querySelector("#authForm");
const secretContent = document.querySelector("#secretContent");
const signUpButton = document.querySelector("#signUpButton");
const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");


// this is the AUTH part *************
export const userSignUp = async() => {
    const signUpEmail = userEmail.value;
    const signUpPassword = userPassword.value;
    createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        alert("Your account has been created!");
        window.location.href = "/play";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    })
}

export const userSignIn = async() => {
    const signInEmail = userEmail.value;
    const signInPassword = userPassword.value;
    signInWithEmailAndPassword(auth, signInEmail, signInPassword)
    .then((userCredential) => {
        const user = userCredential.user;
        // alert("You have signed in successfully!");
        window.location.href = "/play";
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    })
}

const checkAuthState = async() => {
    onAuthStateChanged(auth, user => {
        if(user) {
            // authForm.style.display = 'none';
            // secretContent.style.display = 'block';
        }
        else {
            // authForm.style.display = 'block';
            // secretContent.style.display = 'none';
        }   
});
}

export const userSignOut = async() => {
    await signOut(auth);
}
checkAuthState();

//extracting the score from the local storage
const result = localStorage.getItem('score');
const health = localStorage.getItem('health');
let score = 0; // Default score if no valid number is found
let energystat = 0;
if (result !== null) {
    const resultString = String(result); // Ensure result is a string
    const matches = resultString.match(/\d+/);
    if (matches) {
        score = parseInt(matches[0], 10);
    }
    console.log(score);
}
if (health !== null) {
    const healthString = String(health); // Ensure result is a string
    const matches = healthString.match(/\d+/);
    if (matches) {
        energystat = parseInt(matches[0], 10);
    }
    console.log(energystat);
}
// this is the DB part *************

async function addScoreToFirestore() {
    try {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                
                if (!user.email) {
                    throw new Error("User email is missing");
                }
                const scoreDocRef = doc(collection(db, "users", user.uid, "scores", "healths", "timestamp"));         
                const scoreData = {
                    score: parseInt(score),
                    health: energystat,
                    timestyamp: serverTimestamp()
                };
   
                await    
                setDoc(scoreDocRef, scoreData).then(() => {
                    console.log("Success 2 !!!");
                }).catch((error) => {
                    console.error("Error adding document: ", error);
                });
            }
        });
} catch (error) {
    console.error("Error adding document: ", error);
    }
}

addScoreToFirestore();

// this is the UI part *************
if (signUpButton) {
    signUpButton.addEventListener('click', userSignUp);
}

if (signInButton) {
    signInButton.addEventListener('click', userSignIn);
}

if (signOutButton) {
    signOutButton.addEventListener('click', userSignOut);
}


