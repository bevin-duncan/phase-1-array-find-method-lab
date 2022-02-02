

  
    
function superbowlWin(array) {
    let sbWin = array.find((array) => array.result === "W");
    if (sbWin) {
      return sbWin.year;
    }
    else {return undefined}
  }
  

