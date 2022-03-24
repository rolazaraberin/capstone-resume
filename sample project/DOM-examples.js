//DOM - DOCUMENT OBJECT MODEL
//DOM is an object that represents a web page's contents
//DOM elements represent HTML tags
//DOM nodes represent tags, attributes, comments, text content, and line breaks.

//GETTING AND STORING ELEMENTS
{
  var h3Tags = document.getElementsByTagName("h3");
  //Type a variable in the console to get its value
  //NOTE: Braces [] are necessary to access individual elements

  var title = document.getElementById("title");
  //NOTE: getElementById returns only 1 element
  //Braces [] are NOT necessary for the single element.

  var ranks = document.getElementsByClassName("rank");

  var firstMatchingElement = document.querySelector(".color");
  //NOTE: querySelector returns only the first match

  var allMatchingElements = document.querySelectorAll(".color");
}

//GETTING AND STORING RELATED ELEMENTS
{
  var parentOfTitle = title.parentElement;
  var grandparentOfTitle = title.parentElement.parentElement;
  var nextSiblingOfTitle = title.nextElementSibling;
  var previousSiblingOfTitle = title.previousElementSibling;
  var siblingNodeOfTitle = title.nextSibling;
  //NOTE: nodes also contain text
  //#text "\n" is a line-break node

  var body = document.querySelector("body");
  var childrenOfBody = body.children;

  var firstChildOfElement = document.querySelector("body ul li");
  var secondChildOfElement = document.querySelector("ul li:nth-child(2)");
}

//ATTACHING EVENT LISTENERS TO ELEMENTS
{
  var elementObject = document.querySelector("p");
  var eventString = "mouseover";

  //FORMAT OF EVENT LISTENERS
  elementObject.addEventListener(eventString, callbackFunction);

  function callbackFunction(eventObject) {
    console.log(eventObject);
    //NOTE: use comma (instead of +) in consoleLog to show object properties
  }

  //Event bubbling - events are sent to parent if child didn't catch
  var unorderedList = document.querySelector("ul");
  unorderedList.addEventListener("click", logListClick);
  function logListClick(event) {
    let element = event.target;
    let elementText = element.innerText;
    console.log("clicked on " + elementText);
  }
}

//CHANGE HTML ELEMENTS
{
  var title = document.querySelector("#title");
  title.addEventListener("dblclick", changeTheTitle);
  function changeTheTitle() {
    title.innerHTML = "What happened to the title?";
  }

  var author = document.querySelector(".author");
  author.addEventListener("dblclick", removeFormatting);
  function removeFormatting() {
    author.innerHTML = author.innerText;
    //NOTE: innerText omits inner HTML tags
  }

  var paragraphs = document.getElementsByTagName("p");
  paragraphs[1].addEventListener("mouseleave", shrinkTheParagraph);
  function shrinkTheParagraph() {
    paragraphs[1].outerHTML = `<h6>${paragraphs[1].innerHTML}</h6>`;
  }
}

//REMOVE HTML ELEMENTS
{
  var deleteButtons = document.querySelectorAll(".delete");
  for (eachButton of deleteButtons) {
    eachButton.addEventListener("click", deleteListItem);
  }
  function deleteListItem(event) {
    let deleteButton = event.target;
    let liTag = deleteButton.parentElement;
    liTag.remove();
  }
}

//ADD NEW HTML ELEMENTS
{
  var addButton = document.querySelector(".add");
  addButton.addEventListener("click", addTableRow);
  function addTableRow() {
    var trTag = document.createElement("tr");
    var tdTag = document.createElement("td");

    trTag.appendChild(tdTag);
    tdTag.innerHTML = Math.round(Math.random() * 100);

    table = document.querySelector("table");
    table.appendChild(trTag);
  }
}

//READ ELEMENT ATTRIBUTES
{
  var linkTag = document.querySelector("link");
  var relAttribute = linkTag.getAttribute("rel");
  var hrefAttribute = linkTag.getAttribute("href");
  var allAttributes = linkTag.attributes;
}
//ADD OR CHANGE ELEMENT ATTRIBUTES
{
  var bodyTag = document.querySelector("body");
  bodyTag.addEventListener("contextmenu", onRightClick);
  function onRightClick() {
    var buttons = document.querySelectorAll(".delete, .add");
    for (eachButton of buttons) {
      eachButton.className += " button";
      eachButton.classList.add("functional");
      eachButton.setAttribute("isModified", "true");
      //NOTE: View the changes in browser DevTools HTML tab
    }
  }
}
//REMOVE ATTRIBUTE
{
  var footerTag = document.querySelector("footer");
  footerTag.addEventListener("click", removeAttribute);
  function removeAttribute() {
    footerTag.removeAttribute("class");
  }
}
//ADD OR CHANGE CSS STYLES
{
  var table = document.querySelector("table");
  table.addEventListener("click", changeTableStyles);
  function changeTableStyles(event) {
    tag = event.target;
    switch (tag.localName) {
      case "th":
        thTag = tag;
        thTag.style.backgroundColor = "darkgray";
        thTag.style.textTransform = "uppercase";
        //NOTE: These changes are viewable in DevTools HTML tab
        break;
      case "td":
        var styleSheet = document.styleSheets[0];
        styleSheet.insertRule("td {font-style:italic;font-weight:bold}");
        //NOTE: insertRule doesn't work if the HTML file is opened in the browser.
        //NOTE: insertRule works when running the HTML file in a server.
        //NOTE: These changes are viewable in DevTools STYLES tab
        break;
    }
  }
}
