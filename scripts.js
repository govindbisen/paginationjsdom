console.log("visible...");
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

  for (
    let i = currentPage;
    i <= data.length / noOfPeoplePerPage + currentPage;
    i++
  ) {
    const button = document.createElement("BUTTON");
    button.innerText = `${i}`;
    container.appendChild(button);
  }
}
pagination();

container.appendChild(p);

// i=1 page -> data 0-4 => loop => (i*noOfPeoplePerPage - 1) to (i*noOfPeoplePerPage - 1)+5
// i=2 page -> data 5-9
// i=3 page -> data 10-14
