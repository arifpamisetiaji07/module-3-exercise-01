import express, { Request, Response, Application } from 'express';
import { PORT as port } from './config';

import expenseRoutes from './routes/user.routes';
import logger from './middlewares/logger';
import errorHandler from './middlewares/error.middleware';

const PORT = Number(port) || 8080;

const app: Application = express();

app.use(express.json());
app.use(logger);

//route
app.use('/expenses', expenseRoutes);

// Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server jalan di ${PORT}`)
})

