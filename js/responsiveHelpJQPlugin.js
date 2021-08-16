// RESPONSIVE PLUGIN
// The Responsive Width
function respDynmcW(){return $(window).width()}
// Default Values For Responsiveness
var theSiteWidth		= 1200, // Default Max Width
		theMinSiteWidth = 500,  // Default Min Width
		theScale				=	"rem";// Default Scale

// Responsive Text
function fontCalc(f,dW,wS,i,mnFS,mxFS){
	if(theSiteWidth < dW){
		return f = mxFS
	}else if(dW < theMinSiteWidth){
		return f = mnFS
	}else{
		return f = mnFS + (i * wS)
	}
}
$.fn.respTxtGen = function(mnFS,mxFS){
	var f,
			dW  = respDynmcW(),
			wS  = respDynmcW() - theMinSiteWidth,
			fR  = mxFS - mnFS,
			sWR = theSiteWidth - theMinSiteWidth,
			i	  = fR / sWR;
	this.css("fontSize",fontCalc(f,dW,wS,i,mnFS,mxFS)+theScale);
}