var boardStatus = [
    [undefined,undefined,undefined],
    [undefined,undefined,undefined],
    [undefined,undefined,undefined]
]

var turn = 'cross'

function trisClick(el) {
    var clickedX = el.dataset.x
    var clickedY = el.dataset.y

    if (isValidStep(boardStatus, turn , clickedX, clickedY)) {
        boardStatus[clickedX][clickedY] = turn
        setValues(boardStatus)
        changeTurn()

    }
        
    if (getWinner(boardStatus)) {
        showWinner(boardStatus)
    }

}

function isValidStep(matrix, turn, x, y) {
    return matrix[x][y] == undefined ? true : false
}

function setValues(matrix) {
    for (let x in matrix) {
        for(let y in matrix[x]) {
            let id = xyToId(x, y)
            if(undefined !== matrix[x][y]) {
                document.getElementById(id).innerHTML = "<div class=\"occupied " + matrix[x][y] + "\">"
            }
        }
    }
}

function xyToId(x, y) {
    let xy = "" + x + y
    switch (xy) {
        case '00':
            return 1
            break;
        case '01':
            return 2
            break;
        case '02':
            return 3
            break;
        case '10':
            return 4
            break;
        case '11':
            return 5
            break;
        case '12':
            return 6
            break;
        case '20':
            return 7
            break;
        case '21':
            return 8
            break;
        case '22':
            return 9
            break;
    }
}

function changeTurn() {
   turn = turn == 'cross' ? 'circle' : 'cross'
}

function getWinner(matrix) {
    if ((matrix[0][0] != undefined) && ((matrix[0][0] == matrix[0][1]) && (matrix[0][0] == matrix[0][2]) || (matrix[0][0] == matrix[1][0]) && (matrix[0][0] == matrix[2][0])) ) return matrix[0][0]
    else if ((matrix[2][2] != undefined) && ((matrix[2][0] == matrix[2][1]) && (matrix[2][0] == matrix[2][2]) || (matrix[0][2] == matrix[1][2]) && (matrix[0][2] == matrix[2][2])) ) return matrix[2][2]
    else if ((matrix[1][1] != undefined) && ((matrix[1][0] == matrix[1][1]) && (matrix[1][0] == matrix[1][2]) || (matrix[0][1] == matrix[1][1]) && (matrix[0][1] == matrix[2][1]) ||(matrix[0][0] == matrix[1][1]) && (matrix[0][0] == matrix[2][2]) ||(matrix[0][2] == matrix[1][1]) && (matrix[0][2] == matrix[2][0]) )) return matrix[1][1]
    else return null    
}

function showWinner(matrix) {
    alert('Ha vinto ' + getWinner(matrix))
}

function resetGame() {
    location.reload()
}