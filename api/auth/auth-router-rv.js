  
const router = require(`express`).Router();
const bcrypt = require(`bcryptjs`);
const jwt = require (`jsonwebtoken`);
const secrets = require (`../config/secrets`);

const rv = require (`../rv/rv-model`);

//CREATE

router.post(`/register/rv`, (req, res) => {
    let rv = req.body;
    // console.log(req)
    const hash = bcrypt.hashSync(rv.password, 10);
    rv.password = hash;
    

    rv.add(rv)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
});

router.post(`/login/rv`, (req, res) => {
    let{username, password } = req.body;

    rv.findBy({ username })
    .first()
    .then(rv => {
        if (rv && bcrypt.compareSync(password, rv.password)) {

            let token = genToken(rv);
            res.status(200).json({ message: `Welcome rv ${rv.username}!`,
        token: token
    });
        } else {
            res.status(401).json({ message: `Invalid Credentials`});
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

function genToken(rv) {
    const payload = {
        rvid: rv.id,
        username:rv.username,
        roles: "rv"
    };
    const options = {
        expiresIn: `1d`
    };

    const token = jwt.sign(payload, secrets.jwtSecrets, options);
    return token;
}

module.exports = router;