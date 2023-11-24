const { Aircraft , Airline } = require('../models'); // Assuming you have a User model
 // Adjust the path accordingly


exports.createAircraft = async (req,res) => {
    try {
        const {
            id,
            type,
            manufacturer,
            introduction_year,
            length,
            wingspan,
            height,
            cruising_speed,
            range,
            engine_type,
            engine_model,
            avionics,
            price,
            cost_per_hour
          } = req.body;

          const image_aircraft = req.file ? `http://localhost:4000/uploads/${req.file.filename}` : '';
          console.log(image_aircraft , ' image Aircraft')
  
        const newAircraft = await Aircraft.create({
            id,
            type,
            manufacturer,
            introduction_year,
            length,
            wingspan,
            height,
            cruising_speed,
            range,
            engine_type,
            engine_model,
            avionics,
            price,
            cost_per_hour,
            image_aircraft,
        })
        console.log(newAircraft , ' Add New Aircraft')
        res.status(201).json(newAircraft);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating aircraft' });
    }
}

exports.getAllAircrafts = async (req, res) => {
    try {
        const aircraftList = await Aircraft.findAll({
            include: [{
                model: Airline, // Replace 'db.Airline' with your Airline model import if it's different
                as: 'Airlines' // This 'as' key should match the alias used in your association if any
            }]
        });
        return res.status(200).json(aircraftList);
    } catch (error) {
        return res.status(500).json({ error: 'Error retrieving Aircraft' });
      }
  };

exports.getAircraftById = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the ID is passed in the request parameters
        const aircraft = await Aircraft.findByPk(id, {
            include: [{
                model: Airline, // Replace 'db.Airline' with your Airline model import if it's different
                as: 'Airlines' // This 'as' key should match the alias used in your association if any
            }]
        }); 
        
        if (!aircraft) {
            return res.status(404).json({ error: 'Aircraft not found' });
        }

        return res.status(200).json(aircraft);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error retrieving Aircraft by ID' });
    }
};

exports.editAircraftById = async (req, res) => {
    try {
      const { id } = req.params;
      const {
        type,
        manufacturer,
        introduction_year,
        length,
        wingspan,
        height,
        cruising_speed,
        range,
        engine_type,
        engine_model,
        avionics,
        price,
        cost_per_hour,
      } = req.body;
      
      console.log(req.body , 'reqbody backend')
      const image_aircraft = req.file
        ? `http://localhost:4000/uploads/${req.file.filename}`
        : req.body?.image_aircraft;
  
      const updatedAircraft = await Aircraft.update(
        {
          type,
          manufacturer,
          introduction_year,
          length,
          wingspan,
          height,
          cruising_speed,
          range,
          engine_type,
          engine_model,
          avionics,
          price,
          cost_per_hour,
          image_aircraft,
        },
        {
          where: { id },
        }
      );
  
      if (updatedAircraft[0] === 0) {
        return res.status(404).json({ error: 'Aircraft not found' });
      }
  
      return res.status(200).json({ message: 'Aircraft updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error updating aircraft' });
    }
  };

exports.deleteAircraftById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedCount = await Aircraft.destroy({
        where: { id },
      });
  
      if (deletedCount === 0) {
        return res.status(404).json({ error: 'Aircraft not found' });
      }
  
      return res.status(200).json({ message: 'Aircraft deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error deleting aircraft' });
    }
};
