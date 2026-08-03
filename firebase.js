// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq_QbfdHm1xwUKxNeWv02lydwMDOcSWJY",
  authDomain: "lc-order-manager.firebaseapp.com",
  projectId: "lc-order-manager",
  storageBucket: "lc-order-manager.firebasestorage.app",
  messagingSenderId: "412721669263",
  appId: "1:412721669263:web:279d62967e184ed698bcfa",
  measurementId: "G-700M9KDYND"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firestore Database
const db = getFirestore(app);


// Add Order
async function addOrderFirebase(order){

    await addDoc(collection(db,"orders"), order);

    alert("Order Saved Successfully");
}


// Get Orders
async function getOrders(){

    let orders = [];

    const querySnapshot = await getDocs(collection(db,"orders"));

    querySnapshot.forEach((doc)=>{
        orders.push({
            id:doc.id,
            ...doc.data()
        });
    });

    return orders;
}


// Delete Order
async function removeOrder(id){

    await deleteDoc(doc(db,"orders",id));

}


// Update Order
async function editOrder(id,data){

    await updateDoc(doc(db,"orders",id),data);

}


export {
    db,
    addOrderFirebase,
    getOrders,
    removeOrder,
    editOrder
};
