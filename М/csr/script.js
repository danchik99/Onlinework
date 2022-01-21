var c = 0;

function o() {
    if (c == 0) {
        var drop = document.getElementById("drop");
        var i = document.getElementsByClassName("item_code345");
        drop.style.height = i.length * 60 + "px";
        c = 1;
    } else {
        var drop = document.getElementById("drop");

        drop.style.height = "0";
        c = 0;
    }
}