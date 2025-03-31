require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/fitwell-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('index', { posts: [] });
});

app.get('/categories', (req, res) => {
  res.render('categories');
});

app.get('/create-post', (req, res) => {
  res.render('create-post');
});

app.post('/posts', (req, res) => {
  // In a real app, save to database
  console.log('New post:', req.body);
  res.redirect('/');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});