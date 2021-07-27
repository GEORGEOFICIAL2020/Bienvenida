const express = require('express');

const app = express();

const port = 3030;


app.get('/', (req, res) => {


    res.send('En la vida hay momentos que por sí mismos son especiales, pero siempre es mejor si puedes compartirlo con las personas a las que quieres. Por eso te agradezco que hoy estés aquí. ¡Bienvenido!');
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
process.env.RUNKIT_ENDPOINT_URL;
