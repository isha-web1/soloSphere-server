const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
require('dotenv').config()
const port = process.env.PORT || 5000


const app = express()

const corsOptions = {
    origin: [
      'http://localhost:5173',
      
    ],
    credentials: true,
    optionSuccessStatus: 200,
  }

//   1E7k8mhbhwE6zstr
// soloSphere

  app.use(cors(corsOptions))
  app.use(express.json())

  const uri = `mongodb+srv://soloSphere:1E7k8mhbhwE6zstr@cluster0.qyv9war.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  })

  async function run(){
    try{
      // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    )
  } finally {
   
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir)
    
  


  app.get('/', (req, res) => {
    res.send('Hello from SoloSphere Server....')
  })
  
  app.listen(port, () => console.log(`Server running on port ${port}`))