var MrMeeseeks = {
    box: null,
    getBox: function () {
        if (!this.box) {
            this.box = {
                name: function (boxName) {
                    this.box = boxName;
                    console.log(boxName);
                }
            }
        }
        return this.box;
    }
};

module.exports = {
    MrMeeseeks
};
