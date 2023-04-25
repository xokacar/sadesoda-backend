// Express
import express from "express"

// Database
import connectToDatabase from "./src/config/database"

// Routes
import signupRouter  from "./src/routes/signupRouter"
import loginRouter from "./src/routes/loginRouter"


// App
const app = express()
const port = 3000

// Connect to database
connectToDatabase()


// Parse JSON bodies (as sent by API clients) 
app.use(express.json())

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))


app.use(loginRouter)
app.use (signupRouter)



// Start the Express server
app.listen(port, () => {
	console.log(`Server running on port http://localhost:${port}`)
})
