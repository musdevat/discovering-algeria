// // Store a reference to the <h1> in the variable
// const myHeading = document.querySelector("h1");

// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity

const myImage = document.querySelector("img");
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/20251219_132818_2.jpg") {
    myImage.setAttribute("src", "images/IMG-20251221-WA0003_2.jpg");
  } else {
    {
      if (mySrc === "images/IMG-20251221-WA0003_2.jpg") {
        myImage.setAttribute("src", "images/IMG-20251221-WA0001_2.jpg");
      } else {
        myImage.setAttribute("src", "images/20251219_132818_2.jpg");
      }
    }
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Algeria is cool, " + myName + "!";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Algeria is cool, " + storedName + "!";
}

myButton.addEventListener("click", () => {
  setUserName();
});

// Does not work.
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
