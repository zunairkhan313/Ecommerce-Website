import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { collection, addDoc, getFirestore, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
// document.getElementById("output").style.display = "none"


const firebaseConfig = {
  apiKey: "AIzaSyA5q_F3UUE6re_u3eodMoLqDbwgNnRcF7U",
  authDomain: "project-d6bc6.firebaseapp.com",
  projectId: "project-d6bc6",
  storageBucket: "project-d6bc6.appspot.com",
  messagingSenderId: "195227400536",
  appId: "1:195227400536:web:4fa21fefe9da1bdc964d2d"
};



async function add(r,p){


  const rupee = r
  const product = p
  try {
    const docRef = await addDoc(collection(db, "rupees"), {
      rupees: rupee,
      img: product
    });
    location.reload()
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
window.add = add



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const querySnapshot = await getDocs(collection(db, "rupees"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  document.getElementById("output").innerHTML += `
  <div class="row">
      <div class="col-lg-4">
      <img width="100px" src="${doc.data().img}" alt="">
      </div>
      <div class="col-lg-4" style="display: flex;align-items: center;">
      <p style="font-weight: bold;margin-top: 15px;font-size: medium;margin-left: 20px;">${doc.data().rupees}</p>
      </div>
      <div class="col-lg-4" style="display: flex;align-items: center;">
      <img style="margin-left: 30px;" width="25px" src="./dlt.png" alt="" onclick="del('${doc.id}')">
      </div>
      
      
      </div>`
});

async function del(id) {
  await deleteDoc(doc(db, "rupees", id));
  location.reload()
} 
window.del = del