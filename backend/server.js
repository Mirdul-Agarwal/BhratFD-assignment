require("dotenv").config();

const app = require("./app");


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import adminRouter from './admin.js';

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(adminRouter);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
