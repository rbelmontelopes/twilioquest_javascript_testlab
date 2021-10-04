//const freightItems = Array(process.argv[2]);
const freightItems = ['contraband', 'apples', 'cats', 'contraband', 'contraband'];


function scan(freightItems) {
    let contrabandIndexes = [];
    freightItems.forEach((str, idx) => {if (str == "contraband")
    {contrabandIndexes.push(idx);}})    
return contrabandIndexes;}
console.log(scan(freightItems))