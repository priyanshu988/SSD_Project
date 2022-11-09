const mongoose = require('mongoose')

let Schema = mongoose.Schema
const RuleSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Content: {
            type: String,
            required:true,
        }
    },
    {
        timestamps: true
    }
)

const RuleData = mongoose.model('RuleData', RuleSchema)

module.exports = RuleData
