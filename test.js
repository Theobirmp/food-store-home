// const navigation=document.querySelector('.navigation')
// const pages=document.querySelectorAll('.page')
// const classes={
//     posFixed:'pos-fixed',
//     animateNavigation:'animate-navigation'
// }
// const addClassToElement=(el,cl,toggle)=>{
//     toggle?el.classList.add(cl):el.classList.remove(cl)       
// }

// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1
//   }
// let navigationObserver=new IntersectionObserver((entries,observer)=>{
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             if(window.scrollY===0) addClassToElement(navigation,classes.posFixed,false)
//             else{
//                 addClassToElement(navigation,classes.posFixed,true)
//             }
//         }
//     })
// },options)
// // pages.forEach(page=>navigationObserver.observe(page))
// const handleNavigation=()=>{
//     if(window.scrollY<100) {
//         addClassToElement(navigation,classes.posFixed,false)
//     }else{
//         addClassToElement(navigation,classes.posFixed,true)
//     }
// }
// window.addEventListener('scroll',()=>{
//     handleNavigation()
// })