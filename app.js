const closedFace = document.querySelector('.closed')
const closedFace = document.querySelector('.open')


//  Add event listener

closedFace.addEventListener('click', () =>{
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
    }
})