const { validationResult } = require("express-validator");
//registeration function
const register =  (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      errors.array().forEach(error => {
        res.status(400).json({
          error:('error', error.msg),
        })
      })
      return;
    }
    
    //const { email, password } = req.body;
    console.log('creating user');
    res.status(201).json({message:'created'});
    next();
  } catch (error) {
    next(error);
  }
}
module.exports = {
  register,
}

