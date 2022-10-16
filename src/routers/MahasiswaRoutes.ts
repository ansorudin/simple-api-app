import BaseRoutes from "./BaseRouter";
// Controller
import Mahasiswa from "../controllers/MahasiswaController";
import createValidationResult from "../middleware/validator/mahasiswa/CreateMahasiswaValidator";
import updateValidationResult from "../middleware/validator/mahasiswa/UpdateMahasiswaValidator";

class MahasiswaRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/", createValidationResult, Mahasiswa.create);
    this.router.get("/", Mahasiswa.findAll);
    this.router.get("/:id", Mahasiswa.findOne);
    this.router.put("/:id", updateValidationResult, Mahasiswa.update);
    this.router.delete("/:id", Mahasiswa.delete);
  }
}

export default new MahasiswaRoutes().router;
