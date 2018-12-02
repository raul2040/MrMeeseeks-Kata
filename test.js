const MrMeeseeksBox = require('./MrMeeseeksBox');

var MrMeeseeksBox1 = new MrMeeseeksBox.MrMeeseeks("FirstBox");
var MrMeeseeksBox2 = new MrMeeseeksBox.MrMeeseeks("SameBoxWithDifferentName");

console.assert(MrMeeseeksBox1.getBoxName() === "SameBoxWithDifferentName");
