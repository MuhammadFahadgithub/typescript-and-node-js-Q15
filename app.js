//Task 15
var guestList = ['Mustufa', 'Ubaid', 'faheem', 'asif'];
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!');
}
var absent_Guest = 'Mustufa';
var new_Guest = 'Muhammad';
guestList[0] = new_Guest;
for (var i = 0; i < guestList.length; i++) {
    console.log('Dear Mr. ' + guestList[i] + ',\n\It is our pleasure to invite you in our party.\n\nThank You!');
}
console.log("Mr. ".concat(absent_Guest, " is not comming to the party.\n\nThank You!\n\n"));
