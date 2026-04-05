'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // 全てのページに共通する「ボタンを押したら開く」処理
    const pinButtons = document.querySelectorAll('.pin-button');

    pinButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            const target = document.getElementById(id);
            if (target && typeof target.showModal === 'function') {
                target.showModal();
            }
        });
    });

    // 閉じるボタンの処理
    document.querySelectorAll('.close-button').forEach(btn => {
        btn.addEventListener('click', () => {
            const dialog = btn.closest('dialog');
            if (dialog) dialog.close();
        });
    });
});