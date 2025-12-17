import mongoose from 'mongoose';

const PolicyUpdateSchema = new mongoose.Schema({
  title: { type: String, default: 'Policy Update' },
  type: { type: String, enum: ['pdf', 'link'], required: true },
  url: { type: String, required: true },
  isEnabled: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.PolicyUpdate || mongoose.model('PolicyUpdate', PolicyUpdateSchema);
