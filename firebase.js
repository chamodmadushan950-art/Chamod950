// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// Replace these values with your Firebase project config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Save Order
async function saveOrder(order) {
  await addDoc(collection(db, "orders"), order);
  alert("Order Saved!");
}

// Load Orders
async function loadOrders() {
  const querySnapshot = await getDocs(collection(db, "orders"));

  querySnapshot.forEach((docItem) => {
    console.log(docItem.id, docItem.data());
  });
}

// Delete Order
async function deleteOrder(id) {
  await deleteDoc(doc(db, "orders", id));
}

// Export
window.saveOrder = saveOrder;
window.loadOrders = loadOrders;
window.deleteOrder = deleteOrder;
