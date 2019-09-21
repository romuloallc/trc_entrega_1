import { Router } from "express"

import disciplinaController from "./app/controllers/disciplinaController"

const routes = new Router()

//GET
routes.get("/disciplinas", disciplinaController.index)
//POST
routes.post("/disciplinas", disciplinaController.store)
//PUT
//DELETE

export default routes;