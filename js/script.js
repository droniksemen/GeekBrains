function chess() {

	let dosk 	= document.querySelector('#dosk');


	//картинки черных фигур
	let imgKrb 	= '<img src="img/krb.png" alt="король черн">';
	let imgFrb 	= '<img src="img/frb.png" alt="ферзь черн">';
	let imgKb 	= '<img src="img/kb.png" alt="конь черн">';
	let imgLdb 	= '<img src="img/ldb.png" alt="ладья черн">';
	let imgPb 	= '<img src="img/pb.png" alt="пешка черн">';
	let imgSlb 	= '<img src="img/slb.png" alt="слон черн">';

	//картинки белых
	let imgKrw 	= '<img src="img/krw.png" alt="король черн">';
	let imgFrw 	= '<img src="img/frw.png" alt="ферзь черн">';
	let imgKw 	= '<img src="img/kw.png" alt="конь черн">';
	let imgLdw 	= '<img src="img/ldw.png" alt="ладья черн">';
	let imgPw 	= '<img src="img/pw.png" alt="пешка черн">';
	let imgSlw 	= '<img src="img/slw.png" alt="слон черн">';

	//черные
	let krb 	= '<div id="krb">' 	+ imgKrb + '</div>';
	let frb 	= '<div id="frb">' 	+ imgFrb + '</div>';
	let ldb 	= '<div id="ldb">' 	+ imgLdb + '</div>';
	let ldb2 	= '<div id="ldb2">' + imgLdb + '</div>';
	let slb 	= '<div id="slb">' 	+ imgSlb + '</div>';
	let slb2 	= '<div id="slb2">' + imgSlb + '</div>';
	let kb 		= '<div id="kb">' 	+ imgKb + '</div>';
	let kb2 	= '<div id="kb2">' 	+ imgKb + '</div>';
	let pb 		= '<div class="pb">'+ imgPb + '</div>';

	//белые
	let krw		= '<div id="krw">' 	+ imgKrw + '</div>';
	let frw		= '<div id="frw">' 	+ imgFrw + '</div>';
	let ldw 	= '<div id="ldw">' 	+ imgLdw + '</div>';
	let ldw2 	= '<div id="ldw2">' + imgLdw + '</div>';
	let slw 	= '<div id="slw">' 	+ imgSlw + '</div>';
	let slw2 	= '<div id="slw2">' + imgSlw + '</div>';
	let kw 		= '<div id="kw">' 	+ imgKw + '</div>';
	let kw2 	= '<div id="kw2">' 	+ imgKw + '</div>';
	let pw 		= '<div class="pw">'+ imgPw + '</div>';


	let klb		= '<div id="black"></div>';
	let klw		= '<div id="white"></div>';
	let klabc 	= '';



	let one 	= '';
	let two		= '';
	let three	= '';
	let four	= '';
	let five	= '';
	let six		= '';
	let seven	= '';
	let eight	= '';


	let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
	for(let i=0; i<arr.length; i++){
		klabc	+= '<div id="klabc">' + arr[i] + '</div>';
	}

	let arrPb = [];
	let arrPw = [];
	for(let i=0; i<8;i++){
		arrPb.push(pb);
		arrPw.push(pw);

	}
	// for(let i=0; i<4; i++){
	// 	two 	+= pb + pw;
	// 	seven	+= pw + pb;
	// }

	for(i=0;i<4;i++){
		one		+= klw + klb;
		two		+= klb + klw;
		three 	+= klw + klb;	
		four	+= klb + klw;
		five 	+= klw + klb;
		six		+= klb + klw;
		seven	+= klw + klb;
		eight	+= klb + klw;
	}

	one 	+= krb+frb+ldb+slb+kb+ldb2+slb2+kb2;
	eight	+= krw+frw+ldw+ldw2+slw+slw2+kw+kw2;
	//var pb1 = document.createElement("div");
	two 	+= arrPb[0]+arrPb[1]+arrPb[2]+arrPb[3]+arrPb[4]+arrPb[5]+arrPb[6]+arrPb[7];
	seven	+= arrPw[0]+arrPw[1]+arrPw[2]+arrPw[3]+arrPw[4]+arrPw[5]+arrPw[6]+arrPw[7];

	let str0 = '<div id="str_abc">'+klabc+'</div>';
	let str1 = '<div id="str"><div id="num">1</div>'+one+'<div id="num">1</div></div>';
	let str2 = '<div id="str"><div id="num">2</div>'+two+'<div id="num">2</div></div>';
	let str3 = '<div id="str"><div id="num">3</div>'+three+'<div id="num">3</div></div>';
	let str4 = '<div id="str"><div id="num">4</div>'+four+'<div id="num">4</div></div>';
	let str5 = '<div id="str"><div id="num">5</div>'+five+'<div id="num">5</div></div>';
	let str6 = '<div id="str"><div id="num">6</div>'+six+'<div id="num">6</div></div>';
	let str7 = '<div id="str"><div id="num">7</div>'+seven+'<div id="num">7</div></div>';
	let str8 = '<div id="str"><div id="num">8</div>'+eight+'<div id="num">8</div></div>';
	let str9 = '<div id="str_abc">'+klabc+'</div>';

	dosk.innerHTML = str0 + str1 + str2 + str3 + str4 + str5 + str6 + str7 + str8 + str9;
}

Window.onload = chess();

