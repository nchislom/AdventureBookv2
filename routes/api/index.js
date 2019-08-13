const router = require("express").Router();
const userRoutes = require("./user");
const storyRoutes = require("./story");
const statsRoutes = require("./stats");
const seedRoute = require ("./seed");

// API route - info page
router.get("/", (req, res) => {
  res.send(`
    <h1>API Reference</h1>
    <ul>
      <li>/api/seed/&lt;key&gt; - Seeds database with new story data</li>
      <li>/api/stats - Returns stats regarding 
      <li>/api/story/all - Returns complete story JSON data</li>
      <li>/api/story/&lt;chapter number&gt; - Returns requested chapter as JSON</li>
    </ul>
  `);
});

// User routes (/api/user)
router.use("/user", userRoutes);

// Story routes (/api/story)
router.use("/story", storyRoutes);

// States routes (/stats)
router.use("/stats", statsRoutes);

// Database seeder (/api/seed)
router.use("/seed", seedRoute);

// Send every other request to the React app
// app.get("*", (req, res) => {
//   console.log('all route hit');
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

module.exports = router;