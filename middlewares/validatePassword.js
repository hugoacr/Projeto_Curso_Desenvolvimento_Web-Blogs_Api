module.exports = (req, res, next) => {
  const { password } = req.body;
  const lengthPassword = 6;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' }); 
  }
  
  if (!password) return res.status(400).json({ message: '"password" is required' });

  if (req.baseUrl === '/login') return next();

  // A proxima validação não se aplica ao login do usuário apenas a criação de um novo usuário
  if (password.length !== lengthPassword) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' }); 
  } 
  
  return next();
};
