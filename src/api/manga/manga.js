const restful = require('node-restful');
const mongoose = restful.mongoose;

const mangaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    note: { type: Number, min:0, max: 5, required: [true, 'Informe a nota para o mangá'] },
    status: {
        type: String, required: false, uppercase: true,
        enum: ['COMPLETO', 'LANÇANDO', 'PREVISTO']
    }
})

module.exports = restful.model('Manga', mangaSchema);