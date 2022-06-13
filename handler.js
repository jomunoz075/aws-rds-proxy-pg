"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v3.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.databasepg = async (event) => {
  const {Client} = require('pg')

  const client = new Client({
      host: "proxyrds-test.chsj467xweou.eu-west-3.rds.amazonaws.com",
      user: "postgres",
      port: "5432",
      password: "12345678",
      database: "mydb"
  })
  
  client.connect();
  
  client.query('Select * from contacts', (err,res)=>{
      if(!err){
          console.log(res.rowCount);
      } else {
          console.log(err.message);
      }
      client.end;
  })
};