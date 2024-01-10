import mongoose from 'mongoose';

const distributionSchema = new mongoose.Schema({
  distributionDate: { type: Date, required: true },
  distributionLocation: { type: String, required: true },
  donationType: { type: String, required: true },
  quantity: { type: Number, required: true },
  amount: { type: Number, required: true },
});

const Distribution = mongoose.model('Distribution', distributionSchema);

export default Distribution;
