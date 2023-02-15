import { Router } from "express";

const router = Router();

//Primer arguento es la ruta y el segundo argumento es una funcion con el request y el response
router.get("/", (req, res) => {
  res.send({ Data: "Aqui van los modelos" });
});

export { router };
