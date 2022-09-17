// let options = {
//     root: document.body,
//     rootMargin: '0px',
//     threshold: .2
//   }

const animate=document.querySelectorAll('.animate')
// console.log(animate)
let animationObserver=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('active')
            animationObserver.unobserve(entry.target)
        }else{
            entry.target.classList.remove('active')
        }
    })
},{threshold:0.2})

animate.forEach(ani=>{
    animationObserver.observe(ani)
})