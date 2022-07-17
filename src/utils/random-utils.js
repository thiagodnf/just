export default class RandomUtils {

    /**
     * Source: https://www.w3schools.com/js/js_random.asp
     * @param {integer} min The min integer number
     * @param {integer} max the max integer number
     * @returns a random number between min and max (both included):
     */
    randInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
