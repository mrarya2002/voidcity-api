const router = require("express").Router();
const Movie = require('../modal/moviesModal');

// Create a new movie
router.post('/movies', async (req, res) => {
    try {
      console.log(req.body)
      const { title,description, year,rating,poster,genre,ott,category,hindiUrl,englishUrl } = req.body;
      const movies =new Movie({ title,description, year,rating,poster,genre,ott,category,hindiUrl,englishUrl });
      await movies.save()
      res.status(201).json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  });

// get all movies
router.get('/movies',async(req,res)=>{
    try {
        const movies = await Movie.find();
        res.json(movies);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}) 

// update movie details
router.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {title,description, year,rating,poster,genre,ott,category,hindiUrl,englishUrl } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title,description, year,rating,poster,genre,ott,category,hindiUrl,englishUrl },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: 'Error updating todo' });
  }
});

// Get all movies with their genres
router.get('/moviesByGenre/:genre', async (req, res) => {
    try {
      const genre = req.params.genre;
      const movies = await Movie.find({ genres: genre });
      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});
 

module.exports = router;