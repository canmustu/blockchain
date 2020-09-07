import express from 'express';

const app = express();
const port = 3000;



app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});

app.listen(port, () => {
  console.log('---------------------------------------------------');
  console.log(`Server is listening on port ${port}!`);
  console.log('---------------------------------------------------');
});