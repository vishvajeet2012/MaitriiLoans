import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  pincode: { type: String, required: true },
  loanType: { type: String, required: true },
  message: { type: String },
  status: { type: String, default: 'new', enum: ['new', 'contacted', 'resolved'] },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
