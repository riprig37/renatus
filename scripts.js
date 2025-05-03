document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const closeMenu = document.getElementById('close-menu'); // クローズボタンを取得
    const navLinks = document.querySelectorAll('#nav-menu a'); // ナビゲーションリンクを取得

    // ハンバーガーメニューのクリックイベント
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('show'); // メニューの表示/非表示を切り替え
        hamburger.classList.toggle('open'); // ハンバーガーアイコンの状態を切り替え
    });

    // クローズボタンのクリックイベント
    closeMenu.addEventListener('click', function () {
        navMenu.classList.remove('show'); // メニューを閉じる
        hamburger.classList.remove('open'); // ハンバーガーアイコンを元に戻す
    });

    // ナビゲーションリンクのクリックイベント
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show'); // メニューを閉じる
            hamburger.classList.remove('open'); // ハンバーガーアイコンを元に戻す
        });
    });

    // IntersectionObserverでアニメーションを適用
    const targets = document.querySelectorAll("h2, #about h3, #about p");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target); // 一度アニメーションを適用したら監視を解除
            }
        });
    });

    targets.forEach((target) => observer.observe(target));
});
document.addEventListener('DOMContentLoaded', function () {
    const closeMenu = document.getElementById('close-menu');
    if (!closeMenu) {
        console.error("クローズボタンが見つかりません！");
        return;
    }
});