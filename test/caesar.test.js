// Write your tests here!
const {expect}= require("chai")
const {caesar} = require("../src/caesar")

describe("all Ceasar tests", ()=>{
    describe("error tests", ()=>{
        it("should return false if the shift amount is 0", ()=>{
        const message="dog"
        const shift = 0
        const actual= caesar(message,shift)
       expect(actual).to.be.false
        })
        it ("should return false if the shift amount is above 25", ()=>{
        const message="dog"
        const shift = 26
        const actual = caesar(message, shift)
        expect(actual).to.be.false
        })
        it("should return false if the shift amount is less than -25", ()=>{
        const message="dog"
        const shift= -26
        const actual= caesar(message,shift)
        expect(actual).to.be.false
        })
    })
    describe("encoding tests",()=>{
        it("should encode a message by shifting the letters",()=>{
        const input="dog"
        const shift=3
        const actual= caesar(input,shift)
        expect(actual).to.equal("grj")
        })
        it("should leaves spaces and other symbols as is",()=>{
        const input="a dog"
        const shift=3
        const actual=caesar(input,shift)    
        expect(actual).to.equal("d grj")
        })
        it("should ignore capital letters",()=>{
        const input="Dog"
        const shift=3
        const actual= caesar(input,shift)
        expect(actual).to.equal("grj")
        })
        it("should appropriately handle letters at the end of the alphabet",()=>{
        const input="Zog"
        const shift=3
        const actual=caesar(input,shift)    
        expect(actual).to.equal("crj")
        })
        it("should allow for a negative shift that will shift to the left",()=>{
        const input="dog"
        const shift=-1
        const actual=caesar(input,shift)    
        expect(actual).to.equal("cnf")
        })
    })
    describe("decoding tests",()=>{
        it("should encode a message by shifting the letters",()=>{
            const input="dog"
            const shift=3
            const actual= caesar(input,shift)
            expect(actual).to.equal("grj")
            })
            it("should leaves spaces and other symbols as is",()=>{
            const input="a dog"
            const shift=3
            const actual=caesar(input,shift)    
            expect(actual).to.equal("d grj")
            })
            it("should ignore capital letters",()=>{
            const input="Dog"
            const shift=3
            const actual= caesar(input,shift)
            expect(actual).to.equal("grj")
            })
            it("should appropriately handle letters at the end of the alphabet",()=>{
            const input="Zog"
            const shift=3
            const actual=caesar(input,shift)    
            expect(actual).to.equal("crj")
            })
            it("should allow for a negative shift that will shift to the left",()=>{
            const input="dog"
            const shift=-1
            const actual=caesar(input,shift)    
            expect(actual).to.equal("cnf")
            })  
    })
})