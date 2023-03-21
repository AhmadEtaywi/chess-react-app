// import whiteRook from "./images/white/white-Rook.png";
// import whitePawn from "./components/pieces/white/white-Pawn.png";
// import whiteKnight from "./components/pieces/white/white-Knight.png";
// import whiteKing from "./components/pieces/white/white-King.png";
// import whiteQueen from "./components/pieces/white/white-Queen.png";
// import whiteBishop from "./components/pieces/white/white-Bishop.png";
// import blackRook from "./components/pieces/black/black-Rook.png";
// import blackPawn from "./components/pieces/black/black-Pawn.png";
// import blackKnight from "./components/pieces/black/black-Knight.png";
// import blackKing from "./components/pieces/black/black-King.png";
// import blackQueen from "./components/pieces/black/black-Queen.png";
// import blackBishop from "./components/pieces/black/black-Bishop.png";

export const piecesIcons = (pieceType) => {
  
  const icons = {
    p: "fas fa-chess-pawn",
    P: "fas fa-chess-pawn",
    r: "fas fa-chess-rook",
    R: "fas fa-chess-rook",
    n: "fas fa-chess-knight",
    N: "fas fa-chess-knight",
    b: "fas fa-chess-bishop",
    B: "fas fa-chess-bishop",
    q: "fas fa-chess-queen",
    Q: "fas fa-chess-queen",
    k: "fas fa-chess-king",
    K: "fas fa-chess-king",
  };
  return icons[pieceType] || "";
};
