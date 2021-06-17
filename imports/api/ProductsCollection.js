import { Mongo } from 'meteor/mongo'

export const ProductsCollection = new Mongo.Collection('products')

console.log('passou pela criação de Products Collection')
