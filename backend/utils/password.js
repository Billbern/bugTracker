function generatePassword(){
    return window.crypto.getRandomValues(new BigUint64Array(1))[0].toString(36)
}

module.exports = generatePassword