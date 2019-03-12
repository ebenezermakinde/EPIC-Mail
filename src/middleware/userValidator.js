import users from '../utils/dummyUser';

class UserValidator {
  static signUpValidator(req, res, next) {
    /* eslint-disable prefer-const */
    let {
      firstname,
      lastname,
      email,
      password,
    } = req.body;
    if (!firstname) {
      return res.status(400).json({
        status: 400,
        error: 'firstname is required',
      });
    }
    firstname = firstname.toLowerCase().trim();
    if (!lastname) {
      return res.status(400).json({
        status: 400,
        error: 'lastname is required',
      });
    }
    lastname = lastname.toLowerCase().trim();
    if (!email) {
      return res.status(400).json({
        status: 400,
        error: 'Email is required',
      });
    }
    const nameValidate = /^[a-zA-Z ]+$/;
    if (!nameValidate.test(firstname)) {
      return res.status(400).json({
        status: 400,
        error: 'firstname format is invalid',
      });
    }
    if (!nameValidate.test(lastname)) {
      return res.status(400).json({
        status: 400,
        error: 'lastname format is invalid',
      });
    }

    email = email.toLowerCase().trim();
    /* eslint-disable no-useless-escape */
    const emailVerifier = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if (!emailVerifier.test(email)) {
      return res.status(400).json({
        status: 400,
        error: 'Email format is invalid',
      });
    }
    if (email.length < 10 || email.length > 30) {
      return res.status(400).json({
        status: 400,
        error: 'Email is too short',
      });
    }
    const duplicateEmail = users.find(user => user.email === email);
    if (duplicateEmail) {
      return res.status(409).json({
        status: 409,
        error: 'Email already exists',
      });
    }

    // Password Validations
    if (!password) {
      return res.status(400).json({
        status: 400,
        error: 'Password is required',
      });
    }
    if (password.length < 8 || password.length > 15) {
      return res.status(400).json({
        status: 400,
        error: 'Password is too short',
      });
    }
    req.body.email = email;
    req.body.password = password;
    return next();
  }

  static loginValidator(req, res, next) {
    let { email, password } = req.body;
    if (!email) {
      return res.status(400).json({
        status: 400,
        error: 'Email is required',
      });
    }
    email = email.toLowerCase().trim();
    const foundUser = users.find(user => user.email === email);
    if (!foundUser) {
      return res.status(401).json({
        status: 401,
        error: 'Authentication failed',
      });
    }

    if (!password) {
      return res.status(400).json({
        status: 400,
        error: 'Password is required',
      });
    }

    password = password.trim();
    if (foundUser && password !== foundUser.password) {
      return res.status(401).json({
        status: 401,
        error: 'Incorrect login details',
      });
    }
    req.body.foundUser = foundUser;
    req.body.password = password;
    return next();
  }
}

export default UserValidator;
