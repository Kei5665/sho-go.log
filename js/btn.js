const btn = document.getElementById("b1");
btn.disabled = true

function clickBtn1(){
	
	if (document.getElementById("b1").disabled === true){
		// disabled属性を削除
		document.getElementById("b1").removeAttribute("disabled");
		document.getElementById("b1").style.color = "white";
	}else{
		// disabled属性を設定
		document.getElementById("b1").setAttribute("disabled", true);
		document.getElementById("b1").style.color = "White";
	}
}