let id = 0;
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
    id++;
  }
}


// input-content에 입력한 value값으로 만든 html을 리스트 element에 붙이는 함수
function makeList(content, id) {
  const contain = OBJ.layout["containList"];
  const tempHtml = document.querySelector['#wrap-list']
  // document.getElementById('wrap-list').dataset.id,
  
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
  let result = confirm("Are you sure delete?");
  if (result) {
    wrap.remove();
  }
}
