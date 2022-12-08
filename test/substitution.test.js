// Write your tests here!
const {substitution} = require("../src/substitution")
const {expect}=require("chai")

describe("substitution tests",()=>{
    describe("error tests",()=>{
        it("should return false if the substitution alphabet is missing",()=>{
            const input = "dog"
            const actual = substitution(input)
            expect(actual).to.be.false
        })
        it("should return false if the subtitution alphabet is not 26 characters",()=>{
            const input = "dog"
            const alphabet = "asd"
            const actual= substitution(input,alphabet)
            expect(actual).to.be.false
        })
        it("should return false if the sub alphabet does not contain unique characters",()=>{
            const input = "dog"
            const alphabet = "assdfghjklqwertyuiopzxcvbnm"
            const actual=substitution(input,alphabet)
            expect(actual).to.be.false
        })
    })
    describe("encoding tests",()=>{
        it("should encode a message by using the given sub alphabet",()=>{
            const input="ab"
            const alphabet="asdfghjklqwertyuiopzxcvbnm"
            const actual = substitution(input,alphabet)
            expect(actual).to.equal("as")
        })
        it("should work with any kind of key with unique character",()=>{
            const input="ab"
            const alphabet="asdfghjklqwertyuiopzxcvbnm"
            const actual = substitution(input,alphabet)
            expect(actual).to.equal("as")
        })
        it("should preserve spaces",()=>{
            const input="a b"
            const alphabet="asdfghjklqwertyuiopzxcvbnm"
            const actual= substitution(input, alphabet)
            expect(actual).to.equal("a s")
        })
    })
    describe("decoding tests",()=>{
        it("should decode a message by using the given sub alphabet",()=>{
            const input="ab"
            const alphabet="asdfghjklqwertyuiopzxcvbnm"
            const encode=false
            const actual = substitution(input,alphabet,encode)
            expect(actual).to.equal("ax")
        })
        it("should work with any kind of key with unique character",()=>{
            const input="ab"
            const alphabet="asdfghjklqwertyuiopzxcvbnm"
            const encode=false
            const actual = substitution(input,alphabet,encode)
            expect(actual).to.equal("ax")
        })
        it("should preserve spaces",()=>{
            const input="a b"
            const alphabet="asdfghjklqwertyuiopzxcvbnm"
            const encode=false
            const actual= substitution(input, alphabet,encode)
            expect(actual).to.equal("a x")
        })
    })
})