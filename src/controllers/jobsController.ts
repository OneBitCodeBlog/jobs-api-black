import { Request, Response } from 'express'
import { Job } from '../models'

const jobsController = {
    index: async (req: Request, res: Response) => {
        const jobs = await Job.findAll()
        return res.json(jobs)
    }
}

export { jobsController }