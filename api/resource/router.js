// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')

const router = express.Router()


// - [ ] `[POST] /api/resources`
//   - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

router.post('/', async (req, res, next) => {
    try {
        const resource = await Resource.create(req.body)
        res.status(201).json({
          message: 'success! You have created a new resource',
          resource,
        })
      } catch (err) {
        next(err)
      }
})

// - [ ] `[GET] /api/resources`
//   - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

router.get('/', async (req, res, next) => {
    try {
        const data = await Resource.get()
        res.json(data)
      } catch (err) {
        next(err)
      }
})

module.exports = router