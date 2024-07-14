const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve static files (CSS, JavaScript, images)
app.use(express.static(path.join(__dirname, 'Config')));
 
// Serve index.html as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Config', 'linknest.html'));
});
 
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});