let inp = document.getElementById('inputd')
let para = document.getElementById('adddata')
let add = document.getElementById('add')
add.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inp.value;
    para.appendChild(paragraph);
    inp.value=' '
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick',function(){
        para.removeChild(paragraph)
    })
})