exports.seed = async function (knex) {
  return await knex("svgs").insert([
    { title: "Pin", image: "pin.svg" },
    { title: "Polaroid", image: "polaroid.svg" },
    { title: "Frame", image: "polaroid_frame.svg" },
    { title: "Rocket", image: "rocket.svg" },
    { title: "Sliders-h", image: "sliders-h.svg" },
    { title: "Sparkles", image: "sparkles.svg" },
  ]);
};
