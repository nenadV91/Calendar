const Event = require('../models/Event');
const _ = require('lodash');

function getEvents() {
  return Event.find({})
}

function removeEvent(id) {
  return Event.findByIdAndDelete(id)
}

function createEvent(data) {
  let fields = ['title', 'description', 'start', 'end', 'bounds', 'type', 'slots'];
  let event = _.pick(data, fields)
  event.allDay = data.type === 'birthday';
  return new Event(event).save()
}

function updateEvent({id, update}) {
  return Event.findByIdAndUpdate(id, update, {new: true})
}

module.exports = {
  getEvents,
  removeEvent,
  createEvent,
  updateEvent
}


