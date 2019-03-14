"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.badLoginDetails = exports.badSignUpDetail = exports.goodSignUpDetail = void 0;
var goodSignUpDetail = [// Good credentials
{
  email: 'johndoe@mail.com',
  firstname: 'John',
  lastname: 'obey',
  password: 'obey123456'
}];
exports.goodSignUpDetail = goodSignUpDetail;
var badSignUpDetail = [// Empty email======>[0]
{
  email: '',
  firstname: 'Ebenezer',
  lastname: 'obey',
  password: 'obey123456'
}, // Empty firstname=====>[1]
{
  email: 'Obey',
  firstname: '',
  lastname: 'obey',
  password: 'obey123456'
}, // Empty lastname=======>[2]
{
  email: 'Obey',
  firstname: 'Ebenezer',
  lastname: '',
  password: 'obey123456'
}, // Empty password========>[3]
{
  email: 'obeyebenezer@zoom.com',
  firstname: 'Ebenezer',
  lastname: 'Obey',
  password: ''
}, // Invalid firstname format===>[4]
{
  email: 'obeyebenezer@zoom.com',
  firstname: '@Ebenezer',
  lastname: 'Obey',
  password: 'obey123456'
}, // Invalid lastname format====>[5]
{
  email: 'obeyebenezer@zoom.com',
  firstname: 'Ebenezer',
  lastname: '@Obey',
  password: 'obey123456'
}, // Invalid email format=======>[6]
{
  email: 'obeyebenezer@zoom12345',
  firstname: 'Ebenezer',
  lastname: 'Obey',
  password: 'obey123456'
}, // Short email address.=======>[7]
{
  email: 'e@zoo.com',
  firstname: 'Ebenezer',
  lastname: 'Obey',
  password: 'obey123456'
}, // Duplicate email check=======>[8]
{
  email: 'johndoe@mail.com',
  firstname: 'John',
  lastname: 'Davis',
  password: 'maryamaka123'
}, // Short password check=======>[9]
{
  email: 'uidoe@mail.com',
  firstname: 'John',
  lastname: 'Davis',
  password: 'ma123'
}];
exports.badSignUpDetail = badSignUpDetail;
var badLoginDetails = [// User not signed up
{
  email: 'obeyboyobey@yahoo.co.uk',
  password: 'obey123456f'
}, // Signed up user providing empty email
{
  email: '',
  password: 'obey123456'
}, // Signed up user providing empty password
{
  email: 'johndoe@mail.com',
  password: ''
}, // Signed up user providing wrong password
{
  email: 'johndoe@mail.com',
  password: 'maks123456'
}];
exports.badLoginDetails = badLoginDetails;
//# sourceMappingURL=mockUser.js.map