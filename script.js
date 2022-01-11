var like_icon = document.getElementById('like_icon');
var love_icon = document.getElementById('love_icon');
var haha_icon = document.getElementById('haha_icon');
var sad_icon = document.getElementById('sad_icon');
var angry_icon = document.getElementById('angry_icon');
var img_react = document.getElementById('img_react');
var text_react = document.getElementById('text_react');
var reacts = document.querySelector('.reacts');
var like_btn = document.querySelector('.like_btn');
var count_com = document.querySelector('.count_com');
var react_type = '';
var clicked = false;
function react(type) {
    img_react.setAttribute('src', 'images/' + type + '.svg');
    text_react.innerText = type;
    text_react.className = '' + type + '_color';
    reacts.innerHTML =
        '<img src="images/' + type + '.svg" class="small_react">';
    react_type = type;
    clicked = true;
}
function Removereact(type) {
    img_react.setAttribute('src', 'images/like.png');
    text_react.innerText = 'like';
    text_react.className = 'default_color';
    reacts.innerHTML = '';
    react_type = '';
}
like_btn.addEventListener('click', function () {
    if (clicked == false) {
        react('like');
    } else {
        Removereact(react_type);
        clicked = false;
    }
});

like_icon.addEventListener('click', function () {
    if (react_type == 'like') {
        Removereact('like');
    } else {
        react('like');
    }
});
love_icon.addEventListener('click', function () {
    if (react_type == 'love') {
        Removereact('love');
    } else {
        react('love');
    }
});
haha_icon.addEventListener('click', function () {
    if (react_type == 'haha') {
        Removereact('haha');
    } else {
        react('haha');
    }
});
sad_icon.addEventListener('click', function () {
    if (react_type == 'sad') {
        Removereact('sad');
    } else {
        react('sad');
    }
});
angry_icon.addEventListener('click', function () {
    if (react_type == 'angry') {
        Removereact('angry');
    } else {
        react('angry');
    }
});
