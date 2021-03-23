import * as mysql from 'mysql';
import config from '../config';
import blogs from './blogs';
import users from './users';
import tags from './tags';
import blogtags from './blogtag'

export const Connection = mysql.createConnection({
    host: config.mysql.host,
    port: config.port,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
})

export const Query = (query:string, values?:Array<string | number>) =>{
    return new Promise<Array<any>>((resolve,reject)=>{
        Connection.query(query, values, (err, results)=>{
            if(err) return reject(err);
            return resolve(results)
        })
    })
}

export default {
    blogs,
    users,
    tags,
    blogtags
}