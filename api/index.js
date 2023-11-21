const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const { sequelize } = require('./models'); // Import your Sequelize instance
const bodyParser = require('body-parser');
const routes = require('./routes/index.js');
const cors = require('cors')
// Middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/uploads',express.static('uploads'));

app.use('/api', routes);


// Start the server and check database connection
async function startServer() {
    try {
      // Connect to the database using Sequelize
      await sequelize.authenticate();
      console.log('Database connection established successfully');
  
      // Start the Express.js server
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
  startServer();