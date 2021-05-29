function changeBackground(sunClass, bodyTag){
const sun = document.querySelector('.sun'),
    body = document.querySelector('body')
if(sun){
    sun.addEventListener('click', () =>{
        body.classList.toggle('dark')
    })
}

}

changeBackground('.sund', 'body')
