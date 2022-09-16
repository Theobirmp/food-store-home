const mobileNavigation=document.querySelector('.mobile-navigation-ul')
const mobileNavigationLi=document.querySelectorAll('.mobile-navigation-ul-li')
const hamburgerButton=document.querySelector('.hamburger-button')
const burger=document.querySelector('.burger')
//close nav if link pressed
mobileNavigationLi.forEach(li=>li.addEventListener('click',()=>{
    mobileNavigation.classList.remove('active')
    hamburgerButton.classList.remove('active')
    burger.click()
}))

const hamburger=document.querySelector('.hamburger')
hamburger.addEventListener('click',()=>{
    mobileNavigation.classList.toggle('active')
    hamburgerButton.classList.toggle('active')
})