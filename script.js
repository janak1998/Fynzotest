
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




}

function next(num){
    document.getElementById('sec'+num).scrollIntoView({ behavior: 'smooth', block: 'center' });
    scrollIntoView(false);
        
}

function submitForm(){
    var val1 = document.getElementById().value;
    var val2 = document.getElementById().value;
    var val3 = document.getElementById().value;
    var val4 = document.getElementById().value;
    var val5 = document.getElementById().value;
    
}