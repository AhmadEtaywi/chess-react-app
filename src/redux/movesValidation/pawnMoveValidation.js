export const isPawnMoveValid = (
  startRow,
  startCol,
  endRow,
  endCol,
  fromPiece,
  toPiece
) => {
  const rowDiff = Math.abs(endRow - startRow);
  const colDiff = Math.abs(endCol - startCol);
  const isWhiteMovingForward = endRow < startRow;
  const isBlackMovingForward = endRow > startRow;

  switch (fromPiece) {
    case "p":
      if (startRow === 6 && rowDiff === 2 && startCol === endCol) {
        return true;
      } else if (
        rowDiff === 1 &&
        startCol === endCol &&
        isWhiteMovingForward &&
        toPiece === ""
        
      ) {
  // alert ("CHECKMATE")

        return true;
      }
      break;

    case "P":
      if (startRow === 1 && rowDiff === 2 && startCol === endCol) {

        return true;
      } else if (
        rowDiff === 1 &&
        startCol === endCol &&
        isBlackMovingForward &&
        toPiece === ""
      ) {

        return true;
      }
      break;

    default:
      return false;
  }

/* start testing king dead */

  if (rowDiff === 1 && colDiff === 1 && toPiece !== "" && toPiece === "K") { // for the black king
    
  alert (" black King killed , Player 1 WIN ") // important
  window.location.reload()


    return true;
  }
  else  if (rowDiff === 1 && colDiff === 1 && toPiece !== "" && toPiece === "k") { // for the white king
    
    alert (" white King killed , Player 2 WIN ") // important
    window.location.reload()
      return true;
    }
  else{
    if(rowDiff === 1 && colDiff ===1 & toPiece !== ""){
      return true
    }
  }

/* end testing king dead */


  return false;
};
