let id = 0;
const obj = {
  btn: {
    addBtn: document.querySelector("#btn-add"),
    editBtn: document.querySelector("#btn-edit"),
    delBtn: document.querySelector("#btn-delete"),
  },
  value: {
    inputContent: document.querySelector("#input-content"),
  },
  layout: {
    containList: document.querySelector("#container-list"),
  },
};
// input-content에 입력한 value값을 아래 list에 추가해주는 함수
function add() {
  const val = obj.value["inputContent"].value;
  if (val === "") {
    alert("할 일을 입력해주세요!");
  } else {
    makeList(val, id);
    obj.value["inputContent"].value = "";
    id++;
  }
}
// input-content에 입력한 value값으로 만든 html을 리스트 element에 붙이는 함수
function makeList(content, id) {
  const contain = obj.layout["containList"];
  const newTag = document.createElement("div");
  const tempHtml = `<div class="wrap-list" id="wrap-list${id}">
                      <div class="box-list" id="box-list">
                        <input type="checkbox" class="input-list-check" id="input-list-check" onchange="check(${id})" />
                        <p class="text-list" id="text-list">${content}</p>
                      </div>
                      <div class="box-edit">
                        <button class="btn-edit" id="btn-edit" onclick="edit(${id})">
                          Edit
                        </button>
                        <button class="btn-delete" id="btn-delete" onclick="del(${id})">
                          Delete
                        </button>
                      </div>
                    </div>`;
  contain.insertAdjacentHTML("beforeend", tempHtml);
}
//edit 버튼 누를시 list에 입력된 내용을 수정 가능하게 하는 함수
function edit(listId) {
  const box = document.querySelector(`#wrap-list${listId} #box-list`);
  const text = document.querySelector(`#wrap-list${listId} #text-list`);
  const style = text.style;
  const element = `<input type="text" class="input-edit-list" id="input-edit-list" onkeyup="enterkey(edit,${listId})">`;
  if (style.display === "none") {
    let input = document.querySelector(`#wrap-list${listId} #input-edit-list`);
    let value = input.value;
    if (value === "") {
      input.remove();
      style.display = "";
    } else {
      input.remove();
      style.display = "";
      text.textContent = value;
    }
  } else {
    style.display = "none";
    box.insertAdjacentHTML("beforeend", element);
    document.querySelector(`#wrap-list${listId} #input-edit-list`).focus();
  }
}
//delete버튼 누를시 list에 입력된 내용을 삭제
function del(listId) {
  const wrap = document.querySelector(`#wrap-list${listId}`);
  let result = confirm("삭제하시겠습니까?");
  if (result) {
    wrap.remove();
  }
}
