module.exports = (req, res, next) => {
  const { email } = req.body;
  const emailFormat = /\S+@\S+\.\S+/;
  
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' }); 
  }
      
  if (!email) return res.status(400).json({ message: '"email" is required' });

  if (req.baseUrl === '/login') return next(); 

  // A proxima validação não se aplica ao login do usuário apenas a criação de um novo usuário
  if (!emailFormat.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' }); 
  }

  return next();
};
