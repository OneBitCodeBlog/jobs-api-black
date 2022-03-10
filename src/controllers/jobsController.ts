import { Request, Response } from 'express'
import { Job } from '../models'

const jobsController = {
    index: async (req: Request, res: Response) => {
        const jobs = await Job.findAll()
        return res.json(jobs)
    },

    save: async (req: Request, res: Response) => {
        const { title, description, limitDate, companyId } = req.body

        const job = await Job.create({
            title,
            description,
            limitDate,
            companyId,
        })

        return res.status(201).json(job)
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params
        const job = await Job.findByPk(id, { include: 'company' })
        const candidatesCount = await job?.countCandidates()
        return res.json({ ...job?.get(), candidatesCount })
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { title, description, limitDate, companyId } = req.body

        const [affectedRows, jobs] = await Job.update({
            title,
            description,
            limitDate,
            companyId,
        }, {
            where: { id },
            returning: true
        })

        return res.json(jobs[0])
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        await Job.destroy({
            where: { id: id }
        })

        return res.status(204).send()
    },

    addCandidate: async (req: Request, res: Response) => {
        const jobId = req.params.id
        const { candidateId } = req.body

        const job = await Job.findByPk(jobId)
        await job?.addCandidate(candidateId)

        return res.status(201).send()
    },

    removeCandidate: async (req: Request, res: Response) => {
        const jobId = req.params.id
        const { candidateId } = req.body

        const job = await Job.findByPk(jobId)
        await job?.removeCandidate(candidateId)

        return res.status(201).send()
    }
}

export { jobsController }