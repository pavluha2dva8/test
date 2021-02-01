function* stepGenerator() {
let summary = 1;

do{
 summary += yield +prompt(`Previous result: ${summary}. Enter a new number:`);
if (summary > 1000) summary = 1;
} while(isNaN(summary) == false);
}

let askGenerator = stepGenerator();

let getPrompt = askGenerator.next().value;

do{
    getPrompt = askGenerator.next(getPrompt).value
    if (isNaN(getPrompt)) console.log('Invalid number!');
} while(isNaN(getPrompt) == false);