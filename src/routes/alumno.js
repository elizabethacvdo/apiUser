const {Router} = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const router = Router();


router.get('/api/users', async (req, res)=>{
    const users = await prisma.user.findMany()
    res.json(users)
})

router.post('/api/users/post', async (req, res) => {
    
    const { name, email } = req.body;
    console.log(req.body);
    try {
      const result = await prisma.user.create({
        data: {
          name,  // Asigna el valor de name1 a name
          email, // Asigna el valor de email1 a email
        }
      });
      
      res.status(201).json(result);  // Respuesta exitosa
    } catch (error) {
       // console.log(email);
      res.status(500).json({ error: 'Error al crear el usuario.' });
    }
  });
  

module.exports = router

//por si acaso https://github.com/prisma/prisma-examples/blob/latest/javascript/rest-express/src/index.js