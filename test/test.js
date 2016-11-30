var assert = require('assert');
var tjs = require('../TeslaJS');

// set these in your environment before testing
var user = process.env.TESLAJS_USER;
var pass = process.env.TESLAJS_PASS;

process.env.TESLAJS_SERVER || process.exit(1);

describe('TeslaJS', function () {
    var options = {authToken: "abc123"};
    this.timeout(3000);

	describe('#login()', function() {
		it('should succeed with valid user and pwd', function(done) {
			tjs.login(user, pass, function(result) {
				if (result.response.statusCode == 200) {
				    options.authToken = result.authToken;
                    done();
				} else {
				    done(result.response.statusMessage);
				}
			});
		});
//		it('should fail with invalid pwd', function(done) {
//			tjs.login(user, 'badpassword', function(result) {
//				if (result.response.statusCode == 200) {
//					done(result.response.statusMessage);
//				} else {
//					done();
//				}
//			});
	    //		});
	});

	describe('#vehicles()', function () {
	    it('should succeed enumerating vehicles', function (done) {
	        tjs.vehicles(options, function (result) {
	            if (result.vehicle_id) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#vehicleState()', function () {
	    it('should return vehicle state', function (done) {
	        tjs.vehicleState(options, function (result) {
	            if (result.car_version) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#climateState()', function () {
	    it('should return climate state', function (done) {
	        tjs.climateState(options, function (result) {
	            if (result.inside_temp) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#driveState()', function () {
	    it('should return drive state', function (done) {
	        tjs.driveState(options, function (result) {
	            if (result.heading) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#chargeState()', function () {
	    it('should return charge state', function (done) {
	        tjs.chargeState(options, function (result) {
	            if (result.est_battery_range) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#guiSettings()', function () {
	    it('should return gui settings', function (done) {
	        tjs.guiSettings(options, function (result) {
	            if (result.gui_distance_units) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#mobileEnabled()', function () {
	    it('should return mobile enabled', function (done) {
	        tjs.mobileEnabled(options, function (result) {
	            if (result) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#honkHorn()', function () {
	    it('should return true', function (done) {
	        tjs.honkHorn(options, function (result) {
	            if (result) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});

	describe('#flashLights()', function () {
	    it('should return true', function (done) {
	        tjs.flashLights(options, function (result) {
	            if (result) {
	                done();
	            } else {
	                done(result.response.statusMessage);
	            }
	        });
	    });
	});
});