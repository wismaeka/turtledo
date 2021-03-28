import { Router } from "express";
import IRouter from './interfaces/routes'
abstract class BaseRoutes implements IRouter{ 
    public router: Router

    constructor(){
        this.router = Router()
    }
    abstract routes():IRouter
}

export default BaseRoutes