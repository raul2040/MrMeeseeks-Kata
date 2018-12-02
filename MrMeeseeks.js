class MrMeeseeks {
    constructor(id) {
        this.id = id;
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
        MrMeeseeks.done = [
            "All Done"
        ]
    }
    getRandomNumber () {
        return Math.floor(Math.random() * MrMeeseeks.salutations.length);
    }
    salutation() {
        console.log(MrMeeseeks.salutations[this.getRandomNumber()]);
    }
    makeRequest(action) {
        console.log(MrMeeseeks.response[this.getRandomNumber()]);
        console.log("MrMeeseeks do: " + action);
        this.fullFillRequest();
    }
    fullFillRequest() {
        console.log("All Done");
        console.log("--------------------------");
        console.log(MrMeeseeks.reality);
    }
    setId(id) {
        this.id = id;
    }
}

module.exports = {
    MrMeeseeks: MrMeeseeks
};