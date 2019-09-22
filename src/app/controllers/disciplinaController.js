import disciplina from "../models/disciplina"

class disciplinaController {
    //GET
    async index(req,res) {
        try {
            const disciplinas = await disciplina.find()

            return res.status(200).json(disciplinas)
            }        
        catch (err) {
            return res.status(400).json({ error: err })
        }
    }

    // POST
    async store(req, res) {
        const { codigo } = req.body;

        const verification = await disciplina.findOne({ codigo });

        if (verification) {
          return res.status(400).json({ message: "Disciplina já cadastrada!" });
        }
        try {
          const disc = await disciplina.create(req.body);

          if (!disc) {
            return res.status(400).json({ message: "Código, Nome, Professor e Departamento são necessários " });
        }
        return res.status(201).json({ disc });

        } catch (err) {
          return res.status(400).json({ error: err });
        }
    }

    // UPDATE
    async update(req, res) {
        const discToUpdate = await disciplina.findOne({
          codigo: req.params.codigo
        });
    
        if (!discToUpdate) {
          return res.status(400).json({ error: "Disciplina não existe." });
        }
    
        const disc = await disciplina.updateOne(req.body);
    
        return res.status(201).json({ message: "Disciplina atualizada." });
      }

    // DELETE
    async delete(req, res) {
      const discToDelete = await disciplina.findOne({
        codigo: req.params.codigo
      });

      if (!discToDelete) {
        return res.status(400).json({ error: "Disciplina não existe." });
      }

      const disc = await disciplina.deleteOne({ codigo: req.params.codigo });

      return res.status(204).json({ message: "Disciplina deletada" });
  }
    
}

export default new disciplinaController();