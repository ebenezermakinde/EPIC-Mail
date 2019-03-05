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
        error: 'Email should be a string',
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
        error: 'Email should be 10 to 50 characters long',
      });
    }
    const duplicateEmail = users.find(user => user.email === email);
    if (duplicateEmail) {
      return res.status(400).json({
        status: 400,
        error: 'Email already exists!',
      });
    }

    // Password Validations
    if (!password) {
      return res.status(400).json({
        status: 400,
        error: 'Password is required',
      });
    }
    if (password.length < 8 || password.length > 20) {
      return res.status(400).json({
        status: 400,
        error: 'Password should be 8 to 20 characters long',
      });
    }
    req.body.email = email;
    req.body.password = password;
    return next();
  }
}

export default UserValidator;
