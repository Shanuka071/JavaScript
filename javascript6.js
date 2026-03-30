//Lunch picker Program
let lunches=[];
function addLunchToEnd(lunches,str){
lunches.push(str);
console.log(`${str} added to the end of the lunch menu.`);
return lunches;
}
function addLunchToStart(lunches,str2){
lunches.unshift(str2);
console.log(`${str2} added to the start of the lunch menu.`);
return lunches;
}
function removeLastLunch(lunches){
  if(lunches.length===0){
  console.log("No lunches to remove.");
  }
let removedItem=lunches.pop();
console.log(`${removedItem} removed from the end of the lunch menu.`);

  return lunches;
}
function removeFirstLunch(lunches){
  if(lunches.length===0){
    console.log("No lunches to remove.");
    return;
  }
  let removeItem2=lunches.shift();
  console.log(`${removeItem2} removed from the start of the lunch menu.`);
  return lunches;
}
function getRandomLunch(lunches){
  if(lunches.length===0){
    console.log("No lunches available.");
    return;
  }
let randomElement=Math.floor(Math.random()*lunches.length);
let randomindexes=lunches[randomElement];
console.log(`Randomly selected lunch: ${randomindexes}`);
}
function showLunchMenu(lunches){
  if(lunches.length===0){
    console.log("The menu is empty.");
    return
  }
  console.log(`Menu items: `+lunches.join(", "));
}
