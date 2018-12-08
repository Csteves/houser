require('dotenv').config();
const express = require('express');
const massive = require('massive');
const listingCtrl = require('./controller')

const app = express();
app.use( express.json());


massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db',dbInstance)
}).catch(err => console.log(err));

app.get(`/api/listings`, listingCtrl.read)
app.post(`/api/listings`,listingCtrl.create)
app.delete(`/api/listings/`,listingCtrl.delete)


const port = process.env.PORT || 4000;
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );