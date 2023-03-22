import { PIECE_VALID_MOVES } from "../../redux/constants";
import { bishopValidMovesColor } from "./piecesTypes/bishopValidMovesColor";
import { pawnValidMovesColor } from "./piecesTypes/pawnValidMovesColor";

export const piecesMoveValidation = (
  row,
  col,
  piece,
  squares,
  dispatch,
  isWhitePiece,
  isCheckmateValid
) => {
  if (piece === "p" || piece === "P") {
    pawnValidMovesColor(row, col, piece, squares, dispatch);
  } else if (piece === "b" || piece === "B") {
    bishopValidMovesColor(row, col, isWhitePiece, squares, dispatch);
  } else {
    dispatch({ type: PIECE_VALID_MOVES, pieceMoves: [] });
  }
};
