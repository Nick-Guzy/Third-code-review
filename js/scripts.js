window.onload = function(){
  document.querySelector("form")
  document.querySelector("form").onsubmit = function(event){
  event.preventDefault();

  
 

}
  }
  function build(num){
    const x = num
    const arr = []
    if (num <= 9){
    for(let i = 0; i <= num; i++){
      arr.push(i)
      console.log(arr);}
      replace(arr)}
      else {(document.getElementById("output-area").innerText = "Enter a number between 1 and 9")}
  }


function replace(arr){
  arr.replace(1, "beep!")
  console.log(arr)
  arr.replace(2, "boop!")
  console.log(arr)
  arr.replace(3, "Will you be my neighbor?")
  console.log(arr)
  document.getElementById("output-area").innerText = arr;
}

document.getElementById("output-area").innerText = arr;
