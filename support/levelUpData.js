var _ = require('underscore');
const levels = require('./levels');

var lookup = {
	byLevel : {},
	byDust : {},
	byCandy : {}
};

_.each(levels, function (data) {
	lookup.byLevel[data.level] = data;
	
	lookup.byDust[data.dust] = lookup.byDust[data.dust] || [];
	lookup.byDust[data.dust].push(data);
	
	lookup.byCandy[data.candy] = lookup.byCandy[data.candy] || [];
	lookup.byCandy[data.candy].push(data);
});


module.exports = {
	allLevels : function () {
		return levels.slice();
	},
	levelsByDust : function (dust) {
		dust = parseInt(dust, 10);
		return lookup.byDust[dust].slice();
	},
	levelsByCandy : function (candy) {
		candy = parseInt(candy, 10);
		return lookup.byCandy[candy].slice();
	}
};