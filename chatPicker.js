document.onkeyup = function(e){
  if(e.ctrlKey && e.which==8){
    document.querySelector("#react-root > section > div:nth-child(1) > header > div > div:nth-child(1) > a").click();
  }else if(e.shiftKey && (e.which >= 49 && e.which <= 57)){
    document.querySelector("#react-root > section > div:nth-child(2) > div > div > div:nth-child(2) > div")
    .children[e.which - 48].click();
  }
}

console.log("here");