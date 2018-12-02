const importModules = require('./MrMeeseeksBox');

let MrMeeseeksBox1 = new importModules.MrMeeseeksBox("FirstBox");
let MrMeeseeksBox2 = new importModules.MrMeeseeksBox("SameBoxWithDifferentName");

console.assert(MrMeeseeksBox1.getBoxName() === "SameBoxWithDifferentName");

MrMeeseeksBox1.getBox().pressButton();
console.log("--------------------------");
MrMeeseeksBox1.getBox().pressButton();
console.log("--------------------------");
MrMeeseeksBox1.getBox().pressButton();
console.log("--------------------------");

console.assert(MrMeeseeksBox1.getBox().howManyMeeseeksAreCreated() === 3);

console.assert(MrMeeseeksBox2.getBox().howManyMeeseeksAreCreated() === 3);

console.assert(MrMeeseeksBox1.getBox().reality[0].id === 0);
console.assert(MrMeeseeksBox1.getBox().reality[1].id === 1);
console.assert(MrMeeseeksBox1.getBox().reality[2].id === 2);

MrMeeseeksBox1.getBox().pressButton();
console.log("--------------------------");

var howManyMeeseeksAre = MrMeeseeksBox1.getBox().howManyMeeseeksAreCreated();

console.log(MrMeeseeksBox1.getBox().lastMeeseeksCreated().makeRequest("Open Jerry's stupid mayonnaise jar."));
console.log("--------------------------");

var howManyMeeseeksAreNow = MrMeeseeksBox1.getBox().howManyMeeseeksAreCreated();

console.assert(howManyMeeseeksAre === howManyMeeseeksAreNow);
