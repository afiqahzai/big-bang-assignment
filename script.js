console.log("Running script...");

const fs = require('fs'); 

function generateBigBangArray() {
    let result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        } else if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

const outputArray = generateBigBangArray();
console.log("Generated Output:", outputArray.slice(0, 100), "..."); 

const jsonOutput = JSON.stringify(outputArray, null, 2);
fs.writeFileSync('output.json', jsonOutput, 'utf-8');

console.log("Output generated successfully! Check 'output.json'.");
