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
	$("body").respPadding(1,0,0,0,5,0,0,0);
	$("header.heading .holder").respWidth(10.4,12.23,"");
	if(!$("#Contact").hasClass("body-part")){
		$(".body-part").respWidth(12,20);
	}
	$(".footer").respMargin(14,0,0,0,20,0,0,0);
	$(".sitefooter h4,.sitefooter a").respText(0.9,1);
	$(".sitefooter .my_site_adrs").respMarginBottom(-0.1,0.4);
	$(".sitefooter .my_nums_adrs").respMarginBottom(0.1,0.35);
	$(".sitefooter h4:nth-child(2)").respPaddingBottom(0.0001,0.15);
	$(".sitefooter h5,.sitefooter h5 span").respText(0.55,0.9);
	$(".sitefooter .fb").respWidth(0.66,1,"");
}responsiveHelpGeneral();
$(window).resize(function(){responsiveHelpGeneral()});

// General smoth showing up
$( document ).ready(function() {
	$('.footer, .indexpage, header.heading, #About, #Contact').animate({opacity:'1'},anmtnShwngTm);
});








