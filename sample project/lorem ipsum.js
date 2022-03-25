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
  //FORMAT OF EVENT LISTENERS
  var elementObject = document.querySelector("p");
  var eventString = "mouseover";
  elementObject.addEventListener(eventString, callbackFunction);

  function callbackFunction(eventObject) {
    //Insert code here
    let target = eventObject.target;
  }
}

//CHANGE HTML ELEMENTS
{
  var title = document.querySelector("#title");
  title.addEventListener("mouseover", changeTheTitle);
  function changeTheTitle() {
    title.innerHTML = "What happened to the title?";
  }

  var author = document.querySelector(".author");
  author.addEventListener("mouseover", removeFormatting);
  function removeFormatting(event) {
    let target = event.target;
    if (target.classList.contains("authorName")) {
      author.innerHTML = author.innerText;
      //NOTE: innerText omits inner HTML tags
    }
  }

  var paragraphs = document.getElementsByTagName("p");
  var secondParagraph = paragraphs[1];
  secondParagraph.addEventListener("mouseleave", shrinkTheParagraph);
  function shrinkTheParagraph() {
    secondParagraph.outerHTML = `<h6>${secondParagraph.innerHTML}</h6>`;
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
  var elementWithAttributes = document.querySelector("link");
  var linkTag = elementWithAttributes;
  var relAttribute = linkTag.getAttribute("rel");
  var hrefAttribute = linkTag.getAttribute("href");
  var allAttributes = linkTag.attributes;
  //Type variable in the console to see their values
}
//ADD OR CHANGE ELEMENT ATTRIBUTES
{
  var buttons = document.querySelectorAll(".delete, .add");
  for (eachButton of buttons) {
    eachButton.addEventListener("mouseover", addClassButton);
    //NOTE: View the changes in browser DevTools HTML tab
  }
  function addClassButton(event) {
    //NOTE: The "button" class adds padding to the sides of each button.
    let target = event.target;
    target.className += " button";
    target.classList.add("functional");
    target.setAttribute("isModified", "true");
    //The above code shows different ways to modify attributes
  }

  //Event bubbling - events are sent to parent if child didn't catch
  var unorderedList = document.querySelector("ul");
  unorderedList.addEventListener("click", logListClick);
  function logListClick(event) {
    let element = event.target;
    if (element.classList.contains("color")) {
      let color = element.innerText;
      let li = element.parentElement;
      li.setAttribute("style", "color:" + color);
      //NOTE: use comma (instead of +) in "console.log()" to show object properties
    }
  }
}
//REMOVE ATTRIBUTE
{
  //NOTE: Use devtools to watch the the attribute get removed
  var footer = document.getElementById("footer");
  footer.addEventListener("mouseover", removeUnnecessaryAttribute);
  var isAttributeRemoved = false;
  function removeUnnecessaryAttribute() {
    if (isAttributeRemoved) {
      console.log("Peek-a-boo!!!");
    } else {
      let unnecessaryAttribute = "class";
      let footerTag = document.querySelector("footer");
      footerTag.removeAttribute(unnecessaryAttribute);
      console.log('The "class" attribute has been removed from <footer>');
      footer.innerHTML = "There's a message in the console";
      isAttributeRemoved = true;
    }
  }
}
//ADD OR CHANGE CSS STYLES
{
  var table = document.querySelector("table");
  table.addEventListener("mouseover", changeTableStyles);
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
        styleSheet.insertRule(
          "td {font-style:italic;font-weight:bold;text-align:center}"
        );
        //NOTE: insertRule doesn't work if the HTML file is opened in the browser.
        //NOTE: insertRule works when running the HTML file in a server.
        //NOTE: These changes are viewable in DevTools STYLES tab
        break;
    }
  }
}
