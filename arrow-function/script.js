const upperName = (name) => name.toUpperCase();

const conterLetters = letters => letters.length;

console.log(upperName('klsnadlkasndlkasndlkanslkdnkds'));


class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu);
        this.activeClass = "active";
    }
    addActiveEvent() {
        this.menuElement.addEventListener('click', (event) => {
            console.log(this)
            event.target.classList.add(this.activeClass);
        });
    }
}

const menu = new Menu('.principal');
menu.addActiveEvent();
console.log(menu)