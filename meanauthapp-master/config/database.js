module.exports = {
  // configure the code below with your username, password and mlab database information
  database: 'mongodb://admin:admin@cluster0-shard-00-00-5uead.mongodb.net:27017,cluster0-shard-00-01-5uead.mongodb.net:27017,cluster0-shard-00-02-5uead.mongodb.net:27017/fidelity?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',

 // 'mongodb://<username>:<password>@ds12226.mlab.com:12226/meanauthapp',   //prod
  //database: 'mongodb://localhost:27017/meanauth',    //dev
  secret: 'yoursecret'
}
