import app from "./server"
import * as dotenv from 'dotenv'
dotenv.config()

app.listen(4005, () => {
    console.log('server listening on 4005')
})