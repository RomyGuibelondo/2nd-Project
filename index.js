//copy menu for mobile
function copyMenu() {
    const dptCategory = document.querySelector('.dpt-cat');
    const dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    //copy inside nav to nav
    let mainNav = document.querySelector('.header-nav nav')
    let navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML
    
    //copy .header-top .wrapper to .thetop-nav
    const topNav = document.querySelector('.header-top')
    let topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML
}
copyMenu()