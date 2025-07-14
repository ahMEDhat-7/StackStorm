import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve React static files
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint
app.get('/api/hello', (_, res) => {
  res.json({ message: 'Hello from backend' });
});

// Fallback to index.html for React routes
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
