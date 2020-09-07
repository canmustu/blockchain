import { Application } from "express";

module.exports = (app: Application) => {

  app.get('/', (req, res) => {
    res.send({ success: true });
  });

};