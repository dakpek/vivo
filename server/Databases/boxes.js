const mongoose = require('mongoose')
const db = require('./db')
const boxes = require('../Models/boxes');




const addBox = async (box) => {

  let res = await boxes.create(box)
  let bid = res._id
  boxes.updateOne(res, {bid})
    .then(() => console.log('Added Item'))
    .catch(err => console.error(err))
  return res
}

const deleteBox = async (bid) => {
  let data = await boxes.findOneAndDelete({bid})
    if (data) {
      console.log("successfully deleted User")
    }
    return data
}

const editBox = async (bid, newBox) => {
  try {
    await user.updateOne({bid}, mewBox)
    return newBox
  } catch (e) {
    console.log(e)
  }
}

const findBox = async (bid) => {
  let found = await boxes.findOne(bid)
  return found;
}

const getBoxes = async () => {
  let boxList = await boxes.find({})
  return boxList
}





// BOX INITIALIZATION

const initializeBoxes = async () => {

  console.log('lets see')

  let aBox = {
    name: "",
    totalPrice: 0,
    content: {
    pads: {
      daily: 0,
      normal: 0,
      extra: 0,
    },
    tampons: {
      normal: 0,
      super: 0,
    },
    pills: 0
    },
    prices: {
      pads: {
        daily: 0,
        normal: 0,
        extra: 0,
      },
      tampons: {
        normal: 0,
        super: 0,
      },
      pills: 0
    }
  }

  let dPrice = 0.09
  let nPrice = 0.24
  let sPrice = 0.28


  let daily = 0, normal = 0, extra = 0;

  while (extra <= 16) {
    console.log('SUPER', extra)
    while (normal <=20) {
      console.log('NORMAL', normal)
      while (daily <=30) {
        console.log('DAILY', daily)

        let name = daily.toString() + normal.toString() + extra.toString()
        aBox.name= name;
        aBox.content.pads.daily = daily;
        aBox.content.pads.normal = normal;
        aBox.content.pads.extra = extra;

        let dPr = dPrice * daily
        let nPr = nPrice * normal
        let sPr = sPrice * extra

        if (daily == 0) {
          if (normal == 0) {
            if (extra !== 0) {
              sPr += 6
            }
          } else {
            if (extra == 0) {
              nPr += 6
            } else {
              nPr += 3
              sPr += 3
            }
          }
        } else {
          if (normal == 0) {
            if (extra == 0) {
              dPr += 6
            } else {
              sPr += 3
              dPr += 3
            }
          } else {
            if (extra == 0) {
              nPr += 3
              dPr += 3
            } else {
              nPr += 2
              dPr += 2
              sPr += 2
            }
          }
        }

        let totalPrice = dPr + sPr + nPr;

        aBox.prices.pads.daily = dPr;
        aBox.prices.pads.normal = nPr;
        aBox.prices.pads.extra = sPr;
        aBox.totalPrice = totalPrice

        await addBox(aBox)

        if (daily == 0) {
          daily = daily + 15
        } else {
          daily +=5
        }

      }

      daily = 0

      if (normal == 0) {
        normal += 8
      } else {
        normal +=4
      }
    }
    
    if (normal >= 20) {
      daily = 0
    }
    normal = 0

    extra += 4
  }
}


// TO INITIALIZE BOXES WITH ABOVE PARAMETERS
// initializeBoxes();

exports.addBox = addBox
exports.deleteBox = deleteBox
exports.editBox = editBox
exports.findBox = findBox
exports.getBoxes = getBoxes