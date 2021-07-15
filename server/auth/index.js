const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractStrategy = require('passport-jwt').ExtractJwt;

const bcrypt = require('bcryptjs');
const db = require('../models/User');
const config = require('../secrets');

//local strategy
let options = { 
    usernameField: 'email'
}
let localLogin = new LocalStrategy(options, async (email, passWord, done) => {
    try{
        //check to see if email is in our db
        let records = await db.findAll({where: {email: email}}) //array of objects
        if(records != null){
            //email found , check password
            bcrypt.compare(passWord, records[0].passWord, (err, isMatch)=> {
                //check if error 
                if(err) {
                    return done(err);
                }
                //mismatch in passwords 
                if(!isMatch){
                    return done(null, false)
                }
                //valid user
                return done(null,records[0])
            })
        }else{
            //no email found , exit with error 
            return done(null, false)
        }
}
catch(error){
    //cant access db
    return done(error);
}
})

//jwt strategy 
let jwtOptions = {
    jwtFromRequest: ExtractStrategy.fromHeader('authorization'),
    secretOrKey: config.secrets,
    passReqToCallback: true
}
let jwtLogin = new JwtStrategy(jwtOptions, async (req, payload, done) => {
    try{
        let user = await db.findByPk(payload.sub)
        if(user) {
            //success
            done(null, user)
        }else {
            done(null,false)
        }

    }catch(err){
        return done(err);
    }
})

passport.use(localLogin);
passport.use(jwtLogin); 