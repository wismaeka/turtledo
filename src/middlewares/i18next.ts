import { Request, Response, NextFunction } from 'express'

export async function changeLanguage(req: Request, res: Response, next: NextFunction) {
    await req.i18n.changeLanguage(req.headers['accept-language'])
    next()
}