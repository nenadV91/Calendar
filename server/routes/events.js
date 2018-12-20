const express = require('express')
const calendar = require('../controllers/calendar');
const router = express.Router()

router.get('', async (req, res) => {
  const result = await calendar.getEvents()
  res.send(result);
})

router.delete('/:id', async (req, res) => {
  let id = req.params.id;
  const result = await calendar.removeEvent(id);
  res.send(result);
})

router.post('', async (req, res) => {
  let data = req.body;
  const result = await calendar.createEvent(data);
  res.send(result);
})

router.patch('/:id', async (req, res) => {
  let id = req.params.id;
  let update = req.body;
  const result = await calendar.updateEvent({id, update});
  res.send(result);
})

module.exports = router