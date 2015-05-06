var expect = require('chai').expect;
var chai = require('chai')
var spies = require('chai-spies');
chai.use(spies);

// console.log('What did the buddhist ask the hot dog vendor? Make me one with everything.')

describe('Our first test', function () {
	it('Uses our first test', function () {
		expect(3*3).to.equal(9)
	})
})

// describe('Async test', function () {
// 	it('tests a set time out', function (done) {
// 		var start = new Date()
// 		setTimeout(function () {
// 			var duration = new Date() - start
// 			expect(duration).to.be.closeTo(1000, 50)
// 			console.log(duration)
// 			done()
// 		}, 1000)
// 	})
// })

describe('Spy test', function () {
	it('Will see if forEach will act on each variable', function () {
		var arr = [1, 2, 3, 4, 5]
		var iterator = function(number) {
			number * 2
		}
		var spy = chai.spy(iterator)
		arr.forEach(spy)
		expect(spy).to.have.been.called.exactly(5)
	})
})
