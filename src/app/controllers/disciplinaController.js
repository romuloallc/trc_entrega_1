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
          const disciplina = await disciplina.create(req.body);

          if (!disciplina) {
            return res.status(400).json({ message: "Código, Nome, Professor e Departamento são necessários " });
        }
        return res.status(201).json({ disciplina });

        } catch (err) {
          return res.status(400).json({ error: err });
        }
    }
}

export default new disciplinaController();