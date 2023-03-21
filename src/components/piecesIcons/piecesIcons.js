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
    // k: "\u265A",
    // K: "\u2654",
  };
  return icons[pieceType] || "";
};
