document.onkeyup = function(e){
  if(e.ctrlKey && e.which==8){
    document.querySelector("#react-root > section > div:nth-child(1) > header > div > div:nth-child(1) > a").click();
  }
  if(e.which==13){
    if(document.querySelector("#react-root > section > div:nth-child(2) > div:nth-child(2) > div > div").childElementCount == 2){
      document.querySelector("#react-root > section > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > button").click();
    }
  }
}