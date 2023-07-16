class Query_Delete {    

    static get_password(uid) {
        return `SELECT password FROM akun_admin where uid = '${uid}'` 
    }


    static delete_query(kode) {
        return `
        alter table Kas drop constraint kas_login_uid_fkey;
        delete from Kas where kode in (${kode});
        alter table Kas add foreign key (login_uid) references akun_admin (uid);
        
        ALTER SEQUENCE id_kas RESTART WITH 1;
        update Kas set id=nextval('id_kas');
        ALTER SEQUENCE no_kode RESTART WITH 100;
        update Kas set kode=nextval('no_kode')
        `
    }

}


export default Query_Delete