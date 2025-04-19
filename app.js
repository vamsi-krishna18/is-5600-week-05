const express = require('express')
const api = require('./api')
const middleware = require('./middleware')
const bodyParser = require('body-parser')


// Set the port
const port = process.env.PORT || 3000
// Boot the app
const app = express()
// Register the public directory
app.use(express.static(__dirname + '/public'));
// register the routes
app.use(bodyParser.json())
app.use(middleware.cors)
app.get('/', api.handleRoot)
app.get('/products', api.listProducts)
app.get('/products/:id', api.getProduct)
app.put('/products/:id', api.editProduct)
app.delete('/products/:id', api.deleteProduct)
app.post('/products', api.createProduct)
// Boot the server
app.listen(port, () => console.log(`Server listening on port ${port}`))
// app.js

// ...

app.get('/orders', api.listOrders)
app.get('/orders/', api.createOrder)
// api.js

/**
 * Create an order
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
async function createOrder (req, res, next) {
    const order = await Orders.create(req.body)
    res.json(orders)
  }
  
  /**
   * List orders
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  async function listOrders (req, res, next) {
    const { offset = 0, limit = 25, productId, status } = req.query
  
    const orders = await Orders.list({ 
      offset: Number(offset), 
      limit: Number(limit),
      productId, 
      status 
    })
  
    res.json(orders)
  }
