const express = require('express');
const app = express();
const port = process.env.PORT || 7777;
const path = require('path');

// https://www.npmjs.com/package/multer
const multer  = require('multer');

///// Middleware /////
app.use(express.static(path.join(__dirname, 'public')));

///// Routes /////

// Home Page //
app.get('/', (req, res) => {
    res.sendFile('./public.index.html')
})

app.post('/', multer().single('upload'), (req, res) => {
    res.json({ originalName: req.file.originalname, size: req.file.size })
})

///// Server Start /////
app.listen(port, () => {
    console.log('listening on port ', port)
})