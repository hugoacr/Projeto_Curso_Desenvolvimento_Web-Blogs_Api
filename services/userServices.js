const jwtGenerator = require('../helpers/jwtGenerator');
const { User } = require('../models');

const create = async (displayName, email, password, image) => {  
    const alreadyExists = await User.findOne({ where: { email } });
    
    if (alreadyExists) {
      return { code: 409, response: { message: 'User already registered' } }; 
    }

    const creatNewUser = await User.create({ displayName, email, password, image });  
    
    const token = jwtGenerator({ id: creatNewUser.id, email });
  
    return { code: 201, response: { token } };
};
  
  module.exports = {
    create,
  };