const path = require('path');
const express =require('express');
const sql = require('./config/connection.js');

//middleware 
const app = express();
const PORT = process.envPORT || 8080