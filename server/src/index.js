import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});

export default app;
