import mongoose, { Schema } from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'

const TokenSchema = new Schema(
  {
    val: {
      type: String,
      required: true,
    },

    invalidAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
)

const UserSchema = new Schema(
  {
    tokens: [TokenSchema],
  },
  {
    timestamps: true,
  },
)

UserSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', UserSchema)

export default User
