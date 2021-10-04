//const freightItems = Array(process.argv[2]);
let freightItems = ['contraband', 'clear', 'contraband', 'clear'];


function scan(freightItems) {
    let contrabandCount= 0;
    freightItems.forEach(str => {if (str == "contraband"){contrabandCount = contrabandCount+1}})
    return contrabandCount;
}
console.log(scan(freightItems))





   
                                            




//const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
//console.log('Number of "contraband": ' + numItems); 