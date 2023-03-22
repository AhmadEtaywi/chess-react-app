import { PIECE_VALID_MOVES,CHECKMATE } from "../../../redux/constants";
const isSamePieceColor = (piece, isWhite) => {
  const whitePieces = ["p", "b", "k", "q", "r", "n"];
  const blackPieces = ["P", "B", "K", "Q", "R", "N"];
  return isWhite ? whitePieces.includes(piece) : blackPieces.includes(piece);
};

const addDiagonalMoves = (
  row,
  col,
  diagonalRow,
  diagonalColumn,
  isWhitePiece,
  squares,
  bishopValidMoves,
  dispatch
) => {
  let r = row + diagonalRow;
  let c = col + diagonalColumn;

  while (r >= 0 && r < 8 && c >= 0 && c < 8) {
    const currentPiece = squares[r][c];
    if (currentPiece === "") {
      bishopValidMoves.push([r, c]);
    } else if (isSamePieceColor(currentPiece, isWhitePiece)) {
      break;
    } else {
      bishopValidMoves.push([r, c]);
      if ((bishopValidMoves.some(move => squares[move[0]][move[1]] === "K")|| bishopValidMoves.some(move => squares[move[0]][move[1]] === "k"))) {
        alert("CHECKMATE")
        dispatch({ type: CHECKMATE, checkmate: true });

      }
      break;
    }

    r += diagonalRow;
    c += diagonalColumn;
  }
};


export const bishopValidMovesColor = (
  row,
  col,
  isWhitePiece,
  squares,
  dispatch
) => {
  const bishopValidMoves = [];

  addDiagonalMoves(row, col, -1, -1, isWhitePiece, squares, bishopValidMoves, dispatch);
  addDiagonalMoves(row, col, -1, 1, isWhitePiece, squares, bishopValidMoves, dispatch);
  addDiagonalMoves(row, col, 1, -1, isWhitePiece, squares, bishopValidMoves, dispatch);
  addDiagonalMoves(row, col, 1, 1, isWhitePiece, squares, bishopValidMoves, dispatch);

  dispatch({ type: PIECE_VALID_MOVES, pieceMoves: bishopValidMoves });
};
