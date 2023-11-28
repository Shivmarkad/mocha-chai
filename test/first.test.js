const chai = require('chai')

const assert = chai.assert
const should = chai.should()
const expect = chai.expect
const { calculate, factorial } = require('../src/index.js')

// ***************** assert *************

describe('---Check Assert---',function(){
    let userName = 'Shiv';

    it('check type of variable--',function(){
        assert.typeOf(userName,'string');
    })
    it('check value of variable--',function(){
        assert.equal(userName,'Shiv');
    })
    it('check length of variable--',function(){
        assert.lengthOf(userName,4);
    })
})


// ***************** Should *************

describe('---Check should---',function(){
    let userName = 'Shiv';

    it('should check type of variable--',function(){
        userName.should.be.a('string')
    })
    it('should check value of variable--',function(){
        userName.should.equal('Shiv')
    })
    it('should check length of variable--',function(){
        userName.should.have.lengthOf(4)
    })
})

// ***************** expect *************

describe('---Expect Check ---',function(){
    let userName = 'Shiv';
    let details = {
        age: 24,
        role: 'DevOps Engg'
    }
    it('Expect check type of variable--',function(){
        expect(userName).be.a('string')
    })
    it('Expect check value of variable--',function(){
        expect(userName).equal('Shiv')
    })
    it('Expect check length of variable--',function(){
        expect(userName).have.lengthOf(4)
    })

    it('Expect check property of object--',function(){
        expect(details).to.have.property('age').to.be.a('number')
    })
    it('Expect check property of object--',function(){
        expect(details).to.have.all.keys('age','role')
    })
    it('Expect check for imported module --',function(){
        expect(calculate(2,5)).to.be.equal(7)
    })

    it('Expect check for imported module --',function(){
        expect(factorial(6)).to.be.equal(720)
    })
})