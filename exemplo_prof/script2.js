let a = function(){
    alert('teste');
}

document.getElementById('testefunc')
.addEventListener("keydown",function(e){
    console.log(this);
    console.log(e);
    // lista de teclas proibidas
    let teclas = ["1","2","3","4","5","6","7","8","9","0"];
    // se a tecla digitada estiver na lista de proibidas
    if(teclas.indexOf(e.key) > -1){
        alert("Não pode digitar números");
        e.preventDefault();
    }
    if(e.key == "Backspace"){
        console.log(e.key);
        // cancelar a ação do backspace
        e.preventDefault();
    }
})

document.addEventListener("keydown",(e) => {
    console.log(e);
    if(e.key == "F5"){
        e.preventDefault();
    }
    if(e.key == "ArrowUp"){
        alert("Up");
    }
});