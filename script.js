
function success(a) {
    
    
    if( a == 5 ){
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
    alert(checkedOne);
    }
    
    document.getElementById("button"+a).style.display = 'block'; 
    


}


function nameCheck(){
    
    var letters = /^[a-z ,.'-]+$/i;
    var uname= document.getElementById("name").value;
    if(uname.match(letters))
    {
        document.getElementById('sec3').scrollIntoView();
    }
    else
    {
      alert("Please enter only letters");
    }




}

function next(num){
    document.getElementById('sec'+num).scrollIntoView();
}
