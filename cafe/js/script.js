'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // 1. 要素の取得
    const pinButtons = document.querySelectorAll('.pin-button');
    const closeButtons = document.querySelectorAll('.close-button');
    const dialogs = document.querySelectorAll('dialog.popup');

    // 2. ポップアップを開く共通関数
    const openPopup = (id) => {
        const target = document.getElementById(id);
        if (target && typeof target.showModal === 'function') {
            target.showModal(); // これだけで背景スクロールが(CSSと連動して)止まる
        }
    };

    // 3. ピンボタンのクリックイベント
    pinButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cafeId = btn.getAttribute('data-id');
            openPopup(cafeId);
        });
    });

    // 4. 閉じるボタンのクリックイベント
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const dialog = btn.closest('dialog');
            dialog.close();
            // 閉じた後にURLをスッキリさせる
            history.replaceState(null, '', 'index.html');
        });
    });

    // 5. URLパラメータ（?id=cafe1など）がある場合の自動処理
    const params = new URLSearchParams(window.location.search);
    const initialId = params.get('id');
    if (initialId) {
        openPopup(initialId);
    }

    // 6. UIコンサルタント推奨：背景クリックで閉じる機能
    dialogs.forEach(dialog => {
        dialog.addEventListener('click', (e) => {
            // クリックされたのがdialog本体（＝背景部分）なら閉じる
            if (e.target === dialog) {
                dialog.close();
                history.replaceState(null, '', 'index.html');
            }
        });
    });
});