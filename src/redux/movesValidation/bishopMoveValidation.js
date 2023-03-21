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
      return false;
    }
  }

  return true;
};
