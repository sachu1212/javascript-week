

const animals = ['elephant', 'tiger', 'zebra', 'dragon', 'dog', 'blue-eyes white dragon'];
// 'Animals: tiger, zebra, dragon, dog'

const out = animals
            .filter(val => val.length <7)
            .map((val, index) => {
                if (index) {
                    return ', ' + val;
                }
                return val;
            })
            .reduce((prev, item) => prev + item, 'Animals: ');


// const out = animals
//                     .filter(item => item !=='elephant' && item !=='blue-eyes white dragon')
//                     .map(item => item.toString())
//                     .reduce((prev, item) => prev+=item+',','Animals: ')
//                     .slice(0,-1);


                    // const output = arr.filter(item => item !==3)
//                 .map(item => item.toString())
//                 .reduce((prev, item) => prev+= '<' +item+'>', 'Numbers:');