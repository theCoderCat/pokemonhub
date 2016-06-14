var configs = {
    appName: "PokemonHub",
    mongoConfig: {
        enable: true,
        location: 'mongodb://127.0.0.1:27017/' + this.appName
    },
}

module.exports = configs;
