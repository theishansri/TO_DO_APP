const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000


app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Port running on port ${PORT}`))

