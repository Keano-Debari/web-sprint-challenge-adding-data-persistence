// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

async function get() {
    const records = await db('projects')
    return records
}

async function create(project) {
    const [id] = await db('projects').insert(project)
    const newProject = await get(id)
    return newProject 
}