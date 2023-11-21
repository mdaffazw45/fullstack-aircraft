const { Aircraft } = require('../models'); // Assuming you have a User model
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
        const aircraftList = await Aircraft.findAll();
        return res.status(200).json(aircraftList);
      } catch (error) {
        return res.status(500).json({ error: 'Error retrieving Aircraft' });
      }
  };