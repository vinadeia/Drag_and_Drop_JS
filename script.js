let offsetX = 0;
let offsety = 0;
let movimento = false;
let verd = document.getElementById('verde');

verd.addEventListener('mousedown', ligaMover);
document.addEventListener('mousemove', moveDiv);
document.addEventListener('mouseup', desligaMover);

function moveDiv(event){

    if(!movimento){
        return
    }

    let x = event.pageX - offsetX;
    let y = event.pageY - offsetY;

    verd.style.left = x + 'px';
    verd.style.top = y + 'px';
};

function desligaMover(){

    movimento = false;
    verd.style.backgroundColor = 'green';
}

function ligaMover(event){
    offsetX = event.clientX - verd.getBoundingClientRect().left;
    offsetY = event.clientY - verd.getBoundingClientRect().top;
    movimento = true;
    verd.style.backgroundColor = 'pink';
}