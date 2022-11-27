$(document).ready(function () {
    $('.header__burger').click(function (event) {
        console.log('toggled');
        $('.header__burger,.header__menu').toggleClass('active');
    });
});

const dropdownInputNumber = document.getElementById("dropdown__input_number");
const dropdownInputContent = document.getElementById("dropdown__input_content");
const dropdownDirectionSelect = document.getElementById("dropdown__direction");
const dropdownMenuButton = document.getElementById("dropdown__menu_button");
const dropdownAppendButton = document.getElementById("dropdown__append_button");
const dropdownMenu = document.getElementById("dropdown__menu");

dropdownMenuButton.onclick = showHideDropdown;
dropdownDirectionSelect.onchange = changeDirection;
dropdownInputNumber.onchange = checkInputNumber;
dropdownAppendButton.onclick = appendElements;

function showHideDropdown(e) {
    dropdownMenu.classList.toggle("dropdown__active");
}

function changeDirection(e) {
    const value = dropdownDirectionSelect.value;
    console.log(value);
    const horizontalToken = "horizontal";
    const verticalToken = "vertical";
    if (value === horizontalToken) {
        dropdownMenuButton.classList.remove(verticalToken);
        dropdownMenuButton.classList.add(horizontalToken);

        dropdownMenu.classList.remove(verticalToken);
        dropdownMenu.classList.add(horizontalToken);
    } else if (value === verticalToken) {
        dropdownMenuButton.classList.remove(horizontalToken);
        dropdownMenuButton.classList.add(verticalToken);

        dropdownMenu.classList.remove(horizontalToken);
        dropdownMenu.classList.add(verticalToken);
    } else {
        console.log("Unknown value")
    }
}

function checkInputNumber(e) {
    const value = parseInt(dropdownInputNumber.value);
    console.log(value);
    if (value < 0) {
        dropdownInputNumber.value = 0;
    }
}

function appendElements(e) {
    const number = parseInt(dropdownInputNumber.value);
    const content = dropdownInputContent.value;
    console.log(number + " " + content);
    for (let i = 0; i < number; i++) {
        const newElem = document.createElement("div");

        newElem.innerText = content;
        newElem.classList.add("dropdown__element");

        dropdownMenu.appendChild(newElem);
    }
}
