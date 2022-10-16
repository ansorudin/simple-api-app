import { Request, Response } from "express";
const db = require("../db/models");

class MahasiswaController {
  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, fakultas, npm, jurusan, address } = req.body;
      await db.mahasiswa.create({
        name,
        fakultas,
        npm,
        jurusan,
        address,
      });

      return res.status(201).send({
        message: "Create Mahasiswa Sukses",
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
      const listMahasiswa = await db.mahasiswa.findAll({
        attributes: ["id", "name"],
        include: ["mata_kuliah"],
      });

      return res.status(200).send({
        message: "List Mahasiswa",
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
      const mahasiswa = await db.mahasiswa.findByPk(id, {
        include: ["mata_kuliah"],
      });

      if (!mahasiswa) {
        return res.status(404).send({
          message: "Data not found",
          data: null,
          error: "Data not found",
        });
      }

      return res.status(200).send({
        message: "Mahasiswa",
        data: mahasiswa,
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
      const { name, fakultas, npm, jurusan, address } = req.body;
      const mahasiswa = await db.mahasiswa.findByPk(id);

      if (!mahasiswa) {
        return res.status(404).send({
          message: "Data mahasiswa not found",
          error: "Data not found",
        });
      }

      await db.mahasiswa.update(
        { name, fakultas, npm, jurusan, address },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).send({
        message: "Update Mahasiswa Sukses",
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
      await db.mahasiswa.destroy({
        where: {
          id,
        },
      });

      return res.status(200).send({
        message: "Delete Mahasiswa Sukses",
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

export default new MahasiswaController();
