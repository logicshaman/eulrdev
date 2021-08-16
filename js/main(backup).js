var $=jQuery;
var whv=$(window).height(),
		dhv=$(document).height(),
		wwv=$(window).width(),
		anmtnShwngTm = 500;
(function(){
	$("body").removeClass('nojs');
})();
function whf(){var h=$(window).height();return h;};
function qH(t,c,p){$(t).css('background'||p,c)}

// define/change responsive default
var theMinSiteWidth = 250;

$('.name, ul').removeClass('nojs');
$('.name h4').shuffleLetters('',20,29,1696);

var emObj={};

// To solve dynamic url address from localhost to online
// var WhtHttp=window.location.protocol+'//',
// 	sThsLclhst=window.location.host,
// 	wbAdrsPths=window.location.pathname,
// 	pathToString=wbAdrsPths.split("/","2"),
// 	stngdPths=pathToString.join(),
// 	strngdAdrs=stngdPths.replace(",","");
// if (sThsLclhst=='localhost'){
// 	var theBaseAddress=(((WhtHttp+sThsLclhst)+'/')+strngdAdrs)+'/';
// }else{
// 	var theBaseAddress=(WhtHttp+sThsLclhst)+'/';
// }

// $('.main-nav').prepend('<div class="m-m-n"><div></div><div></div><div></div></div>');
// $('.m-m-n').css({width:'29px',height:'25px',cursor:'pointer'});
// $('.m-m-n div').css({height:'4px',width:'29px',background:'#E5E5E5',marginTop:'4px',borderRadius:'4px'});
// $('.m-m-n').hover(function(){qH('div.m-m-n div','#4569EF')},function(){qH('div.m-m-n div','rgb(0,0,255)')});

// function someExt() {
// 	$('.main-nav').removeClass('click');
// 	$('.main-nav ul').hide();
// 	$('.m-m-n div:nth-child(2)').css('display','block');
// 	$('.m-m-n div:first-child').css({marginTop:'4px',transform:'rotate(0deg)',height:'4px',position:'inherit'});
// 	$('.m-m-n div:nth-child(3)').css({marginTop:'4px',transform:'rotate(0deg)',height:'4px',position:'inherit'});
// };
// $('.m-m-n').click(function(){
// 	if (!$('.main-nav').hasClass('click')){
// 		$('.main-nav').addClass('click');
// 		$('.main-nav ul').show();
// 		$('.m-m-n div:nth-child(2)').css('display', 'none');
// 		$('.m-m-n div:first-child').css({marginTop:'6px',transform:'rotate(-45deg)',height:'5px',position:'absolute'});
// 		$('.m-m-n div:nth-child(3)').css({marginTop:'6px',transform:'rotate(45deg)',height:'5px',position:'absolute'});
// 	}else{someExt()};
// });



// Responsive Helpers (General)
function responsiveHelpGeneral(){
	respTxtGen("nav.main-nav ul li",0.6,0.75);
	respPaddingGen("body",4.5,0,0,0,7.5,0,0,0);
	respWidthGen("header.heading .holder",10.4,12.23,"");
	respWidthGen(".body-part",12,20,"");
	respMarginGen(".footer",7,0,0,0,9,0,0,0);
	respTxtGen(".sitefooter h4,.sitefooter a",0.6,1);
	respTxtGen(".sitefooter h5,.sitefooter h5 span",0.55,0.9);
	respWidthGen(".sitefooter .fb",0.66,1,"");
}responsiveHelpGeneral();
$(window).on("resize",function(){responsiveHelpGeneral()});





// If FRONT Page
if($('body div').hasClass('matrixbgholder')){
	$('#myname-as-logo').css('display','none');

	// Matrix function
	// to center matrix
	function rLsnr(){
		$('.matrixbgholder').css('marginLeft',(($(window).width())/2)-(285/2)+'px');
	};
	rLsnr();
	$(window).on('resize',function(){rLsnr()});
	// martrix
	var numbersMatrix=(function(){
		// html initial
		$('.matrixbgholder').prepend('<div class="coolbg-l"></div>');
		$('.matrixbgholder').append('<div class="coolbg-r"></div>');
		// to produce rand nums
		function rndsnm(min,max){
			min=Math.ceil(min);max=Math.floor(max);
			return Math.floor(Math.random()*(max-min))+min;
		};
		// vars
		var todynmclyfitmtrx=whv/16,
				todynmclyfitmtrxRound=Math.round(todynmclyfitmtrx),
				numOfClns=12;
		// loop through html (left&right) for pushing nums
		for(var ittr=1;ittr<=numOfClns;ittr++){
			$('.coolbg-l').clone().addClass('coolbgClone '+'m-'+ittr).removeClass('coolbg-l').prependTo('.matrixbgholder');
			$('.coolbg-r').clone().addClass('coolbgClone '+'m-'+ittr).removeClass('coolbg-r').appendTo('.matrixbgholder');
		};
		// remove passed away class
		$('.coolbg-l,.coolbg-r').remove();
		// arrange matrix evenly for visual cool balance
		function mgnTpAjt(t,m){
			$(t).css('marginTop','-'+m+'px')
		};
		mgnTpAjt('.m-1',10);
		mgnTpAjt('.m-2',69);
		mgnTpAjt('.m-3',50);
		mgnTpAjt('.m-4',90);
		mgnTpAjt('.m-5',70);
		mgnTpAjt('.m-6',90);
		mgnTpAjt('.m-7',129);
		mgnTpAjt('.m-8',140);
		mgnTpAjt('.m-9',110);
		mgnTpAjt('.m-10',129);
		mgnTpAjt('.m-11',140);
		mgnTpAjt('.m-12',120);
		// push rand nums and class
		$.fn.matrixify=function(){
			return this.each(function(){
				$(this).prepend('<p class="f'+rndsnm(9,0)+'">'+rndsnm(9,0)+'</p>')
			});
		};

		$(document).ready(function(){
			(function pushMtrx(){
				$('.coolbgClone').matrixify();
				$('.coolbgClone p:nth-child(42n)').remove();
				var mtxPLen=$('.matrixbgholder >div p').length;
				// set a num interval
				var intrvl=50;
				// to gradually slowdown martix (comment off if you like infinity)
				// var intrvl=mtxPLen/5.5;
				// to stop matrix conditionally (comment off off like infinite)
				// if(mtxPLen>960){return}
				// loop through pushing nums with timeouts
				setTimeout(pushMtrx, intrvl);
			}());
		});
	})();

	$(document).ready(function(){
		$("#indexpage").animate({opacity:"1"},anmtnShwngTm);
	});

}; // FRONT Page ending












// If ABOUT Paage
if($(".body-part").hasClass('about')){

	var theMinSiteWidth = 250;
	$(".skillsmatrixdiv .individual-skill .progressing-skills h6").css({
		marginTop:"0"
		// paddingTop:"0",
		// height:"20px",
		// background: "rgba(0,155,255,0.25)"
	});
	$(".skillsmatrixdiv .individual-skill .progressing-skills").css({
		// height:"20px",
		background: "rgba(0,155,255,0.25)"
	});
	function responsiveHelpAbout(){
		respTxtGen(".aboutme-container .pharagraphs-about h2",1.2,1.6);
		respTxtGen(".aboutme-container .pharagraphs-about p",0.8,1);
		respLineHeightGen(".aboutme-container .pharagraphs-about p",1.1,1.4);
		respWidthGen("#About > div > .aboutme-container, .skillsmatrixdiv",95,100,"%");
		respTxtGen(".skillsmatrixdiv .individual-skill .progressing-skills h6",0.61,0.8);
		respWidthGen(".skillsmatrixdiv .individual-skill .progressing-skills",33,12,"%");
		respWidthGen(".skillsmatrixdiv .individual-skill .prgrssbr-cntnr",67,88,"%");
		respPaddingGen(".skillsmatrixdiv .individual-skill .progressing-skills h6",0.18,0.3,0.23,0, 0.1,0.5,0.05,0);
		respHeightByWidthGen(".skillsmatrixdiv .individual-skill .progressing-skills",1.12,1.124,"");
		// if(respDynmcW()===1000){console.log("yesfefe")}

	}responsiveHelpAbout();
	$(window).on("resize",function(){responsiveHelpAbout()});

	// particle animation
	particlesJS.load('aboutParticles','js/assets/particlesjs-config.json',function(){});

	// when .pharagraphs-about hovered
	function enterOnP(){
		$(".pharagraphs-about").addClass("hovered");
		$(".defaultBg").animate({opacity:0},450,function(){});
		$(".targetBg").animate({opacity:1},450,function(){});
		// clrManeuver();
	}
	function outOfP(){
		$(".pharagraphs-about").removeClass("hovered");
		$(".defaultBg").animate({opacity:1},450,function(){});
		$(".targetBg").animate({opacity:0},450,function(){});
		// clrManeuver();
	}
	$(".pharagraphs-about").hoverIntent({
		over: enterOnP,
		out: outOfP
	});

	// SKILSS ANIMATION
	var skillsMatrix=(function(){
		var prgrssAnmtnT=2500;
		var below60=jQuery.Color("rgba(190,255,5,0.69)");
		var sxtySvnty=jQuery.Color("rgba(124,255,5,0.69)");
		var eightyUp=jQuery.Color("rgba(5,255,5,0.69)");
		var prgrssCss={width:'0%',backgroundColor:'#FF5252'};
		$(".individual-skill .progress").css(prgrssCss);
		$('.progress').append('<div class="onthemove-container"><div class="onthemove"></div></div>');
		$('.onthemove').css({marginLeft:'-100%',height:'22px',width:'100%',background:'linear-gradient(90deg,rgba(0,0,0,0),rgba(0,0,0,0),rgba(195,255,100,0.55),rgba(0,0,0,0),rgba(0,0,0,0))'});
		$('.onthemove-container').css({height:'22px',width:'100%',overflow:'hidden'});
		function sklAnmtn(t,t2,w,c) {
			var countr=0;
			function ntT(){
				var sto=setInterval(sklAnmF(t),500);
			}
			function sklAnmF(t){
				countr++;
				var f = $(t).parent('.progressing-skills').siblings('.prgrssbr-cntnr').find('.onthemove');
				f.animate({marginLeft:'100%'},2900,function(){
					$(f).css('marginLeft','-100%');
					if(countr===19){
						ntT=null;clearInterval(jmpT);return
					}
					var jmpT=setTimeout(sklAnmF(t),500);
				});
			};
			$(t).on('inview',function(event,isInView){
				if(isInView){
					$(t2).animate({width:w+'%',backgroundColor:c},prgrssAnmtnT,ntT);
				}else{
					$(t).off('inview');
				}
			});
		}
		sklAnmtn('#PHP','.php-skill .progress','60',below60);
		sklAnmtn('#Wordpress','.wp-skill .progress','80',sxtySvnty);
		sklAnmtn('#Javascript','.js-skill .progress','75',below60);
		sklAnmtn('#jQuery','.jq-skill .progress','92',eightyUp);
		sklAnmtn('#CSS','.css-skill .progress','99',eightyUp);
		sklAnmtn('#Stylus','.stylus-skill .progress','90',eightyUp);
		sklAnmtn('#SASS','.sass-skill .progress','40',below60);
		sklAnmtn('#HTML','.html-skill .progress','99',eightyUp);
		sklAnmtn('#Pug','.pug-skill .progress','35',below60);
		sklAnmtn('#Github','.github-skill .progress','15',below60);
		sklAnmtn('#Git','.gitbash-skill .progress','25',below60);
		sklAnmtn('#Photoshop','.photoshop-skill .progress','93',eightyUp);
		sklAnmtn('#Illustrator','.illustrator-skill .progress','90',eightyUp);
		sklAnmtn('#OffpageSEO','.offpage-seo-skill .progress','20',below60);
		sklAnmtn('#OnpageSEO','.onpage-seo-skill .progress','75',below60);
		sklAnmtn('#Research','.research-skill .progress','92',eightyUp);
	})();

	// Ceter elements whe js is cool
	function sizeFollowPhrgpAbt(){
		var phrghAbtH=$(".pharagraphs-about").height(),
				phrghAbtW=$(".pharagraphs-about").innerWidth(),
				matrxbghldrH=$(".skillsmatrixdiv").height(),
				footerH=$(".footer").height(),
				stAbtMrgnlBndry=225,
				wh=$(window).height(),
				ww=$(window).width();
		$(".aboutme-container,.targetBg,.defaultBg").css({height:phrghAbtH});
		$(".aboutme-container,.skillsmatrixdiv").css({marginLeft:(ww/2)-(phrghAbtW/2)+"px"});
		$(".skillsmatrixdiv").css("top",stAbtMrgnlBndry+phrghAbtH+"px");
		// $(".footer").css("top",(stAbtMrgnlBndry*2)+phrghAbtH+matrxbghldrH+"px");
		$(".footer").css("top",stAbtMrgnlBndry+phrghAbtH+matrxbghldrH+"px");
		// footer always on bottom
		if((phrghAbtH+matrxbghldrH+(stAbtMrgnlBndry*3))<=wh){
			$(".footer").css({top:wh-footerH+"px"});
		}
	}sizeFollowPhrgpAbt();
	$(window).on("resize",function(){sizeFollowPhrgpAbt()});

} //ABOUT Page ending











// If WORKS Page
if($(".body-part").hasClass('works')){
	//responsive helpers
	function responsiveHelpWorks(){
		respTxtGen("#works > div > h2",1.15,1.65);
		respPaddingGen("#works > div > h2",0.6,0,0,0,1,0,0,0);
		respTxtGen("#works .central-works .demoportfolio h5",0.975,1.4);
		respMarginGen("#works .central-works .demoportfolio",1.4,0,1.4,0,2.5,0,2.5,0);
		respTxtGen(".grphcs-modal .focus",1.5,2);
		respTxtGen(".grphcs-modal .clr-on-modal",2,2.5);

		respWidthGen("#works .central-works .graphics-section .outer-container",31,32,"%");
	}responsiveHelpWorks();
	$(window).on("resize",function(){responsiveHelpWorks()});

	// for spinner
	var opts = {
		lines: 15, // The number of lines to draw
		length: 29, // The length of each line
		width: 10, // The line thickness
		radius: 32, // The radius of the inner circle
		scale: 0.9, // Scales overall size of the spinner
		corners: 1, // Corner roundness (0..1)
		color: '#ffffff', // CSS color or array of colors
		fadeColor: 'transparent', // CSS color or array of colors
		opacity: 0.15, // Opacity of the lines
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		speed: 1.4, // Rounds per second
		trail: 58, // Afterglow percentage
		fps: 20, // Frames per second when using setTimeout() as a fallback in IE 9
		zIndex: 2e9, // The z-index (defaults to 2000000000)
		className: 'spinner', // The CSS class to assign to the spinner
		top: '50%', // Top position relative to parent
		left: '50%', // Left position relative to parent
		position: 'absolute' // Element positioning
	};

	// set up html contents
	$('html').append('<div class="grphcs-modal"><div><i class="material-icons clr-on-modal">&#xE14C;</i><i class="material-icons focus focus_off">&#xE3B5;</i></div><div class="keep"><div id="spin-div"></div></div></div>');
	$('.keep').append('<img class="image-slide">');


	// $('.arw-l').attr('src', theBaseAddress+'imgs/left-arrow.png');
	// $('.arw-r').attr('src', theBaseAddress+'imgs/right-arrow.png');
	// $('.arw-l').attr('src','imgs/left-arrow.png');
	// $('.arw-r').attr('src','imgs/right-arrow.png');
	// $('.arw').css('marginTop',(whv/2.5)+'px');
	// $('.grphcs-modal img').css('display', 'none');
	var iItm=$('.graphics-section img'),
			iLn=iItm.length;

	iItm.css('cursor', 'pointer');
	var imgPrtrtW='69%',
			imgLnscpW='55%',
			imgAlmstFl="95%",
			mdlAnmtnTme=500;

	function dtrmnSzShrnk(noAnition){ // determines the correct shrink-size it has to shrink
		if(emObj.iW>emObj.iH){
			if(noAnition==true){
				$('.grphcs-modal img.image-slide').animate({width:imgPrtrtW},mdlAnmtnTme);
			}else{
				$('.grphcs-modal img.image-slide').css({width:imgPrtrtW});
			}
		}else{
			if(noAnition==true){
				$('.grphcs-modal img.image-slide').animate({width:imgLnscpW},mdlAnmtnTme);
			}else{
				$('.grphcs-modal img.image-slide').css({width:imgLnscpW});
			}
		}
	}

	iItm.on('mouseup',function(){
		// spinner part
		var target = document.getElementById('spin-div');
				spinner = new Spinner(opts).spin(target),
				This=$(this),
				imgLocAndName=This.attr('src'),
				imgName=((imgLocAndName.split("/", "-1")).reverse())[0],
				imgFlSzNm=imgName.split("(","-1")[0]+'.'+((imgName.split(".","-1")).reverse())[0],
				// whGtr=theBaseAddress+'imgs/graphics/fullsize/'+imgFlSzNm,
				whGtr='imgs/graphics/fullsize/'+imgFlSzNm,
				img=new Image();
		img.src=whGtr;
		img.onload=function(){
			emObj.iW=this.width;
			emObj.iH=this.height;
			emObj.toCntImg=((whv/2)-(emObj.iH/2))-25;
			dtrmnSzShrnk(false);
			$(".body-part,.heading,.footer").animate({opacity:0},mdlAnmtnTme,function() {
				$(".grphcs-modal").css("overflowY","scroll");
				$("html").css("overflowY","hidden");
			});
			// $('.grphcs-modal img.image-slide').css('display','block').attr("src", theBaseAddress+'imgs/graphics/fullsize/'+imgFlSzNm);
			$('.grphcs-modal img.image-slide').css('display','block').attr("src",'imgs/graphics/fullsize/'+imgFlSzNm);
			$('.grphcs-modal img.arw').fadeIn(mdlAnmtnTme);
			$('.grphcs-modal').fadeIn(mdlAnmtnTme);

			// stop sipnner
			setTimeout(function stpSpnr(){spinner.stop(target);},50);
		};
	});
	function extGrpcMdl(){
		$('.grphcs-modal').fadeOut(mdlAnmtnTme);//.css('overflow-y','hidden');
		$(".body-part,.heading,.footer").animate({opacity:1},mdlAnmtnTme);
		$(".grphcs-modal").css("overflowY","hidden");
		$("html").css("overflowY","scroll");
		$('.grphcs-modal i.focus').empty().text('center_focus_weak').addClass('focus_off').removeClass('focus_on');
		$('.grphcs-modal img.image-slide').removeClass('imFcOn').css({width:imgPrtrtW,display:'none'}).removeAttr( "src" );
		$('.arw').css('display','none');
	}
	$('.clr-on-modal').on('mouseup',function(){extGrpcMdl();});
	function addHoverClass(target){ // Adding a hover class when hovered
		$(target).on("mouseenter",function(){
			$(this).addClass("hovered");
		});
		$(target).on("mouseleave",function(){
			$(this).removeClass("hovered");
		});
	}
	addHoverClass(".image-slide");
	addHoverClass(".focus_off");
	$('.grphcs-modal').on('mouseup',function(){ // when black modal bg click
		if($(".image-slide,.focus").hasClass("hovered")){return}else{extGrpcMdl()}
	});
	$(document).keyup(function(e){if(e.keyCode==27){extGrpcMdl();}});

	$('.grphcs-modal i.focus').on('click',function(){
		if ($(this).hasClass('focus_off')){
			$(this).empty().text('center_focus_strong').removeClass('focus_off').addClass('focus_on');
			$('.grphcs-modal img.image-slide').addClass('imFcOn').animate({width:imgAlmstFl},mdlAnmtnTme);
			$('.arw').fadeOut(mdlAnmtnTme);
		}else{
			$(this).empty().text('center_focus_weak').addClass('focus_off').removeClass('focus_on');
			dtrmnSzShrnk(true);
			$('.arw').fadeIn(mdlAnmtnTme);
		}
	});

	// Matrix Background
	var c=document.getElementById("Martix2DBG");
	// responsive matrix done for canvas
	var numup=1
	var ctx=c.getContext("2d");
	//making the canvas full screen
	c.height=window.innerHeight;
	c.width=window.innerWidth;
	var collectionOfLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	//converting the string into an array of single characters
	collectionOfLetters=collectionOfLetters.split("");
	// Responsive Text
	function matrixRespTxt(mnFS,mxFS){
		var f,
				dW  = respDynmcW(),
				wS  = respDynmcW() - theMinSiteWidth,
				fR  = mxFS - mnFS,
				sWR = theSiteWidth - theMinSiteWidth,
				i	  = fR / sWR;
		if(theSiteWidth < dW){
			return mxFS
		}else if(dW < theMinSiteWidth){
			return mnFS
		}else{
			return mnFS + (i * wS)
		}
	}
	var font_size=matrixRespTxt(10,16);//15;
	var columns=(c.width/font_size)+5; // +150 default//number of columns for the rain
	//an array of drops - one per column
	var drops=[];
	//x below is the x coordinate
	//1 = y co-ordinate of the drop(same for every drop initially)
	for(var x=0;x<columns;x++){
		drops[x]=1;
	}
	//drawing the characters
	function rClr(){ // Randomize color
		clr = Math.floor(Math.random()*4)+1;
		// rndC= Math.floor(Math.random()*255)+150;
		// if(clr==1){return "rgb("+rndC+",0,2)"}else{return "rgb("+rndC+",0,"+rndC+")"}
		if(clr==1){return "rgb(255,0,2)"}
		else if(clr==2){return "rgb(255,0,255)"}
		else if(clr==3){return "rgb(0,155,0)"}
		else {return "rgb(200,200,200)"}
	};
	function draw(){
		//Black BG for the canvas
		//translucent BG to show trail
		ctx.fillStyle="rgba(0,0,0,0.05)";
		ctx.fillRect(0,0,c.width,c.height);
		ctx.fillStyle=rClr(); //"#0F0"; //green text
		ctx.font = font_size+"px arial";
		//looping over drops
		// console.log(drops.length);
		for(var i=0;i<drops.length;i++){
			// console.log(drops.length);
			//a random collectionOfLetters character to print
			var text=collectionOfLetters[Math.floor(Math.random()*collectionOfLetters.length)];
			//x = i*font_size, y = value of drops[i]*font_size
			ctx.fillText(text,i*font_size,drops[i]*font_size);
			//sending the drop back to the top randomly after it has crossed the screen
			//adding a randomness to the reset to make the drops scattered on the Y axis
			if(drops[i]*font_size>c.height&&Math.random()>0.950){ //0.975){
				drops[i]=0;
			}
			//incrementing Y coordinate
			drops[i]++;
		}
	}
	setInterval(draw,45); //loop through
	$(window).on("resize",function(){
		location.reload(); // secures canvas to fit on any window-size
	});

	$(document).ready(function(){
		$("#works").animate({opacity:"1"},anmtnShwngTm);
	});

} // WORKS ending










// FOOTER force to go to the very bottom when zommed out
var bodyH=$("body").height(),
		footerH=$(".footer").height()
		innerBdyH=$("body").innerHeight();
if(!$("#About").hasClass("about")){
	function forceBottomFooter() {
		var wH=$(window).height();
		if(wH>((innerBdyH-footerH)+footerH)){
			$(".footer").css({bottom:"0",position:"absolute"});
		}else{
			$(".footer").css({bottom:"unset",position:"unset"});
		}
	}forceBottomFooter();
	$(window).on("resize",forceBottomFooter);
} // FOOTER ending


//Contact
if($("#Contact").hasClass("body-part")){
	function responsiveHelpContact(){
		respTxtGen(".contact-pageTitle",1.2,1.5);
		respTxtGen("#Contact .fillupFields input, #Contact .fillupFields textarea, #Contact .fillupFields ~input[type='submit']",0.6,0.69);
		respWidthGen(".body-part",12,15,"");
	}responsiveHelpContact();
	$(window).on("resize",function(){responsiveHelpContact()});
}


// General smoth showing up
$(document).ready(function() {
	$('.footer, .indexpage, header.heading, #About, #Contact').animate({opacity:'1'},anmtnShwngTm);
});