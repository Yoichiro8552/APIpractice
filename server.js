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
  const id = req.params.id;
  const targetbook = book.find((onebook) => onebook.id === Number(id));
  const beforetitle = targetbook.title;
  const beforeauthor = targetbook.author;

  if (!targetbook) {
    return res.status(404).json({ message: '本が見つかりません' });
  }

  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'タイトルと著者名を入力してください' });
  }

  targetbook.title = title;
  targetbook.author = author;

  const message = `IDが${id}でタイトルが「${beforetitle}」、著者が「${beforeauthor}」の本を、タイトルが「${targetbook.title}」、著者が「${targetbook.author}」の本に変更しました。`;

  res.status(200).json({
    message,
    book: targetbook
  });
});

app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const targetbookIndex = book.findIndex((onebook) => onebook.id === Number(id));

  if (targetbookIndex === -1) {
    return res.status(404).json({ message: '本が見つかりません' });
  }

  const deletedbook = book.splice(targetbookIndex, 1)[0];
  const title = deletedbook.title;
  const author = deletedbook.author;
  const message = `IDが${id}の本のデータを削除しました。本のタイトルは「${title}」で著者は「${author}」です。`;

  res.status(200).json({ message });
});

app.listen(port, () => {
  console.log(`繋がりました:http://localhost:${port}`);
});
