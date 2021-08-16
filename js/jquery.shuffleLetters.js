jQuery.fn.shuffleLetters = function(prop, steparg, fpsarg, crkspsarg){
	var stepvar = steparg || 12,
		fpsvar = fpsarg || 25,
		crkspsvar = crkspsarg || 2000,
		options = jQuery.extend({
			"step"		: stepvar,
			"fps"		: fpsvar,
			"text"		: "",
			"callback"	: function() {},
		},prop);

	return this.each(function(){
		var el = jQuery(this),
			str = "";

		if(el.data('animated')){ return true; }
		el.data('animated',true);

		if(options.text) { str = options.text.split(''); }
		else { str = el.text().split(''); }

		var types = [],
			letters = [];

		for(var i=0;i<str.length;i++){
			var ch = str[i];
			if(ch == " "){types[i] = "space";continue;}
			else if(/[a-z]/.test(ch)){types[i] = "lowerLetter";}
			else if(/[A-Z]/.test(ch)){types[i] = "upperLetter";}
			else {types[i] = "symbol";}
			letters.push(i);
		}

		el.html("");

		(function shuffle(start){
			var i,
				len = letters.length, 
				strCopy = str.slice(0);	// Fresh copy of the string
			if(start>len){
				el.data('animated',false);
				options.callback(el);
				return;}

			for(i=Math.max(start,0); i < len; i++){
				if( i < start+options.step){strCopy[letters[i]] = randomChar(types[letters[i]]);}
				else {strCopy[letters[i]] = "";}}

			el.text(strCopy.join(""));

			setTimeout(function(){
				shuffle(start+1);
				},crkspsvar/options.fps);

		})(-options.step,crkspsvar);
	});
};

function randomChar(type){
	var pool = "";

	if (type == "lowerLetter"){pool = "abcdefghijklmnopqrstuvwxyz";}
	else if (type == "upperLetter"){pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";}
	else if (type == "symbol"){pool = "0123456789";}

	var arr = pool.split('');
	return arr[Math.floor(Math.random()*arr.length)];
}