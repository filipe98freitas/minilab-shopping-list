const insertNameList = document.getElementById("inputText");
const addItems = document.getElementById("ul");
const bntAddMore = document.getElementById("add-btn");

bntAddMore.addEventListener("click", () => {
  let descriptionList = insertNameList.value;

  const li = `<li class="list-group-item d-flex justify-content-between">
    ${descriptionList}<button class="btn btn btn-danger">-</button>
  </li>`;

  addItems.insertAdjacentHTML("beforeend", li);

  insertNameList.value = "";
});

document.addEventListener("click", (event) => {
  if (event.target.innerText === "-") {
    const deleteItens = event.target.parentElement;
    addItems.removeChild(deleteItens);
  }
});
