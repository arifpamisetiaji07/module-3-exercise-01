import { Router } from "express";
import {
    getData,
    getDataById,
    createNewExpense,
    updateExpense,
    deleteExpense,
} from '../controllers/user.controller';

const router = Router();

router.get('/', getData);
router.get('/:id', getDataById);
router.post('/', createNewExpense);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);
export default router;