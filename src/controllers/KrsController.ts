import { Request, Response } from "express";
const db = require("../db/models");

class KrsController {
  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { mahasiswaId, mataKuliahId } = req.body;
      await db.krs.create({
        mahasiswaId,
        mataKuliahId,
      });

      return res.status(201).send({
        message: `Create KRS Mahasiswa id ${mahasiswaId} Sukses`,
        data: null,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error,
      });
    }
  };

  findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const listMahasiswa = await db.krs.findAll({
        include: [
          { model: db.mahasiswa, attributes: ["name", "npm", "jurusan"] },
          { model: db.mata_kuliah, attributes: ["name", "sks"] },
        ],
      });

      return res.status(200).send({
        message: "List KRS",
        data: listMahasiswa,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error,
      });
    }
  };

  findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const krs = await db.krs.findByPk(id);

      if (!krs) {
        return res.status(404).send({
          message: "Data not found",
          data: null,
          error: "Data not found",
        });
      }

      return res.status(200).send({
        message: "Get KRS Sukses",
        data: krs,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error,
      });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { mahasiswaId, mataKuliahId } = req.body;
      const krs = await db.krs.findByPk(id);

      if (!krs) {
        return res.status(404).send({
          message: "Data krs not found",
          error: "Data not found",
        });
      }

      await db.mahasiswa.update(
        { mahasiswaId, mataKuliahId },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).send({
        message: "Update KRS Sukses",
        data: null,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error,
      });
    }
  };
  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      await db.krs.destroy({
        where: {
          id,
        },
      });

      return res.status(200).send({
        message: "Delete KRS Sukses",
        data: null,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        error,
      });
    }
  };
}

export default new KrsController();
