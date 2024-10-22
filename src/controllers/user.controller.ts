import { Response, Request, NextFunction } from "express";
import axios from "axios";

const API_URL = process.env.MOCK_API_URL;

async function getData(req: Request, res: Response, next: NextFunction) {
    try {
        const response = await axios.get(`${API_URL}`);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'GAGAL MENDAPAT DATA' });
        next(error)
    }
}
async function getDataById(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'GAGAL MENDAPAT DATA' });
        next(error)
    }
}

async function createNewExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const newExpense = req.body;
        const response = await axios.post(`${API_URL}`, newExpense);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'GAGAL MENAMBAH DATA' });
        next(error)
    }
}

async function updateExpense(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
        const updateExpense = req.body;
        const response = await axios.put(`${API_URL}/${id}`, updateExpense);
        res.json(response.data)
    } catch (error) {
        res.status(500).json({ message: 'GAGAL Update Data' });
        next(error)
    }
}

async function deleteExpense(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        res.json({ message: 'Expense deleted' });
    } catch (error) {
        res.status(500).json({ message: 'GAGAL Delete Data' });
        next(error)
    }
}


export {
    getData,
    getDataById,
    createNewExpense,
    updateExpense,
    deleteExpense,
}