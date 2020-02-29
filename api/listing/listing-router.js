// //MVP
// 1. Users can register/create an account as either an **RV Owner** or a **Landowner** (web, mobile)
// 2. **Landowners** and **RV Owners** can login to the the app. (web, mobile)
// 3. **Landowners** can create, update and delete listings of their available land. At a minimum, a listing must include the land's location, description, price per day, and a photo. (web, mobile)
// 4. **RV Owners** can query/filter available listings by location (at a minimum) and reserve a spot for their RV for a desired date(s) (web, mobile)


const router = require('express').Router();
let Listings = require('../jsondata/mock.js').listings;


/// rv owners need to view listings 
///rv owners need to create view update and deleted single reservations for the listings by date availability
///rv owners need to  view  and deleted all reservations for the listings by date availability
///rv owners need to  view  and deleted all reservations for the listings by date availability
///rv owners need to create view update and deleted single fav reservations single reservations for the listings by date availability


/// listings =>get all  
/// reservations =>get all and crud by id 
/// fav listings =>get all and add delete by id 

//hardcode listings
router.get('/', async (req, res) => {

    res.status(200)
        .json(Listings);
})


//hardcode listing by req.params.id
router.get('/:id', async (req, res) => {

    const singleListing = Listings.filter(listing => listing.listingid == req.params.id);
    res.status(200)
        .json({ singleListing })
})


//hardcode add new listing by req.body
router.post('/', async (req, res) => {

    const newlisting = req.body;
    await Listings.push(req.body);

    res.status(200)
        .json({ "newlisting added": newlisting, "listing.length": Listings.length });
    // }).catch(error => console.error(error),
    //     res.status(500)
    //         .json({ error: "thatdidnt work my friend" }))
})


//hardcode delete listing by req.params.id
router.delete('/:id', async (req, res) => {

    const singleListing = Listings.filter(listing => listing.listingid == req.params.id);
    var newArray = [];
    Listings.map((l, i) => {
        l.listingid == Number(req.params.id) ? delete Listings[i] : l
    })

    // const removeProperty = prop => ({ [prop]: _, ...rest }) => rest
    // Listings = ({ ...rest, singleListing }) => {
    //     return rest;
    // };
    // const removeListing=([singleListing,...rest])=>rest;
    // removeListing(Listings)


    function cleanArray(actual) {
        var newArray = new Array();
        for (var i = 0; i < actual.length; i++) {
            if (actual[i]) {
                newArray.push(actual[i]);
            }
        }
        return newArray;
    }
    Listings = Listings.filter(function(v) { return v; }); 
    cleanArray(Listings);




    // Listings.filter(obj=>{obj!==null})
    // we have an array of objects, we want to remove one object using only the id property
    // var apps = [{id:34,name:'My App',another:'thing'},{id:37,name:'My New App',another:'things'}];

    // get index of object with id:37
    // var removeIndex = Listings.map(function(item) { return item.listingid; }).indexOf(req.params.id);
    // console.log(Listings.indexOf(listingid==req.params.id))

    // if( removeIndex == -1 ){ removeIndex = 0 } 
    // remove object
    // Listings.splice(removeIndex, 1);



    //   const allbut36=Listings.map(listingindex => {
    //         listingindex.listingid.toString() == req.params.id?listingindex:null,
    //             console.log("listingindex.listingid:",
    //                 listingindex.listingid,
    //                 "req.params.id:::",
    //                 (req.params.id))
    // //     })
    // console.log("Listings", Listings)
    // console.log("removeIndex",removeIndex)
    // console.log("singleListing", singleListing)

    // console.log("req.params.id::::===-->", req.params.id)

    res.status(200)
        .json({ Listings })
})


// router.get('/:id', (req, res) => {
//   Listings.get()
//     .then(listings => {
//       res.status(200)
//         .json(listings);
//     })
//     .catch(error => {      // good to see the error during development
//       console.log('GET /api/listings Error', error);
//       res.status(500)
//         .json({ error: 'We ran into an error retrieving the listings' });
//     });
// });

// router.get('/:id', (req, res) => {
//   // const { id } = req.params;

//   Projects.findById(req.params.id)
//     .then(project => {
//       project ?
//         res.status(200).json({ project })
//         :
//         res.status(400).json({ errorMessage: `error fetching the project` }); console.error();
//     })
//     .catch(err => {
//       res.status(500).json({ message: `serverside ${err} fetching the project with id:[${id}] + ${err}` })
//       console.error(err); console.log("the error", err);

//     })
// })




// router.delete('/:id', (req, res) => {
//   Users.remove(req.params.id)
//     .then(() => {
//       res.status(200).json({ message: 'user deleted successfully' });
//     })
//     .catch(error => {
//       // good to see the error during development
//       console.log('DELETE /api/user/:id Error', error);

//       res.status(500).json({ error: 'We ran into an error removing the user' });
//     });
// });

// router.put('/:id', (req, res) => {
//   Users.update(req.params.id, req.body)
//     .then(() => {
//       res.status(200).json({ message: 'User updated successfully' });
//     })
//     .catch(error => {
//       // good to see the error during development
//       console.log('PUT /api/user/:id Error', error);

//       res.status(500).json({ error: 'We ran into an error removing the user' });
//     });
// });

// function validatePostId(req, res, next) {
//   // do your magic!
// }

module.exports = router;
