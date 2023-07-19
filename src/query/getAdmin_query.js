class Query_GetAdmin {

    static get_admins() {
        return `SELECT * FROM akun_admin `
    }

    static get_admin(username) {
        return `SELECT nama_lengkap,uid FROM akun_admin where username = '${username}'; `
    }


}


export default Query_GetAdmin