const express = require('express');
const logger= require('./logger');

const app = express();
app.use(express.json());

app.post('/v1/sample/intro',(req,res) => {
    logger.info('--- Request received at /v1/sample/intro ---');
    logger.info(`Headers: ${JSON.stringify(req.headers,null,2)}`);

    res.json({
        name:"sandeep",
        age: 29,
        profession: " Software Developer",
        city: "bangalore",
        country: "india",
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    logger.info('✅ Winston log: request received');

});