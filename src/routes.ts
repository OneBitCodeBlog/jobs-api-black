import express from 'express'
import { candidatesController } from './controllers/candidates-controller'
import { companiesController } from './controllers/companies-controller'
import { jobsController } from './controllers/jobs-controller'

const router = express.Router()

router.get('/', (req, res) => res.json({ hello: 'Hello, world!' }))

router.get('/candidates', candidatesController.index)
router.post('/candidates', candidatesController.save)
router.get('/candidates/:id', candidatesController.show)
router.put('/candidates/:id', candidatesController.update)
router.delete('/candidates/:id', candidatesController.delete)

router.get('/companies', companiesController.index)
router.post('/companies', companiesController.save)
router.get('/companies/:id', companiesController.show)
router.put('/companies/:id', companiesController.update)
router.delete('/companies/:id', companiesController.delete)

router.get('/jobs', jobsController.index)
router.post('/jobs', jobsController.save)
router.get('/jobs/:id', jobsController.show)
router.put('/jobs/:id', jobsController.update)
router.delete('/jobs/:id', jobsController.delete)
router.post('/jobs/:id/addCandidate', jobsController.addCandidate)
router.post('/jobs/:id/removeCandidate', jobsController.removeCandidate)

export { router }