

function menuToggle() {

    let menuArea = document.getElementById("menu-area");
    
    if (menuArea.classList.contains('menu-aberto') == true) {
        
        menuArea.classList.remove('menu-aberto');

    } else {
        menuArea.classList.add('menu-aberto');
    }

}

