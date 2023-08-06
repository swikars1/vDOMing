let post = "";
const jsInput = document.querySelector("input");
const jsDiv = document.querySelector("div");

function eventHook(eventFn) {
  eventFn.call();
  dataToView();
}

function dataToView() {
  jsInput.value = post;
  jsDiv.textContent = post;
}

function handleInput() {
  post = jsInput.value;
  if (jsInput.value === "Swikar") {
    jsDiv.remove();
  }
}

jsInput.oninput = function () {
  eventHook(handleInput);
};
