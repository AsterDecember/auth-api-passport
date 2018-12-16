const moongoose = require ('mongoose')
const Schema = moongoose.Schema
const passport = require('passport-local-mongoose')

const userSchema = new Schema({
        name: String,
        email:{
            type: String,
            unique:true
        },
        campus: {
            type: String,
            enum: ['Madrid', 'Barcelona','Miami','Paris','Berlin','Amsterdam','Mexico','Sao Paulo']
        },
        course: {
            type: String,
            enum: ['WebDev','Data Analytics','UX/UI']
        },
        img: String
    },
    {
        timestamps:{
            createdAt : true,
            updatedAt : true,
        }

    })

userSchema.plugin(passport,{usernameField:'email'})
module.exports = moongoose.model('User',userSchema)