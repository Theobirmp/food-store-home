const navLinks=document.querySelectorAll('.navigation-ul-li')
navLinks.forEach(link=>{
    link.addEventListener('click',(e)=>{
        navLinks.forEach(li=>{
            if(e.currentTarget===li){
                li.classList.add('active')
            }else{
                li.classList.remove('active')
            }
        })
    })
})