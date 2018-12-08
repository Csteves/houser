const listings = [];

module.exports = {

    read: (req,res) => {
        console.log('hello from read');
        const dbInstance = req.app.get('db');
        dbInstance.read_listings().then(listing => res.status(200).send( listing ))
        .catch(err => {
            res.status(500).send({errorMessage: "Opps! Something went wrong."});
            console.log(err);
        })
    },
    create: (req,res)=>{
        console.log('hello from create')
        console.log(req.body);
        const dbInstance = req.app.get('db');
        const {name,address,city,state,zip,image,mortgage,rent} = req.body;
        dbInstance.create_listing(name,address,city,state,zip,image,mortgage,rent)
        .then((listing)=> res.status(200).send(listing))
        .catch((err) =>{
            res.status(500).send({errorMessage: "Something went Wrong"});
            console.log(err)
        })
    },
    delete: (req,res) => {
        console.log("from delete")
        const dbInstance = req.app.get('db');
        const {id} = req.query;
        dbInstance.delete_listing(id)
        .then((listings) => res.status(200).send(listings))
        .catch(err => {
            res.status(500).send({errorMessage: 'Opps! Something went wrong.'});
            console.log(err)
        })
    }
}