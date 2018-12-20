const mongoose = require('mongoose');
const {Schema} = mongoose

const eventSchema = new Schema({
  title: String,
  description: String,
  start: Date,
  end: Date,
  bounds: {
    top: Number,
    left: Number,
    right: Number,
    bottom: Number,
    x: Number,
    y: Number
  },
  type: String,
  slots: [Date],
  allDay: {
    type: Boolean,
    default: false
  }
})

eventSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

eventSchema.set('toJSON', {
  virtuals: true
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;