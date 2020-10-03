import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_CONNECT || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
