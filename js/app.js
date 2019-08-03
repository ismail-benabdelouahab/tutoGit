document.getElementById("inscription").addEventListener("submit", function(e){
    e.preventDefault;

    
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            alert(this.response);
        }else if(this.readyState == 4){
            alert('xxxxxxxxxxxxxx');
        }else{
            alert("erreur ?????????????");
        }
    }

    xhr.open("GET", "json/test02.txt", true);
    xhr.send();

    return false;
});
