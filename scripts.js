document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('#nav-menu a');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // ナビゲーションリンクのクリックイベント
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show'); // メニューを閉じる
        });
    });

    // aboutセクションのもっと見るボタンのクリックイベント
    const moreBtnAbout = document.getElementById('more-btn-about');
    const moreContentAbout = document.getElementById('more-content-about');
    if (moreBtnAbout && moreContentAbout) {
        moreBtnAbout.addEventListener('click', function() {
            if (moreContentAbout.style.display === 'none' || moreContentAbout.style.display === '') {
                moreContentAbout.style.display = 'block';
                this.textContent = '閉じる';
            } else {
                moreContentAbout.style.display = 'none';
                this.textContent = 'もっと見る';
            }
        });
    }

    // priceセクションのもっと見るボタンのクリックイベント
    const moreBtnPrice = document.getElementById('more-btn-price');
    const moreContentPrice = document.getElementById('more-content-price');
    if (moreBtnPrice && moreContentPrice) {
        moreBtnPrice.addEventListener('click', function() {
            if (moreContentPrice.style.display === 'none' || moreContentPrice.style.display === '') {
                moreContentPrice.style.display = 'block';
                this.textContent = '閉じる';
            } else {
                moreContentPrice.style.display = 'none';
                this.textContent = 'もっと見る';
            }
        });
    }

    const footer = document.getElementById('footer');
    const threshold = 100; // 必要に応じてこの値を調整

    window.addEventListener('scroll', function() {
        if (window.scrollY > threshold) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.width = '100%';
        } else {
            footer.style.position = 'relative';
        }
    });
});