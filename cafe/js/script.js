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

// スライダー
var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: 'images/header1.jpg'},
				{ src: 'images/header2.jpg'},
				{ src: 'images/header3.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: 'images/header1.jpg' },
				{ src: 'images/header2.jpg' },
				{ src: 'images/header3.jpg' }
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		overlay: true,//画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burn、burn2、blur、blur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
	});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

//ふわっと動くきっかけのクラス名と動きのクラス名の設定
$('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
  var elemPos = $(this).offset().top - 50; //要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight) {
    $(this).addClass('fadeUp');
    // 画面内に入ったらfadeInというクラス名を追記
  } else {
    $(this).removeClass('fadeUp');
    // 画面外に出たらfadeInというクラス名を外す
  }
});

  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeDownTrigger').each(function () { //fadeInDownTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeDown');
      // 画面内に入ったらfadeDownというクラス名を追記
    } else {
      $(this).removeClass('fadeDown');
      // 画面外に出たらfadeDownというクラス名を外す
    }
  });


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述
