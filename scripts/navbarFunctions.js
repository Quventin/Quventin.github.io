function showMenu() {
    var buttons = document.getElementsByClassName('navbar-button');
    for(let button of buttons){
        
        if(button.style.display === 'flex'){
            button.style.display = 'none';
        }else{
            button.style.display = 'flex';
        }
    }

  }

function closeMenu(){
    var windowWidth = window.innerWidth;
    if(windowWidth <= 1024){
        var buttons = document.getElementsByClassName('navbar-button');
        for(let button of buttons){
            button.style.display = 'none';
        }
    }
}