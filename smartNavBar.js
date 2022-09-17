const pages=document.querySelectorAll('.page')
const links=document.querySelectorAll('.navigation-ul-li')

let linkObserver=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            pages.forEach((page,index)=>{
                console.count('is this taxing????/')
                if(entry.target==page){
                    links.forEach(li=>li.classList.remove('active'))
                    links[index].classList.add('active')
                }
            })
        }
    })
},{threshold:.5})

pages.forEach(page=>linkObserver.observe(page))