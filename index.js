import express from 'express'
import mongoose from 'mongoose'
import postRouter from './postRouter.js'
import fileUpload from 'express-fileupload'

const PORT = 5000
const DB_URL = 'mongodb://localhost:27017'

const app = express()

// middleware для работы с json
app.use(express.json())
// middleware для загрузки файлов
app.use(fileUpload())
// middleware для статики (img, css)
app.use(express.static('static'))
// маршруты для работы с постами
app.use('/api', postRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('Server started ON PORT', PORT))
    } catch(e) {
        console.log(e)
    }
}

startApp()
