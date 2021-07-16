// build your `/api/projects` router here
const express = require("express");
const Project = require('./model')

const router = express.Router();

// - [ ] `[POST] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

router.post('/', async (req, res, next) => {
    try {
        const project = await Project.create(req.body)
        res.status(201).json({
          message: 'success! You have created a new project',
          project,
        })
      } catch (err) {
        next(err)
      }
})

// - [ ] `[GET] /api/projects`
//   - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//   - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

router.get('/', async (req, res, next) => {
    try {
        const data = await Project.get()
        res.json(data)
      } catch (err) {
        next(err)
      }
})

module.exports = router