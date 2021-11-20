let card = document.getElementsByClassName('score__item');
let score = document.getElementsByClassName('score__item__btn');
let closeWindow = document.getElementById('closewindow');


/* Close button function */
closeWindow.addEventListener('click', ()=>{ 
    console.log("clicked")
    window.close();

});


/* Open score details */
for (let i = 0; i < score.length; i++) {
    score[i].addEventListener('click', ()=>{
        score[i].parentElement.classList.toggle('active__score__item')
        let details = score[i].nextElementSibling;
        if(details.style.maxHeight) {
            details.style.maxHeight = null;
        }else {
            details.style.maxHeight = details.scrollHeight + 'px';
        }
    });
}
