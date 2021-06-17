import { Mongo } from 'meteor/mongo'

export const LinksCollection = new Mongo.Collection('links')

console.log('Passou pela criação do links collection')
