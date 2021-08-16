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


$('.name, ul').removeClass('nojs');
$('.name h4').shuffleLetters('',20,29,1696);

var imObj={};

// Initialize the responsiveHelp plugin
responsiveHelp(250,1200,"rem");

// define/change responsive default
var theMinSiteWidth = 250;

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
	});
	$(".skillsmatrixdiv .individual-skill .progressing-skills").css({
		background: "rgba(0,155,255,0.25)"
	});

	// particle animation
	particlesJS.load('aboutParticles','js/assets/particlesjs-config.json',function(){});


	// when .pharagraphs-about hovered
	function enterOnP(){
		$(".pharagraphs-about").addClass("hovered");
		$(".defaultBg").animate({opacity:0},450);
		$(".targetBg").animate({opacity:1},450);
		// $(".pharagraphs-about p").animate({color:"rgb(0, 255, 151)"},250);
		$(".pharagraphs-about p,.pharagraphs-about a").animate({color:"rgb(255, 255, 255)"},250);
		// clrManeuver();
	}
	function outOfP(){
		$(".pharagraphs-about").removeClass("hovered");
		$(".defaultBg").animate({opacity:1},450);
		$(".targetBg").animate({opacity:0},450);
		$(".pharagraphs-about p,.pharagraphs-about a").animate({color:"rgba(255, 255, 255, 0.65)"},250);
		// clrManeuver();
	}
	$(".pharagraphs-about").hoverIntent({
		over: enterOnP,
		out: outOfP
	});

	// SKILSS ANIMATION
	var skillsMatrix=(function(){
		var prgrssAnmtnT=2500;
		var below40=jQuery.Color("rgba(250,210,5,0.69)");
		var below50=jQuery.Color("rgba(190,210,5,0.69)");
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
		sklAnmtn('#PHP','.php-skill .progress','30',below40);
		sklAnmtn('#Wordpress','.wp-skill .progress','75',sxtySvnty);
		sklAnmtn('#Javascript','.js-skill .progress','85',eightyUp);
		sklAnmtn('#ES6JS','.ES6-JS-skill .progress','50',below60);
		sklAnmtn('#jQuery','.jq-skill .progress','95',eightyUp);
		// sklAnmtn('#NodeJS','.NodeJS-skill .progress','10',below40);
		// sklAnmtn('#TypeScript','.TypeScript-skill .progress','50',below60);
		// sklAnmtn('#Angular','.Angular-skill .progress','5',below40);
		// sklAnmtn('#VueJS','.VueJS-skill .progress','25',below40);
		// sklAnmtn('#JSX','.JSX-skill .progress','40',below50);
		// sklAnmtn('#React','.React-skill .progress','14',below40);




		sklAnmtn('#CSS','.css-skill .progress','100',eightyUp);
		sklAnmtn('#Stylus','.stylus-skill .progress','90',eightyUp);
		// sklAnmtn('#SASS','.sass-skill .progress','40',below60);
		sklAnmtn('#HTML','.html-skill .progress','100',eightyUp);
		// sklAnmtn('#Pug','.pug-skill .progress','35',below60);
		// sklAnmtn('#Github','.github-skill .progress','25',below60);
		// sklAnmtn('#Git','.git-skill .progress','45',below60);
		sklAnmtn('#Photoshop','.photoshop-skill .progress','95',eightyUp);
		sklAnmtn('#Illustrator','.illustrator-skill .progress','90',eightyUp);
		sklAnmtn('#Sketch','.Sketch-skill .progress','35',below40);
		sklAnmtn('#SEO','.seo-skill .progress','60',sxtySvnty);
		// sklAnmtn('#OffpageSEO','.offpage-seo-skill .progress','20',below60);
		// sklAnmtn('#OnpageSEO','.onpage-seo-skill .progress','75',below60);
		// sklAnmtn('#Research','.research-skill .progress','92',eightyUp);
	})();

	// responsiveHelp
	function responsiveHelpAbout(){
		$(".pharagraphs-about h2").respText(1.2,1.6);
		$(".pharagraphs-about p").respText(0.8,1).respLineHeight(1.1,1.4).respMargin(0,0.4,0.9,0.4, 0,1,0.69,1);
		$(".material-icons").respText(0.8,1);
		$(".aboutme-container, .skillsmatrixdiv").respWidth(95,100,"%");
		$(".progressing-skills h6").respText(0.61,0.8).respPadding(0.18,0.2,0.23,0, 0.1,0.5,0.05,0);
		$(".progressing-skills").respWidth(33,12,"%");
		$(".prgrssbr-cntnr").respWidth(67,88,"%");
		$(".progressing-skills").respHeightByWidth(1.12,1.124,"");
		$(".aboutme-container .pharagraphs-about, .targetBg, .defaultBg").respPadding(0,0,1.2,0, 0,0,2,0);
		// $("#OffpageSEO, #OnpageSEO").respText(0.5,0.8);

		// Ceter elements when js is cool
		var phrghAbtH=$(".pharagraphs-about").height(),
				phrghAbtW=$(".pharagraphs-about").innerWidth(),
				matrxbghldrH=$(".skillsmatrixdiv").height(),
				footerH=$(".footer").height(),
				stAbtMrgnlBndry=250,
				wh=$(window).height(),
				ww=$(window).width();
		$(".aboutme-container,.targetBg,.defaultBg").css({height:phrghAbtH});
		$(".aboutme-container,.skillsmatrixdiv").css({marginLeft:(ww/2)-(phrghAbtW/2)+"px"});
		$(".skillsmatrixdiv").css("top",stAbtMrgnlBndry+phrghAbtH+"px");
		$(".footer").css("top",stAbtMrgnlBndry+phrghAbtH+matrxbghldrH+"px");
		// footer always on bottom
		if((phrghAbtH+matrxbghldrH+(stAbtMrgnlBndry*3))<=wh){
			$(".footer").css({top:wh-footerH+"px"});
		}
	}responsiveHelpAbout();
	window.onresize=function(){window.setTimeout(function(){responsiveHelpAbout()},150)}


} //ABOUT Page ending











// If WORKS Page
if($(".body-part").hasClass('works')){

	// set up html contents
	$('html').append('<div class="grphcs-modal"><div><i class="material-icons clr-on-modal">&#xE14C;</i><i class="material-icons focus focus_off">&#xE3B5;</i></div><div class="keep"><div id="spin-div"></div></div></div>');
	//$('.keep').append('<img class="image-slide">');

	var iItm 			 = $('.graphics-section img'),
			iLn				 = iItm.length;
			imgPrtrtW	 = 69,
			imgLnscpW	 = 55,
			imgAlmstFl = 95,
			mdlAnmtnTme= 500;

	iItm.css('cursor', 'pointer');

	function dtrmnSize(animation){
		if($("img.active").hasClass("landscape")){
			if(animation==true){
				// console.log("landscape"+" | "+"animation=true");
				$('.grphcs-modal img.active').animate({width:imgPrtrtW+"%",opacity:"1"},mdlAnmtnTme);
			}else{
				// console.log("landscape"+" | "+"animation=false");
				$('.grphcs-modal img.active').css({width:imgPrtrtW+"%",opacity:"1"});
			}
		}else{
			if(animation==true){
				// console.log("portrate"+" | "+"animation=true");
				$('.grphcs-modal img.active').animate({width:imgLnscpW+"%",opacity:"1"},mdlAnmtnTme);
			}else{
				// console.log("portrate"+" | "+"animation=false");
				$('.grphcs-modal img.active').css({width:imgLnscpW+"%",opacity:"1"});
			}
		}
	}

	// spinner vars
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

	iItm.on('mouseup',function(){

		$(".body-part,.heading,.footer").animate({opacity:0},10,function() {
			$(".grphcs-modal").css("overflowY","scroll").fadeIn(mdlAnmtnTme);
			$("html").css("overflowY","hidden");
		});

		var This				 = $(this),
				imgLocAndName= This.attr('src'),
				imgName			 = ((imgLocAndName.split("/", "-1")).reverse())[0],
				imgFlSzNm		 = imgName.split("(","-1")[0]+'.'+((imgName.split(".","-1")).reverse())[0],
				flnmWthtExt	 = imgName.split("(","-1")[0], // filename without extention
				whGtr				 = 'imgs/graphics/fullsize/'+imgFlSzNm,
				img					 = new Image();
				img.src			 = whGtr,
				targetDivSpin= document.getElementById('spin-div'),
				spinner			 = new Spinner(opts).spin(targetDivSpin);

		if($(".image-slide").hasClass(flnmWthtExt)){
			$("."+flnmWthtExt).css({opacity:"0",display:"block",margin: "auto auto"});
			modalSetFuncs(false);
		}else{
			img.onload=function(){
				$(".grphcs-modal .keep").append("<img class='image-slide "+flnmWthtExt+"' src="+img.src+">");
				imgObjctW = imObj.w = this.width,
				imgObjctH = imObj.h = this.height;
				if(imgObjctW>imgObjctH){
					$("."+flnmWthtExt).addClass("landscape")
				}else{
					$("."+flnmWthtExt).addClass("portrate")
				}
				modalSetFuncs(false);
			}
		};
		function modalSetFuncs(imgObjctW,imgObjctH,trueORfalse) {
			$("."+flnmWthtExt).addClass("active");
			dtrmnSize(trueORfalse);
			addHoverClass(".image-slide");
			setTimeout(function stpSpnr(){spinner.stop(targetDivSpin);},250);
		}
	});
	function extGrpcMdl(){
		$('.grphcs-modal').fadeOut(mdlAnmtnTme);
		$(".body-part,.heading,.footer").animate({opacity:1},mdlAnmtnTme);
		$(".grphcs-modal").css("overflowY","hidden");
		$("html").css("overflowY","scroll");
		$('.grphcs-modal i.focus').empty().text('center_focus_weak').addClass('focus_off').removeClass('focus_on');
		$('.grphcs-modal img').css({display:"none"}).removeClass("active");
	}

	// $('.clr-on-modal').on('mouseup',function(){extGrpcMdl()});
	function addHoverClass(target){ // Adding a hover class when hovered
		$(target).on("mouseenter",function(){
			$(this).addClass("hovered");
		});
		$(target).on("mouseleave",function(){
			$(this).removeClass("hovered");
		});
	}
	addHoverClass(".focus_off"); // prevent hiding the modal when image is clicked not outside
	$('.grphcs-modal').on('mouseup',function(){ // when black modal bg click
		if($(".image-slide,.focus").hasClass("hovered")){return}else{extGrpcMdl()}
	});
	$(document).keyup(function(e){if(e.keyCode==27){extGrpcMdl()}});

	$('.grphcs-modal i.focus').on('click',function(){
		if ($(this).hasClass('focus_off')){
			$(this).empty().text('center_focus_strong').removeClass('focus_off').addClass('focus_on');
			$("img.active").animate({width:imgAlmstFl+"%"},mdlAnmtnTme);
		}else{
			imgObjctW = $("img.active").width(),
			imgObjctH = $("img.active").height();
			$(this).empty().text('center_focus_weak').addClass('focus_off').removeClass('focus_on');
			dtrmnSize(true);
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
	var theSiteWidth	= 1200, // Default Max Width
		theMinSiteWidth = 500,  // Default Min Width
		theScale				=	"rem";// Default Scale
	function matrixRespTxt(mnFS,mxFS){
		var f,
				dW  = dynamicWW(),
				wS  = dynamicWW() - theMinSiteWidth,
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
	var font_size=matrixRespTxt(9,15);//15;
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
		// clr = Math.floor(Math.random()*4)+1; //colorful
		// // // rndC= Math.floor(Math.random()*255)+150; // OFF
		// // // if(clr==1){return "rgb("+rndC+",0,2)"}else{return "rgb("+rndC+",0,"+rndC+")"} // OFF
		// if(clr==1){return "rgb(255,0,2)"} //colorful
		// else if(clr==2){return "rgb(255,0,255)"} //colorful
		// else if(clr==3){return "rgb(0,155,0)"} //colorful
		// else {return "rgb(200,200,200)"} //colorful
		
		// return "rgb(255,0,2)";// one color

		clr = Math.floor(Math.random()*4)+1;
		if(clr==1){return "#FF0000"}
		else if(clr==2){return "#FF1A1A"}
		else if(clr==3){return "#FF3B3B"}
		else {return "#FF5656"}
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
	// loop through
	setInterval(draw,45);

	// //responsive helpers
	function responsiveHelpWorks(){
		$("#works > div > h2").respText(1.15,1.65).respPadding(0.6,0,0,0,1,0,0,0);;
		$("#works .central-works .demoportfolio h5").respText(0.975,1.4);
		$("#works .central-works .demoportfolio").respMargin(1.4,0,1.4,0,2.5,0,2.5,0);
		$(".grphcs-modal .focus").respText(1.5,2);
		$(".grphcs-modal .clr-on-modal").respText(2,2.5);
		$("#works .central-works .graphics-section .outer-container").respWidth(31,32,"%");
		$("#works .central-works .demoportfolio a").respWidth(31,32,"%");
		$("#works .central-works .demoportfolio .respHlp a").respWidth(35,65,"%");
	}responsiveHelpWorks();


	// reload page reload canvas
	window.onresize=function(){window.setTimeout(function(){
		location.reload();
	},250)}


	// intent to load when all is loaded
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
		$(".contact-pageTitle").respText(1.2,1.5);
		$(".fillupFields input,.fillupFields textarea,.fillupFields ~input[type='submit']").respText(0.6,0.69);
		$(".body-part").respWidth(12,15);
	}responsiveHelpContact();

	window.onresize=function(){window.setTimeout(function(){responsiveHelpContact()},150)}
}

// Responsive Helpers (General)
function responsiveHelpGeneral(){
	$("nav.main-nav ul li").respText(0.6,0.75);
	$("body").respPadding(4.5,0,0,0,7.5,0,0,0);
	$("header.heading .holder").respWidth(10.4,12.23,"");
	if(!$("#Contact").hasClass("body-part")){
		$(".body-part").respWidth(12,20);
	}
	$(".footer").respMargin(14,0,0,0,20,0,0,0);
	$(".sitefooter h4,.sitefooter a").respText(0.6,1);
	$(".sitefooter h4:nth-child(2)").respPaddingBottom(0.0001,0.15);
	$(".sitefooter h5,.sitefooter h5 span").respText(0.55,0.9);
	$(".sitefooter .fb").respWidth(0.66,1,"");
}responsiveHelpGeneral();
$(window).resize(function(){responsiveHelpGeneral()});

// General smoth showing up
$( document ).ready(function() {
	$('.footer, .indexpage, header.heading, #About, #Contact').animate({opacity:'1'},anmtnShwngTm);
});














