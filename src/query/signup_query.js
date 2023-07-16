
class Query_Signup {
    
    // Ambil Token Organisasi Dulu
    static get_data_token_organisasi(token) {
        return `SELECT * FROM token_organisasi where token = '${token}' `
    }

    static cek_username (username) {
        return `SELECT * FROM akun_admin where username = '${username}'`
    }

    static add_data (...BodyReq) {
        const {username,password_hash,nama_lengkap,alamat,uid} = BodyReq[0]
       
        
        return `
        INSERT INTO akun_admin (id,uid,username,password,nama_lengkap,alamat)
        values (default,'${uid}','${username}','${password_hash}','${nama_lengkap}','${alamat}')
        `
    }
}


export default Query_Signup 