"use strict";

// $("#modal-open").click(

//   console.log('OK'),

// 	function(){
// 		//[id:modal-open]をクリックしたら起こる処理
//     //キーボード操作などにより、オーバーレイが多重起動するのを防止する
//     $(this).blur() ;	//ボタンからフォーカスを外す
//     if($("#modal-overlay")[0]) return false ;		//新しくモーダルウィンドウを起動しない [下とどちらか選択]
//     //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する [上とどちらか選択]

//     //オーバーレイ用のHTMLコードを、[body]内の最後に生成する
//     $("body").append('<div id="modal-overlay"></div>');

//     //[$modal-overlay]をフェードインさせる
//     $("#modal-overlay").fadeIn("slow");

//     //[$modal-content]をフェードインさせる
//     $("#modal-content").fadeIn("slow");

// 	}
// );

$(function () {
  $("#modal-open").click(function () {
    $("#modal-overlay").fadeIn();
  });
  $("#modal-close").click(function () {
    $("#modal-overlay").fadeOut();
  });
});

// ここから完了画面

$(function () {
  $("#finish-btn").click(function () {
    $("#finish-overlay").fadeIn();
    $("#modal-overlay").fadeOut();
  });
  $("#finish-close").click(function () {
    $("#finish-overlay").fadeOut();
  });
});


// let trigger = document.getElementsByClassName("option-btn");
// let triggers = Array.from(trigger);

// let check = document.getElementsByClassName("check");
// let checks = Array.from(check);

// triggers.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     btn.classList.toggle('off-option-btn');
//     btn.classList.toggle('option-btn');
//   });
// });

// checks.forEach(function (button) {
//   button.addEventListener("click", function() {
//     button.classList.toggle('on-check');
//     button.classList.toggle('check');
//   });
// });

// ここからチェックボックス
let check = document.getElementsByClassName('content-options');
let checks = Array.from(check);

let onoff = "off";

checks.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if(onoff === "off"){
      onoff = "on";
      btn.style.Backgroundcolor = "#e7f5ff";
    }else{
      onoff = "off";
      btn.style.Backgroundcolor = "#f5f5f8";
    }
  });
});

// let onoff = "off";

let bigcheck = document.getElementById("Bigcheck");

bigcheck.addEventListener('click', function () {
  bigcheck.classList.toggle('off-bigcheck');
  bigcheck.classList.toggle('bigcheck');
//   if(onoff === "off"){
//     onoff = "on";
//     bigcheck.style.Backgroundcolor = "#cccccc";
// }
//   else if(onoff === "on"){
//     onoff = "off";
//     bigcheck.style.Backgroundcolor = "#0f70bd";
// }
  }
);

