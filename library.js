'use strict';

var winston = module.parent.require('winston'),
		Meta = module.parent.require('./meta'),

		Skeleton = {
			settings: {}
		};

Skeleton.init = function(data, callback) {
	winston.info("SKELETON - init called");
};

module.exports = Skeleton;