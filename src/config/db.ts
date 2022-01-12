import  {connect} from "mongoose";
import {config} from "dotenv";
config();

const dbConnection: any = process.env.mongoURI;

export const startConnection = async () => {
    try {
      const db = await connect(dbConnection);
      console.log(`*********************************************
    >>> DB connection to: ${db.connection.name}
*********************************************`);   
    } catch (error) {
      console.error(">>Error: ", error);
    }
  };
