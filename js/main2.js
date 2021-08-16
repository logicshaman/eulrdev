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
// $('.name h4').shuffleLetters('',20,29,1696);

var imObj={};

// Initialize the responsiveHelp plugin
responsiveHelp(250,1200,"rem");

// define/change responsive default
var theMinSiteWidth = 250;

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
		var below35=jQuery.Color("rgba(220,210,5,0.69)");
		var below40=jQuery.Color("rgba(220,230,1,0.69)");
		var below50=jQuery.Color("rgba(190,230,5,0.69)");
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
		sklAnmtn('#Javascript','.js-skill .progress','85',eightyUp);
		sklAnmtn('#Vuejs','.Vuejs-skill .progress','50',below60);
		sklAnmtn('#Animejs','.Animejs-skill .progress','70',sxtySvnty);
		sklAnmtn('#jQuery','.jq-skill .progress','95',eightyUp);
		// sklAnmtn('#TypeScript','.TypeScript-skill .progress','50',below60);
		// sklAnmtn('#JSX','.JSX-skill .progress','40',below50);
		sklAnmtn('#PHP','.php-skill .progress','60',sxtySvnty);
		sklAnmtn('#Wordpress','.wp-skill .progress','75',sxtySvnty);
		sklAnmtn('#CSS','.css-skill .progress','100',eightyUp);
		sklAnmtn('#Bootstrap','.Bootstrap-skill .progress','90',eightyUp);
		sklAnmtn('#HTML','.html-skill .progress','100',eightyUp);
		sklAnmtn('#Photoshop','.photoshop-skill .progress','95',eightyUp);
		sklAnmtn('#Illustrator','.illustrator-skill .progress','80',eightyUp);
		sklAnmtn('#Sketch','.Sketch-skill .progress','45',below50);
		sklAnmtn('#SEO','.seo-skill .progress','60',sxtySvnty);
		sklAnmtn('#GTM','.googletagmanager-skill .progress','65',sxtySvnty);
		sklAnmtn('#GA','.googleanalytics-skill .progress','55',below60);
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

// Responsive Helpers (General)
function responsiveHelpGeneral(){
	$("nav.main-nav ul li").respText(0.6,0.75);
	$("body").respPadding(4.5,0,0,0,7.5,0,0,0);
	$("header.heading .holder").respWidth(10.4,12.23,"");
	if(!$("#Contact").hasClass("body-part")){
		$(".body-part").respWidth(12,20);
	}
	$(".footer").respMargin(18,0,0,0,26,0,0,0);
	$(".sitefooter h4,.sitefooter a").respText(0.9,1);
	$(".sitefooter h4:nth-child(2)").respPaddingBottom(0.0001,0.15);
	$(".sitefooter h5,.sitefooter h5 span").respText(0.55,0.9);
	$(".sitefooter .fb").respWidth(0.66,1,"");
}responsiveHelpGeneral();
$(window).resize(function(){responsiveHelpGeneral()});

// General smoth showing up
$( document ).ready(function() {
	$('.footer, .indexpage, header.heading, #About, #Contact').animate({opacity:'1'},anmtnShwngTm);
});