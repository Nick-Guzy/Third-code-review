window.onload = function(){
  document.querySelector("form")
  document.querySelector("form").onsubmit = function(event){
  event.preventDefault();

  
 const arr = []

}
  }
  function build(num){
    const x = num
    for(let i = 0; i <= num; i++){
      arr.push(i)
      console.log(arr);}
    arbit(arr)
}

  


function arbit(arr){
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] = 1){
      arr.splice(i,1,"beep!");
    }
    else if(arr[i] = 2){
      arr.splice(i,1,"boop!");
    }
    else if(arr[i = 3]){
      arr.splice(i,1,"Will you be my neighbor?")
    }
  }
  console.log(arr)
  document.getElementById("output-area").innerText = arr;
}



