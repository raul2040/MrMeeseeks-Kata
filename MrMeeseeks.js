class MrMeeseeks {
    constructor(id) {
        MrMeeseeks.id = id;
        MrMeeseeks.salutations = [
            "Hi I'm Mr. Meeseeks look at me",
            "I'm Mr. Meeseeks",
            "Ohh I'm Mr. Meeseeks look at me",
            "Hey there, I'm Mr. Meeseeks"
        ];
        MrMeeseeks.response = [
            "Yes, siree",
            "Ohh, Okay",
            "Oh, yeah! Yes ma'am",
            "Ooh, yeah! Can do!"
        ];
    }
    getRandomNumber () {
        return Math.floor(Math.random() * MrMeeseeks.salutations.length);
    }
    salutation() {
        console.log(MrMeeseeks.salutations[this.getRandomNumber()]);
    }
    makeRequest(action, whoRequest) {
        console.log(MrMeeseeks.response[this.getRandomNumber()]);
    }
    fullFillRequest() {

    }
}

module.exports = {
    MrMeeseeks: MrMeeseeks
};