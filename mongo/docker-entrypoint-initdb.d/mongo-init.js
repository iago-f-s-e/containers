console.log('###################################')
console.log('DATABASE: ' + process.env.MONGO_INITDB_DATABASE)
console.log('COLLECTION: ' + process.env.MONGO_INITDB_COLLECTION)
console.log('USER: ' + process.env.MONGO_INITDB_ROOT_USERNAME)
console.log('PASSWORD: ' + process.env.MONGO_INITDB_ROOT_PASSWORD)
console.log('###################################')
//
// db = db.getSiblingDB('admin');
//
// db.createUser(
//     {
//         user: process.env.MONGO_INITDB_ROOT_USERNAME,
//         pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
//         roles: [ { role: 'root', db: 'admin' } ]
//     },
// );

db = db.getSiblingDB(process.env.MONGO_INITDB_DATABASE);

db.createUser(
  {
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
    roles: [{ role: 'root', db: process.env.MONGO_INITDB_DATABASE }],
  },
);

db.grantRolesToUser(process.env.MONGO_INITDB_ROOT_USERNAME, ["readWrite"])

db.createCollection(process.env.MONGO_INITDB_COLLECTION);