const formdata ={
};

function handleSubmit(event) {
    

    for (let control of event){
        if(control.id){ 
            formdata[control.id] = control.value;
    }
}
    console.log('Completed Form', event, formdata);
   
    
    sessionStorage.setItem('userData', JSON.stringify(formdata));
    window.location = 'confirm.html';
    return false;
}


