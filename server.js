const express = require('express');
const app = express();
const port = 3000;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const book = [
  { id: 1, title: 'マスカレード・ホテル', author: '東野圭吾' },
  { id: 2, title: '人間失格', author: '太宰治' },
  { id: 3, title: 'そして誰もいなくなった', author: 'アガサ・クリスティ' },
  { id: 4, title: 'ノルウェイの森', author: '村上春樹' }
];

app.use(express.json());

app.get('/books', (_req, res) => {
  res.json(book);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: book.length + 1, title, author };
  book.push(newBook);
  res.status(201).json({ message: '本が追加されました' });
});

app.put('/books/:id', (req, res) => {
  const targetbook = book.find((onebook) => onebook.id === Number(req.params.id));

  if (!targetbook) {
    return res.status(404).json({ message: '本が見つかりません' });
  }

  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'タイトルと著者名を入力してください' });
  }

  targetbook.title = title;
  targetbook.author = author;

  res.json(targetbook);
});

app.delete('/books/:id', (req, res) => {
  const targetbookIndex = book.findIndex((onebook) => onebook.id === Number(req.params.id));

  if (targetbookIndex === -1) {
    return res.status(404).json({ message: '本が見つかりません' });
  }

  book.splice(targetbookIndex, 1);

  res.json({ message: '本が削除されました' });
});

app.listen(port, () => {
  console.log(`繋がりました:http://localhost:${port}`);
});
