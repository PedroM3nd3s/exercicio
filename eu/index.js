document.addEventListener("keyup",function(e){
    if(e.key=='ArrowUp'){
        document.body.style='align-items: flex-start'
    }
    if(e.key=='ArrowDown'){
        document.body.style='align-items: flex-end'
    }
    if(e.key=='ArrowRight'){
        document.body.style='justify-content:right'
    }
    if(e.key=='ArrowLeft'){
        document.body.style='justify-content:Left'
    }

})