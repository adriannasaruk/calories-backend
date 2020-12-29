const express = require("express"); // npm i express

const server = express();

const PORT = 5000;
server.listen(PORT, () => console.log(`\n ** API on http://localhost:${PORT} ** \n`));

// to run server: node index.js