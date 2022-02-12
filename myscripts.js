console.log("visible...");
var container = document.getElementById("container");

let p = document.createElement("p");

fetch(
  "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((e, i) => {
      p.innerHTML += `
       ${i + 1}<li>name:${e.name}</li>
       <li> email: ${e.email}  </li>
       `;
    });
  });

container.appendChild(p);
