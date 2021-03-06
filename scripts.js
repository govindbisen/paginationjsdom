console.log("visible...");
var currentPageforPrevNext;

var container = document.getElementById("container");

let p = document.createElement("p");

async function pagination() {
  const obj = await fetch(
    "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json"
  );
  const data = await obj.json();
  console.log(data);

  const noOfPeoplePerPage = 5;
  const currentPage = 1;
  const text = document.createElement("p");

  function displayPeople(i) {
    text.innerText = "";
    console.log(i);
    if (i > 1 && i < 20) {
      currentPageforPrevNext = i;
    }
    for (
      let index = i * noOfPeoplePerPage - 5;
      index <= i * noOfPeoplePerPage - 1;
      index++
    ) {
      // text.innerText = "";
      const element = data[index];
      console.log(element);

      text.innerText += `${element.name} `;
      text.innerHTML += "</br>";

      container.appendChild(text);
    }
  }
  const buttonfirst = document.createElement("BUTTON");
  buttonfirst.innerText = "first";
  buttonfirst.addEventListener("click", () => displayPeople(1));
  container.appendChild(buttonfirst);

  const buttonlast = document.createElement("BUTTON");
  buttonlast.innerText = "last";
  buttonlast.addEventListener("click", () =>
    displayPeople(data.length / noOfPeoplePerPage + currentPage - 1)
  );
  container.appendChild(buttonlast);

  const nextButton = document.createElement("BUTTON");
  nextButton.innerText = "next";
  nextButton.addEventListener("click", () =>
    displayPeople(currentPageforPrevNext + 1)
  );
  container.appendChild(nextButton);

  const preButton = document.createElement("BUTTON");
  preButton.innerText = "prev";
  preButton.addEventListener("click", () =>
    displayPeople(currentPageforPrevNext - 1)
  );
  container.appendChild(preButton);

  for (
    let i = currentPage;
    i <= data.length / noOfPeoplePerPage + currentPage - 1;
    i++
  ) {
    const button = document.createElement("BUTTON");
    button.innerText = `${i}`;
    button.addEventListener("click", () => displayPeople(i));
    container.appendChild(button);
  }
}

pagination();

container.appendChild(p);

// i=1 page -> data 0-4 => loop => (i*noOfPeoplePerPage) to (i*noOfPeoplePerPage - 1)+5
// i=2 page -> data 5-9
// i=3 page -> data 10-14

// i = 1 ; 1,2,3,4,5
// i = 2 ; 6,7,8,9,10
// i = 3 ; 11.12.13.14.15
// i = 4 ; 16,17,18,19,20
// i = 5 ; 21,22,23,24,25
