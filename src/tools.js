module.exports = {
    sleep (millionseconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true)
            }, millionseconds)
        })
    }
}