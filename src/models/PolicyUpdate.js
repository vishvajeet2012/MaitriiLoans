import mongoose from 'mongoose';

const PolicyUpdateSchema = new mongoose.Schema({
  title: { type: String, default: 'Policy Update' },
  type: { type: String, enum: ['pdf', 'link'], required: true },
  // For PDF type
  pdfData: { type: String }, // Base64 encoded PDF
  pdfName: { type: String }, // Original filename
  // For Link type  
  url: { type: String },
  // Visibility
  isEnabled: { type: Boolean, default: false },
  expiryDate: { type: Date }, // After this date, hide from users
}, { timestamps: true });

export default mongoose.models.PolicyUpdate || mongoose.model('PolicyUpdate', PolicyUpdateSchema);
