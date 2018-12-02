class MrMeeseeksBox {
    constructor(BoxName) {
        MrMeeseeksBox.box = createBox(BoxName);
    }
    getBox() {
        return MrMeeseeksBox.box;
    }
    getBoxName() {
        return MrMeeseeksBox.box.name;
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

};


module.exports = {
    MrMeeseeks: MrMeeseeksBox,
};
