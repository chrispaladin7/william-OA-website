const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        content: {
            type: String,
            required: true
        },
        userName: String
    }, {
    timestamps: true
}
);

const blogSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        body: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        reviews: [reviewSchema]

    }, {
    timestamps: true
}
)

module.exports = mongoose.model("PC", blogSchema);