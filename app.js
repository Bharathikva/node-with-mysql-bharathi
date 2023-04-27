const express = require('express');
// const cors = require('cors');
// const middleware=require('./middleware');
const app = express();

// app.use(cors({ origin: "*", }));
app.use(express.json());
// app.use(middleware);

require('./src/router/user')(app);           // user module



app.listen(8008, () => {
    console.log(`server Started At http://localhost:${8008}`);
});