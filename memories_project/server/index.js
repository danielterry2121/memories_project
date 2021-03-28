import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'


const app = express();

app.use(express.json({limit: "30mb", extended: true }));
app.use(express.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

//url to the mongodb cluster
const CONNECTION_URL = 'mongodb+srv://tear1871:Catelyn187!@cluster0.emrdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
//urlparser and unified are not being used, just preventing errors in the console log.
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);