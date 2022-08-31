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
    const listItemElement = getListItemElement(val, id);
    if (listItemElement) {
      OBJ.layout.containList.appendChild(listItemElement);  
      OBJ.input.inputContent.value = "";
    } else {
      // TODO: 리스트 추가 실패시 에러가 표시될수 있는 뭔가 동작이 필요함.
    }
  }
}

const getListItemElement = (currentValue, id) => {
  const newHtml = tempHtml.cloneNode(true);
  const newHtmlPtag = newHtml.querySelector("#text-list");
  if(currentValue) newHtmlPtag.textContent = currentValue;
  if (newHtml.style.display === 'none') newHtml.style.display = "";
  newHtml.dataset.id = id;
  return newHtml;
};

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
