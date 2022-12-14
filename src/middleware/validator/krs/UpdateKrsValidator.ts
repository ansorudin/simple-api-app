import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validate = [
  check("mahasiswaId").isInt(),
  check("mataKuliahId").isInt(),
  check("id").isInt(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send({ error: errors.array() });
    }
    next();
  },
];

export default validate;
