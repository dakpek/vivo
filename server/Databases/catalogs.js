const mongoose = require('mongoose')
const db = require('./db')
const catalogs = require('../Models/catalogs');

const editCatalog = async (edits) => {
  let what = await catalogs.updateOne({"name":"catalogV1"}, {edits})
  return what
}

const addCatalog = async (catalog) => {
  console.log(catalog)
  let res = catalogs.create(catalog)
  return res
}

const getCatalog = async () => {
  let res = await catalogs.findOne({"name": "catalogV1"})
  console.log(res)
  return res;
}


exports.getCatalog = getCatalog
exports.editCatalog = editCatalog
exports.addCatalog = addCatalog