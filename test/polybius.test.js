// Write your tests here!
const {polybius}=require("../src/polybius")
const {expect}=require("chai")

describe("polybius tests",()=>{
    describe("encoding tests",()=>{
        it("should encode a message by translating each letter to number pairs",()=>{
            const input="no"
            const actual = polybius(input)
            expect(actual).to.equal("3343")
        })
        it("should translate both 'i' and 'j' to 42",()=>{
            const input= "iaj"
            const actual= polybius(input)
            expect(actual).to.equal("421142")
        })
        it("should leave spaces as is",()=>{
            const input="a a"
            const actual=polybius(input)
            expect(actual).to.equal("11 11")
        })
    })
    describe("decoding tests",()=>{
        it("should decode a message by translating each pair of numbers into a letter", ()=>{
            const input= "1111"
            const encode=false
            const actual= polybius(input,encode)
            expect(actual).to.equal("aa")
        })
        it("should translate 42 to both 'i' and 'j'",()=>{
            const input="4242"
            const encode=false
            const actual= polybius(input,encode)
            expect(actual).to.equal("(i/j)(i/j)")
        })
        it("should leave spaces as is",()=>{
            const input= "11 11"
            const encode=false
            const actual=polybius(input,encode)
            expect(actual).to.equal("a a")
        })
        it("should return false if the length of all numbers is odd",()=>{
            const input="111"
            const encode=false
            const actual= polybius(input,encode)
            expect(actual).to.be.false
        })
    })
})
