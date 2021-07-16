// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

// - [ ] `[POST] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

router.post('/', async (req, res, next) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({
          message: 'success! You have created a new task',
          task,
        })
      } catch (err) {
        next(err)
      }
})

// - [ ] `[GET] /api/tasks`
//   - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Each task must include `project_name` and `project_description`
//   - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

router.get('/', async (req, res, next) => {
    try {
        const data = await Task.get()
        res.json(data)
      } catch (err) {
        next(err)
      }
})

module.exports = router