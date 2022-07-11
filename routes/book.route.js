import express from "express";
import { getResult } from '../controllers/book.controller.js';

export const bookRouter = express.Router();

bookRouter.get('/', (req, res) => getResult(req, res));