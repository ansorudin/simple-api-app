import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const validate = [
  check("name").isString(),
  check("fakultas").isString(),
  check("jurusan").isString(),
  check("npm").isString(),
  check("address").isString(),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).send({ error: errors.array() });
    }
    next();
  },
];

export default validate;
