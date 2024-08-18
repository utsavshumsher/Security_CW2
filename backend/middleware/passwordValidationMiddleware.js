// middleware/passwordValidationMiddleware.js

const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (!hasUpperCase) return 'Password must include at least one uppercase letter.';
    if (!hasLowerCase) return 'Password must include at least one lowercase letter.';
    if (!hasNumber) return 'Password must include at least one number.';
    if (!hasSpecialChar) return 'Password must include at least one special character.';
    
    return null; // Password is valid
  };
  
  const passwordValidationMiddleware = (req, res, next) => {
    const { password } = req.body;
    
    if (password) {
      const validationError = validatePassword(password);
      if (validationError) {
        return res.status(400).json({ error: validationError });
      }
    }
    
    next();
  };
  
  export default passwordValidationMiddleware;
  