//체크박스 체크시 text에 줄이 그어지며 아래로 내리고 해제시 줄이 없어지며 위로 올라오는 함수
function check(listId) {
  const wrap = document.querySelector(`#wrap-list${listId}`);
  const parent = wrap.parentNode;
  const check = document.querySelector(`#wrap-list${listId} #input-list-check`).checked;
  const text = document.querySelector(`#wrap-list${listId} #text-list`);
  if (check) {
    text.style.textDecoration = "line-through";
    text.style.color = "#d2d2d2";
    parent.appendChild(wrap, parent.lastChild);
  } else {
    text.style.textDecoration = "";
    text.style.color = "";
    parent.insertBefore(wrap, parent.childNodes[2]);
  }
}
//input요소에서 엔터키 입력시 관련함수를 실행시켜주는 함수
function enterkey(fun, listId) {
  if (window.event.keyCode == 13) {
    if (listId === "undfined") {
      fun();
    } else {
      fun(listId);
    }
  }
}
