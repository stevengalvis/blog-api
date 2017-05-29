const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const {BlogPosts} = require('./model');

const jsonParser = bodyParser.json();
const app = express();

//add some blog posts so there's databases
BlogPosts.create(
                'Python is a great first language',
                'Python is a very good scripting language',
                'Guido van Rossum');
BlogPosts.create(
                'Java is not fun',
                'Java is the first language I learned and I did not like it',
                'James Gosling');
BlogPosts.create('Javascript is interesting',
                'I like JavaScript because its simpler than Java',
                'Brendan Eich');

// when the root of this router is calld with GET, return
// all current Blog Posts
app.get('/blog-posts', (req, res) => {
    res.json(BlogPosts.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
