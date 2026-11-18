
let board = document.getElementById("board");

// All 32 chess pieces
let pieces = [

    // Black pieces
    ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],

    ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],

    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],

    // White pieces
    ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],

    ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]

];

// Creating chess board
for (let i = 1; i <= 8; i++) {

    for (let j = 1; j <= 8; j++) {

        let box = document.createElement("div");

        box.className = "box";

        // Adding colors
        if ((i + j) % 2 == 0) {
            box.classList.add("white");
        }
        else {
            box.classList.add("black");
        }

        // Getting piece from array
        let piece = pieces[i - 1][j - 1];

        // Adding chess piece image
        if (piece != "") {

            let img = document.createElement("img");

            img.src = "https://lichess1.org/assets/piece/cburnett/" + piece + ".svg";

            img.alt = piece;

            box.appendChild(img);
        }

        board.appendChild(box);

    }

}
