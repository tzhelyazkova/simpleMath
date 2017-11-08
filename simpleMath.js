(function(global){
	var simpleMath = function (number){
		return new simpleMath.init(number);
	}

	simpleMath.init = function (number) {
		var self = this;
		self.number = number || 0;
		self.endResult = self.number;
		self.validate();
	}

	simpleMath.prototype = {
		validate : function () {
			if(!this.isNumber(this.number)) {
				throw this.number + " is not a number!";
			}
		},
		isNumber : function (val) {
			return /[-+]?(\d+)*\.?(\d+)$/.test(val);
		},
		add : function (toAdd) {
			if(this.isNumber(toAdd)) {
				this.endResult += toAdd;
			}
			else {
				throw toAdd + " is not a number!";
			}
			return this;
		},
		sub : function (toSub) {
			if(this.isNumber(toSub)) {
				this.endResult -= toSub;
			}
			else {
				throw toSub + " is not a number!";
			}
			return this;
		},
		mult : function (toMult) {
			if(this.isNumber(toMult)) {
				this.endResult *= toMult;
			}
			else {
				throw toMult + " is not a number!";
			}
			return this;
		},
		div : function (toDiv) {
			if(this.isNumber(toDiv)) {
				this.endResult /= toDiv;
			}
			else {
				throw toDiv + " is not a number!";
			}
			return this;
		},
		done : function () {
			return this.endResult;
		}
	}

	simpleMath.init.prototype = simpleMath.prototype;

	global.simpleMath = global.sm = simpleMath;

}(window));
