"use strict";
function init(params) {
    const rippleElement = document.querySelectorAll("button");
    for (const i of rippleElement) {
        i.addEventListener('click', function (e) {
            // 今回のthisはボタンを意味する
            // X，Y、つまりボタンの左上の角からの距離を求める
            //（ボタンの中にdivを生成させるため）
            const X = e.pageX - this.offsetLeft;
            const Y = e.pageY - this.offsetTop;
            // divを生成する
            let rippleDiv = document.createElement("div");
            // divのデザイン
            rippleDiv.classList.add('ripple');
            // divの位置を.setAttributeで指定
            rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;");
            // divをボタンに入れる
            i.appendChild(rippleDiv);
            //divを削除する(このコードは任意です)
            setTimeout(function () {
                rippleDiv.remove();
            }, 1200);
        })
    }
}

function goToPage1() {
    setTimeout(() => {
        document.querySelector('#app03').style.display = "none"
        document.querySelector('#app01').style.display = "block"
    }, 500);
}
function goToPage2() {
    document.querySelector('#app01-error').textContent = ""
    if (!document.querySelector('#man').checked && !document.querySelector('#woman').checked) return document.querySelector('#app01-error').textContent = "性別が選択されていません。"
    setTimeout(() => {
        document.querySelector('#app01').style.display = "none"
        document.querySelector('#app02').style.display = "block"
    }, 500);
}
function backToPage1(params) {
    setTimeout(() => {
        document.querySelector('#app02').style.display = "none"
        document.querySelector('#app01').style.display = "block"
    }, 500);
}
function backToPage2(params) {
    setTimeout(() => {
        document.querySelector('#app03').style.display = "none"
        document.querySelector('#app02').style.display = "block"
    }, 500);
}
function goToPage3(params) {
    document.querySelector('#app02-error').textContent = ""
    if (!document.querySelector('#app02-input').value || document.querySelector('#app02-input').value === "0") return document.querySelector('#app02-error').textContent = "値が不正です。"
    let res;
    if (document.querySelector('#man').checked) {
        res = 50 + (0.91 * (document.querySelector('#app02-input').value - 152.4))
        document.querySelector('#expression').textContent = `50 + 0.91 x (${document.querySelector('#app02-input').value} - 152.4) = `
    } else {
        res = 45.5 + (0.91 * (document.querySelector('#app02-input').value - 152.4))
        document.querySelector('#expression').textContent = `45.5 + 0.91 x (${document.querySelector('#app02-input').value} - 152.4) = `
    }
    document.querySelector('#result').textContent = res.toFixed(2)
    document.querySelector('#result-06').textContent = ((res * 6).toFixed(2))
    document.querySelector('#result-07').textContent = ((res * 7).toFixed(2))
    document.querySelector('#result-08').textContent = ((res * 8).toFixed(2))
    setTimeout(() => {
        document.querySelector('#app02').style.display = "none"
        document.querySelector('#app03').style.display = "block"
        document.querySelector('#histdata').insertAdjacentHTML('afterbegin', `<span class="histtable">${document.querySelector('#man').checked ? "男" : "女"}</span><span class='histtable'>${document.querySelector('#app02-input').value}</span><span class='histtable'>${res.toFixed(2)}</span><br>`)
    }, 500);
}


window.addEventListener('load', init)