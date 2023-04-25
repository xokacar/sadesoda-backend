import mongoose from 'mongoose';
import config from './config';



const connectToDatabase = async () => {
    try {
    const connection = await mongoose.connect(config.mongo.url, {
        retryWrites: true, w: 'majority',

    });
    console.log(`MongoDB Connected: ${connection.connection.host}`);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};


export default connectToDatabase;


