var password = {
    hash: function (password) {
        const crypto = require('crypto');
        const hash = crypto.createHash('sha256');

        hash.update(password);
        var p = hash.digest('hex');
        // console.log(['hashed password: ', p]);
        return p;
    },

    verify: function (password, hashedPassword) {
        const crypto = require('crypto');
        const hash = crypto.createHash('sha256');

        hash.update(password);
        var p = hash.digest('hex');
        // console.log(['password: ', password, 'hash: ', p, 'stored in DB: ', hashedPassword]);
        return p === hashedPassword;
    }
};

module.exports = password;