import BaseRoutes from "./BaseRouter";
// Controller
import MataKuliah from "../controllers/MataKuliahController";
import CreateValidatorResult from "../middleware/validator/mata_kuliah/CreateMataKuliahValidator";
import UpdateValidatorResult from "../middleware/validator/mata_kuliah/UpdateMataKuliahValidator";

class MataKuliahRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/", CreateValidatorResult, MataKuliah.create);
    this.router.get("/", MataKuliah.findAll);
    this.router.get("/:id", MataKuliah.findOne);
    this.router.put("/:id", UpdateValidatorResult, MataKuliah.update);
    this.router.delete("/:id", MataKuliah.delete);
  }
}

export default new MataKuliahRoutes().router;
