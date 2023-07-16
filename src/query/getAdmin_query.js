class Query_GetAdmin {

    static get_admin(username) {
        return `SELECT nama_lengkap,uid FROM akun_admin where username = '${username}'; `
    }


}


export default Query_GetAdmin