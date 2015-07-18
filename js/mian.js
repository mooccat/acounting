/**
 * Created by liuxiaoyu on 2015/7/18 0018.
 */
window.onload =function () {
    var addBtn = document.getElementById("btn-add");
    addBtn.onclick = move;
    var a = document.getElementById("back");
    a.onclick = back;

}

function move() {
    var page2 = document.getElementById("page2");
    var left = parseInt(page2.style.left);
    left =left-1;
    page2.style.left = left + "%";
    if(left !== 0){
        var time = 1000/(left+100);
        setTimeout(move,time);
    }
}

function back() {
    var page2 = document.getElementById("page2");
    var left = parseInt(page2.style.left);
    left =left+1;
    page2.style.left = left + "%";
    if(left !==100){
        var time = 1000/(left+100);
        setTimeout(back,time);
    }
}