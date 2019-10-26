function tabChange(tabButtonGroupClass, buttonId, tabClass, element) {
    var tabContent = document.getElementsByClassName(tabClass);
    var tabButton = document.getElementsByClassName(tabButtonGroupClass);
    for(let tab of tabContent) {
        // tab.style.display  = 'none';
        if(tabClass === 'wedding-cards' && element !== 'wedding'){
            this.removeAltTabs();
        }
        tab.classList.remove('active-tab');
    }

    for(let tab of tabButton) {
        tab.classList.remove('active-tab-button');
    }

    document.getElementById(element).classList.add('active-tab');
    document.getElementById(buttonId).classList.add('active-tab-button');
    if(tabClass === 'wedding-cards') {
        removeAltTabs();
        document.getElementById('standart').classList.add('active-alt-tab');
    }
}

function removeAltTabs() {
    var altTabs = document.getElementsByClassName('package-cards');
    for(let tab of altTabs) {
        tab.classList.remove('active-alt-tab');
    }
}

function tabChangeAlt(tabButtonGroupClass, buttonId, tabClass, element) {
    removeAltTabs();
    var tabButton = document.getElementsByClassName(tabButtonGroupClass);

    for(let tab of tabButton) {
        tab.classList.remove('active-tab-button');
    }
    document.getElementById(element).classList.add('active-alt-tab');
    document.getElementById(buttonId).classList.add('active-tab-button');
    
}