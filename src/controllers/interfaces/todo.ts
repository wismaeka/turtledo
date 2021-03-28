import { Request, Response, NextFunction } from 'express'
export interface ITodoController{
    create(req: Request, res: Response ): Response | Promise<Response>
    update(req: Request, res: Response ): Response | Promise<Response>
    findAll(req: Request, res: Response ): Response | Promise<Response>
    findById(req: Request, res: Response ): Response | Promise<Response>
    delete(req: Request, res: Response ): Response | Promise<Response>
}