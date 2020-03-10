"use strict";

const myForm = document.getElementById("jokeForm");
const url = "http://api.icndb.com/jokes/random";

myForm.addEventListener("submit", e => {
  e.preventDefault();
  const jokeBox = document.getElementById("jokeBox");

  fetch(url)
.then((response) => {
        if (response.status !== 200) {
          console.log(
            "Looks like there was a problem. Status Code: " + response.status
          );
          return;
        }
        // Examine the text in the response
        response.json().then((data) => {
          console.log(data.value.joke);
          let p = document.createElement("p");
          p.innerText = data.value.joke;
          jokeBox.appendChild(p);
        });
      })
    .catch(err => console.log(`TYPE OF ERROR: ${err}`));
});
