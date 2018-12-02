const importModules = require('./MrMeeseeks');

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
    howManyMeeseeksAreCreated: function() {
        return this.reality.length;
    }
};


module.exports = {
    MrMeeseeksBox: MrMeeseeksSingletonBox,
};
