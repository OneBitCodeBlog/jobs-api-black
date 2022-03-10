import { Request, Response } from 'express'
import { Company } from '../models/company'

const companiesController = {
    index: async (req: Request, res: Response) => {
        const companies = await Company.findAll()
        return res.json(companies)
    }
}

export { companiesController }