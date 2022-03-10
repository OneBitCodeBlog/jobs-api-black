import { Request, Response } from 'express'
import { Company } from '../models/company'

const companiesController = {
    index: async (req: Request, res: Response) => {
        const companies = await Company.findAll()
        return res.json(companies)
    },

    save: async (req: Request, res: Response) => {
        const { name, bio, website, email } = req.body

        const company = await Company.create({
            name,
            bio,
            website,
            email,
        })

        return res.status(201).json(company)
    },

    show: async (req: Request, res: Response) => {
        const { id } = req.params
        const company = await Company.findByPk(id)
        return res.json(company)
    },

    update: async (req: Request, res: Response) => {
        const { id } = req.params
        const { name, bio, website, email } = req.body

        const [affectedRows, companies] = await Company.update({
            name,
            bio,
            website,
            email,
        }, {
            where: { id },
            returning: true
        })

        return res.json(companies[0])
    },

    delete: async (req: Request, res: Response) => {
        const { id } = req.params

        await Company.destroy({
            where: { id: id }
        })

        return res.status(204).send()
    }
}

export { companiesController }