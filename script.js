var fetchPage = function(pageid, data){
  switch (pageid){
    case 'page1':
      return `
      <h3>Enter Name:</h3>
      <input type="text">
      <br>
      <button id="submitButton">Submit</button>
`;
    case 'page2':
      return `
      <h3>Enter Server:</h3>
      <input type="text">
      <br>
      <button id="submitButton">Submit</button>
      <button id ="backButton">Back</button>
`;    
    case 'page3':
      return `
      <body>
      <h1 id = "serverName">Server:</h1>
      <h3>Server Select:</h3>
      <div>messages/ firstServer/ secondServer/</div>
      <textarea id = "serverText"></textarea>
      <br>
      <button id = "serverSelect">Submit</button>
      <ul id="chatBox"></ul>
      <textarea id = "textBox"></textarea>
      <br>
      <button id = "submitButton" type = "submit" >Submit</button>
      <button id ="backButton">Back</button>
  </body>
`;     
    default:
      return "yoyoyoyo";
  }
}

console.log(fetchPage("page1",{}));

var pages = ['page1', 'page2', 'page3'];
var currentPageIndex = -1;
var showNextPage = function(){
  currentPageIndex = (currentPageIndex + 1) % pages.length;
  var template = fetchPage(pages[currentPageIndex],{});
  display.innerHTML = template;
}
/*
var goBack = function(){
  currentPageIndex = (currentPageIndex - 1) % pages.length;
  var template = fetchPage(pages[currentPageIndex],{});
  display.innerHTML = template;
}
*/
document.getElementById("backButton").addEventListener('click', showNextPage);
document.getElementById("submitButton").addEventListener('click', showNextPage);
showNextPage();



//added firebase stuff

const username = "Andrew";
const server = "messages/";
document.getElementById("serverName").innerHTML = "Server: " + server;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js";
import * as fb from  "https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJFmJSQEeZXx0qequ9i6_3JEgs66wsDX0",
  authDomain: "chatroom-fed7d.firebaseapp.com",
  databaseURL: "https://chatroom-fed7d-default-rtdb.firebaseio.com",
  projectId: "chatroom-fed7d",
  storageBucket: "chatroom-fed7d.appspot.com",
  messagingSenderId: "880533252950",
  appId: "1:880533252950:web:7f4dacbaf1208220da04f7"
};
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();


document.getElementById("submitButton").addEventListener("click", sendMessage );
document.getElementById("serverSelect").addEventListener("click", changeServer);

function changeServer(e){
    e.preventDefault();
    server = document.getElementById("serverText").value();
    window.location.reload();
}

function sendMessage(e) {
    e.preventDefault();
    const timestamp = Date.now();
    const messageInput = document.getElementById("textBox");
    const message = messageInput.value;
  
    messageInput.value = "";
  
    document
      .getElementById("chatBox")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  
    // create db collection and send in the data
    database.ref(server + timestamp).set({
      username,
      message,
    });
  }

 const fetchChat = database.ref(server);

  fetchChat.on("child_added", function (snapshot){
    const messages = snapshot.val();
    const message = `<li class=${
      username === messages.username ? "sent" : "receive"
    }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("chatBox").innerHTML += message;
  });