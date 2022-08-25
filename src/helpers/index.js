// Login
const requiredLoginFields = 'Some required fields are missing';
const invalidData = 'Invalid fields';

// Create Users
const shortDisplayName = '"displayName" length must be at least 8 characters long';
const invalidEmail = '"email" must be a valid email';
const shortPassword = '"password" length must be at least 6 characters long';
const alreadyTakenEmail = 'User already registered';
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

// Token Validation
const notFoundToken = 'Token not found';
const invalidToken = 'Expired or invalid token';

module.exports = {
  requiredLoginFields,
  invalidData,
  shortDisplayName,
  invalidEmail,
  shortPassword,
  alreadyTakenEmail,
  emailRegex,
  notFoundToken,
  invalidToken,
};