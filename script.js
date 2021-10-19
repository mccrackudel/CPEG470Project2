var fetchPage = function(pageid, data){
  switch (pageid){
    case 'page1':
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
    case 'page2':
      return `
<p>This is page 2.  It is not here when you began.  Can we make it appear?
`;    
    case 'page3':
      return `
  <h1>This is page 3.</h1>
  <p>Wanna fight about it?</p>
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
