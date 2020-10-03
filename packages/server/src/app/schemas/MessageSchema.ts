import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema(
  {
    name: String,
    text: String,
  },
  {
    timestamps: {},
  },
);

export default mongoose.model('Message', MessageSchema);
