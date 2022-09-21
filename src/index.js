import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

/* no redux
let count = 0;

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const hndleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", hndleAdd);
minus.addEventListener("click", handleMinus);
*/

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const onchange = () => {
  number.innerText = store.getState();
};

store.subscribe(onchange);

add.addEventListener("click", () => store.dispatch({ type: ADD }));
minus.addEventListener("click", () => store.dispatch({ type: MINUS }));
