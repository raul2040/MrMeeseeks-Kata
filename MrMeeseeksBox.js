class MrMeeseeksSingletonBox {
    constructor(BoxName) {
        MrMeeseeksSingletonBox.box = createBox(BoxName);
    }
    getBox() {
        return MrMeeseeksSingletonBox.box;
    }
    getBoxName() {
        return MrMeeseeksSingletonBox.box.name;
    }
}

function createBox(BoxName) {
    let existBox;
    if (existBox == undefined) {
        var boxInstace = Object.create(box);
        existBox = true;
    }
    boxInstace.name = BoxName;
    return boxInstace;
}

var box = {
    reality: [],
    pressButton: function () {
        this.reality.push(new importModules.MrMeeseeks(this.howManyMeeseeksAreCreated()));
        this.reality[this.howManyMeeseeksAreCreated() - 1].salutation();
    },
    howManyMeeseeksAreCreated: function () {
        return this.reality.length;
    },
    lastMeeseeksCreated: function () {
        return this.reality[this.howManyMeeseeksAreCreated() - 1]
    },
    killMrMeesek: function () {
        this.reality.shift();
        console.log("MrMeeseek exploded after do action");
        this.reorderIds();
    },
    reorderIds: function() {
        for(let x=0; x<this.reality.length; x++) {
            this.reality[x].setId(x);
        }
    }
};


module.exports = {
    MrMeeseeksBox: MrMeeseeksSingletonBox,
};
