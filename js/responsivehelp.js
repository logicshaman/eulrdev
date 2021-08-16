// The Responsive Width
function dynamicWW(){return jQuery(window).width()};

// RESPONSIVE PLUGIN
function responsiveHelp($MNW,$MXW,$TU) {
	// $MNW is the Default Site Min Width
	// $MXW is thge Default Site Max Width
	// $TU is the Scale To Use

	// Secure $ as jQuery
	var $ = jQuery;

	// producing Global variables inside a function
	function PGF(){
		$DWW = dynamicWW(); // Dynamic Window Width
		$WWS = $DWW - $MNW, // Window Width Scope
		$SWR = $MXW - $MNW; // Site Width Range
		$MAX = $MXW < $DWW; // check
		$MIN = $MNW > $DWW; // check
	}PGF();
	$(window).resize(function(){PGF()});

	//Define Function for 1 up to 4 values
	function $ingleVal(a,b,i) {
		if($MAX){
			return b
		}else if($MIN){
			return a
		}else{
			return a+(i*$WWS)
		}
	}
	function TB$RL(a,b,c,d,itb,irl) {
		if($MAX){
			return [c,d]
		}else if($MIN){
			return [a,b]
		}else{
			return [a+(itb*$WWS), b+(irl*$WWS)]
		}
	}
	function T$RL$B(a,b,c,d,e,f,it,irl,ib) {
		if($MAX){
			return [d,e,f]
		}else if($MIN){
			return [a,b,c]
		}else{
			return [a+(it*$WWS), b+(irl*$WWS), c+(ib*$WWS)]
		}
	}function T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il) {
		if($MAX){
			return [e,f,g,h]
		}else if($MIN){
			return [a,b,c,d]
		}else{
			return [a+(it*$WWS), b+(ir*$WWS), c+(ib*$WWS), d+(il*$WWS)]
		}
	}

	// Responsive Text
	$.fn.respText = function(a,b){
		var fr = b - a,
				i	 = fr / $SWR;
		this.css("fontSize", $ingleVal(a,b,i)+$TU);
		return this;
	};
	//  Responsive Line Height
	$.fn.respLineHeight = function(a,b){
		var lhr = b - a,
				i	  = lhr / $SWR;
		this.css("lineHeight",$ingleVal(a,b,i)+$TU);
		return this;
	};
	//  Responsive Letter-spacing
	$.fn.respLetterSpacing = function(a,b){
		var lhr = b - a,
				i	  = lhr / $SWR;
		this.css("letterSpacing",$ingleVal(a,b,i)+$TU);
		return this;
	};

	// Responsive Width
	$.fn.respWidth = function(a,b,sstu){
		var wR	= b - a,
				i		= wR / $SWR;
		if(sstu==="%"){
			dynmcS = "%";
		}else{
			dynmcS = $TU;
		}
		this.css("width",$ingleVal(a,b,i)+dynmcS);
		return this;
	}

	// Responsive Height-According-To-Width
	$.fn.respHeightByWidth = function(a,b,sstu){
		var hr	= b - a,
				i		= hr / $SWR;
		if(sstu==="%"){
			dynmcS = "%";
		}else{
			dynmcS = $TU;
		}
		this.css("height",$ingleVal(a,b,i)+dynmcS);
		return this;
	}

	// Responsive Padding
	$.fn.respPadding = function(a,b,c,d,e,f,g,h){
		if(arguments.length==2){
			var pr = b - a,
					i  = pr / $SWR;
			this.css("padding",$ingleVal(a,b,i)+$TU);
		}else if(arguments.length==4){
			var tbp = c - a,
					rlp = d - b,
					itb = tbp / $MXW,
					irl = rlp / $MXW,
					p		= TB$RL(a,b,c,d,itb,irl);
			this.css({
				paddingTop: 	p[0]+$TU,
				paddingBottom:p[0]+$TU,
				paddingRight: p[1]+$TU,
				paddingLeft: 	p[1]+$TU
			});
		}else if(arguments.length==6){
			var tp	= d - a,
					rlp = e - b,
					bp	= f - c,
					it  = tp / $MXW,
					irl = rlp / $MXW,
					ib  = bp / $MXW,
					p		= T$RL$B(a,b,c,d,e,f,it,irl,ib);
			this.css({
				paddingTop: 	p[0]+$TU,
				paddingRight: p[1]+$TU,
				paddingLeft: 	p[1]+$TU,
				paddingBottom:p[2]+$TU
			});
		}else if(arguments.length==8){
			var tp	= e  - a,
					rp	= f  - b,
					bp	= g  - c,
					lp	= h  - d,
					it = tp / $MXW,
					ir = rp / $MXW,
					ib = bp / $MXW,
					il = lp / $MXW,
					p		= T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il);
			this.css({
				paddingTop: 	p[0]+$TU,
				paddingRight: p[1]+$TU,
				paddingBottom:p[2]+$TU,
				paddingLeft: 	p[3]+$TU
			});
		}else{
			console.log("something's strange at respPadding()")
		}
		return this;
	}

	// Responsive Margin
	$.fn.respMargin = function(a,b,c,d,e,f,g,h){
		if(arguments.length==2){
			var mr = b - a,
					i  = mr / $SWR;
			this.css("margin",$ingleVal(a,b,i)+$TU);
		}else if(arguments.length==4){
			var	tbm = c - a,
					rlm = d - b,
					itb = tbm / $MXW,
					irl = rlm / $MXW,
					m		= TB$RL(a,b,c,d,itb,irl),
					tb	= m[0]+$TU,
					rl	= m[1]+$TU;
			if(a==="auto"||c==="auto"){tb="auto";}
			if(b==="auto"||d==="auto"){rl	="auto";}
			this.css({
				marginTop:	 tb,
				marginBottom:tb,
				marginRight: rl,
				marginLeft:	 rl
			});
		}else if(arguments.length==6){
			var	tm = d - a,
					rlm= e - b,
					bm = f - c,
					it = tm / $MXW,
					irl= rlm / $MXW,
					ib = bm / $MXW,
					m	 = T$RL$B(a,b,c,d,e,f,it,irl,ib),
					t	 = m[0]+$TU,
					rl = m[1]+$TU,
					btm= m[2]+$TU;
			if(a==="auto"||d==="auto"){t ="auto";}
			if(b==="auto"||e==="auto"){rl="auto";}
			if(c==="auto"||f==="auto"){btm ="auto";}
			this.css({
				marginTop:	 t,
				marginRight: rl,
				marginLeft:	 rl,
				marginBottom:btm
			});
		}else if(arguments.length==8){
			var	tm = e - a,
					rm = f - b,
					bm = g - c,
					lm = h - d,
					it = tm / $MXW,
					ir = rm / $MXW,
					ib = bm / $MXW,
					il = lm / $MXW,
					m	 = T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il),
					t	 = m[0]+$TU,
					r  = m[1]+$TU,
					btm= m[2]+$TU,
					l  = m[3]+$TU;
			if(e==="auto"||a==="auto"){t ="auto";}
			if(f==="auto"||b==="auto"){r="auto";}
			if(g==="auto"||c==="auto"){btm ="auto";}
			if(h==="auto"||d==="auto"){l="auto";}
			this.css({
				marginTop:	 t,
				marginRight: r,
				marginBottom:btm,
				marginLeft:	 l
			});
		}else{
			console.log("something's strange at respMarginGen()");
		}
		return this;
	}

	// Responsive Radius
	$.fn.respBorderRadius = function(a,b,c,d,e,f,g,h){
		if(arguments.length==2){
			var rr = b - a,
					i  = rr / $SWR;
			this.css("borderRadius",$ingleVal(a,b,i)+$TU);
		}else if(arguments.length==4){
			var tbr = c - a,
					rlr = d - b,
					itb = tbr / $MXW,
					irl = rlr / $MXW,
					r		= TB$RL(a,b,c,d,itb,irl);
			this.css({
				borderTopLeftRadius: 		r[0]+$TU,
				borderTopRightRadius: 	r[0]+$TU,
				borderBottomLeftRadius: r[1]+$TU,
				borderBottomRightRadius:r[1]+$TU
			});
		}else if(arguments.length==6){
			var tr	= d - a,
					rlr = e - b,
					br	= f - c,
					it  = tr / $MXW,
					irl = rlr / $MXW,
					ib  = br / $MXW,
					r		= T$RL$B(a,b,c,d,e,f,it,irl,ib);
			this.css({
				borderTopLeftRadius: 		r[0]+$TU,
				borderTopRightRadius: 	r[1]+$TU,
				borderBottomLeftRadius: r[1]+$TU,
				borderBottomRightRadius:r[2]+$TU
			});
		}else if(arguments.length==8){
			var tr	= e  - a,
					rr	= f  - b,
					br	= g  - c,
					lr	= h  - d,
					it = tr / $MXW,
					ir = rr / $MXW,
					ib = br / $MXW,
					il = lr / $MXW,
					r		= T$R$B$L(a,b,c,d,e,f,g,h,it,ir,ib,il);
			this.css({
				borderTopLeftRadius: 		r[0]+$TU,
				borderTopRightRadius: 	r[1]+$TU,
				borderBottomRightRadius:r[2]+$TU,
				borderBottomLeftRadius: r[3]+$TU
			});
		}else{
			console.log("something's strange at respBorderRadius()")
		}
		return this;
	}

	// Individualized values counter section

	// responsive top
	$.fn.responsiveTop = function(a,b){
		var tr = b - a,
				i  = tr / $SWR;
		this.css("top",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive right
	$.fn.responsiveRight = function(a,b){
		var rr = b - a,
				i  = rr / $SWR;
		this.css("right",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive bottom
	$.fn.responsiveBottom = function(a,b){
		var br = b - a,
				i  = br / $SWR;
		this.css("bottom",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive left
	$.fn.responsiveLeft = function(a,b){
		var lr = b - a,
				i  = lr / $SWR;
		this.css("left",$ingleVal(a,b,i)+$TU);
		return this;
	}

	// responsive padding-top
	$.fn.respPaddingTop = function(a,b){
		var ptr = b - a,
				i  = ptr / $SWR;
		this.css("paddingTop",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive padding-right
	$.fn.respPaddingRight = function(a,b){
		var prr = b - a,
				i  = prr / $SWR;
		this.css("paddingRight",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive padding-bottom
	$.fn.respPaddingBottom = function(a,b){
		var pbr = b - a,
				i  = pbr / $SWR;
		this.css("paddingBottom",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive padding-left
	$.fn.respPaddingLeft = function(a,b){
		var plr = b - a,
				i  = plr / $SWR;
		this.css("paddingLeft",$ingleVal(a,b,i)+$TU);
		return this;
	}

	// responsive margin-top
	$.fn.respMarginTop = function(a,b){
		var mtr = b - a,
				i  = mtr / $SWR;
		this.css("marginTop",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive margin-right
	$.fn.respMarginRight = function(a,b){
		var mrr = b - a,
				i  = mrr / $SWR;
		this.css("marginRight",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive margin-bottom
	$.fn.respMarginBottom = function(a,b){
		var mbr = b - a,
				i  = mbr / $SWR;
		this.css("marginBottom",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive margin-left
	$.fn.respMarginLeft = function(a,b){
		var mlr = b - a,
				i  = mlr / $SWR;
		this.css("marginLeft",$ingleVal(a,b,i)+$TU);
		return this;
	}

	// responsive border-top-right-radius
	$.fn.respBorderTopRightRadius = function(a,b){
		var trr = b - a,
				i  = trr / $SWR;
		this.css("borderTopRightRadius",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive border-top-left-radius
	$.fn.respBorderTopLeftRadius = function(a,b){
		var tlr = b - a,
				i  = tlr / $SWR;
		this.css("borderTopLeftRadius",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive border-bottom-right-radius
	$.fn.respBorderBottomRightRadius = function(a,b){
		var brr = b - a,
				i  = brr / $SWR;
		this.css("borderBottomRightRadius",$ingleVal(a,b,i)+$TU);
		return this;
	}
	// responsive border-bottom-left-radius
	$.fn.respBorderBottomLeftRadius = function(a,b){
		var blr = b - a,
				i  = blr / $SWR;
		this.css("borderBottomLeftRadius",$ingleVal(a,b,i)+$TU);
		return this;
	}

};