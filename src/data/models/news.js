import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const News = new Schema({
  title: { type: String, required: true },
  summary: { type: String },
  published: { type: Date, required: true },
  image: { type: String },
  url: { type: String },
  source: { type: String, required: true, enum: ['clarin', 'lanacion', 'infobae', 'cronista', 'tiempo', 'losandes'] },
  category: { type: String, enum: ['politics', 'economics', 'sports', 'world', 'general', 'tech', 'society'] }
})

News.index({ published: -1 })
News.index({ source: -1 })
News.index({ category: -1 })

export default mongoose.model('News', News)
