const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'nav.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});

