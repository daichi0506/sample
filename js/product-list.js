// ==========================
// 製品群一覧
// ==========================

// 触媒と化成の切り替え
const tabcatbtn = document.querySelector('#js-tab-catalyst');
const tabchebtn = document.querySelector('#js-tab-chemical');

const procatft = document.querySelector('#js-product-ft-catalyst');
const procheft = document.querySelector('#js-product-ft-chemical');
const procatpp = document.querySelector('#js-product-pp-catalyst');
const prochepp = document.querySelector('#js-product-pp-chemical');

tabcatbtn.addEventListener('click', function () {
    // それぞれのメニューにactiveクラス。
    if (tabcatbtn.classList.contains('product-selected') == false) {
        tabcatbtn.classList.toggle('product-selected');
        tabchebtn.classList.toggle('product-selected');
        procatft.classList.toggle('product-selected');
        procheft.classList.toggle('product-selected');
        procatpp.classList.toggle('product-selected');
        prochepp.classList.toggle('product-selected');
    }
});
tabchebtn.addEventListener('click', function () {
    // それぞれのメニューにactiveクラス。
    if (tabchebtn.classList.contains('product-selected') == false) {
        tabcatbtn.classList.toggle('product-selected');
        tabchebtn.classList.toggle('product-selected');
        procatft.classList.toggle('product-selected');
        procheft.classList.toggle('product-selected');
        procatpp.classList.toggle('product-selected');
        prochepp.classList.toggle('product-selected');
    }
});