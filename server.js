const express = require('express')
const mongoose = require('mongoose')
const app = express()
const datas = require('./datas')

mongoose.connect('mongodb+srv://admin:admin@cluster0.0aucl.mongodb.net/onboarding_survey?retryWrites=true&w=majority', 
{
    user: 'admin',
    pass: 'admin',
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('MondoDB is connected')
})

const paginateData = (model) => {
    return async (req, res, next) => {
        const page = parseInt(req.query.page)
        const limit = parseInt(5)
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        const results = {}
        if(startIndex >= 1) { 
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        if(endIndex < await model.countDocuments().exec()) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }
        try{ //our response from mongoDB Atlas .sort() will sort our response in Ascending 
            results.result = await model.find().sort({_id:0}).limit(limit).skip(startIndex).exec()
            res.paginatedResult = results
            next()
            
        }catch(e) {
            res.status(500).json({message:e.message})
        }
    }
}

app.get('/api/surveyoptions', paginateData(datas), (req, res) => {
    res.json(res.paginatedResult)
})
 

const port = 1000;
app.listen(port, () => console.log(`Server started on port, ${port}`))