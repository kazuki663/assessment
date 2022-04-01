'use strict';

$("#modal-open").click(

  console.log('OK'),

	function(){
		//[id:modal-open]をクリックしたら起こる処理
    //キーボード操作などにより、オーバーレイが多重起動するのを防止する
    $(this).blur() ;	//ボタンからフォーカスを外す
    if($("#modal-overlay")[0]) return false ;		//新しくモーダルウィンドウを起動しない [下とどちらか選択]
    //if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する [上とどちらか選択]
    
    //オーバーレイ用のHTMLコードを、[body]内の最後に生成する
    $("body").append('<div id="modal-overlay"></div>');
    
    //[$modal-overlay]をフェードインさせる
    $("#modal-overlay").fadeIn("slow");
    
    //[$modal-content]をフェードインさせる
    $("#modal-content").fadeIn("slow");

    
	}
);
