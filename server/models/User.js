const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (email) {
          // Email validation logic here
          return /.+@.+\..+/.test(email);
        },
        message: 'Must use a valid email address',
      },
    },  
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
    }
},
{
    toJSON: {
        virtuals: true,
    },
});

//this will hash the user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});

//this will compare passwords when logging in and validate it as well
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;