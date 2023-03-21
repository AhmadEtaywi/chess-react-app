import {
  CHECKMATE,
  HISTORY_FROM,
  HISTORY_TO,
  MOVE_FROM,
  MOVE_TO,
  PIECE_VALID_MOVES,
} from "./constants";
import { isPawnMoveValid } from "./movesValidation/pawnMoveValidation";
import { isBishopMoveValid } from "./movesValidation/bishopMoveValidation";

const initialState = {
  squares: [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ],
  selectedSquare: null,
  turn: "white",
  pieceValidMoves: [],
  historyFrom: [],
  historyTo: [],
  isCheckmateValid: false,
};
console.log(initialState.squares);

const chessReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_FROM:
      return { ...state, selectedSquare: action.square };
    case MOVE_TO:
      if (state.selectedSquare === null) {
        return state;
      }
      const squares = [...state.squares];

      const startRow = state.selectedSquare[0];
      const startCol = state.selectedSquare[1];

      const endRow = action.square[0];
      const endCol = action.square[1];

      const fromPiece = squares[startRow][startCol];
      const toPiece = squares[endRow][endCol];

      if (fromPiece === "p" || fromPiece === "P") {
        if (
          !isPawnMoveValid(
            startRow,
            startCol,
            endRow,
            endCol,
            fromPiece,
            toPiece
          )
        ) {
          return state;
        }
      }

      if (fromPiece === "b" || fromPiece === "B") {
        if (!isBishopMoveValid(startRow, startCol, endRow, endCol, squares)) {
          return state;
        }
      }

      squares[startRow][startCol] = "";
      squares[endRow][endCol] = fromPiece;

      return {
        ...state,
        squares: squares,
        selectedSquare: null,
        turn: state.turn === "black" ? "white" : "black",
      };
    case PIECE_VALID_MOVES:
      return { ...state, pieceValidMoves: action.pieceMoves };
    case HISTORY_FROM:
      return {
        ...state,
        historyFrom: [...state.historyFrom, action.historyFromItem],
      };
    case HISTORY_TO:
      return {
        ...state,
        historyTo: [...state.historyTo, action.historyToItem],
      };
    case CHECKMATE:
      return { ...state, isCheckmateValid: action.checkmate };
    default:
      return state;
  }
};

export default chessReducer;
