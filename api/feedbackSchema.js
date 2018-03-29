import mongoose, { Schema } from 'mongoose'

const FeedbackSchema = new Schema(
  {
    rating: {
      type: Number,
      required: true,
    },

    comment: {
      type: String,
    },

    href: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const Feedback = mongoose.model('Feedback', FeedbackSchema)

export default Feedback
