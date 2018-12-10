const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  choice: {type: String, required: true, enum: ['Rather A', 'Rather B']},
  comment: {type: String}
}, {
  timestamps: true
});

const questionSchema = new mongoose.Schema({
  ratherA: {type: String, required: true},
  ratherB: {type: String, required: true},
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  answers: [ answerSchema ]
});

questionSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

answerSchema.set('toJSON', {
  getters: true,
  virtuals: true,
  transform(obj, json) {
    delete json._id;
    delete json.__v;
  }
});

questionSchema.methods.belongsTo = function questionBelongsTo(user) {
  return this.addedBy.id === user.id;
};

answerSchema.methods.belongsTo = function answerBelongsTo(user) {
  return this.createdBy.id === user.id;
};

questionSchema.virtual('user'/* this is the name of the field that we are creating */, {
  ref: 'user', // The model to use, conditional on the doc
  localField: 'addedBy', // Find people or organizations where `localField`
  foreignField: 'id' // is equal to `foreignField
});

answerSchema.virtual('user'/* this is the name of the field that we are creating */, {
  ref: 'User', // The model to use, conditional on the doc
  localField: 'createdBy', // Find people or organizations where `localField`
  foreignField: 'id' // is equal to `foreignField
});

module.exports = mongoose.model('Question', questionSchema);
