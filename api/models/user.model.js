import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique: true,
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    },
    avatar:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAY1BMVEX////MzMxNTU3JycnPz89KSkrV1dXk5ORHR0fS0tL8/Pzv7+/g4OBAQEA9PT1DQ0Ourq5VVVWfn59/f39wcHBra2v19fW4uLiPj49mZmZdXV13d3eoqKi/v783NzeIiIgqKioqGHboAAAEIklEQVRoge2aa7eqIBCGUwEh7+Slsmz//1951NqnTs6Ig9aHs3g/thY9MfMyDNBu5+Tk5OTk5OTk9B9qX9dRGMZxHIZRXe+/x41iwbzgKY+JOPoCfx+Kgfau/jMRfhYfCYD75IvoY+SQ4eAHnoUfIUdG8p2+/dxrtYQ80lW9LTpcCL7Ttwz8Xiyd9AMuNrN8RCOP9I2yHiJopoQQiiHwTeIOo5m66kNZlQd9hfFBvB4dQ2jG8tJPJOdcJn6ZfwgOzlp5bcr9X/G07T/ZPuwQmrGjlP6rpDwygL4ODjlc5Nm/5JHeaQHAV7h9P0WzoMom5EFZFUzTHtivc2Aq3mk66cfUTwBc2KKBZIsKQ/fwYppz25TXQMSbFEX7fqKBqNttLEDEVcVn2PwEmN0q6oDHWT43bd9PgSpj5XWgWKkbnu0x4zdg4oyOBgvaaS7kQ9CBMRZ2A77FC2bJg8DiT0WDe/YVLitPJVfoF1MzDpWV+RU2KG2gLY1odaCamm0OG51cWUGnWbNpboNCbs2mBR0MuceuRvYVbmEoQUc602B+effFBRlHcTrYpPXfcTbUljMyjtK6genuNbuV9OwKGUdI+B5pullpYJfYwOUJr5FvaIwxB2tLr+W7ONA1jOjE5DWewHBCBwHbXB1N5bzvGI9Qp04xOnwMEoYddJz4CbQpobIhp79iAbsARxLY8PIOCiPa9wt46PIFDrOZweXjvM9wvteyTd3aILBjI7GRI3ezwOfIGlvtNWY0Oj/BtYXARrYxdTAFHQk5ZX3DdW3o1ww1Fe7XSHUNqece07NW52fgQHbXcja2j3lKzNQXXgg44qR9DN2/PdHOnIFbfNhyNNa3zK9xzGjEvgW9SWQaX+MZmm1Svwb3qQO7mZk31jgQDwdo5hRqNg5ceTxEOxRhd6gzDQTSNnjkcwka9JlzMD6EeNOFLxeksMrDJitsEOp0dUTYeMjJNy5oaUMSjqebfuGC3tjrBGRDl2v3aVtc72FHjAt8GE0v2AA6Gss4dghHjt6Wd8mAb4cnEqSqZhp+PLG7zZ10EEzltxLdwfm5vOUTuuV96pvdmGpKKeXM/s2lLJt/6fZPBy9RZ17eygU9smxz74VufX/+rKys75YMvdpfetp3Tr/0Fe8GD68zoQvj8fcl9kmhBbP3+K/CgIlA82w5eaRnXAeKrX2kivMDN6d5KskP+epnSd1ZkAd1ei16t0NqqEnpZT16t8ttZt7lW6D7XSWlZlymNjsIqKiixT2tNvzDxf6SLJ+6TC7b/ssmLhfWNZ6WG7y6v+m6pLb1Ne26OXlQUxhMJ9Oi+Qh5kNf+oImXyU/rfYw8qM7bpMvednEusy5p843/zwPiPd2esy5Nk0Fp12XnVhNuFlbzwzhoLlrrSxPE4fe4Tk5OTk5OTk5OX9QfdkM9/EUJEtMAAAAASUVORK5CYII=",
    }
},{timestamps:true});



const User=mongoose.model('User',userSchema);

export default User;