var button=document.getElementsByClassName("Questions");
for (var i=0;i<button.length;i++){
    button[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var panel=this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight=null;
        }
        else{
            panel.style.maxHeight=panel.scrollHeight+"px";
            panel.style.padding="0 2rem"
        }
    })
}
