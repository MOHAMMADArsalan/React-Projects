jest.dontMock('../js/generate-password.js')
const generatePassword = require('../js/generate-password.js')
let password, password2, pattern = /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\\|\[\]\/'\,\.\`\~]{8,16}$/
describe('method generatePassword', function () {
    it('returns a generated password of the set pattern', () => {
        password = generatePassword()
        expect(password).toMatch(pattern)
    })
    it('return a new value different from the previous one', () => {
        password2 = generatePassword()
        expect(password2).not.toEqual(password)
    })
})