class Game {
    constructor() {
        this.tries = 0;
        this.myNumber = this.getInRange();
    }

    checkGuess(guess) {
        this.tries++;
        let msg = guess != this.myNumber ? `My number is ${guess > this.myNumber ? `⬇️` : `⬆️`} than ${guess}` : `You've guessed «${this.myNumber}» in ${(this.tries - 1)} tries! But I have another number for you!`;
        return { msg, done: guess == this.myNumber };
    }

    restart() {
        this.tries = 0;
        this.myNumber = this.getInRange();
    }

    getInRange(min = 0, max = 100) {
        return Math.ceil(Math.random() * max) + min;
    }
}

const g = new Game();

const submitBtn = document.querySelector("#submit-guess");
const msgBanner = document.querySelector("#msg");
const guessForm = document.querySelector("#guess-form");

const guessHandler = e => {
    if (!guessForm.checkValidity()) return;
    e.preventDefault();
    let guess = document.querySelector("#guess");
    const { done, msg } = g.checkGuess(guess.value);
    if (done) g.restart();
    guess.focus();
    msgBanner.textContent = msg;
    msgBanner.classList = `${done ? `success` : `failure`} visible`;
    guess.value = "";
};

submitBtn.addEventListener("click", guessHandler);
