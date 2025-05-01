document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    // ハンバーガーメニューをクリックしたときの動作
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show'); // メニューの表示/非表示を切り替え
        hamburger.classList.toggle('open'); // ハンバーガーアイコンの状態を切り替え
    });

    // ナビゲーションリンクをクリックしたときの動作
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show'); // メニューを閉じる
            hamburger.classList.remove('open'); // ハンバーガーアイコンを元に戻す
        });
    });

    // IntersectionObserverでアニメーションを適用
    const targets = document.querySelectorAll("h2, #about h3, #about p");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    });

    targets.forEach((target) => observer.observe(target));
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});
observer.observe(document.querySelector('#about'));