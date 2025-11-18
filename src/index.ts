import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import userRoutes from './routes/user.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('🚀 API Node.js avec TypeScript fonctionne !');
});

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
