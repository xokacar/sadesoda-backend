import dotenv from "dotenv"

dotenv.config()

const MONGO_DB_USER = process.env.MONGO_DB_USER || ""
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD || ""
export const MONGO_URL = 
`mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}
@ecomcluster0.ftuabaq.mongodb.net/?retryWrites=true&w=majority`

const config = {
	mongo: {
		url: MONGO_URL,
	},
	server: {
		port: 3000,
	},
    auth : {
        AccesTokenSecret : process.env.ACCES_TOKEN_SECRET 
    }
}

export default config
