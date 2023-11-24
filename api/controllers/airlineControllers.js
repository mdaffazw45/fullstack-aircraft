const { Airline } = require('../models');

exports.createAirline = async (req, res) => {
    try {
      const { name, country, aircraftId } = req.body;
      const newAirline = await Airline.create({ name, country, aircraftId });
      res.status(201).send(newAirline);
    } catch (error) {
      res.status(400).send(error);
    }
  };

exports.getAllAirlines = async (req, res) => {
    try {
      const airlines = await Airline.findAll();
      res.status(200).send(airlines);
    } catch (error) {
      res.status(400).send(error);
    }
  };

exports.getAirlineById = async (req, res) => {
    try {
      const airline = await Airline.findByPk(req.params.id);
      if (airline) {
        res.status(200).send(airline);
      } else {
        res.status(404).send("Airline not found");
      }
    } catch (error) {
      res.status(400).send(error);
    }
};

exports.updateAirline = async (req, res) => {
    try {
      const { name, country, aircraftId } = req.body;
      const updated = await Airline.update(
        { name, country, aircraftId },
        { where: { id: req.params.id } }
      );
  
      if (updated) {
        const updatedAirline = await Airline.findByPk(req.params.id);
        res.status(200).send(updatedAirline);
      } else {
        res.status(404).send("Airline not found");
      }
    } catch (error) {
      res.status(400).send(error);
    }
  };

exports.deleteAirline = async (req, res) => {
    try {
      const deleted = await Airline.destroy({ where: { id: req.params.id } });
      if (deleted) {
        res.status(204).send("Airline deleted");
      } else {
        res.status(404).send("Airline not found");
      }
    } catch (error) {
      res.status(400).send(error);
    }
};
  
  