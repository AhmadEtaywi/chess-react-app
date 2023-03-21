import { CHECKMATE, PIECE_VALID_MOVES } from "../../../redux/constants";

const isOpponentPiece = (piece, isWhite) => {
  const whitePieces = ["p", "b", "k", "q", "r", "n"];
  const blackPieces = ["P", "B", "K", "Q", "R", "N"];

  return isWhite ? blackPieces.includes(piece) : whitePieces.includes(piece);
};

export const pawnValidMovesColor = (row, col, piece, squares, dispatch) => {
  const pawnValidMoves = [];
  // console.log("white turn");

  // console.log(squares[row][col]);
  // if(squares[row][col]==="K" || squares[row][col] === "k"){
  //   alert ("CHECKMATE")
  // }

  const isWhitePiece = piece === "p";
  const forwardMove = isWhitePiece ? -1 : 1;
  const startRow = isWhitePiece ? 6 : 1;

  const addMoveIfValid = (r, c) => {
    if (r >= 0 && r < 8 && c >= 0 && c < 8) {
      pawnValidMoves.push([r, c]);
    }
  };
  if (
    
    squares[row + forwardMove][col] === "k" ||
    squares[row + forwardMove][col] === "K"
  ) {
    
    alert("test")
    dispatch({ type: CHECKMATE, checkmate: true });
  } else if (squares[row + forwardMove][col] === "") {
    addMoveIfValid(row + forwardMove, col);

    if (row === startRow && squares[row + 2 * forwardMove][col] === "") {
      addMoveIfValid(row + 2 * forwardMove, col);
    }
  }

  if (isOpponentPiece(squares[row + forwardMove][col - 1], isWhitePiece)) {
    addMoveIfValid(row + forwardMove, col - 1);

  }

  if (isOpponentPiece(squares[row + forwardMove][col + 1], isWhitePiece)) {
    addMoveIfValid(row + forwardMove, col + 1);
  }

  dispatch({ type: PIECE_VALID_MOVES, pieceMoves: pawnValidMoves });

};
