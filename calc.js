
        
function addA(){
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const c = a + b;
    document.getElementById('inputC').value=c;
}

function subA(){
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);   
    const c = a - b;
    document.getElementById('inputC').value=c;
}

function divA(){
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const c = a / b;
    document.getElementById('inputC').value=c;
}

function multiA(){
    const a = parseInt(document.getElementById('inputA').value);
    const b = parseInt(document.getElementById('inputB').value);
    const c = a * b;
    document.getElementById('inputC').value=c;
}
