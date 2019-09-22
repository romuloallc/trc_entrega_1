import { Router } from "express"

import disciplinaController from "./app/controllers/disciplinaController"

const routes = new Router()

//GET
routes.get("/disciplinas", disciplinaController.index)
//POST
routes.post("/disciplinas", disciplinaController.store)
//PUT
routes.put("/disciplinas/:codigo", disciplinaController.update)
//DELETE
routes.delete("/disciplins/:codigo", disciplinaController.delete)

export default routes;