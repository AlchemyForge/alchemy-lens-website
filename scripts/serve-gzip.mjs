import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3005;
const buildDir = join(__dirname, '..', 'build', 'client');

app.use(compression({ level: 6 }));
app.use(express.static(buildDir, {
  maxAge: '1h',
  etag: true,
}));

// SPA fallback
app.use((req, res) => {
  res.sendFile(join(buildDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running with gzip compression on http://localhost:${PORT}`);
});
