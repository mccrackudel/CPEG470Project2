var fetchPage = function(pageid, data){
  switch (pageid){
    case 'page1':
      return `
      <h3>Enter Name:</h3>
      <input type="text">
      <br>
      <button>Submit</button>
`;
    case 'page2':
      return `
      <h3>Enter Server:</h3>
      <input type="text">
      <br>
      <button>Submit</button>
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

document.addEventListener('click', showNextPage);
showNextPage();
