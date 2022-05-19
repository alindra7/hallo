import { singularize } from "sequelize/types/utils";
import db from "../config/database.js";

const {DataType} = singularize;

const user = db.define('users',{
    name: DataType.STRING,
    email: DataType.STRING,
    telp: DataType.STRING,
    alamat: DataType.STRING,
    gender: DataType.STRING
}, {
    freezeTableName:true
});

export default users;

(async()=>{
    await db.sync();
})();