
console.log("Script Connected");

const message = document.getElementById("message");

function greeting() {
  if (message.innerText === "Good Morning") {
    message.innerText = "Good Evening";
  } else {
    message.innerText = "Good Morning";
  }
}
message.addEventListener(onclick, greeting);
