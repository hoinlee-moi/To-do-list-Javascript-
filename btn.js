let id = 0;
const tempHtml = document.getElementById("wrap-list");
//필요한 element 모아놓은 곳
const OBJ = {
  btn: {
    addBtn: document.querySelector("#btn-add"),
    editBtn: document.querySelector("#btn-edit"),
    delBtn: document.querySelector("#btn-delete"),
  },
  input: {
    inputContent: document.querySelector("#input-content"),
  },
  layout: {
    containList: document.querySelector("#container-list"),
  },
};
// input-content에 입력한 value값을 아래 list에 추가해주는 함수
function add() {
  const val = OBJ.input.inputContent.value;
  if (val === "") {
    alert("please write it down");
  } else {
    makeList(val, id);
    OBJ.input["inputContent"].value = "";
  }
}
const insertId = (element) => {
  element.dataset.id = id;
  id++;
  return element;
};
const makeHtml = () => {
  const currentValue = OBJ.input.inputContent.value;
  const newHtml = tempHtml.cloneNode(true);
  const newHtmlPtag = newHtml.getElementsByTagName("p")[0];
  newHtmlPtag.textContent = currentValue;
  newHtml.style.display = "";
  return newHtml;
};

// input-content에 입력한 value값으로 만든 html을 리스트 element에 붙이는 함수
function makeList() {
  const contain = OBJ.layout["containList"];
  let tempHtml = makeHtml();
  tempHtml = insertId(tempHtml);
  // document.getElementById('wrap-list').dataset.id,
  contain.appendChild(tempHtml);
}
//edit 버튼 누를시 list에 입력된 내용을 수정 가능하게 하는 함수
function edit(element) {
  const box = element.querySelector("#box-list");
  const text = element.querySelector("#text-list");
  const btn = element.querySelector("#btn-edit");
  const style = text.style;
  const inputEle = '<input type="text" class="input-edit-list" id="input-edit-list" >';
  if (style.display === "none") {
    let input = element.querySelector("#input-edit-list");
    let value = input.value;
    if (value === "") {
      input.remove();
      style.display = "";
    } else {
      input.remove();
      style.display = "";
      text.textContent = value;
    }
    btn.textContent = "Edit"
  } else {
    style.display = "none";
    box.insertAdjacentHTML("beforeend", inputEle);
    element.querySelector("#input-edit-list").focus();
    btn.textContent = "Save";
  }
}
//delete버튼 누를시 list에 입력된 내용을 삭제
const Delete = (element) => {
  element.remove();
};
OBJ.layout.containList.addEventListener("click", (e) => {
  const ele = e.target.closest("#wrap-list");
  if (e.target.id === "btn-delete") Delete(ele);
  if (e.target.id === "btn-edit") edit(ele);
});
