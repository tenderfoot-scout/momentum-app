const focusInput = document.getElementById('main-focus-input');
const focusSubmit = document.getElementById('focus-submit');
const focusOutput = document.getElementById('focus-output');
const inputContainer = document.getElementById('focus-input-container');
const mainFocusQuestion = document.getElementById('main-focus-question');
const todayTitle = document.getElementById('main-focus-today');
const restartButton = document.getElementById('restart-button');
const doneButton = document.getElementById('done-button');

function focusEntered() {
  mainFocusQuestion.style.display = 'none';
  inputContainer.style.display = 'none';
  todayTitle.style.display = 'inline';
  focusOutput.innerHTML = focusInput.value;
}

focusInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    focusEntered();
    focusOutput.style.display = "inline";
    focusInput.value = "";
  }
});

focusOutput.addEventListener('click', function(e) {
  if(e.target.tagName === 'SPAN') {
    e.target.classList.toggle('focus-completed');
    restartButton.style.display = 'inline';
    doneButton.style.display = 'inline';
  }
}, false);


restartButton.addEventListener('click', newFocus);

function newFocus() {
  focusOutput.classList.remove("focus-completed");
  restartButton.style.display = 'none';
  todayTitle.style.display = 'none';
  doneButton.style.display = 'none';
  focusOutput.style.display = 'none';
  focusInput.style.display = 'inline';
  mainFocusQuestion.style.display = 'inline';
  inputContainer.style.display = 'inline';
}

doneButton.addEventListener('click', congratulateUser);

function congratulateUser() {
  const goodJob = document.createElement("p");
  goodJob.innerText = "Great job! Go rest up for now.";
  document.getElementById("focus-output-container").appendChild(goodJob)
  restartButton.style.display = 'none';
  focusOutput.style.display = 'none';
  todayTitle.style.display = 'none';
  doneButton.style.display = 'none';
}

