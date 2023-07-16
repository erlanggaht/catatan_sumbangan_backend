import jwt from 'jsonwebtoken'

async function jwt_auth (req,res,next) {
     const authorization_token = req.headers.authorization?.split(' ')[1]
     if(!authorization_token) return res.status(400).json({msg:'tidak ada token yang dikirim'})
        
    jwt.verify(authorization_token,process.env.REFRESH_TOKEN,(err,decoded) => {
        try {
            if(err) return res.status(401).json({msg:"token tidak valid"})
            next()

        } catch (err) {
            console.log({err})
        }
    })

  
}

export default jwt_auth