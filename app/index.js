
(function myBlog(){

  var app = {
    myDOMapi: domApiFunc(),
    addSections: addSectionsFunc,
    mainContainer: null,
    init: init
}

app.init();

function init() {

  this.addSections();
}

function addSectionsFunc(){
   this.mainContainer = this.myDOMapi.getSectionContainer('main-sections-container');
  var sections = [   //do request for sections(AJAX)
    '<section><header><h2>Section2</h2></header><div class="full"><span>more</span></div><article><img src="http://pipsum.com/400x200.jpg" alt="Terrific new"><p>Lorem ipsum dolor</p></article></section>',
    '<section><header><h2>Section3</h2></header><div class="full"><span>more</span></div><article><img src="http://pipsum.com/400x200.jpg" alt="Terrific new"><p>Lorem ipsum dolor</p></article></section>',
    ];
    function addItemHTML(item){
      this.mainContainer.innerHTML += item;
    }
    this.myDOMapi.addItems(sections, addItemHTML.bind(this));
}

/*function updateArticleText(){
  var sections = this.myDOMapi.getSections('.section');
  for (var i = i < section.length; i++) {
    var els = sections[i].children[3].getElementsByTagName('p');
    for (var x = x < section.length; x++){
      els[x].textContent = "lorem";
    };
  };
}*/

function domApiFunc(){
  function getSectionContainer(id){
    return document.getElementById(id);
  }
  function addItems(items, callBack){
    for (var i = 0; i < items.length; i++) {
        callBack(items[i]);
    };
  }
  var publicAPI = {
    getSectionContainer: getSectionContainer,
    addItems: addItems
  }
  return publicAPI;
};

})();

function addMenuFunc() {
function constructMenu() {
var container = this.DOMapi.getContainer("main-nav");
var newNav = document.createElement("nav");
var newList = document.createElement("ul");
newNav.appendChild(newList);
container.appendChild(newNav);
function addList(item, index) {
var index = index + 1;
newList.innerHTML += "<li>"+(item.title + " " + index)+"</li>";
}
this.DOMapi.addItems(this.menu, addList)
}
function addMenuToDOM(obj) {
this.sections = obj.data.sections;
this.menu = obj.data.menu;
constructMenu.call(this);
}
this.DataApi.getData(addMenuToDOM.bind(this));
};


function domApiFunc() {
function getContainer(id) {
return document.getElementById(id);
}

function addItems(items, callBack) {
for (var i = 0; i < items.length; i++) {
callBack(items[i], i);
};
}
var publicAPI = {
getContainer: getContainer,
addItems: addItems
}
return publicAPI;
};
function dataApiFunc() {
var URLs = {
get: "data/sections.json",
post: "nothing yet"
};
function getData(callBack) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
callBack(JSON.parse(xmlhttp.responseText));
};
};
xmlhttp.open("GET", URLs.get, true);
xmlhttp.send();
}
function sendData() {
//code to send data 
//to server/WS
}
var publicAPI = {
getData: getData,
sendData: sendData
}
return publicAPI;
};

function registerEventsFunc () {
var menuMobileBtn = document.querySelector("#menu-mobile-btn"),
menuMobileContainer = document.querySelector("#menu-mobile-container"),
bodyTag = document.getElementsByTagName('body')[0],
target = null;
menuMobileBtn.addEventListener("touchstart", function (event) {
target = event.target.localName === 'span' ? event.target.parentElement : event.target
if (target.classList.length === 0) {
bodyTag.classList.add('no-scroll');
menuMobileContainer.classList.add('open');
target.classList.add('open');
}else {
bodyTag.classList.remove('no-scroll');
menuMobileContainer.classList.remove('open');
target.classList.remove('open');
};
}, false);
}