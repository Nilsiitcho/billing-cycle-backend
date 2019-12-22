const Manga = require('./manga')
const errorHandler = require('../common/errorHandler')

Manga.methods(['get', 'post', 'put', 'delete'])
Manga.updateOptions({ new: true, runValidators: true })
Manga.after('post', errorHandler).after('put', errorHandler)

Manga.route('count', (req, res, next) => {
    Manga.count((error, value) => {
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json({ value })
        }
    })
})

module.exports = Manga