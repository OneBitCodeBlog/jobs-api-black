import { Candidate } from '../models'
import { Request, Response } from 'express'

const candidatesController = {
    index: async (req: Request, res: Response) => {
        const candidates = await Candidate.findAll()
        return res.json(candidates)
    },

    save: async (req: Request, res: Response) => {
        const { name, bio, email, phone, openToWork } = req.body

        const candidate = await Candidate.create({
            name,
            bio,
            email,
            phone,
            openToWork
        })

        return res.status(201).json(candidate)
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params
        const candidate = await Candidate.findByPk(id)
        return res.json(candidate)
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, bio, email, phone, openToWork } = req.body

        const [affectedRows, candidates] = await Candidate.update({
            name,
            bio,
            email,
            phone,
            openToWork
        }, {
            where: { id },
            returning: true
        })

        return res.json(candidates[0])
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        await Candidate.destroy({
            where: { id: id }
        })

        return res.status(204).send()
    }
}

export { candidatesController }