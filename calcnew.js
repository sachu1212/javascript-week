function calcnew(){
    const valA = +document.getElementById('inputA').value;
    const valB = +document.getElementById('inputB').value;
    
        return{
            add: function(){
                writeOutput(valA+valB);
            },
            sub: function(){
                writeOutput(valA-valB);
            },
            div: function(){
                writeOutput(valA/valB);
            },
            multi: function(){
                writeOutput(valA*valB);
            }
        };
    }

    function writeOutput(out){
        console.log(out);
        document.getElementById("result").innerText = out;
        const resultElement = document.createElement('p');
        resultElement.innerText =out;
        document.getElementById('history').prepend(resultElement);
    }

