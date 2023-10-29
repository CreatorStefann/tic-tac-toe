const gameBoard = (function () {
    const board = new Array(9); 
    // Function to make a move (X or 0) on the board
    function makeMove(player, position) {
        if(isValidMove(position)) {
            board[position] = player;
        }
    }
    //Function to check if a move is valid
    function isValidMove(position) {
        return board[position] === undefined;
    }
    return {
        makeMove,
    };
})();

const playerFactory = (name, symbol) => {
    return {name, symbol};
};

const playerX = playerFactory('Player X', 'X');
const player0 = playerFactory('Player 0', '0');

const gameController = (function () {
    let currentPlayer = playerX;
    let gameOver = false;

    function switchPlayer() {
        currentPlayer = currentPlayer === playerX ? player0 : playerX;
    }

    return{
        getCurrentPlayer: () => currentPlayer,
        makeMove: (position) => {
            if(!gameOver){
                gameBoard.makeMove(currentPlayer.symbol, position);
                switchPlayer();
            }
        },
    };
})();