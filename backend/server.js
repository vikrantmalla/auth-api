import express from 'express';
import dotenv  from 'dotenv';

// Load environment variables from a .env file into process.env.
dotenv.config();

const port = process.env.PORT || 5000;

// Create an instance of the Express application.
const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(port, () => console.log(`Server started on port ${port}`))

