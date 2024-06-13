function displayUserInfo() {
    // 從localStorage中獲取數據
    const username = localStorage.getItem('username');

    // 顯示用戶的帳號
    if (username) {
        document.getElementById('user-info').innerText = `歡迎, ${username}`;
        document.getElementById('logout-btn').style.display = 'block';
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('member-btn').style.display = 'block';
    } else {
        document.getElementById('login-btn').style.display = 'block';
        document.getElementById('logout-btn').style.display = 'none';
        document.getElementById('member-btn').style.display = 'none';
    }
}

function logout() {
    // 清除localStorage中的數據
    localStorage.removeItem('username');
    // 刷新頁面
    window.location.reload();
}

var pic = [
    "img/HEAD_img/HEAD_bag/h1.jpg",
    "img/HEAD_img/HEAD_rk/H11.jpg",
    "img/HEAD_img/HEAD_shoes/h4.jpg",
    "img/Babolat_img/babolat_bag/bb5.jpg",
    "img/Babolat_img/babolat_rk/b6.jpg",
    "img/Babolat_img/babolat_sh/bs4.jpg",
    "img/Wilson_img/wilson_bag/wbg1.jpg",
    "img/Wilson_img/wilson_rk/wrk12.jpg",
    "img/Wilson_img/Wilson_shoe/ws9.jpg"
];
var index = 0;
var mydiv = null;
var timer = null;

function init() {
    mydiv = document.getElementById("mydiv");
    showPic(0);
    autoShow();
}

function showPic(num) {
    index += num;
    if (index < 0) {
        index = pic.length - 1;
    }
    index = index % pic.length;
    mydiv.innerHTML = "<img src='" + pic[index] + "' style='width:500px;height:350px;'>";
}

function autoShow() {
    showPic(1);
    timer = setTimeout(autoShow, 3000);
}

window.onload = function() {
    displayUserInfo();
    init();
};
