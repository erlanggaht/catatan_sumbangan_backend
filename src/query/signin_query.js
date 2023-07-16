class Query_SignIn {


    static get_username (username) {
        return `SELECT * FROM akun_admin where username = '${username}'`
    }

    static get_password(password) {
        return `SELECT * FROM akun_admin where password = '${password}'` 
    }
    

}

export default Query_SignIn