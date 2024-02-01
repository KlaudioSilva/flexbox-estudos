/*Script do menu hamburguer do layout 3*/
opnMenu.addEventListener('click', () =>{
    menu.style.display = 'flex'

    menu.style.right = (menu.offsetWidth * -1) + 'px'

    setTimeout(() =>{
        menu.style.opacity = '1'

        menu.style.right = '0'

        opnMenu.style.display = 'none'
    }, 10);
    
})

clsMenu.addEventListener('click', () =>{
    menu.style.opacity = '0'

    menu.style.right = (menu.offsetWidth * -1) + 'px'
    
    setTimeout(() =>{
        menu.removeAttribute('style')
        opnMenu.removeAttribute('style')
    }, 200);
})