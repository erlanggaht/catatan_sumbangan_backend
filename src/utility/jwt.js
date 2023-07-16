import  jwt from 'jsonwebtoken'
async function createJWT (username,uid) {
    const refreshToken =await jwt.sign({username : username},process.env.REFRESH_TOKEN,
    {
    algorithm:'HS256',
    expiresIn:Math.floor(Date.now() / 1000) + (60 * 60)
   })

   const aksesToken =await jwt.sign({username : username},process.env.AKSES_TOKEN,
   {
   algorithm:'HS256',
   expiresIn:Math.floor(Date.now() / 1000) - 30 
  })


    return {refreshToken,aksesToken}
}

export default createJWT