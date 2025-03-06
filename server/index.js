const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Blog = require('./models/blog');

const dBURI = 'mongodb+srv://george:pRUK5z7wuFRSoxJ1@hiraku.hgijy.mongodb.net/hirakuskies?retryWrites=true&w=majority';

mongoose.connect(dBURI)
  .then((result) => app.listen(5000))
  .catch((err) => console.error('MongoDB connection error:', err));

app.get('/blogs', (req, res) => {
    const blogs = new Blog({
        text: 'This is a blog post'
    })
    blogs.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => { console.log(err) })

    });
app.get('/allblogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => { console.log(err) })
}
)

app.get('/singleblog', (req, res) => {
    Blog.findById('60c8a7b4c6e7a00c7c8e2e6d')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => { console.log(err) })
}
)


  app.use('/', (req, res) => {
  res.send('Server is up and running');
});


