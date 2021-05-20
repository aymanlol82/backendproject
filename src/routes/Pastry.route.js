import PastryController from '../controllers/Pastry.controller.js'

const pastryRoute = (app) => {
    app.post('/pastry' ,PastryController.createProducts )
    app.get('/pastry', PastryController.getAllData)
    app.put('/pastry/:id', PastryController.updateData)
    app.delete('/pastry/:id', PastryController.deleteData)
}


export default {pastryRoute}