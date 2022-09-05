const mobileButton=document.querySelector('.mobile-navigation-button')
const mobileNavigation=document.querySelector('.mobile-navigation-ul')
const mobileButtonClose=document.querySelector('.mobile-navigation-button-close')
const mobileNavigationLi=document.querySelectorAll('.mobile-navigation-ul-li')

mobileButton.addEventListener('click',()=>{
    mobileNavigation.classList.add('active')
})
mobileButtonClose.addEventListener('click',()=>{
    mobileNavigation.classList.remove('active')
})
mobileNavigationLi.forEach(li=>li.addEventListener('click',()=>{
    mobileNavigation.classList.remove('active')
}))