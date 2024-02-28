//Task 15

let guestList: string[]= ['Mustufa', 'Ubaid', 'faheem', 'asif'];

for(let i=0; i<guestList.length; i++){
console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
}

let absent_Guest:string = 'Mustufa';
let new_Guest:string ='Muhammad';
guestList[0]= new_Guest;
for(let i=0;i<guestList.length; i++){
    console.log('Dear Mr. ' + guestList[i] + ',\n\It is our pleasure to invite you in our party.\n\nThank You!')
    }
console.log (`Mr. ${absent_Guest} is not comming to the party.\n\nThank You!\n\n`)    