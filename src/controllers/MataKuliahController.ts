import { Request, Response } from "express";
const db = require("../db/models");

class MataKuliah {
  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, sks } = req.body;
      await db.mata_kuliah.create({
        name,
        sks,
      });

      return res.status(201).send({
        message: "Create Mata Kuliah Sukses",
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
      const listMataKuliah = await db.mata_kuliah.findAll();

      return res.status(200).send({
        message: "List Mata Kuliah",
        data: listMataKuliah,
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
      const mataKuliah = await db.mata_kuliah.findByPk(id);

      if (!mataKuliah) {
        return res.status(404).send({
          message: "Data not found",
          data: null,
          error: "Data not found",
        });
      }

      return res.status(200).send({
        message: `Get Mata Kuliah id ${id} sukses`,
        data: mataKuliah,
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
      const { name, sks } = req.body;
      const mahasiswa = await db.mata_kuliah.findByPk(id);

      if (!mahasiswa) {
        return res.status(404).send({
          message: "Data mahasiswa not found",
          error: "Data not found",
        });
      }

      await db.mata_kuliah.update(
        { name, sks },
        {
          where: {
            id,
          },
        }
      );

      return res.status(200).send({
        message: "Update Mata Kuliah Sukses",
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
      await db.mata_kuliah.destroy({
        where: {
          id,
        },
      });

      return res.status(200).send({
        message: "Delete Mata Kuliah Sukses",
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

export default new MataKuliah();
