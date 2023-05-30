module.exports = {
    mutipleMongooseToObject: function(mongooses) {
        mongooses = mongooses.map(mongoose => mongoose.toObject());
        return mongooses;
    },

    mongooseToObject: function(mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};