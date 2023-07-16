class Query_Getdata {

    static get_data() {
        return `SELECT * FROM Kas order by kode ASC `
    }

    static get_data_last () {
        return `SELECT * FROM Kas ORDER BY Kode DESC LIMIT 1`
    }

}

export default Query_Getdata