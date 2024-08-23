
const {Router} = require('express')
const router = Router();

router.get('/alumno',(req,res)=>{
    const data = {
        "name":"Mery"
    }
    res.json(data);
})


module.exports = router