const app = require('./app');
const PORT = 3000

app.listen(PORT, () => {
    console.log("Connected to server on " + PORT);
})