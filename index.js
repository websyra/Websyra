document.getElementById("contact-form").addEventListener('submit',function(event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("",{
        method:'POST',
        body:data,
    }).then(response=>{
        if(response.ok){
            alert("Success");
        }
        else{
            alert('Error');
        }
    });
    document.getElementById("contact-form").reset();
});