const db = require ('./db')

async function getEvents (req, res) {
  let msg = await db.getEvent()
  res.status = 200
  res.send(msg)

}

function addEvent (req, res) {
    console.log(req.body);
    db.addEvent(req.body)
    res.status= 200
    res.send('Success')
}

exports.addEvent = addEvent
exports.getEvents = getEvents
