import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";
import MahasiswaRoutes from "./routers/MahasiswaRoutes";
import MataKuliahRoutes from "./routers/MataKuliahRoutes";
import KrsRoutes from "./routers/KrsRoutes";

export default class App {
  public app: Application;

  constructor() {
    this.app = express();
    dotenv();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route("/api/v1").get((req: Request, res: Response) => {
      res.send("Welcome to API Student");
    });
    this.app.use("/api/v1/mahasiswa", MahasiswaRoutes);
    this.app.use("/api/v1/mata-kuliah", MataKuliahRoutes);
    this.app.use("/api/v1/krs", KrsRoutes);
  }
}

const PORT: number = 8000;
const app = new App().app;
app.listen(PORT, () => {
  console.log(`Welcome to API, anda berada di port ${PORT}`);
});
