document.form1.reset();
var count=0;
function success(a) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    if( !checkedOne && a == 5 ){
        document.getElementById("button"+a).style.display = 'none'; 
    }
    else if(a != 5){
        document.getElementById("button"+a).style.display = 'block'; 
    }
    else{
        document.getElementById("button"+a).style.display = 'block'; 
    }

    
}


function nameCheck(){
    
    var letters = /^[a-z ,.'-]+$/i;
    var uname= document.getElementById("name").value;
    if(uname.match(letters))
    {
        document.getElementById('sec3').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    else
    {
        alert("Please enter only letters");
    }
    count++;



}

function next(num){
    document.getElementById('sec'+num).scrollIntoView({ behavior: 'smooth', block: 'center' });
   
    count++;    
}

function submitForm(){
    
    if(count >=4){
    document.getElementById("btnSubmit").disabled = false;
    }
    else{
        
        ocument.getElementById("btnSubmit").disabled = true;
        
    }
  
}
