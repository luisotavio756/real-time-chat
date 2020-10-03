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

mongoose.model('Message', MessageSchema);

export default MessageSchema;
