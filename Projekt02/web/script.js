function addComment() { 
    let username= document.querySelector("#username").value;
        let comment= document.querySelector("#com").value;
        let fehler = document.querySelector("#fehler");
        

    if(username === ""|| comment === ""){
        document.querySelector("#fehler").innerHTML= "ERROR! Es wurde nichts Eingegeben";
        fehlerMessage.innerHTML = "ERROR! Sie müssen in beide Textfelder etwas hineinschreiben.";
        fehler.addComment.innerHTML="Fehler";
        document.getElementById('#username').value = '';
        document.getElementById('#com').value = '';
    } else{
        document.querySelector("#fehler").innerHTML= "";
        console.log(username)
        console.log(comment)
        document.getElementById("outputfeld").innerHTML += `<div class="comment"><p class="output">${username}</p><p class="output2">${comment}</p></div>`;
        document.getElementById('username').value = '';
        document.getElementById('com').value = '';
    
    }
}




