let button = document.querySelector(".load-button");
button.onclick = function(){
    document.querySelector("#modal").style.display = "block";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "data.txt");
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.querySelector("#modal p").innerHTML = xmlhttp.responseText;
        }
    }
}
document.querySelector("#modal span").onclick = function(){
    document.querySelector("#modal").style.display = "none";
}