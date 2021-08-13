const app = require('./app')
const { appConfig, dbConfig } = require('./config')
const dbConn = require('./db/mongodb')






async function appInit( app, port, dbConfig ){
  try {
    await dbConn( dbConfig.host, dbConfig.dbName )
    await app.listen(
      port,
      ()=> console.log(`listen at:${port}`)
    )
  }
  catch(e){
    console.error(`ERROR at server.js appInit: ${e.message}`);
  }
}
appInit( app, appConfig.port, dbConfig )
