import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const url = 'mongodb://127.0.0.1:27017/webstore'
const dbName = 'webstore'
let db

function connectMongo(){
   return MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
      if (err) { return console.log(err) }
      else {
         db = client.db(dbName)
         console.log(`Connected MongoDB: ${url}`)
         console.log(`Database: ${dbName}`)
         db.collection('products')
            .find().toArray((err, docs) => {
               // si hay error entonces finalizar
               if (err) {
                  console.log(`Error al momento de realizar la consulta`);
                  client.close();
               }
               // mostrar los registros
               console.log(docs);
               client.close();
            })
            ;
      }
   })
}
connectMongo()



