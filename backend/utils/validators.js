const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (!hasUpperCase) return { valid: false, message: 'Password must include at least one uppercase letter.' };
    if (!hasLowerCase) return { valid: false, message: 'Password must include at least one lowercase letter.' };
    if (!hasNumber) return { valid: false, message: 'Password must include at least one number.' };
    if (!hasSpecialChar) return { valid: false, message: 'Password must include at least one special character.' };
    
    return { valid: true, message: '' };
  };
  
  module.exports = { validatePassword };
  