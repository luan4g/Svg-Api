const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const svgs = await knex("svgs").select("*");

    const serializedSvgs = svgs.map((svg) => {
      return {
        id: svg.id,
        title: svg.title,
        svg_url: `http://localhost:3333/uploads/${svg.image}`,
      };
    });

    return res.json(serializedSvgs);
  },
};
