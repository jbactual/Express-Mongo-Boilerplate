function Protect() {
    try {
        console.log('Protect Middleware');

    } catch (error) {
        console.log(error);
    }
}

module.exports = Protect;