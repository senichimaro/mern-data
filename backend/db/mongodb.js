const mongoose = require('mongoose')

mongoose.connection.on('open',()=>console.log(`db connected`))

async function dbConn( host, dbname ){
  try {
    await mongoose.connect(
      `${host}/${dbname}`,
      { useNewUrlParser:true, useUnifiedTopology:true }
    )
  }
  catch(e){
    console.error(`ERROR at connect.js in dbConn: ${e.message}`);
  }
}


module.exports = dbConn
