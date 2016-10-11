/**
 * Created by Juff on 04.10.16.
 */
describe("Calculator", function() {
    var calculator;

    beforeEach(function() {
        calculator = new Calculator()
    });

    it("should be add a to b", function() {
        expect(calculator.plus(2,7)).toEqual(9);
    });

       it("should be minus b to a", function() {
        expect(calculator.minus(2,7)).toBe(-5);
    });

    it("should be pow a to b", function() {
        expect(calculator.pow(2,7)).toBe(14);
    });

    it("should not divide a to 0", function() {
        expect(function () {

        calculator.divide(2,0);
        }).toThrow();
    });

    it("should not divide a to b if b != 0", function() {
        expect(calculator.divide(8,2)).toBe(4);
    });







   /* describe("when song has been paused", function() {
        beforeEach(function() {
            player.play(song);
            player.pause();
        });

        it("should indicate that the song is currently paused", function() {
            expect(player.isPlaying).toBeFalsy();

            // demonstrates use of 'not' with a custom matcher
            expect(player).not.toBePlaying(song);
        });

        it("should be possible to resume", function() {
            player.resume();
            expect(player.isPlaying).toBeTruthy();
            expect(player.currentlyPlayingSong).toEqual(song);
        });
    });

    // demonstrates use of spies to intercept and test method calls
    it("tells the current song if the user has made it a favorite", function() {
        spyOn(song, 'persistFavoriteStatus');

        player.play(song);
        player.makeFavorite();

        expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });

    //demonstrates use of expected exceptions
    describe("#resume", function() {
        it("should throw an exception if song is already playing", function() {
            player.play(song);

            expect(function() {
                player.resume();
            }).toThrowError("song is already playing");
        });
    });*/
});
