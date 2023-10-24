function navBarSlider (){
    const checkBox = document.getElementById('hamburger-menu-checkbox')
    const content =  document.querySelector('.cardArea')

    checkBox.addEventListener('click', ()=>{
        if (checkBox.checked)
        
        {
            document.querySelector("nav").style.width = '0px';
            content.style.marginLeft = '0px';

}
        else {document.querySelector("nav").style.width = '250px'
        content.style.marginLeft = '250px';
    }
    })
}

export {navBarSlider}

