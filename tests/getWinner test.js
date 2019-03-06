
describe("Winning options", function() {

    var initialState = [[,,],[,,],[,,]]
    var crossWins1 = [[1,1,1],[,,],[,,]]
    var crossWins1 = [[1,,],[1,,],[1,,]]
    var crossWins1 = [[1,,],[,1,],[,,1]]

    it("Cross wins", function() {
        expect(getWinner()).toBe('cross');
    });

    it("Circle wins", function() {
        expect(getWinner()).toBe('circle');
    });

    it("Draw", function() {
        expect(getWinner()).toBe('draw');
    });

    it("Not ending move", function() {
        expect(getWinner(initialState)).toBe('null');
    });

});
