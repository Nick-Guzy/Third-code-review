//Business logic

  function buildUserArray(num){
    let builtArray = [];
    for(let i = 0; i <= num; i++){
      builtArray.push(i);
      console.log(builtArray);
    }
      return builtArray;
    
}

function swapValue(arrayValue){
  let newValue = arrayValue.toString();
  console.log(newValue);
  if(newValue.indexOf('3') !== -1){
    newValue = 'Won\'t you be my neighbor?';
    console.log(newValue);
  } else if (newValue.indexOf('2') !== -1) {
    newValue = 'Boop!';
    console.log(newValue);
  } else if (newValue.indexOf('1') !== -1) {
    newValue = 'Beep!';
    console.log(newValue);
  }
  console.log(newValue);
  return newValue;
}

function buildOutputArray(inputNum){
  let userArray = buildUserArray(inputNum);
  let outputArray = [];
  console.log(userArray);
  userArray.forEach(e => outputArray.push(swapValue(e)));
  console.log(outputArray);
  let textArray = outputArray.toString();
  console.log(textArray);
  document.getElementById("output-area").innerText = textArray;
}

//User Logic

window.onload = function(){
  let form = document.querySelector('form');
  form.onsubmit = function(event){
    event.preventDefault();
    console.log(document.getElementById('num-input'));
    const userInput = (document.getElementById('num-input').value);
    console.log(userInput.value);
    console.log(userInput);
    buildOutputArray(userInput);
  }
}