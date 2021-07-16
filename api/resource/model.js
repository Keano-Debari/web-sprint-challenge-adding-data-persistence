// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

async function get() {
    const records = await db('resources')
    return records
}

async function create(resource) {
    const [id] = await db('resources').insert(resource)
    const newResource = await get(id)
    return newResource 
}