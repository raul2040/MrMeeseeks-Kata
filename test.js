const importModules = require('./MrMeeseeksBox');

var MrMeeseeksBox1 = new importModules.MrMeeseeksBox("FirstBox");
var MrMeeseeksBox2 = new importModules.MrMeeseeksBox("SameBoxWithDifferentName");

console.assert(MrMeeseeksBox1.getBoxName() === "SameBoxWithDifferentName");

MrMeeseeksBox1.getBox().pressButton();
MrMeeseeksBox1.getBox().pressButton();
MrMeeseeksBox1.getBox().pressButton();

console.assert(MrMeeseeksBox1.getBox().howManyMeeseeksAreCreated() === 3);
