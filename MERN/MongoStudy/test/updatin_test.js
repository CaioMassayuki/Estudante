const assert = require('assert')
const MarioChar = require('../models/mariochar')

// Describe Tests

describe('Updating Records', function () {
    var char
    beforeEach(function (done) {
        char = new MarioChar({
            name: 'Mario',
            weight: 50
        })

        char.save().then(function () {
            done()
        })
    })

    // Create tests
    it('Increments the weight by 1 database', function (done) {
        MarioChar.update({}, { $inc: { weight: 1 } }).then(function () {
            MarioChar.findOne({ name: 'Mario' }).then(function (record) {
                assert(record.weight === 51)
                done()
            })
        })
    })
})
