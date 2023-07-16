import pg from "pg";
const {Pool} = pg

const konek_db = new Pool({
    user : process.env.USER,
    password : process.env.PASSWORD,
    host : process.env.HOST,
    database : process.env.USER,
    port : process.env.PORT_DB,

})

export default konek_db