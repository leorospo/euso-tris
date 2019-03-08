// Mostra Vincitore

describe("Messaggio Vittoria",function(){
    document.body.innerHTML = __html__['index.html']
    const X = "cross"
    const O = "circle"
    showWinner([[X,X,X],[,O,],[,,]])

    it("Stampa risultato",function(){
        expect(document.getElementById('result').innerHTML).toEqual("Ha vinto cross")
    })
});

// Vincitore

describe("Winning options", function() {

    const X = "cross"
    const O = "circle"
    var initialState = [[,,],[,,],[,,]]
    var horizontalWin1 = [[X,X,X],[,O,],[,,]]
    var horizontalWin2 = [[,,],[X,X,X],[,O,O]]
    var horizontalWin3 = [[,O,],[,O,],[X,X,X]]
    var verticalWin1 = [[X,,],[X,,],[X,,]]
    var verticalWin2 = [[,X,],[,X,O],[,X,]]
    var verticalWin3 = [[,X,],[,X,],[,X,]]
    var diagonalWins1 = [[X,O,],[,X,],[,,X]]
    var diagonalWins2 = [[,,X],[,X,],[X,O,]]

    var draw = [[X,O,X],[X,O,O],[O,X,X]]

    it("Draw", function(){
        expect(getWinner(draw)).toBe(null)
    });

    it("Win", function() {
        expect(getWinner(horizontalWin1)).toBe(X);
        expect(getWinner(horizontalWin2)).toBe(X);
        expect(getWinner(horizontalWin3)).toBe(X);
        expect(getWinner(verticalWin1)).toBe(X);
        expect(getWinner(verticalWin2)).toBe(X);
        expect(getWinner(verticalWin3)).toBe(X);
        expect(getWinner(diagonalWins1)).toBe(X);
        expect(getWinner(diagonalWins2)).toBe(X);
    });
  
    it("Not ending move", function() {
        expect(getWinner(initialState)).toBe(null);
    });

});


