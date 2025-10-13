/*
// =============================================================================
// File Name     : template-certifiate-data.js
// Date Created  : 2025-10-12 10:24 UTC +02:00
// description   : data format of certificate
// -----------------------------------------------------------------------------
// Author        : Amit Manohar Manthanwar
// Mailer        : manthanwar@hotmail.com
// WebURL        : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright     : (c) 2025 Amit Manohar Manthanwar
// License       : LICENSE.md
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 12-Oct-2025   | AMM     | Initial Version
// --------------+---------+----------------------------------------------------
// =============================================================================
*/

const data = {};

data.organization = {
 name: 'Gauge Radial',
 address: {
  building: 'Room, Apartment or Suit Number and Building Name',
  street: 'Street Number and Street Name',
  village: 'Village or Council, Area, Suburb Name',
  city: 'City, Town and District Name',
  state: 'State or Province Name',
  country: 'Country Name',
  postcode: 'Postal Code',
  phone: 'phone number',
  email: 'email@sdl.tdl', // sdl: second-level domain, tdl: top-level domain
  url: 'https://sdl.tdl'
 }
};

data.organization.signatory = [
 {
  name: {
   title: 'Mr/Ms/Miss/Mrs/Dr/Prof',
   first: 'First Name',
   middle: 'Middle Name',
   last: 'Last Name'
  },
  job: {
   title: 'Controller of Examination or Software Engineer',
   designation: 'Staff/Manager/Head/Director/President/Chair/Advisor/Fellow',
   qualification: 'BE/BSc/ME/MTech/MS/MSc/PhD/CPA/MBA',
   rank: 'Intern/Junior Assistant/Senior Associate/Executive/Principal/Chief'
   // 22 - 2 - Intern Engineer   - BS
   // 26 - 4 - Junior Engineer   - MS
   // 30 - 4 - Senior Engineer   - PhD
   // 40 - 10 - Executive Engineer
   // 50 - 10 - Principal Engineer
   // 60 - 10 - Chief Engineer
  },
  address: {
   building: 'Room, Apartment or Suit Number and Building Name',
   street: 'Street Number and Street Name',
   city: 'Village, Town, City, District Name',
   state: 'State or Province Name',
   country: 'Country Name',
   postcode: 'Postal Code',
   email: 'email address',
   phone: 'phone number',
   url: 'https://sdl.tdl'
  },
  signature: 'image-data'
 }
];

data.certificate = {
 date: 'date',
 number: 'unique certificate number',
 examName: 'Bachelor of Computer Engineering',
 examDate: 'May 2025'
};

data.date = {
 certificate: 'certificate date'
};

data.awardee = [
 {
  title: '',
  nameF: '',
  nameM: '',
  nameL: '',
  idNum: '',
  examD: 'date',
  examN: 'exam'
 }
];

console.log('Hello World');

console.log(JSON.stringify(data.organization));

export default data;
