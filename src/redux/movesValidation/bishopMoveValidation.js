export const isBishopMoveValid = (
  startRow,
  startCol,
  endRow,
  endCol,
  squares
) => {
  const rowDiff = Math.abs(endRow - startRow);
  const colDiff = Math.abs(endCol - startCol);

  if (rowDiff !== colDiff) {
    // alert("invalid move")
    return false;
  }

  const rowStep = endRow > startRow ? 1 : -1;
  const colStep = endCol > startCol ? 1 : -1;

  for (
    let row = startRow + rowStep, col = startCol + colStep;
    row !== endRow;
    row += rowStep, col += colStep
  ) {
    if (squares[row][col] !== "") {
      alert("blocked path");
      return false;
    }
  }

  if (
    squares[endRow][endCol] === "K" &&
    squares[endRow][endCol] !== squares[startRow][startCol]
  ) {
    alert("the black king is dead , Player 1 WIN");
    window.location.reload();
  } else if (
    squares[endRow][endCol] === "k" &&
    squares[endRow][endCol] !== squares[startRow][startCol]
  ) {
    alert("the white king is dead , Player 2 WIN");
    window.location.reload();
  }

  return true;
};
