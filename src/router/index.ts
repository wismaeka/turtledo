import { Router } from "express";
import IRouter from "./interfaces/routes";

class IndexRoutes {
    public router: Router

    constructor(
        private todoRouter : IRouter
    ){
        this.router = Router()
        this.routes()
    }
    protected routes(): void {
        this.router.use('/turtledo', this.todoRouter.router)
    }
}

export default IndexRoutes