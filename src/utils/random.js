import Chance from "chance";

export class random {

    /**
     * Source: https://www.w3schools.com/js/js_random.asp
     * @param {integer} min The min integer number
     * @param {integer} max the max integer number
     * @returns a random number between min and max (both included):
     */
    randInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * returns a number from 0 up to 1. The number can be 0, but it can't be 1.
     */
    randFloat(){
        return Math.random();
    }
}
