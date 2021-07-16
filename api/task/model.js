// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    create
}

async function get() {
    const records = await db('tasks')
    return records
}

async function create(task) {
    const [id] = await db('tasks').insert(task)
    const newTask = await get(id)
    return newTask 
}