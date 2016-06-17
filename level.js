function level() {
	this.current = 0;
	this.levels = [
		[
			[0, 300, 50, 50],
			[170, 450, 50, 50],
			[300, 300, 50, 50],
			[460, 150, 50, 50],
			[600, 250, 50, 50],
			[780, 350, 50, 50],
			[480, 390, 50, 50],
			[650, 520, 50, 50]
		],
		[
			[0, 300, 50, 50],
			[130, 460, 50, 50],
			[300, 380, 50, 50]
		],
		[
			[0, 300, 50, 50],
			[100, 400, 50, 50]
		]
	];

	
	this.next = function() {
		if(this.current >= this.levels.length) this.current = 0;
		var level = this.levels[this.current];
		this.current++;
		
		return level;
	};
}