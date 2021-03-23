import * as dotenv from 'dotenv';

const envFound = dotenv.config();

if(!envFound){
    throw new Error('Cannot find required files')
}

export default {
    mysql: {
        host: process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASS,
        database:process.env.DB_SCHEMA
    },
    port: parseInt(process.env.PORT, 10)
}