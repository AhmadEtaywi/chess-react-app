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

  if (rowDiff === 1 && colDiff === 1 && toPiece !== "" && toPiece === "K") { 
  alert (" The  Black King is Dead , Player 1 WIN ") 
  window.location.reload()
    return true;
  }
  else  if (rowDiff === 1 && colDiff === 1 && toPiece !== "" && toPiece === "k") {    
    alert (" The White King is Dead , Player 2 WIN ") 
    window.location.reload()
      return true;
    }
  else{
    if(rowDiff === 1 && colDiff ===1 & toPiece !== ""){
      return true
    }
  }

  return false;
};
