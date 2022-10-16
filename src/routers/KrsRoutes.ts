import BaseRoutes from "./BaseRouter";
// Controller
import Krs from "../controllers/KrsController";
import CreateValidatorResult from "../middleware/validator/krs/CreateKrsValidator";
import UpdateValidatorResult from "../middleware/validator/krs/UpdateKrsValidator";

class KrsRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/", CreateValidatorResult, Krs.create);
    this.router.get("/", Krs.findAll);
    this.router.get("/:id", Krs.findOne);
    this.router.put("/:id", UpdateValidatorResult, Krs.update);
    this.router.delete("/:id", Krs.delete);
  }
}

export default new KrsRoutes().router;
