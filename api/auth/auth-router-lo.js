  
const router = require(`express`).Router();
const bcrypt = require(`bcryptjs`);
const jwt = require (`jsonwebtoken`);
const secrets = require (`../config/secrets`);

const landOwner = require (`../landOwner/landOwner-model`);

//CREATE

router.post(`/register/landOwner`, (req, res) => {
    let landOwner = req.body;
    // console.log(req)
    const hash = bcrypt.hashSync(landOwner.password, 10);
    landOwner.password = hash;
    

    landOwner.add(landOwner)
    .then(saved => {
        res.status(201).json(saved);
    })
    .catch(error => {
        console.log(error)
        res.status(500).json(error);
    });
});

router.post(`/login/landOwner`, (req, res) => {
    let{username, password } = req.body;

    landOwner.findBy({ username })
    .first()
    .then(landOwner => {
        if (landOwner && bcrypt.compareSync(password, landOwner.password)) {

            let token = genToken(landOwner);
            res.status(200).json({ message: `Welcome landOwner ${landOwner.username}!`,
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

function genToken(landOwner) {
    const payload = {
        landOwnerid: landOwner.id,
        username:landOwner.username,
        roles: "landOwner"
    };
    const options = {
        expiresIn: `1d`
    };

    const token = jwt.sign(payload, secrets.jwtSecrets, options);
    return token;
}

module.exports = router;