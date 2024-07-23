const envioForm = document.getElementById('envio-form');

function denegar(event){
    event.preventDefault();
    const form = document.getElementById("myform");
    if(form.checkValidity()){
        form.reset();
        alert("Gracias por completar el formulario :) ")
    }
    else {
        alert("Error");
        form.reportValidity();
    }
}

envioForm.addEventListener('click', denegar)