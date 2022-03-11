import { Candidate } from '../models'
import { Request, Response } from 'express'

const candidatesController = {
    index: async (req: Request, res: Response) => {
        try {
            
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
        const candidates = await Candidate.findAll()
        return res.json(candidates)
    },

    save: async (req: Request, res: Response) => {
        const { name, bio, email, phone, openToWork } = req.body


        try {
            const candidate = await Candidate.create({
                name,
                bio,
                email,
                phone,
                openToWork
            })
    
            return res.status(201).json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params


        try {
            const candidate = await Candidate.findByPk(id, { include: 'jobs' })
            return res.json(candidate)
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, bio, email, phone, openToWork } = req.body


        try {
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
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params


        try {
            await Candidate.destroy({
                where: { id: id }
            })
    
            return res.status(204).send()
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message })
            }
        }
    }
}

export { candidatesController }