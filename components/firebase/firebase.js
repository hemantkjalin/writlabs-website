// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzCt7BvlAfAeZ0HJALn4AQ3_B1JKLm-xE",
  authDomain: "writ-labs.firebaseapp.com",
  projectId: "writ-labs",
  storageBucket: "writ-labs.appspot.com",
  messagingSenderId: "61248982339",
  appId: "1:61248982339:web:01659f8a4f2623ab2933f6",
  measurementId: "G-0R8NNWSBQ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

const addContact = async ({ name, email, phone, subject, message }) => {
  try {
    const docRef = await addDoc(collection(db, "contact_us"), {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    });
    console.log("Contact details submitted");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export const addLetter = async ({ letter }) => {
  try {
    const docRef = await addDoc(collection(db, "news_letter"), {
      email: letter,
    });
    console.log("Newsletter Email Submitted");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
export default addContact;
