import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

import authRoutes from './routes/auth.js';
import todoRoutes from './routes/todos.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
app.use(cors());

const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes);

// Test <Route></Route>
app.get('/api/ping', (req, res) => {
  res.send('pong');
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    // Remove the deprecated options
    // useNewUrlParser: true,  // Remove this line
    // useUnifiedTopology: true,  // Remove this line
  })
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error: ', err);
  });

// Start the server
// Use the PORT variable from the environment or default to 5000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
