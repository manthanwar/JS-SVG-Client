// =============================================================================
// File Name  : TimeZoneCountry.js
// Description: JS Class to get country name
// -----------------------------------------------------------------------------
// Author     : Amit Manohar Manthanwar
// WebURL     : https://manthanwar.github.io
// -----------------------------------------------------------------------------
// Copyright  : (c) 2024 Amit Manohar Manthanwar
// License    : MIT License
// ----------------------------------------------------------------------------
// This program can be redistributed and/or modified under the terms
// of the MIT License. For details see the file license.txt
// =============================================================================
// Revision Log  | Author  | Description
// --------------+---------+----------------------------------------------------
// 10-Nov-2024   | AMM | Initial Version
// --------------+---------+----------------------------------------------------
// ref: https://codepen.io/diego-fortes/pen/YzEPxYw
// =============================================================================

export default class TimeZoneCountry {
 constructor(data) {
  this.initCountries();
  this.initTimeZones();
  this.initLanguages();
 } //constructor

 getTimeZone() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (timezone === '' || !timezone) return null;
  return timezone;
 }

 getCountry() {
  const timezone = this.getTimeZone();
  const _country = this.timezones[timezone].c[0];
  const country = this.countries[_country];
  return country;
 }

 getState() {
  const timezone = this.getTimeZone();
  const state = timezone.split('/')[1].replace('-', ' ');
  return state;
 }

 getLanguage() {
  const country = this.getCountry();
  const langObj = this.getObjByValue(this.languages, country);
  return langObj;
 }

 getObjByValue(arrObj, value) {
  const obj = arrObj.find((o) => o.region === value);
  return obj;
 }

 getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
 }

 initCountries() {
  this.countries = {
   AD: 'Andorra',
   AE: 'United Arab Emirates',
   AF: 'Afghanistan',
   AG: 'Antigua and Barbuda',
   AI: 'Anguilla',
   AL: 'Albania',
   AM: 'Armenia',
   AO: 'Angola',
   AQ: 'Antarctica',
   AR: 'Argentina',
   AS: 'American Samoa',
   AT: 'Austria',
   AU: 'Australia',
   AW: 'Aruba',
   AX: 'Åland Islands',
   AZ: 'Azerbaijan',
   BA: 'Bosnia and Herzegovina',
   BB: 'Barbados',
   BD: 'Bangladesh',
   BE: 'Belgium',
   BF: 'Burkina Faso',
   BG: 'Bulgaria',
   BH: 'Bahrain',
   BI: 'Burundi',
   BJ: 'Benin',
   BL: 'Saint Barthélemy',
   BM: 'Bermuda',
   BN: 'Brunei',
   BO: 'Bolivia',
   BQ: 'Caribbean Netherlands',
   BR: 'Brazil',
   BS: 'Bahamas',
   BT: 'Bhutan',
   BV: 'Bouvet Island',
   BW: 'Botswana',
   BY: 'Belarus',
   BZ: 'Belize',
   CA: 'Canada',
   CC: 'Cocos Islands',
   CD: 'Democratic Republic of the Congo',
   CF: 'Central African Republic',
   CG: 'Republic of the Congo',
   CH: 'Switzerland',
   CI: 'Ivory Coast',
   CK: 'Cook Islands',
   CL: 'Chile',
   CM: 'Cameroon',
   CN: 'China',
   CO: 'Colombia',
   CR: 'Costa Rica',
   CU: 'Cuba',
   CV: 'Cabo Verde',
   CW: 'Curaçao',
   CX: 'Christmas Island',
   CY: 'Cyprus',
   CZ: 'Czechia',
   DE: 'Germany',
   DJ: 'Djibouti',
   DK: 'Denmark',
   DM: 'Dominica',
   DO: 'Dominican Republic',
   DZ: 'Algeria',
   EC: 'Ecuador',
   EE: 'Estonia',
   EG: 'Egypt',
   EH: 'Western Sahara',
   ER: 'Eritrea',
   ES: 'Spain',
   ET: 'Ethiopia',
   FI: 'Finland',
   FJ: 'Fiji',
   FK: 'Falkland Islands',
   FM: 'Micronesia',
   FO: 'Faroe Islands',
   FR: 'France',
   GA: 'Gabon',
   GB: 'United Kingdom',
   GD: 'Grenada',
   GE: 'Georgia',
   GF: 'French Guiana',
   GG: 'Guernsey',
   GH: 'Ghana',
   GI: 'Gibraltar',
   GL: 'Greenland',
   GM: 'Gambia',
   GN: 'Guinea',
   GP: 'Guadeloupe',
   GQ: 'Equatorial Guinea',
   GR: 'Greece',
   GS: 'South Georgia and the South Sandwich Islands',
   GT: 'Guatemala',
   GU: 'Guam',
   GW: 'Guinea-Bissau',
   GY: 'Guyana',
   HK: 'Hong Kong',
   HM: 'Heard Island and McDonald Islands',
   HN: 'Honduras',
   HR: 'Croatia',
   HT: 'Haiti',
   HU: 'Hungary',
   ID: 'Indonesia',
   IE: 'Ireland',
   IL: 'Israel',
   IM: 'Isle of Man',
   IN: 'India',
   IO: 'British Indian Ocean Territory',
   IQ: 'Iraq',
   IR: 'Iran',
   IS: 'Iceland',
   IT: 'Italy',
   JE: 'Jersey',
   JM: 'Jamaica',
   JO: 'Jordan',
   JP: 'Japan',
   KE: 'Kenya',
   KG: 'Kyrgyzstan',
   KH: 'Cambodia',
   KI: 'Kiribati',
   KM: 'Comoros',
   KN: 'Saint Kitts and Nevis',
   KP: 'North Korea',
   KR: 'South Korea',
   KW: 'Kuwait',
   KY: 'Cayman Islands',
   KZ: 'Kazakhstan',
   LA: 'Laos',
   LB: 'Lebanon',
   LC: 'Saint Lucia',
   LI: 'Liechtenstein',
   LK: 'Sri Lanka',
   LR: 'Liberia',
   LS: 'Lesotho',
   LT: 'Lithuania',
   LU: 'Luxembourg',
   LV: 'Latvia',
   LY: 'Libya',
   MA: 'Morocco',
   MC: 'Monaco',
   MD: 'Moldova',
   ME: 'Montenegro',
   MF: 'Saint Martin',
   MG: 'Madagascar',
   MH: 'Marshall Islands',
   MK: 'North Macedonia',
   ML: 'Mali',
   MM: 'Myanmar',
   MN: 'Mongolia',
   MO: 'Macao',
   MP: 'Northern Mariana Islands',
   MQ: 'Martinique',
   MR: 'Mauritania',
   MS: 'Montserrat',
   MT: 'Malta',
   MU: 'Mauritius',
   MV: 'Maldives',
   MW: 'Malawi',
   MX: 'Mexico',
   MY: 'Malaysia',
   MZ: 'Mozambique',
   NA: 'Namibia',
   NC: 'New Caledonia',
   NE: 'Niger',
   NF: 'Norfolk Island',
   NG: 'Nigeria',
   NI: 'Nicaragua',
   NL: 'Netherlands',
   NO: 'Norway',
   NP: 'Nepal',
   NR: 'Nauru',
   NU: 'Niue',
   NZ: 'New Zealand',
   OM: 'Oman',
   PA: 'Panama',
   PE: 'Peru',
   PF: 'French Polynesia',
   PG: 'Papua New Guinea',
   PH: 'Philippines',
   PK: 'Pakistan',
   PL: 'Poland',
   PM: 'Saint Pierre and Miquelon',
   PN: 'Pitcairn',
   PR: 'Puerto Rico',
   PS: 'Palestine',
   PT: 'Portugal',
   PW: 'Palau',
   PY: 'Paraguay',
   QA: 'Qatar',
   RE: 'Réunion',
   RO: 'Romania',
   RS: 'Serbia',
   RU: 'Russia',
   RW: 'Rwanda',
   SA: 'Saudi Arabia',
   SB: 'Solomon Islands',
   SC: 'Seychelles',
   SD: 'Sudan',
   SE: 'Sweden',
   SG: 'Singapore',
   SH: 'Saint Helena, Ascension and Tristan da Cunha',
   SI: 'Slovenia',
   SJ: 'Svalbard and Jan Mayen',
   SK: 'Slovakia',
   SL: 'Sierra Leone',
   SM: 'San Marino',
   SN: 'Senegal',
   SO: 'Somalia',
   SR: 'Suriname',
   SS: 'South Sudan',
   ST: 'Sao Tome and Principe',
   SV: 'El Salvador',
   SX: 'Sint Maarten',
   SY: 'Syria',
   SZ: 'Eswatini',
   TC: 'Turks and Caicos Islands',
   TD: 'Chad',
   TF: 'French Southern Territories',
   TG: 'Togo',
   TH: 'Thailand',
   TJ: 'Tajikistan',
   TK: 'Tokelau',
   TL: 'Timor-Leste',
   TM: 'Turkmenistan',
   TN: 'Tunisia',
   TO: 'Tonga',
   TR: 'Turkey',
   TT: 'Trinidad and Tobago',
   TV: 'Tuvalu',
   TW: 'Taiwan',
   TZ: 'Tanzania',
   UA: 'Ukraine',
   UG: 'Uganda',
   UM: 'United States Minor Outlying Islands',
   US: 'United States of America',
   UY: 'Uruguay',
   UZ: 'Uzbekistan',
   VA: 'Holy See',
   VC: 'Saint Vincent and the Grenadines',
   VE: 'Venezuela',
   VG: 'Virgin Islands (UK)',
   VI: 'Virgin Islands (US)',
   VN: 'Vietnam',
   VU: 'Vanuatu',
   WF: 'Wallis and Futuna',
   WS: 'Samoa',
   YE: 'Yemen',
   YT: 'Mayotte',
   ZA: 'South Africa',
   ZM: 'Zambia',
   ZW: 'Zimbabwe'
  };
 } // init countries

 // u: UTC difference, r: region, c: country
 initTimeZones() {
  this.timezones = {
   'Africa/Abidjan': {
    u: 0,
    c: ['CI', 'BF', 'GH', 'GM', 'GN', 'ML', 'MR', 'SH', 'SL', 'SN', 'TG']
   },
   'Africa/Accra': {
    a: 'Africa/Abidjan',
    c: ['GH'],
    r: 1
   },
   'Africa/Addis-Ababa': {
    a: 'Africa/Nairobi',
    c: ['ET'],
    r: 1
   },
   'Africa/Algiers': {
    u: 60,
    c: ['DZ']
   },
   'Africa/Asmara': {
    a: 'Africa/Nairobi',
    c: ['ER'],
    r: 1
   },
   'Africa/Asmera': {
    a: 'Africa/Nairobi',
    c: ['ER'],
    r: 1
   },
   'Africa/Bamako': {
    a: 'Africa/Abidjan',
    c: ['ML'],
    r: 1
   },
   'Africa/Bangui': {
    a: 'Africa/Lagos',
    c: ['CF'],
    r: 1
   },
   'Africa/Banjul': {
    a: 'Africa/Abidjan',
    c: ['GM'],
    r: 1
   },
   'Africa/Bissau': {
    u: 0,
    c: ['GW']
   },
   'Africa/Blantyre': {
    a: 'Africa/Maputo',
    c: ['MW'],
    r: 1
   },
   'Africa/Brazzaville': {
    a: 'Africa/Lagos',
    c: ['CG'],
    r: 1
   },
   'Africa/Bujumbura': {
    a: 'Africa/Maputo',
    c: ['BI'],
    r: 1
   },
   'Africa/Cairo': {
    u: 120,
    c: ['EG']
   },
   'Africa/Casablanca': {
    u: 60,
    d: 0,
    c: ['MA']
   },
   'Africa/Ceuta': {
    u: 60,
    d: 120,
    c: ['ES']
   },
   'Africa/Conakry': {
    a: 'Africa/Abidjan',
    c: ['GN'],
    r: 1
   },
   'Africa/Dakar': {
    a: 'Africa/Abidjan',
    c: ['SN'],
    r: 1
   },
   'Africa/Dar-es-Salaam': {
    a: 'Africa/Nairobi',
    c: ['TZ'],
    r: 1
   },
   'Africa/Djibouti': {
    a: 'Africa/Nairobi',
    c: ['DJ'],
    r: 1
   },
   'Africa/Douala': {
    a: 'Africa/Lagos',
    c: ['CM'],
    r: 1
   },
   'Africa/El-Aaiun': {
    u: 60,
    d: 0,
    c: ['EH']
   },
   'Africa/Freetown': {
    a: 'Africa/Abidjan',
    c: ['SL'],
    r: 1
   },
   'Africa/Gaborone': {
    a: 'Africa/Maputo',
    c: ['BW'],
    r: 1
   },
   'Africa/Harare': {
    a: 'Africa/Maputo',
    c: ['ZW'],
    r: 1
   },
   'Africa/Johannesburg': {
    u: 120,
    c: ['ZA', 'LS', 'SZ']
   },
   'Africa/Juba': {
    u: 120,
    c: ['SS']
   },
   'Africa/Kampala': {
    a: 'Africa/Nairobi',
    c: ['UG'],
    r: 1
   },
   'Africa/Khartoum': {
    u: 120,
    c: ['SD']
   },
   'Africa/Kigali': {
    a: 'Africa/Maputo',
    c: ['RW'],
    r: 1
   },
   'Africa/Kinshasa': {
    a: 'Africa/Lagos',
    c: ['CD'],
    r: 1
   },
   'Africa/Lagos': {
    u: 60,
    c: ['NG', 'AO', 'BJ', 'CD', 'CF', 'CG', 'CM', 'GA', 'GQ', 'NE']
   },
   'Africa/Libreville': {
    a: 'Africa/Lagos',
    c: ['GA'],
    r: 1
   },
   'Africa/Lome': {
    a: 'Africa/Abidjan',
    c: ['TG'],
    r: 1
   },
   'Africa/Luanda': {
    a: 'Africa/Lagos',
    c: ['AO'],
    r: 1
   },
   'Africa/Lubumbashi': {
    a: 'Africa/Maputo',
    c: ['CD'],
    r: 1
   },
   'Africa/Lusaka': {
    a: 'Africa/Maputo',
    c: ['ZM'],
    r: 1
   },
   'Africa/Malabo': {
    a: 'Africa/Lagos',
    c: ['GQ'],
    r: 1
   },
   'Africa/Maputo': {
    u: 120,
    c: ['MZ', 'BI', 'BW', 'CD', 'MW', 'RW', 'ZM', 'ZW']
   },
   'Africa/Maseru': {
    a: 'Africa/Johannesburg',
    c: ['LS'],
    r: 1
   },
   'Africa/Mbabane': {
    a: 'Africa/Johannesburg',
    c: ['SZ'],
    r: 1
   },
   'Africa/Mogadishu': {
    a: 'Africa/Nairobi',
    c: ['SO'],
    r: 1
   },
   'Africa/Monrovia': {
    u: 0,
    c: ['LR']
   },
   'Africa/Nairobi': {
    u: 180,
    c: ['KE', 'DJ', 'ER', 'ET', 'KM', 'MG', 'SO', 'TZ', 'UG', 'YT']
   },
   'Africa/Ndjamena': {
    u: 60,
    c: ['TD']
   },
   'Africa/Niamey': {
    a: 'Africa/Lagos',
    c: ['NE'],
    r: 1
   },
   'Africa/Nouakchott': {
    a: 'Africa/Abidjan',
    c: ['MR'],
    r: 1
   },
   'Africa/Ouagadougou': {
    a: 'Africa/Abidjan',
    c: ['BF'],
    r: 1
   },
   'Africa/Porto-Novo': {
    a: 'Africa/Lagos',
    c: ['BJ'],
    r: 1
   },
   'Africa/Sao-Tome': {
    u: 0,
    c: ['ST']
   },
   'Africa/Timbuktu': {
    a: 'Africa/Abidjan',
    c: ['ML'],
    r: 1
   },
   'Africa/Tripoli': {
    u: 120,
    c: ['LY']
   },
   'Africa/Tunis': {
    u: 60,
    c: ['TN']
   },
   'Africa/Windhoek': {
    u: 120,
    c: ['NA']
   },
   'America/Adak': {
    u: -600,
    d: -540,
    c: ['US']
   },
   'America/Anchorage': {
    u: -540,
    d: -480,
    c: ['US']
   },
   'America/Anguilla': {
    a: 'America/Puerto-Rico',
    c: ['AI'],
    r: 1
   },
   'America/Antigua': {
    a: 'America/Puerto-Rico',
    c: ['AG'],
    r: 1
   },
   'America/Araguaina': {
    u: -180,
    c: ['BR']
   },
   'America/Argentina/Buenos-Aires': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/Catamarca': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/ComodRivadavia': {
    a: 'America/Argentina/Catamarca',
    r: 1
   },
   'America/Argentina/Cordoba': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/Jujuy': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/La-Rioja': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/Mendoza': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/Rio-Gallegos': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/Salta': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/San-Juan': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/San-Luis': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/Tucuman': {
    u: -180,
    c: ['AR']
   },
   'America/Argentina/Ushuaia': {
    u: -180,
    c: ['AR']
   },
   'America/Aruba': {
    a: 'America/Puerto-Rico',
    c: ['AW'],
    r: 1
   },
   'America/Asuncion': {
    u: -240,
    d: -180,
    c: ['PY']
   },
   'America/Atikokan': {
    a: 'America/Panama',
    c: ['CA'],
    r: 1
   },
   'America/Atka': {
    a: 'America/Adak',
    r: 1
   },
   'America/Bahia': {
    u: -180,
    c: ['BR']
   },
   'America/Bahia-Banderas': {
    u: -360,
    d: -300,
    c: ['MX']
   },
   'America/Barbados': {
    u: -240,
    c: ['BB']
   },
   'America/Belem': {
    u: -180,
    c: ['BR']
   },
   'America/Belize': {
    u: -360,
    c: ['BZ']
   },
   'America/Blanc-Sablon': {
    a: 'America/Puerto-Rico',
    c: ['CA'],
    r: 1
   },
   'America/Boa-Vista': {
    u: -240,
    c: ['BR']
   },
   'America/Bogota': {
    u: -300,
    c: ['CO']
   },
   'America/Boise': {
    u: -420,
    d: -360,
    c: ['US']
   },
   'America/Buenos-Aires': {
    a: 'America/Argentina/Buenos-Aires',
    r: 1
   },
   'America/Cambridge-Bay': {
    u: -420,
    d: -360,
    c: ['CA']
   },
   'America/Campo-Grande': {
    u: -240,
    c: ['BR']
   },
   'America/Cancun': {
    u: -300,
    c: ['MX']
   },
   'America/Caracas': {
    u: -240,
    c: ['VE']
   },
   'America/Catamarca': {
    a: 'America/Argentina/Catamarca',
    r: 1
   },
   'America/Cayenne': {
    u: -180,
    c: ['GF']
   },
   'America/Cayman': {
    a: 'America/Panama',
    c: ['KY'],
    r: 1
   },
   'America/Chicago': {
    u: -360,
    d: -300,
    c: ['US']
   },
   'America/Chihuahua': {
    u: -420,
    d: -360,
    c: ['MX']
   },
   'America/Coral-Harbour': {
    a: 'America/Panama',
    c: ['CA'],
    r: 1
   },
   'America/Cordoba': {
    a: 'America/Argentina/Cordoba',
    r: 1
   },
   'America/Costa-Rica': {
    u: -360,
    c: ['CR']
   },
   'America/Creston': {
    a: 'America/Phoenix',
    c: ['CA'],
    r: 1
   },
   'America/Cuiaba': {
    u: -240,
    c: ['BR']
   },
   'America/Curacao': {
    a: 'America/Puerto-Rico',
    c: ['CW'],
    r: 1
   },
   'America/Danmarkshavn': {
    u: 0,
    c: ['GL']
   },
   'America/Dawson': {
    u: -420,
    c: ['CA']
   },
   'America/Dawson-Creek': {
    u: -420,
    c: ['CA']
   },
   'America/Denver': {
    u: -420,
    d: -360,
    c: ['US']
   },
   'America/Detroit': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Dominica': {
    a: 'America/Puerto-Rico',
    c: ['DM'],
    r: 1
   },
   'America/Edmonton': {
    u: -420,
    d: -360,
    c: ['CA']
   },
   'America/Eirunepe': {
    u: -300,
    c: ['BR']
   },
   'America/El-Salvador': {
    u: -360,
    c: ['SV']
   },
   'America/Ensenada': {
    a: 'America/Tijuana',
    r: 1
   },
   'America/Fort-Nelson': {
    u: -420,
    c: ['CA']
   },
   'America/Fort-Wayne': {
    a: 'America/Indiana/Indianapolis',
    r: 1
   },
   'America/Fortaleza': {
    u: -180,
    c: ['BR']
   },
   'America/Glace-Bay': {
    u: -240,
    d: -180,
    c: ['CA']
   },
   'America/Godthab': {
    a: 'America/Nuuk',
    r: 1
   },
   'America/Goose-Bay': {
    u: -240,
    d: -180,
    c: ['CA']
   },
   'America/Grand-Turk': {
    u: -300,
    d: -240,
    c: ['TC']
   },
   'America/Grenada': {
    a: 'America/Puerto-Rico',
    c: ['GD'],
    r: 1
   },
   'America/Guadeloupe': {
    a: 'America/Puerto-Rico',
    c: ['GP'],
    r: 1
   },
   'America/Guatemala': {
    u: -360,
    c: ['GT']
   },
   'America/Guayaquil': {
    u: -300,
    c: ['EC']
   },
   'America/Guyana': {
    u: -240,
    c: ['GY']
   },
   'America/Halifax': {
    u: -240,
    d: -180,
    c: ['CA']
   },
   'America/Havana': {
    u: -300,
    d: -240,
    c: ['CU']
   },
   'America/Hermosillo': {
    u: -420,
    c: ['MX']
   },
   'America/Indiana/Indianapolis': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Indiana/Knox': {
    u: -360,
    d: -300,
    c: ['US']
   },
   'America/Indiana/Marengo': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Indiana/Petersburg': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Indiana/Tell-City': {
    u: -360,
    d: -300,
    c: ['US']
   },
   'America/Indiana/Vevay': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Indiana/Vincennes': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Indiana/Winamac': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Indianapolis': {
    a: 'America/Indiana/Indianapolis',
    r: 1
   },
   'America/Inuvik': {
    u: -420,
    d: -360,
    c: ['CA']
   },
   'America/Iqaluit': {
    u: -300,
    d: -240,
    c: ['CA']
   },
   'America/Jamaica': {
    u: -300,
    c: ['JM']
   },
   'America/Jujuy': {
    a: 'America/Argentina/Jujuy',
    r: 1
   },
   'America/Juneau': {
    u: -540,
    d: -480,
    c: ['US']
   },
   'America/Kentucky/Louisville': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Kentucky/Monticello': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Knox-IN': {
    a: 'America/Indiana/Knox',
    r: 1
   },
   'America/Kralendijk': {
    a: 'America/Puerto-Rico',
    c: ['BQ'],
    r: 1
   },
   'America/La-Paz': {
    u: -240,
    c: ['BO']
   },
   'America/Lima': {
    u: -300,
    c: ['PE']
   },
   'America/Los-Angeles': {
    u: -480,
    d: -420,
    c: ['US']
   },
   'America/Louisville': {
    a: 'America/Kentucky/Louisville',
    r: 1
   },
   'America/Lower-Princes': {
    a: 'America/Puerto-Rico',
    c: ['SX'],
    r: 1
   },
   'America/Maceio': {
    u: -180,
    c: ['BR']
   },
   'America/Managua': {
    u: -360,
    c: ['NI']
   },
   'America/Manaus': {
    u: -240,
    c: ['BR']
   },
   'America/Marigot': {
    a: 'America/Puerto-Rico',
    c: ['MF'],
    r: 1
   },
   'America/Martinique': {
    u: -240,
    c: ['MQ']
   },
   'America/Matamoros': {
    u: -360,
    d: -300,
    c: ['MX']
   },
   'America/Mazatlan': {
    u: -420,
    d: -360,
    c: ['MX']
   },
   'America/Mendoza': {
    a: 'America/Argentina/Mendoza',
    r: 1
   },
   'America/Menominee': {
    u: -360,
    d: -300,
    c: ['US']
   },
   'America/Merida': {
    u: -360,
    d: -300,
    c: ['MX']
   },
   'America/Metlakatla': {
    u: -540,
    d: -480,
    c: ['US']
   },
   'America/Mexico-City': {
    u: -360,
    d: -300,
    c: ['MX']
   },
   'America/Miquelon': {
    u: -180,
    d: -120,
    c: ['PM']
   },
   'America/Moncton': {
    u: -240,
    d: -180,
    c: ['CA']
   },
   'America/Monterrey': {
    u: -360,
    d: -300,
    c: ['MX']
   },
   'America/Montevideo': {
    u: -180,
    c: ['UY']
   },
   'America/Montreal': {
    a: 'America/Toronto',
    c: ['CA'],
    r: 1
   },
   'America/Montserrat': {
    a: 'America/Puerto-Rico',
    c: ['MS'],
    r: 1
   },
   'America/Nassau': {
    a: 'America/Toronto',
    c: ['BS'],
    r: 1
   },
   'America/New-York': {
    u: -300,
    d: -240,
    c: ['US']
   },
   'America/Nipigon': {
    u: -300,
    d: -240,
    c: ['CA']
   },
   'America/Nome': {
    u: -540,
    d: -480,
    c: ['US']
   },
   'America/Noronha': {
    u: -120,
    c: ['BR']
   },
   'America/North-Dakota/Beulah': {
    u: -360,
    d: -300,
    c: ['US']
   },
   'America/North-Dakota/Center': {
    u: -360,
    d: -300,
    c: ['US']
   },
   'America/North-Dakota/New-Salem': {
    u: -360,
    d: -300,
    c: ['US']
   },
   'America/Nuuk': {
    u: -180,
    d: -120,
    c: ['GL']
   },
   'America/Ojinaga': {
    u: -420,
    d: -360,
    c: ['MX']
   },
   'America/Panama': {
    u: -300,
    c: ['PA', 'CA', 'KY']
   },
   'America/Pangnirtung': {
    u: -300,
    d: -240,
    c: ['CA']
   },
   'America/Paramaribo': {
    u: -180,
    c: ['SR']
   },
   'America/Phoenix': {
    u: -420,
    c: ['US', 'CA']
   },
   'America/Port-au-Prince': {
    u: -300,
    d: -240,
    c: ['HT']
   },
   'America/Port-of-Spain': {
    a: 'America/Puerto-Rico',
    c: ['TT'],
    r: 1
   },
   'America/Porto-Acre': {
    a: 'America/Rio-Branco',
    r: 1
   },
   'America/Porto-Velho': {
    u: -240,
    c: ['BR']
   },
   'America/Puerto-Rico': {
    u: -240,
    c: [
     'PR',
     'AG',
     'CA',
     'AI',
     'AW',
     'BL',
     'BQ',
     'CW',
     'DM',
     'GD',
     'GP',
     'KN',
     'LC',
     'MF',
     'MS',
     'SX',
     'TT',
     'VC',
     'VG',
     'VI'
    ]
   },
   'America/Punta-Arenas': {
    u: -180,
    c: ['CL']
   },
   'America/Rainy-River': {
    u: -360,
    d: -300,
    c: ['CA']
   },
   'America/Rankin-Inlet': {
    u: -360,
    d: -300,
    c: ['CA']
   },
   'America/Recife': {
    u: -180,
    c: ['BR']
   },
   'America/Regina': {
    u: -360,
    c: ['CA']
   },
   'America/Resolute': {
    u: -360,
    d: -300,
    c: ['CA']
   },
   'America/Rio-Branco': {
    u: -300,
    c: ['BR']
   },
   'America/Rosario': {
    a: 'America/Argentina/Cordoba',
    r: 1
   },
   'America/Santa-Isabel': {
    a: 'America/Tijuana',
    r: 1
   },
   'America/Santarem': {
    u: -180,
    c: ['BR']
   },
   'America/Santiago': {
    u: -240,
    d: -180,
    c: ['CL']
   },
   'America/Santo-Domingo': {
    u: -240,
    c: ['DO']
   },
   'America/Sao-Paulo': {
    u: -180,
    c: ['BR']
   },
   'America/Scoresbysund': {
    u: -60,
    d: 0,
    c: ['GL']
   },
   'America/Shiprock': {
    a: 'America/Denver',
    r: 1
   },
   'America/Sitka': {
    u: -540,
    d: -480,
    c: ['US']
   },
   'America/St-Barthelemy': {
    a: 'America/Puerto-Rico',
    c: ['BL'],
    r: 1
   },
   'America/St-Johns': {
    u: -150,
    d: -90,
    c: ['CA']
   },
   'America/St-Kitts': {
    a: 'America/Puerto-Rico',
    c: ['KN'],
    r: 1
   },
   'America/St-Lucia': {
    a: 'America/Puerto-Rico',
    c: ['LC'],
    r: 1
   },
   'America/St-Thomas': {
    a: 'America/Puerto-Rico',
    c: ['VI'],
    r: 1
   },
   'America/St-Vincent': {
    a: 'America/Puerto-Rico',
    c: ['VC'],
    r: 1
   },
   'America/Swift-Current': {
    u: -360,
    c: ['CA']
   },
   'America/Tegucigalpa': {
    u: -360,
    c: ['HN']
   },
   'America/Thule': {
    u: -240,
    d: -180,
    c: ['GL']
   },
   'America/Thunder-Bay': {
    u: -300,
    d: -240,
    c: ['CA']
   },
   'America/Tijuana': {
    u: -480,
    d: -420,
    c: ['MX']
   },
   'America/Toronto': {
    u: -300,
    d: -240,
    c: ['CA', 'BS']
   },
   'America/Tortola': {
    a: 'America/Puerto-Rico',
    c: ['VG'],
    r: 1
   },
   'America/Vancouver': {
    u: -480,
    d: -420,
    c: ['CA']
   },
   'America/Virgin': {
    a: 'America/Puerto-Rico',
    c: ['VI'],
    r: 1
   },
   'America/Whitehorse': {
    u: -420,
    c: ['CA']
   },
   'America/Winnipeg': {
    u: -360,
    d: -300,
    c: ['CA']
   },
   'America/Yakutat': {
    u: -540,
    d: -480,
    c: ['US']
   },
   'America/Yellowknife': {
    u: -420,
    d: -360,
    c: ['CA']
   },
   'Antarctica/Casey': {
    u: 660,
    c: ['AQ']
   },
   'Antarctica/Davis': {
    u: 420,
    c: ['AQ']
   },
   'Antarctica/DumontDUrville': {
    a: 'Pacific/Port-Moresby',
    c: ['AQ'],
    r: 1
   },
   'Antarctica/Macquarie': {
    u: 600,
    d: 660,
    c: ['AU']
   },
   'Antarctica/Mawson': {
    u: 300,
    c: ['AQ']
   },
   'Antarctica/McMurdo': {
    a: 'Pacific/Auckland',
    c: ['AQ'],
    r: 1
   },
   'Antarctica/Palmer': {
    u: -180,
    c: ['AQ']
   },
   'Antarctica/Rothera': {
    u: -180,
    c: ['AQ']
   },
   'Antarctica/South-Pole': {
    a: 'Pacific/Auckland',
    c: ['AQ'],
    r: 1
   },
   'Antarctica/Syowa': {
    a: 'Asia/Riyadh',
    c: ['AQ'],
    r: 1
   },
   'Antarctica/Troll': {
    u: 0,
    d: 120,
    c: ['AQ']
   },
   'Antarctica/Vostok': {
    u: 360,
    c: ['AQ']
   },
   'Arctic/Longyearbyen': {
    a: 'Europe/Oslo',
    c: ['SJ'],
    r: 1
   },
   'Asia/Aden': {
    a: 'Asia/Riyadh',
    c: ['YE'],
    r: 1
   },
   'Asia/Almaty': {
    u: 360,
    c: ['KZ']
   },
   'Asia/Amman': {
    u: 120,
    d: 180,
    c: ['JO']
   },
   'Asia/Anadyr': {
    u: 720,
    c: ['RU']
   },
   'Asia/Aqtau': {
    u: 300,
    c: ['KZ']
   },
   'Asia/Aqtobe': {
    u: 300,
    c: ['KZ']
   },
   'Asia/Ashgabat': {
    u: 300,
    c: ['TM']
   },
   'Asia/Ashkhabad': {
    a: 'Asia/Ashgabat',
    r: 1
   },
   'Asia/Atyrau': {
    u: 300,
    c: ['KZ']
   },
   'Asia/Baghdad': {
    u: 180,
    c: ['IQ']
   },
   'Asia/Bahrain': {
    a: 'Asia/Qatar',
    c: ['BH'],
    r: 1
   },
   'Asia/Baku': {
    u: 240,
    c: ['AZ']
   },
   'Asia/Bangkok': {
    u: 420,
    c: ['TH', 'KH', 'LA', 'VN']
   },
   'Asia/Barnaul': {
    u: 420,
    c: ['RU']
   },
   'Asia/Beirut': {
    u: 120,
    d: 180,
    c: ['LB']
   },
   'Asia/Bishkek': {
    u: 360,
    c: ['KG']
   },
   'Asia/Brunei': {
    u: 480,
    c: ['BN']
   },
   'Asia/Calcutta': {
    a: 'Asia/Kolkata',
    r: 1
   },
   'Asia/Chita': {
    u: 540,
    c: ['RU']
   },
   'Asia/Choibalsan': {
    u: 480,
    c: ['MN']
   },
   'Asia/Chongqing': {
    a: 'Asia/Shanghai',
    r: 1
   },
   'Asia/Chungking': {
    a: 'Asia/Shanghai',
    r: 1
   },
   'Asia/Colombo': {
    u: 330,
    c: ['LK']
   },
   'Asia/Dacca': {
    a: 'Asia/Dhaka',
    r: 1
   },
   'Asia/Damascus': {
    u: 120,
    d: 180,
    c: ['SY']
   },
   'Asia/Dhaka': {
    u: 360,
    c: ['BD']
   },
   'Asia/Dili': {
    u: 540,
    c: ['TL']
   },
   'Asia/Dubai': {
    u: 240,
    c: ['AE', 'OM']
   },
   'Asia/Dushanbe': {
    u: 300,
    c: ['TJ']
   },
   'Asia/Famagusta': {
    u: 120,
    d: 180,
    c: ['CY']
   },
   'Asia/Gaza': {
    u: 120,
    d: 180,
    c: ['PS']
   },
   'Asia/Harbin': {
    a: 'Asia/Shanghai',
    r: 1
   },
   'Asia/Hebron': {
    u: 120,
    d: 180,
    c: ['PS']
   },
   'Asia/Ho-Chi-Minh': {
    u: 420,
    c: ['VN']
   },
   'Asia/Hong-Kong': {
    u: 480,
    c: ['HK']
   },
   'Asia/Hovd': {
    u: 420,
    c: ['MN']
   },
   'Asia/Irkutsk': {
    u: 480,
    c: ['RU']
   },
   'Asia/Istanbul': {
    a: 'Europe/Istanbul',
    r: 1
   },
   'Asia/Jakarta': {
    u: 420,
    c: ['ID']
   },
   'Asia/Jayapura': {
    u: 540,
    c: ['ID']
   },
   'Asia/Jerusalem': {
    u: 120,
    d: 180,
    c: ['IL']
   },
   'Asia/Kabul': {
    u: 270,
    c: ['AF']
   },
   'Asia/Kamchatka': {
    u: 720,
    c: ['RU']
   },
   'Asia/Karachi': {
    u: 300,
    c: ['PK']
   },
   'Asia/Kashgar': {
    a: 'Asia/Urumqi',
    r: 1
   },
   'Asia/Kathmandu': {
    u: 345,
    c: ['NP']
   },
   'Asia/Katmandu': {
    a: 'Asia/Kathmandu',
    r: 1
   },
   'Asia/Khandyga': {
    u: 540,
    c: ['RU']
   },
   'Asia/Kolkata': {
    u: 330,
    c: ['IN']
   },
   'Asia/Krasnoyarsk': {
    u: 420,
    c: ['RU']
   },
   'Asia/Kuala-Lumpur': {
    u: 480,
    c: ['MY']
   },
   'Asia/Kuching': {
    u: 480,
    c: ['MY']
   },
   'Asia/Kuwait': {
    a: 'Asia/Riyadh',
    c: ['KW'],
    r: 1
   },
   'Asia/Macao': {
    a: 'Asia/Macau',
    r: 1
   },
   'Asia/Macau': {
    u: 480,
    c: ['MO']
   },
   'Asia/Magadan': {
    u: 660,
    c: ['RU']
   },
   'Asia/Makassar': {
    u: 480,
    c: ['ID']
   },
   'Asia/Manila': {
    u: 480,
    c: ['PH']
   },
   'Asia/Muscat': {
    a: 'Asia/Dubai',
    c: ['OM'],
    r: 1
   },
   'Asia/Nicosia': {
    u: 120,
    d: 180,
    c: ['CY']
   },
   'Asia/Novokuznetsk': {
    u: 420,
    c: ['RU']
   },
   'Asia/Novosibirsk': {
    u: 420,
    c: ['RU']
   },
   'Asia/Omsk': {
    u: 360,
    c: ['RU']
   },
   'Asia/Oral': {
    u: 300,
    c: ['KZ']
   },
   'Asia/Phnom-Penh': {
    a: 'Asia/Bangkok',
    c: ['KH'],
    r: 1
   },
   'Asia/Pontianak': {
    u: 420,
    c: ['ID']
   },
   'Asia/Pyongyang': {
    u: 540,
    c: ['KP']
   },
   'Asia/Qatar': {
    u: 180,
    c: ['QA', 'BH']
   },
   'Asia/Qostanay': {
    u: 360,
    c: ['KZ']
   },
   'Asia/Qyzylorda': {
    u: 300,
    c: ['KZ']
   },
   'Asia/Rangoon': {
    a: 'Asia/Yangon',
    r: 1
   },
   'Asia/Riyadh': {
    u: 180,
    c: ['SA', 'AQ', 'KW', 'YE']
   },
   'Asia/Saigon': {
    a: 'Asia/Ho-Chi-Minh',
    r: 1
   },
   'Asia/Sakhalin': {
    u: 660,
    c: ['RU']
   },
   'Asia/Samarkand': {
    u: 300,
    c: ['UZ']
   },
   'Asia/Seoul': {
    u: 540,
    c: ['KR']
   },
   'Asia/Shanghai': {
    u: 480,
    c: ['CN']
   },
   'Asia/Singapore': {
    u: 480,
    c: ['SG', 'MY']
   },
   'Asia/Srednekolymsk': {
    u: 660,
    c: ['RU']
   },
   'Asia/Taipei': {
    u: 480,
    c: ['TW']
   },
   'Asia/Tashkent': {
    u: 300,
    c: ['UZ']
   },
   'Asia/Tbilisi': {
    u: 240,
    c: ['GE']
   },
   'Asia/Tehran': {
    u: 210,
    d: 270,
    c: ['IR']
   },
   'Asia/Tel-Aviv': {
    a: 'Asia/Jerusalem',
    r: 1
   },
   'Asia/Thimbu': {
    a: 'Asia/Thimphu',
    r: 1
   },
   'Asia/Thimphu': {
    u: 360,
    c: ['BT']
   },
   'Asia/Tokyo': {
    u: 540,
    c: ['JP']
   },
   'Asia/Tomsk': {
    u: 420,
    c: ['RU']
   },
   'Asia/Ujung-Pandang': {
    a: 'Asia/Makassar',
    r: 1
   },
   'Asia/Ulaanbaatar': {
    u: 480,
    c: ['MN']
   },
   'Asia/Ulan-Bator': {
    a: 'Asia/Ulaanbaatar',
    r: 1
   },
   'Asia/Urumqi': {
    u: 360,
    c: ['CN']
   },
   'Asia/Ust-Nera': {
    u: 600,
    c: ['RU']
   },
   'Asia/Vientiane': {
    a: 'Asia/Bangkok',
    c: ['LA'],
    r: 1
   },
   'Asia/Vladivostok': {
    u: 600,
    c: ['RU']
   },
   'Asia/Yakutsk': {
    u: 540,
    c: ['RU']
   },
   'Asia/Yangon': {
    u: 390,
    c: ['MM']
   },
   'Asia/Yekaterinburg': {
    u: 300,
    c: ['RU']
   },
   'Asia/Yerevan': {
    u: 240,
    c: ['AM']
   },
   'Atlantic/Azores': {
    u: -60,
    d: 0,
    c: ['PT']
   },
   'Atlantic/Bermuda': {
    u: -240,
    d: -180,
    c: ['BM']
   },
   'Atlantic/Canary': {
    u: 0,
    d: 60,
    c: ['ES']
   },
   'Atlantic/Cape-Verde': {
    u: -60,
    c: ['CV']
   },
   'Atlantic/Faeroe': {
    a: 'Atlantic/Faroe',
    r: 1
   },
   'Atlantic/Faroe': {
    u: 0,
    d: 60,
    c: ['FO']
   },
   'Atlantic/Jan-Mayen': {
    a: 'Europe/Oslo',
    c: ['SJ'],
    r: 1
   },
   'Atlantic/Madeira': {
    u: 0,
    d: 60,
    c: ['PT']
   },
   'Atlantic/Reykjavik': {
    u: 0,
    c: ['IS']
   },
   'Atlantic/South-Georgia': {
    u: -120,
    c: ['GS']
   },
   'Atlantic/St-Helena': {
    a: 'Africa/Abidjan',
    c: ['SH'],
    r: 1
   },
   'Atlantic/Stanley': {
    u: -180,
    c: ['FK']
   },
   'Australia/ACT': {
    a: 'Australia/Sydney',
    r: 1
   },
   'Australia/Adelaide': {
    u: 570,
    d: 630,
    c: ['AU']
   },
   'Australia/Brisbane': {
    u: 600,
    c: ['AU']
   },
   'Australia/Broken-Hill': {
    u: 570,
    d: 630,
    c: ['AU']
   },
   'Australia/Canberra': {
    a: 'Australia/Sydney',
    r: 1
   },
   'Australia/Currie': {
    a: 'Australia/Hobart',
    r: 1
   },
   'Australia/Darwin': {
    u: 570,
    c: ['AU']
   },
   'Australia/Eucla': {
    u: 525,
    c: ['AU']
   },
   'Australia/Hobart': {
    u: 600,
    d: 660,
    c: ['AU']
   },
   'Australia/LHI': {
    a: 'Australia/Lord-Howe',
    r: 1
   },
   'Australia/Lindeman': {
    u: 600,
    c: ['AU']
   },
   'Australia/Lord-Howe': {
    u: 630,
    d: 660,
    c: ['AU']
   },
   'Australia/Melbourne': {
    u: 600,
    d: 660,
    c: ['AU']
   },
   'Australia/NSW': {
    a: 'Australia/Sydney',
    r: 1
   },
   'Australia/North': {
    a: 'Australia/Darwin',
    r: 1
   },
   'Australia/Perth': {
    u: 480,
    c: ['AU']
   },
   'Australia/Queensland': {
    a: 'Australia/Brisbane',
    r: 1
   },
   'Australia/South': {
    a: 'Australia/Adelaide',
    r: 1
   },
   'Australia/Sydney': {
    u: 600,
    d: 660,
    c: ['AU']
   },
   'Australia/Tasmania': {
    a: 'Australia/Hobart',
    r: 1
   },
   'Australia/Victoria': {
    a: 'Australia/Melbourne',
    r: 1
   },
   'Australia/West': {
    a: 'Australia/Perth',
    r: 1
   },
   'Australia/Yancowinna': {
    a: 'Australia/Broken-Hill',
    r: 1
   },
   'Brazil/Acre': {
    a: 'America/Rio-Branco',
    r: 1
   },
   'Brazil/DeNoronha': {
    a: 'America/Noronha',
    r: 1
   },
   'Brazil/East': {
    a: 'America/Sao-Paulo',
    r: 1
   },
   'Brazil/West': {
    a: 'America/Manaus',
    r: 1
   },
   CET: {
    u: 60,
    d: 120
   },
   CST6CDT: {
    u: -360,
    d: -300
   },
   'Canada/Atlantic': {
    a: 'America/Halifax',
    r: 1
   },
   'Canada/Central': {
    a: 'America/Winnipeg',
    r: 1
   },
   'Canada/Eastern': {
    a: 'America/Toronto',
    c: ['CA'],
    r: 1
   },
   'Canada/Mountain': {
    a: 'America/Edmonton',
    r: 1
   },
   'Canada/Newfoundland': {
    a: 'America/St-Johns',
    r: 1
   },
   'Canada/Pacific': {
    a: 'America/Vancouver',
    r: 1
   },
   'Canada/Saskatchewan': {
    a: 'America/Regina',
    r: 1
   },
   'Canada/Yukon': {
    a: 'America/Whitehorse',
    r: 1
   },
   'Chile/Continental': {
    a: 'America/Santiago',
    r: 1
   },
   'Chile/EasterIsland': {
    a: 'Pacific/Easter',
    r: 1
   },
   Cuba: {
    a: 'America/Havana',
    r: 1
   },
   EET: {
    u: 120,
    d: 180
   },
   EST: {
    u: -300
   },
   EST5EDT: {
    u: -300,
    d: -240
   },
   Egypt: {
    a: 'Africa/Cairo',
    r: 1
   },
   Eire: {
    a: 'Europe/Dublin',
    r: 1
   },
   'Etc/GMT': {
    u: 0
   },
   'Etc/GMT+0': {
    a: 'Etc/GMT',
    r: 1
   },
   'Etc/GMT+1': {
    u: -60
   },
   'Etc/GMT+10': {
    u: -600
   },
   'Etc/GMT+11': {
    u: -660
   },
   'Etc/GMT+12': {
    u: -720
   },
   'Etc/GMT+2': {
    u: -120
   },
   'Etc/GMT+3': {
    u: -180
   },
   'Etc/GMT+4': {
    u: -240
   },
   'Etc/GMT+5': {
    u: -300
   },
   'Etc/GMT+6': {
    u: -360
   },
   'Etc/GMT+7': {
    u: -420
   },
   'Etc/GMT+8': {
    u: -480
   },
   'Etc/GMT+9': {
    u: -540
   },
   'Etc/GMT-0': {
    a: 'Etc/GMT',
    r: 1
   },
   'Etc/GMT-1': {
    u: 60
   },
   'Etc/GMT-10': {
    u: 600
   },
   'Etc/GMT-11': {
    u: 660
   },
   'Etc/GMT-12': {
    u: 720
   },
   'Etc/GMT-13': {
    u: 780
   },
   'Etc/GMT-14': {
    u: 840
   },
   'Etc/GMT-2': {
    u: 120
   },
   'Etc/GMT-3': {
    u: 180
   },
   'Etc/GMT-4': {
    u: 240
   },
   'Etc/GMT-5': {
    u: 300
   },
   'Etc/GMT-6': {
    u: 360
   },
   'Etc/GMT-7': {
    u: 420
   },
   'Etc/GMT-8': {
    u: 480
   },
   'Etc/GMT-9': {
    u: 540
   },
   'Etc/GMT0': {
    a: 'Etc/GMT',
    r: 1
   },
   'Etc/Greenwich': {
    a: 'Etc/GMT',
    r: 1
   },
   'Etc/UCT': {
    a: 'Etc/UTC',
    r: 1
   },
   'Etc/UTC': {
    u: 0
   },
   'Etc/Universal': {
    a: 'Etc/UTC',
    r: 1
   },
   'Etc/Zulu': {
    a: 'Etc/UTC',
    r: 1
   },
   'Europe/Amsterdam': {
    u: 60,
    d: 120,
    c: ['NL']
   },
   'Europe/Andorra': {
    u: 60,
    d: 120,
    c: ['AD']
   },
   'Europe/Astrakhan': {
    u: 240,
    c: ['RU']
   },
   'Europe/Athens': {
    u: 120,
    d: 180,
    c: ['GR']
   },
   'Europe/Belfast': {
    a: 'Europe/London',
    c: ['GB'],
    r: 1
   },
   'Europe/Belgrade': {
    u: 60,
    d: 120,
    c: ['RS', 'BA', 'HR', 'ME', 'MK', 'SI']
   },
   'Europe/Berlin': {
    u: 60,
    d: 120,
    c: ['DE']
   },
   'Europe/Bratislava': {
    a: 'Europe/Prague',
    c: ['SK'],
    r: 1
   },
   'Europe/Brussels': {
    u: 60,
    d: 120,
    c: ['BE']
   },
   'Europe/Bucharest': {
    u: 120,
    d: 180,
    c: ['RO']
   },
   'Europe/Budapest': {
    u: 60,
    d: 120,
    c: ['HU']
   },
   'Europe/Busingen': {
    a: 'Europe/Zurich',
    c: ['DE'],
    r: 1
   },
   'Europe/Chisinau': {
    u: 120,
    d: 180,
    c: ['MD']
   },
   'Europe/Copenhagen': {
    u: 60,
    d: 120,
    c: ['DK']
   },
   'Europe/Dublin': {
    u: 60,
    d: 0,
    c: ['IE']
   },
   'Europe/Gibraltar': {
    u: 60,
    d: 120,
    c: ['GI']
   },
   'Europe/Guernsey': {
    a: 'Europe/London',
    c: ['GG'],
    r: 1
   },
   'Europe/Helsinki': {
    u: 120,
    d: 180,
    c: ['FI', 'AX']
   },
   'Europe/Isle-of-Man': {
    a: 'Europe/London',
    c: ['IM'],
    r: 1
   },
   'Europe/Istanbul': {
    u: 180,
    c: ['TR']
   },
   'Europe/Jersey': {
    a: 'Europe/London',
    c: ['JE'],
    r: 1
   },
   'Europe/Kaliningrad': {
    u: 120,
    c: ['RU']
   },
   'Europe/Kiev': {
    u: 120,
    d: 180,
    c: ['UA']
   },
   'Europe/Kirov': {
    u: 180,
    c: ['RU']
   },
   'Europe/Lisbon': {
    u: 0,
    d: 60,
    c: ['PT']
   },
   'Europe/Ljubljana': {
    a: 'Europe/Belgrade',
    c: ['SI'],
    r: 1
   },
   'Europe/London': {
    u: 0,
    d: 60,
    c: ['GB', 'GG', 'IM', 'JE']
   },
   'Europe/Luxembourg': {
    u: 60,
    d: 120,
    c: ['LU']
   },
   'Europe/Madrid': {
    u: 60,
    d: 120,
    c: ['ES']
   },
   'Europe/Malta': {
    u: 60,
    d: 120,
    c: ['MT']
   },
   'Europe/Mariehamn': {
    a: 'Europe/Helsinki',
    c: ['AX'],
    r: 1
   },
   'Europe/Minsk': {
    u: 180,
    c: ['BY']
   },
   'Europe/Monaco': {
    u: 60,
    d: 120,
    c: ['MC']
   },
   'Europe/Moscow': {
    u: 180,
    c: ['RU']
   },
   'Europe/Nicosia': {
    a: 'Asia/Nicosia',
    r: 1
   },
   'Europe/Oslo': {
    u: 60,
    d: 120,
    c: ['NO', 'SJ', 'BV']
   },
   'Europe/Paris': {
    u: 60,
    d: 120,
    c: ['FR']
   },
   'Europe/Podgorica': {
    a: 'Europe/Belgrade',
    c: ['ME'],
    r: 1
   },
   'Europe/Prague': {
    u: 60,
    d: 120,
    c: ['CZ', 'SK']
   },
   'Europe/Riga': {
    u: 120,
    d: 180,
    c: ['LV']
   },
   'Europe/Rome': {
    u: 60,
    d: 120,
    c: ['IT', 'SM', 'VA']
   },
   'Europe/Samara': {
    u: 240,
    c: ['RU']
   },
   'Europe/San-Marino': {
    a: 'Europe/Rome',
    c: ['SM'],
    r: 1
   },
   'Europe/Sarajevo': {
    a: 'Europe/Belgrade',
    c: ['BA'],
    r: 1
   },
   'Europe/Saratov': {
    u: 240,
    c: ['RU']
   },
   'Europe/Simferopol': {
    u: 180,
    c: ['RU', 'UA']
   },
   'Europe/Skopje': {
    a: 'Europe/Belgrade',
    c: ['MK'],
    r: 1
   },
   'Europe/Sofia': {
    u: 120,
    d: 180,
    c: ['BG']
   },
   'Europe/Stockholm': {
    u: 60,
    d: 120,
    c: ['SE']
   },
   'Europe/Tallinn': {
    u: 120,
    d: 180,
    c: ['EE']
   },
   'Europe/Tirane': {
    u: 60,
    d: 120,
    c: ['AL']
   },
   'Europe/Tiraspol': {
    a: 'Europe/Chisinau',
    r: 1
   },
   'Europe/Ulyanovsk': {
    u: 240,
    c: ['RU']
   },
   'Europe/Uzhgorod': {
    u: 120,
    d: 180,
    c: ['UA']
   },
   'Europe/Vaduz': {
    a: 'Europe/Zurich',
    c: ['LI'],
    r: 1
   },
   'Europe/Vatican': {
    a: 'Europe/Rome',
    c: ['VA'],
    r: 1
   },
   'Europe/Vienna': {
    u: 60,
    d: 120,
    c: ['AT']
   },
   'Europe/Vilnius': {
    u: 120,
    d: 180,
    c: ['LT']
   },
   'Europe/Volgograd': {
    u: 180,
    c: ['RU']
   },
   'Europe/Warsaw': {
    u: 60,
    d: 120,
    c: ['PL']
   },
   'Europe/Zagreb': {
    a: 'Europe/Belgrade',
    c: ['HR'],
    r: 1
   },
   'Europe/Zaporozhye': {
    u: 120,
    d: 180,
    c: ['UA']
   },
   'Europe/Zurich': {
    u: 60,
    d: 120,
    c: ['CH', 'DE', 'LI']
   },
   Factory: {
    u: 0
   },
   GB: {
    a: 'Europe/London',
    c: ['GB'],
    r: 1
   },
   'GB-Eire': {
    a: 'Europe/London',
    c: ['GB'],
    r: 1
   },
   GMT: {
    a: 'Etc/GMT',
    r: 1
   },
   'GMT+0': {
    a: 'Etc/GMT',
    r: 1
   },
   'GMT-0': {
    a: 'Etc/GMT',
    r: 1
   },
   GMT0: {
    a: 'Etc/GMT',
    r: 1
   },
   Greenwich: {
    a: 'Etc/GMT',
    r: 1
   },
   HST: {
    u: -600
   },
   Hongkong: {
    a: 'Asia/Hong-Kong',
    r: 1
   },
   Iceland: {
    a: 'Atlantic/Reykjavik',
    r: 1
   },
   'Indian/Antananarivo': {
    a: 'Africa/Nairobi',
    c: ['MG'],
    r: 1
   },
   'Indian/Chagos': {
    u: 360,
    c: ['IO']
   },
   'Indian/Christmas': {
    u: 420,
    c: ['CX']
   },
   'Indian/Cocos': {
    u: 390,
    c: ['CC']
   },
   'Indian/Comoro': {
    a: 'Africa/Nairobi',
    c: ['KM'],
    r: 1
   },
   'Indian/Kerguelen': {
    u: 300,
    c: ['TF', 'HM']
   },
   'Indian/Mahe': {
    u: 240,
    c: ['SC']
   },
   'Indian/Maldives': {
    u: 300,
    c: ['MV']
   },
   'Indian/Mauritius': {
    u: 240,
    c: ['MU']
   },
   'Indian/Mayotte': {
    a: 'Africa/Nairobi',
    c: ['YT'],
    r: 1
   },
   'Indian/Reunion': {
    u: 240,
    c: ['RE', 'TF']
   },
   Iran: {
    a: 'Asia/Tehran',
    r: 1
   },
   Israel: {
    a: 'Asia/Jerusalem',
    r: 1
   },
   Jamaica: {
    a: 'America/Jamaica',
    r: 1
   },
   Japan: {
    a: 'Asia/Tokyo',
    r: 1
   },
   Kwajalein: {
    a: 'Pacific/Kwajalein',
    r: 1
   },
   Libya: {
    a: 'Africa/Tripoli',
    r: 1
   },
   MET: {
    u: 60,
    d: 120
   },
   MST: {
    u: -420
   },
   MST7MDT: {
    u: -420,
    d: -360
   },
   'Mexico/BajaNorte': {
    a: 'America/Tijuana',
    r: 1
   },
   'Mexico/BajaSur': {
    a: 'America/Mazatlan',
    r: 1
   },
   'Mexico/General': {
    a: 'America/Mexico-City',
    r: 1
   },
   NZ: {
    a: 'Pacific/Auckland',
    c: ['NZ'],
    r: 1
   },
   'NZ-CHAT': {
    a: 'Pacific/Chatham',
    r: 1
   },
   Navajo: {
    a: 'America/Denver',
    r: 1
   },
   PRC: {
    a: 'Asia/Shanghai',
    r: 1
   },
   PST8PDT: {
    u: -480,
    d: -420
   },
   'Pacific/Apia': {
    u: 780,
    c: ['WS']
   },
   'Pacific/Auckland': {
    u: 720,
    d: 780,
    c: ['NZ', 'AQ']
   },
   'Pacific/Bougainville': {
    u: 660,
    c: ['PG']
   },
   'Pacific/Chatham': {
    u: 765,
    d: 825,
    c: ['NZ']
   },
   'Pacific/Chuuk': {
    u: 600,
    c: ['FM']
   },
   'Pacific/Easter': {
    u: -360,
    d: -300,
    c: ['CL']
   },
   'Pacific/Efate': {
    u: 660,
    c: ['VU']
   },
   'Pacific/Enderbury': {
    a: 'Pacific/Kanton',
    r: 1
   },
   'Pacific/Fakaofo': {
    u: 780,
    c: ['TK']
   },
   'Pacific/Fiji': {
    u: 720,
    d: 780,
    c: ['FJ']
   },
   'Pacific/Funafuti': {
    u: 720,
    c: ['TV']
   },
   'Pacific/Galapagos': {
    u: -360,
    c: ['EC']
   },
   'Pacific/Gambier': {
    u: -540,
    c: ['PF']
   },
   'Pacific/Guadalcanal': {
    u: 660,
    c: ['SB']
   },
   'Pacific/Guam': {
    u: 600,
    c: ['GU', 'MP']
   },
   'Pacific/Honolulu': {
    u: -600,
    c: ['US', 'UM']
   },
   'Pacific/Johnston': {
    a: 'Pacific/Honolulu',
    c: ['UM'],
    r: 1
   },
   'Pacific/Kanton': {
    u: 780,
    c: ['KI']
   },
   'Pacific/Kiritimati': {
    u: 840,
    c: ['KI']
   },
   'Pacific/Kosrae': {
    u: 660,
    c: ['FM']
   },
   'Pacific/Kwajalein': {
    u: 720,
    c: ['MH']
   },
   'Pacific/Majuro': {
    u: 720,
    c: ['MH']
   },
   'Pacific/Marquesas': {
    u: -510,
    c: ['PF']
   },
   'Pacific/Midway': {
    a: 'Pacific/Pago-Pago',
    c: ['UM'],
    r: 1
   },
   'Pacific/Nauru': {
    u: 720,
    c: ['NR']
   },
   'Pacific/Niue': {
    u: -660,
    c: ['NU']
   },
   'Pacific/Norfolk': {
    u: 660,
    d: 720,
    c: ['NF']
   },
   'Pacific/Noumea': {
    u: 660,
    c: ['NC']
   },
   'Pacific/Pago-Pago': {
    u: -660,
    c: ['AS', 'UM']
   },
   'Pacific/Palau': {
    u: 540,
    c: ['PW']
   },
   'Pacific/Pitcairn': {
    u: -480,
    c: ['PN']
   },
   'Pacific/Pohnpei': {
    u: 660,
    c: ['FM']
   },
   'Pacific/Ponape': {
    a: 'Pacific/Pohnpei',
    r: 1
   },
   'Pacific/Port-Moresby': {
    u: 600,
    c: ['PG', 'AQ']
   },
   'Pacific/Rarotonga': {
    u: -600,
    c: ['CK']
   },
   'Pacific/Saipan': {
    a: 'Pacific/Guam',
    c: ['MP'],
    r: 1
   },
   'Pacific/Samoa': {
    a: 'Pacific/Pago-Pago',
    c: ['WS'],
    r: 1
   },
   'Pacific/Tahiti': {
    u: -600,
    c: ['PF']
   },
   'Pacific/Tarawa': {
    u: 720,
    c: ['KI']
   },
   'Pacific/Tongatapu': {
    u: 780,
    c: ['TO']
   },
   'Pacific/Truk': {
    a: 'Pacific/Chuuk',
    r: 1
   },
   'Pacific/Wake': {
    u: 720,
    c: ['UM']
   },
   'Pacific/Wallis': {
    u: 720,
    c: ['WF']
   },
   'Pacific/Yap': {
    a: 'Pacific/Chuuk',
    r: 1
   },
   Poland: {
    a: 'Europe/Warsaw',
    r: 1
   },
   Portugal: {
    a: 'Europe/Lisbon',
    r: 1
   },
   ROC: {
    a: 'Asia/Taipei',
    r: 1
   },
   ROK: {
    a: 'Asia/Seoul',
    r: 1
   },
   Singapore: {
    a: 'Asia/Singapore',
    c: ['SG'],
    r: 1
   },
   Turkey: {
    a: 'Europe/Istanbul',
    r: 1
   },
   UCT: {
    a: 'Etc/UTC',
    r: 1
   },
   'US/Alaska': {
    a: 'America/Anchorage',
    r: 1
   },
   'US/Aleutian': {
    a: 'America/Adak',
    r: 1
   },
   'US/Arizona': {
    a: 'America/Phoenix',
    c: ['US'],
    r: 1
   },
   'US/Central': {
    a: 'America/Chicago',
    r: 1
   },
   'US/East-Indiana': {
    a: 'America/Indiana/Indianapolis',
    r: 1
   },
   'US/Eastern': {
    a: 'America/New-York',
    r: 1
   },
   'US/Hawaii': {
    a: 'Pacific/Honolulu',
    c: ['US'],
    r: 1
   },
   'US/Indiana-Starke': {
    a: 'America/Indiana/Knox',
    r: 1
   },
   'US/Michigan': {
    a: 'America/Detroit',
    r: 1
   },
   'US/Mountain': {
    a: 'America/Denver',
    r: 1
   },
   'US/Pacific': {
    a: 'America/Los-Angeles',
    r: 1
   },
   'US/Samoa': {
    a: 'Pacific/Pago-Pago',
    c: ['WS'],
    r: 1
   },
   UTC: {
    a: 'Etc/UTC',
    r: 1
   },
   Universal: {
    a: 'Etc/UTC',
    r: 1
   },
   'W-SU': {
    a: 'Europe/Moscow',
    r: 1
   },
   WET: {
    u: 0,
    d: 60
   },
   Zulu: {
    a: 'Etc/UTC',
    r: 1
   }
  };
 } // init timezones

 initLanguages() {
  this.languages = [
   {
    name: 'Afrikaans (South Africa)',
    code: 'af-ZA',
    region: 'South Africa'
   },
   {
    name: 'Albanian (Albania)',
    code: 'sq-AL',
    region: 'Albania'
   },
   {
    name: 'Arabic (Algeria)',
    code: 'ar-DZ',
    region: 'Algeria'
   },
   {
    name: 'Arabic (Bahrain)',
    code: 'ar-BH',
    region: 'Bahrain'
   },
   {
    name: 'Arabic (Egypt)',
    code: 'ar-EG',
    region: 'Egypt'
   },
   {
    name: 'Arabic (Iraq)',
    code: 'ar-IQ',
    region: 'Iraq'
   },
   {
    name: 'Arabic (Jordan)',
    code: 'ar-JO',
    region: 'Jordan'
   },
   {
    name: 'Arabic (Kuwait)',
    code: 'ar-KW',
    region: 'Kuwait'
   },
   {
    name: 'Arabic (Lebanon)',
    code: 'ar-LB',
    region: 'Lebanon'
   },
   {
    name: 'Arabic (Libya)',
    code: 'ar-LY',
    region: 'Libya'
   },
   {
    name: 'Arabic (Morocco)',
    code: 'ar-MA',
    region: 'Morocco'
   },
   {
    name: 'Arabic (Oman)',
    code: 'ar-OM',
    region: 'Oman'
   },
   {
    name: 'Arabic (Qatar)',
    code: 'ar-QA',
    region: 'Qatar'
   },
   {
    name: 'Arabic (Saudi Arabia)',
    code: 'ar-SA',
    region: 'Saudi Arabia'
   },
   {
    name: 'Arabic (Sudan)',
    code: 'ar-SD',
    region: 'Sudan'
   },
   {
    name: 'Arabic (Syria)',
    code: 'ar-SY',
    region: 'Syria'
   },
   {
    name: 'Arabic (Tunisia)',
    code: 'ar-TN',
    region: 'Tunisia'
   },
   {
    name: 'Arabic (United Arab Emirates)',
    code: 'ar-AE',
    region: 'United Arab Emirates'
   },
   {
    name: 'Arabic (Yemen)',
    code: 'ar-YE',
    region: 'Yemen'
   },
   {
    name: 'Armenian (Armenia)',
    code: 'hy-AM',
    region: 'Armenia'
   },
   {
    name: 'Assamese (India)',
    code: 'as-IN',
    region: 'India'
   },
   {
    name: 'Azerbaijani (Azerbaijan)',
    code: 'az-AZ',
    region: 'Azerbaijan'
   },
   {
    name: 'Bengali (Bangladesh)',
    code: 'bn-BD',
    region: 'Bangladesh'
   },
   {
    name: 'Bengali (India)',
    code: 'bn-IN',
    region: 'India'
   },
   {
    name: 'Bosnian (Bosnia and Herzegovina)',
    code: 'bs-BA',
    region: 'Bosnia and Herzegovina'
   },
   {
    name: 'Bulgarian (Bulgaria)',
    code: 'bg-BG',
    region: 'Bulgaria'
   },
   {
    name: 'Catalan (Spain)',
    code: 'ca-ES',
    region: 'Spain'
   },
   {
    name: 'Chinese (Simplified Han)',
    code: 'zh-Hans',
    region: 'China'
   },
   {
    name: 'Chinese (Traditional Han)',
    code: 'zh-Hant',
    region: 'Taiwan'
   },
   {
    name: 'Croatian (Croatia)',
    code: 'hr-HR',
    region: 'Croatia'
   },
   {
    name: 'Czech (Czech Republic)',
    code: 'cs-CZ',
    region: 'Czech Republic'
   },
   {
    name: 'Danish (Denmark)',
    code: 'da-DK',
    region: 'Denmark'
   },
   {
    name: 'Divehi (Maldives)',
    code: 'dv-MV',
    region: 'Maldives'
   },
   {
    name: 'Dutch (Belgium)',
    code: 'nl-BE',
    region: 'Belgium'
   },
   {
    name: 'Dutch (Netherlands)',
    code: 'nl-NL',
    region: 'Netherlands'
   },
   {
    name: 'English (Australia)',
    code: 'en-AU',
    region: 'Australia'
   },
   {
    name: 'English (Canada)',
    code: 'en-CA',
    region: 'Canada'
   },
   {
    name: 'English (India)',
    code: 'en-IN',
    region: 'India'
   },
   {
    name: 'English (Ireland)',
    code: 'en-IE',
    region: 'Ireland'
   },
   {
    name: 'English (New Zealand)',
    code: 'en-NZ',
    region: 'New Zealand'
   },
   {
    name: 'English (South Africa)',
    code: 'en-ZA',
    region: 'South Africa'
   },
   {
    name: 'English (Zimbabwe)',
    code: 'en-ZW',
    region: 'Zimbabwe'
   },
   {
    name: 'Estonian (Estonia)',
    code: 'et-EE',
    region: 'Estonia'
   },
   {
    name: 'Faroese (Faroe Islands)',
    code: 'fo-FO',
    region: 'Faroe Islands'
   },
   {
    name: 'Filipino (Philippines)',
    code: 'fil-PH',
    region: 'Philippines'
   },
   {
    name: 'Finnish (Finland)',
    code: 'fi-FI',
    region: 'Finland'
   },
   {
    name: 'French (Belgium)',
    code: 'fr-BE',
    region: 'Belgium'
   },
   {
    name: 'French (Canada)',
    code: 'fr-CA',
    region: 'Canada'
   },
   {
    name: 'French (Switzerland)',
    code: 'fr-CH',
    region: 'Switzerland'
   },
   {
    name: 'Galician (Spain)',
    code: 'gl-ES',
    region: 'Spain'
   },
   {
    name: 'Georgian (Georgia)',
    code: 'ka-GE',
    region: 'Georgia'
   },
   {
    name: 'German (Austria)',
    code: 'de-AT',
    region: 'Austria'
   },
   {
    name: 'German (Belgium)',
    code: 'de-BE',
    region: 'Belgium'
   },
   {
    name: 'German (Germany)',
    code: 'de-DE',
    region: 'Germany'
   },
   {
    name: 'German (Germany2)',
    code: 'de-DE2',
    region: 'Germany'
   },
   {
    name: 'German (Luxembourg)',
    code: 'de-LU',
    region: 'Luxembourg'
   },
   {
    name: 'German (Switzerland)',
    code: 'de-CH',
    region: 'Switzerland'
   },
   {
    name: 'Greek (Cyprus)',
    code: 'el-CY',
    region: 'Cyprus'
   },
   {
    name: 'Greek (Greece)',
    code: 'el-GR',
    region: 'Greece'
   },
   {
    name: 'Gujarati (India)',
    code: 'gu-IN',
    region: 'India'
   },
   {
    name: 'Hebrew (Israel)',
    code: 'he-IL',
    region: 'Israel'
   },
   {
    name: 'Hindi (India)',
    code: 'hi-IN',
    region: 'India'
   },
   {
    name: 'Hungarian (Hungary)',
    code: 'hu-HU',
    region: 'Hungary'
   },
   {
    name: 'Icelandic (Iceland)',
    code: 'is-IS',
    region: 'Iceland'
   },
   {
    name: 'Indonesian (Indonesia)',
    code: 'id-ID',
    region: 'Indonesia'
   },
   {
    name: 'Italian (Italy)',
    code: 'it-IT',
    region: 'Italy'
   },
   {
    name: 'Italian (Switzerland)',
    code: 'it-CH',
    region: 'Switzerland'
   },
   {
    name: 'Japanese (Japan)',
    code: 'ja-JP',
    region: 'Japan'
   },
   {
    name: 'Kannada (India)',
    code: 'kn-IN',
    region: 'India'
   },
   {
    name: 'Kazakh (Kazakhstan)',
    code: 'kk-KZ',
    region: 'Kazakhstan'
   },
   {
    name: 'Khmer (Cambodia)',
    code: 'km-KH',
    region: 'Cambodia'
   },
   {
    name: 'Korean (South Korea)',
    code: 'ko-KR',
    region: 'South Korea'
   },
   {
    name: 'Kurdish (Iraq)',
    code: 'ku-IQ',
    region: 'Iraq'
   },
   {
    name: 'Kyrgyz (Kyrgyzstan)',
    code: 'ky-KG',
    region: 'Kyrgyzstan'
   },
   {
    name: 'Lao (Laos)',
    code: 'lo-LA',
    region: 'Laos'
   },
   {
    name: 'Latvian (Latvia)',
    code: 'lv-LV',
    region: 'Latvia'
   },
   {
    name: 'Lithuanian (Lithuania)',
    code: 'lt-LT',
    region: 'Lithuania'
   },
   {
    name: 'Macedonian (North Macedonia)',
    code: 'mk-MK',
    region: 'North Macedonia'
   },
   {
    name: 'Malay (Brunei)',
    code: 'ms-BN',
    region: 'Brunei'
   },
   {
    name: 'Malay (Malaysia)',
    code: 'ms-MY',
    region: 'Malaysia'
   },
   {
    name: 'Malayalam (India)',
    code: 'ml-IN',
    region: 'India'
   },
   {
    name: 'Maltese (Malta)',
    code: 'mt-MT',
    region: 'Malta'
   },
   {
    name: 'Marathi (India)',
    code: 'mr-IN',
    region: 'India'
   },
   {
    name: 'Mongolian (Mongolia)',
    code: 'mn-MN',
    region: 'Mongolia'
   },
   {
    name: 'Nepali (Nepal)',
    code: 'ne-NP',
    region: 'Nepal'
   },
   {
    name: 'Norwegian Bokmål (Norway)',
    code: 'nb-NO',
    region: 'Norway'
   },
   {
    name: 'Oriya (India)',
    code: 'or-IN',
    region: 'India'
   },
   {
    name: 'Pashto (Afghanistan)',
    code: 'ps-AF',
    region: 'Afghanistan'
   },
   {
    name: 'Persian (Iran)',
    code: 'fa-IR',
    region: 'Iran'
   },
   {
    name: 'Polish (Poland)',
    code: 'pl-PL',
    region: 'Poland'
   },
   {
    name: 'Portuguese (Brazil)',
    code: 'pt-BR',
    region: 'Brazil'
   },
   {
    name: 'Portuguese (Portugal)',
    code: 'pt-PT',
    region: 'Portugal'
   },
   {
    name: 'Punjabi (India)',
    code: 'pa-IN',
    region: 'India'
   },
   {
    name: 'Romanian (Romania)',
    code: 'ro-RO',
    region: 'Romania'
   },
   {
    name: 'Russian (Russia)',
    code: 'ru-RU',
    region: 'Russia'
   },
   {
    name: 'Sanskrit (India)',
    code: 'sa-IN',
    region: 'India'
   },
   {
    name: 'Serbian (Serbia)',
    code: 'sr-RS',
    region: 'Serbia'
   },
   {
    name: 'Sinhala (Sri Lanka)',
    code: 'si-LK',
    region: 'Sri Lanka'
   },
   {
    name: 'Slovak (Slovakia)',
    code: 'sk-SK',
    region: 'Slovakia'
   },
   {
    name: 'Slovenian (Slovenia)',
    code: 'sl-SI',
    region: 'Slovenia'
   },
   {
    name: 'Spanish (Argentina)',
    code: 'es-AR',
    region: 'Argentina'
   },
   {
    name: 'Spanish (Bolivia)',
    code: 'es-BO',
    region: 'Bolivia'
   },
   {
    name: 'Spanish (Chile)',
    code: 'es-CL',
    region: 'Chile'
   },
   {
    name: 'Spanish (Colombia)',
    code: 'es-CO',
    region: 'Colombia'
   },
   {
    name: 'Spanish (Costa Rica)',
    code: 'es-CR',
    region: 'Costa Rica'
   },
   {
    name: 'Spanish (Dominican Republic)',
    code: 'es-DO',
    region: 'Dominican Republic'
   },
   {
    name: 'Spanish (Ecuador)',
    code: 'es-EC',
    region: 'Ecuador'
   },
   {
    name: 'Spanish (El Salvador)',
    code: 'es-SV',
    region: 'El Salvador'
   },
   {
    name: 'Spanish (Guatemala)',
    code: 'es-GT',
    region: 'Guatemala'
   },
   {
    name: 'Spanish (Honduras)',
    code: 'es-HN',
    region: 'Honduras'
   },
   {
    name: 'Spanish (Mexico)',
    code: 'es-MX',
    region: 'Mexico'
   },
   {
    name: 'Spanish (Nicaragua)',
    code: 'es-NI',
    region: 'Nicaragua'
   },
   {
    name: 'Spanish (Panama)',
    code: 'es-PA',
    region: 'Panama'
   },
   {
    name: 'Spanish (Paraguay)',
    code: 'es-PY',
    region: 'Paraguay'
   },
   {
    name: 'Spanish (Peru)',
    code: 'es-PE',
    region: 'Peru'
   },
   {
    name: 'Spanish (Puerto Rico)',
    code: 'es-PR',
    region: 'Puerto Rico'
   },
   {
    name: 'Spanish (Spain)',
    code: 'es-ES',
    region: 'Spain'
   },
   {
    name: 'Spanish (United States)',
    code: 'es-US',
    region: 'United States'
   },
   {
    name: 'Spanish (Uruguay)',
    code: 'es-UY',
    region: 'Uruguay'
   },
   {
    name: 'Spanish (Venezuela)',
    code: 'es-VE',
    region: 'Venezuela'
   },
   {
    name: 'Sundanese (Indonesia)',
    code: 'su-ID',
    region: 'Indonesia'
   },
   {
    name: 'Swahili (Kenya)',
    code: 'sw-KE',
    region: 'Kenya'
   },
   {
    name: 'Swedish (Finland)',
    code: 'sv-FI',
    region: 'Finland'
   },
   {
    name: 'Swedish (Sweden)',
    code: 'sv-SE',
    region: 'Sweden'
   },
   {
    name: 'Tajik (Tajikistan)',
    code: 'tg-TJ',
    region: 'Tajikistan'
   },
   {
    name: 'Tamil (India)',
    code: 'ta-IN',
    region: 'India'
   },
   {
    name: 'Tatar (Russia)',
    code: 'tt-RU',
    region: 'Russia'
   },
   {
    name: 'Telugu (India)',
    code: 'te-IN',
    region: 'India'
   },
   {
    name: 'Thai (Thailand)',
    code: 'th-TH',
    region: 'Thailand'
   },
   {
    name: 'Turkish (Turkey)',
    code: 'tr-TR',
    region: 'Turkey'
   },
   {
    name: 'Turkmen (Turkmenistan)',
    code: 'tk-TM',
    region: 'Turkmenistan'
   },
   {
    name: 'Ukrainian (Ukraine)',
    code: 'uk-UA',
    region: 'Ukraine'
   },
   {
    name: 'Urdu (India)',
    code: 'ur-IN',
    region: 'India'
   },
   {
    name: 'Urdu (Pakistan)',
    code: 'ur-PK',
    region: 'Pakistan'
   },
   {
    name: 'Uyghur (China)',
    code: 'ug-CN',
    region: 'China'
   },
   {
    name: 'Uzbek (Uzbekistan)',
    code: 'uz-UZ',
    region: 'Uzbekistan'
   },
   {
    name: 'Vietnamese (Vietnam)',
    code: 'vi-VN',
    region: 'Vietnam'
   },
   {
    name: 'Welsh (United Kingdom)',
    code: 'cy-GB',
    region: 'United Kingdom'
   },
   {
    name: 'Xhosa (South Africa)',
    code: 'xh-ZA',
    region: 'South Africa'
   },
   {
    name: 'Yiddish (World)',
    code: 'yi',
    region: 'World'
   },
   {
    name: 'Yoruba (Nigeria)',
    code: 'yo-NG',
    region: 'Nigeria'
   },
   {
    name: 'Zulu (South Africa)',
    code: 'zu-ZA',
    region: 'South Africa'
   }
  ];
 } // init languages

 initCountryLanuguages() {
  this.countryLanguages = [
   {
    country: 'Aruba',
    languages: ['Dutch', 'English', 'Papiamento', 'Spanish']
   },
   {
    country: 'Afghanistan',
    languages: ['Balochi', 'Dari', 'Pashto', 'Turkmenian', 'Uzbek']
   },
   {
    country: 'Angola',
    languages: [
     'Ambo',
     'Chokwe',
     'Kongo',
     'Luchazi',
     'Luimbe-nganguela',
     'Luvale',
     'Mbundu',
     'Nyaneka-nkhumbi',
     'Ovimbundu'
    ]
   },
   {
    country: 'Anguilla',
    languages: ['English']
   },
   {
    country: 'Albania',
    languages: ['Albaniana', 'Greek', 'Macedonian']
   },
   {
    country: 'Andorra',
    languages: ['Catalan', 'French', 'Portuguese', 'Spanish']
   },
   {
    country: 'Netherlands Antilles',
    languages: ['Dutch', 'English', 'Papiamento']
   },
   {
    country: 'United Arab Emirates',
    languages: ['Arabic', 'Hindi']
   },
   {
    country: 'Argentina',
    languages: ['Indian Languages', 'Italian', 'Spanish']
   },
   {
    country: 'Armenia',
    languages: ['Armenian', 'Azerbaijani']
   },
   {
    country: 'American Samoa',
    languages: ['English', 'Samoan', 'Tongan']
   },
   {
    country: 'Antigua and Barbuda',
    languages: ['Creole English', 'English']
   },
   {
    country: 'Australia',
    languages: [
     'Arabic',
     'Canton Chinese',
     'English',
     'German',
     'Greek',
     'Italian',
     'Serbo-Croatian',
     'Vietnamese'
    ]
   },
   {
    country: 'Austria',
    languages: [
     'Czech',
     'German',
     'Hungarian',
     'Polish',
     'Romanian',
     'Serbo-Croatian',
     'Slovene',
     'Turkish'
    ]
   },
   {
    country: 'Azerbaijan',
    languages: ['Armenian', 'Azerbaijani', 'Lezgian', 'Russian']
   },
   {
    country: 'Burundi',
    languages: ['French', 'Kirundi', 'Swahili']
   },
   {
    country: 'Belgium',
    languages: ['Arabic', 'Dutch', 'French', 'German', 'Italian', 'Turkish']
   },
   {
    country: 'Benin',
    languages: ['Adja', 'Aizo', 'Bariba', 'Fon', 'Ful', 'Joruba', 'Somba']
   },
   {
    country: 'Burkina Faso',
    languages: ['Busansi', 'Dagara', 'Dyula', 'Ful', 'Gurma', 'Mossi']
   },
   {
    country: 'Bangladesh',
    languages: [
     'Bengali',
     'Chakma',
     'Garo',
     'Khasi',
     'Marma',
     'Santhali',
     'Tripuri'
    ]
   },
   {
    country: 'Bulgaria',
    languages: ['Bulgariana', 'Macedonian', 'Romani', 'Turkish']
   },
   {
    country: 'Bahrain',
    languages: ['Arabic', 'English']
   },
   {
    country: 'Bahamas',
    languages: ['Creole English', 'Creole French']
   },
   {
    country: 'Bosnia and Herzegovina',
    languages: ['Bosnian']
   },
   {
    country: 'Belarus',
    languages: ['Belorussian', 'Polish', 'Russian', 'Ukrainian']
   },
   {
    country: 'Belize',
    languages: ['English', 'Garifuna', 'Maya Languages', 'Spanish']
   },
   {
    country: 'Bermuda',
    languages: ['English']
   },
   {
    country: 'Bolivia',
    languages: ['Aimar√°', 'Guaran√≠', 'Ket¬öua', 'Spanish']
   },
   {
    country: 'Brazil',
    languages: [
     'German',
     'Indian Languages',
     'Italian',
     'Japanese',
     'Portuguese'
    ]
   },
   {
    country: 'Barbados',
    languages: ['Bajan', 'English']
   },
   {
    country: 'Brunei',
    languages: ['Chinese', 'English', 'Malay', 'Malay-English']
   },
   {
    country: 'Bhutan',
    languages: ['Asami', 'Dzongkha', 'Nepali']
   },
   {
    country: 'Botswana',
    languages: ['Khoekhoe', 'Ndebele', 'San', 'Shona', 'Tswana']
   },
   {
    country: 'Central African Republic',
    languages: ['Banda', 'Gbaya', 'Mandjia', 'Mbum', 'Ngbaka', 'Sara']
   },
   {
    country: 'Canada',
    languages: [
     'Chinese',
     'Dutch',
     'English',
     'Eskimo Languages',
     'French',
     'German',
     'Italian',
     'Polish',
     'Portuguese',
     'Punjabi',
     'Spanish',
     'Ukrainian'
    ]
   },
   {
    country: 'Cocos (Keeling) Islands',
    languages: ['English', 'Malay']
   },
   {
    country: 'Switzerland',
    languages: ['French', 'German', 'Italian', 'Romansh']
   },
   {
    country: 'Chile',
    languages: ['Aimar√°', 'Araucan', 'Rapa nui', 'Spanish']
   },
   {
    country: 'China',
    languages: [
     'Chinese',
     'Dong',
     'Hui',
     'Mant¬öu',
     'Miao',
     'Mongolian',
     'Puyi',
     'Tibetan',
     'Tujia',
     'Uighur',
     'Yi',
     'Zhuang'
    ]
   },
   {
    country: 'Ivory Coast',
    languages: ['Akan', 'Gur', 'Kru', 'Malinke', '[South]Mande']
   },
   {
    country: 'Cameroon',
    languages: [
     'Bamileke-bamum',
     'Duala',
     'Fang',
     'Ful',
     'Maka',
     'Mandara',
     'Masana',
     'Tikar'
    ]
   },
   {
    country: 'Congo, The Democratic Republic of the',
    languages: ['Lingala', 'Kikongo', 'Swahili', 'Tshiluba']
   },
   {
    country: 'Congo',
    languages: ['Kongo', 'Mbete', 'Mboshi', 'Punu', 'Sango', 'Teke']
   },
   {
    country: 'Cook Islands',
    languages: ['English', 'Maori']
   },
   {
    country: 'Colombia',
    languages: ['Arawakan', 'Caribbean', 'Chibcha', 'Creole English', 'Spanish']
   },
   {
    country: 'Comoros',
    languages: [
     'Comorian',
     'Comorian-Arabic',
     'Comorian-French',
     'Comorian-madagassi',
     'Comorian-Swahili'
    ]
   },
   {
    country: 'Cape Verde',
    languages: ['Crioulo', 'Portuguese']
   },
   {
    country: 'Costa Rica',
    languages: ['Chibcha', 'Chinese', 'Creole English', 'Spanish']
   },
   {
    country: 'Cuba',
    languages: ['Spanish']
   },
   {
    country: 'Christmas Island',
    languages: ['Chinese', 'English']
   },
   {
    country: 'Cayman Islands',
    languages: ['English']
   },
   {
    country: 'Cyprus',
    languages: ['Greek', 'Turkish']
   },
   {
    country: 'Czech Republic',
    languages: [
     'Czech',
     'German',
     'Hungarian',
     'Moravian',
     'Polish',
     'Romani',
     'Silesiana',
     'Slovak'
    ]
   },
   {
    country: 'Germany',
    languages: [
     'German',
     'Greek',
     'Italian',
     'Polish',
     'Southern Slavic Languages',
     'Turkish'
    ]
   },
   {
    country: 'Djibouti',
    languages: ['Afar', 'Arabic', 'Somali']
   },
   {
    country: 'Dominica',
    languages: ['Creole English', 'Creole French']
   },
   {
    country: 'Denmark',
    languages: [
     'Arabic',
     'Danish',
     'English',
     'German',
     'Norwegian',
     'Swedish',
     'Turkish'
    ]
   },
   {
    country: 'Dominican Republic',
    languages: ['Creole French', 'Spanish']
   },
   {
    country: 'Algeria',
    languages: ['Arabic', 'Berberi']
   },
   {
    country: 'Ecuador',
    languages: ['Ket¬öua', 'Spanish']
   },
   {
    country: 'Egypt',
    languages: ['Arabic', 'Sinaberberi']
   },
   {
    country: 'Eritrea',
    languages: ['Afar', 'Bilin', 'Hadareb', 'Saho', 'Tigre', 'Tigrigna']
   },
   {
    country: 'Western Sahara',
    languages: ['Arabic']
   },
   {
    country: 'Spain',
    languages: ['Basque', 'Catalan', 'Galecian', 'Spanish']
   },
   {
    country: 'Estonia',
    languages: ['Belorussian', 'Estonian', 'Finnish', 'Russian', 'Ukrainian']
   },
   {
    country: 'Eswatini',
    languages: ['Swazi', 'Zulu']
   },
   {
    country: 'Ethiopia',
    languages: [
     'Amharic',
     'Gurage',
     'Oromo',
     'Sidamo',
     'Somali',
     'Tigrigna',
     'Walaita'
    ]
   },
   {
    country: 'Finland',
    languages: ['Estonian', 'Finnish', 'Russian', 'Saame', 'Swedish']
   },
   {
    country: 'Fiji Islands',
    languages: ['Fijian', 'Hindi']
   },
   {
    country: 'Falkland Islands',
    languages: ['English']
   },
   {
    country: 'France',
    languages: [
     'Arabic',
     'French',
     'Italian',
     'Portuguese',
     'Spanish',
     'Turkish'
    ]
   },
   {
    country: 'Faroe Islands',
    languages: ['Danish', 'Faroese']
   },
   {
    country: 'Micronesia, Federated States of',
    languages: ['Kosrean', 'Mortlock', 'Pohnpei', 'Trukese', 'Wolea', 'Yap']
   },
   {
    country: 'Gabon',
    languages: ['Fang', 'Mbete', 'Mpongwe', 'Punu-sira-nzebi']
   },
   {
    country: 'United Kingdom',
    languages: ['English', 'Gaeli', 'Kymri']
   },
   {
    country: 'Georgia',
    languages: [
     'Abhyasi',
     'Armenian',
     'Azerbaijani',
     'Georgiana',
     'Osseetti',
     'Russian'
    ]
   },
   {
    country: 'Ghana',
    languages: ['Akan', 'Ewe', 'Ga-adangme', 'Gurma', 'Joruba', 'Mossi']
   },
   {
    country: 'Gibraltar',
    languages: ['Arabic', 'English']
   },
   {
    country: 'Guinea',
    languages: ['Ful', 'Kissi', 'Kpelle', 'Loma', 'Malinke', 'Susu', 'Yalunka']
   },
   {
    country: 'Guadeloupe',
    languages: ['Creole French', 'French']
   },
   {
    country: 'Gambia',
    languages: ['Diola', 'Ful', 'Malinke', 'Soninke', 'Wolof']
   },
   {
    country: 'Guinea-Bissau',
    languages: [
     'Balante',
     'Crioulo',
     'Ful',
     'Malinke',
     'Mandyako',
     'Portuguese'
    ]
   },
   {
    country: 'Equatorial Guinea',
    languages: ['Bubi', 'Fang']
   },
   {
    country: 'Greece',
    languages: ['Greek', 'Turkish']
   },
   {
    country: 'Grenada',
    languages: ['Creole English']
   },
   {
    country: 'Greenland',
    languages: ['Danish', 'Greenlandic']
   },
   {
    country: 'Guatemala',
    languages: ['Cakchiquel', 'Kekch√≠', 'Mam', 'Quich√©', 'Spanish']
   },
   {
    country: 'French Guiana',
    languages: ['Creole French', 'Indian Languages']
   },
   {
    country: 'Guam',
    languages: [
     'Chamorro',
     'English',
     'Japanese',
     'Korean',
     'Philippene Languages'
    ]
   },
   {
    country: 'Guyana',
    languages: ['Arawakan', 'Caribbean', 'Creole English']
   },
   {
    country: 'Hong Kong',
    languages: ['Canton Chinese', 'Chiu chau', 'English', 'Fukien', 'Hakka']
   },
   {
    country: 'Honduras',
    languages: ['Creole English', 'Garifuna', 'Miskito', 'Spanish']
   },
   {
    country: 'Croatia',
    languages: ['Serbo-Croatian', 'Slovene']
   },
   {
    country: 'Haiti',
    languages: ['French', 'Haiti Creole']
   },
   {
    country: 'Hungary',
    languages: [
     'German',
     'Hungarian',
     'Romani',
     'Romanian',
     'Serbo-Croatian',
     'Slovak'
    ]
   },
   {
    country: 'Indonesia',
    languages: [
     'Bahasa',
     'Bali',
     'Banja',
     'Batakki',
     'Bugi',
     'Javanese',
     'Madura',
     'Malay',
     'Minangkabau',
     'Sunda'
    ]
   },
   {
    country: 'India',
    languages: [
     'Asami',
     'Bengali',
     'Gujarati',
     'Hindi',
     'Kannada',
     'Malayalam',
     'Marathi',
     'Odia',
     'Punjabi',
     'Tamil',
     'Telugu',
     'Urdu',
     'Sanskrit',
     'English',
     'Konkani',
     'Nepali',
     'Bodo',
     'Kashmiri',
     'Maithili',
     'Santali',
     'Sindhi'
    ]
   },
   {
    country: 'Ireland',
    languages: ['English', 'Irish']
   },
   {
    country: 'Iran',
    languages: [
     'Arabic',
     'Azerbaijani',
     'Bakhtyari',
     'Balochi',
     'Gilaki',
     'Kurdish',
     'Luri',
     'Mazandarani',
     'Persian',
     'Turkmenian'
    ]
   },
   {
    country: 'Iraq',
    languages: ['Arabic', 'Assyrian', 'Azerbaijani', 'Kurdish', 'Persian']
   },
   {
    country: 'Iceland',
    languages: ['English', 'Icelandic']
   },
   {
    country: 'Israel',
    languages: ['Arabic', 'Hebrew', 'Russian']
   },
   {
    country: 'Italy',
    languages: [
     'Albaniana',
     'French',
     'Friuli',
     'German',
     'Italian',
     'Romani',
     'Sardinian',
     'Slovene'
    ]
   },
   {
    country: 'Jamaica',
    languages: ['Creole English', 'Hindi']
   },
   {
    country: 'Jordan',
    languages: ['Arabic', 'Armenian', 'Circassian']
   },
   {
    country: 'Japan',
    languages: [
     'Ainu',
     'Chinese',
     'English',
     'Japanese',
     'Korean',
     'Philippene Languages'
    ]
   },
   {
    country: 'Kazakhstan',
    languages: ['German', 'Kazakh', 'Russian', 'Tatar', 'Ukrainian', 'Uzbek']
   },
   {
    country: 'Kenya',
    languages: [
     'Gusii',
     'Kalenjin',
     'Kamba',
     'Kikuyu',
     'Luhya',
     'Luo',
     'Masai',
     'Meru',
     'Nyika',
     'Turkana'
    ]
   },
   {
    country: 'Kyrgyzstan',
    languages: [
     'Kazakh',
     'Kirgiz',
     'Russian',
     'Tadzhik',
     'Tatar',
     'Ukrainian',
     'Uzbek'
    ]
   },
   {
    country: 'Cambodia',
    languages: ['Khmer']
   },
   {
    country: 'Kiribati',
    languages: ['Kiribati', 'Tuvalu']
   },
   {
    country: 'Saint Kitts and Nevis',
    languages: ['Creole English', 'English']
   },
   {
    country: 'South Korea',
    languages: ['Chinese', 'Korean']
   },
   {
    country: 'Kuwait',
    languages: ['Arabic', 'English']
   },
   {
    country: 'Laos',
    languages: ['Lao', 'Lao-Soung', 'Mon-khmer', 'Thai']
   },
   {
    country: 'Lebanon',
    languages: ['Arabic', 'Armenian', 'French']
   },
   {
    country: 'Liberia',
    languages: [
     'Bassa',
     'Gio',
     'Grebo',
     'Kpelle',
     'Kru',
     'Loma',
     'Malinke',
     'Mano'
    ]
   },
   {
    country: 'Libya',
    languages: ['Arabic', 'Berberi']
   },
   {
    country: 'Saint Lucia',
    languages: ['Creole French', 'English']
   },
   {
    country: 'Liechtenstein',
    languages: ['German', 'Italian', 'Turkish']
   },
   {
    country: 'Sri Lanka',
    languages: ['Mixed Languages', 'Singali', 'Tamil']
   },
   {
    country: 'Lesotho',
    languages: ['English', 'Sotho', 'Zulu']
   },
   {
    country: 'Lithuania',
    languages: ['Belorussian', 'Lithuanian', 'Polish', 'Russian', 'Ukrainian']
   },
   {
    country: 'Luxembourg',
    languages: ['French', 'German', 'Italian', 'Luxembourgish', 'Portuguese']
   },
   {
    country: 'Latvia',
    languages: [
     'Belorussian',
     'Latvian',
     'Lithuanian',
     'Polish',
     'Russian',
     'Ukrainian'
    ]
   },
   {
    country: 'Macao',
    languages: ['Canton Chinese', 'English', 'Mandarin Chinese', 'Portuguese']
   },
   {
    country: 'Morocco',
    languages: ['Arabic', 'Berberi']
   },
   {
    country: 'Monaco',
    languages: ['English', 'French', 'Italian', 'Monegasque']
   },
   {
    country: 'Moldova',
    languages: ['Bulgariana', 'Gagauzi', 'Romanian', 'Russian', 'Ukrainian']
   },
   {
    country: 'Madagascar',
    languages: ['French', 'Malagasy']
   },
   {
    country: 'Maldives',
    languages: ['Dhivehi', 'English']
   },
   {
    country: 'Mexico',
    languages: ['Mixtec', 'N√°huatl', 'Otom√≠', 'Spanish', 'Yucatec', 'Zapotec']
   },
   {
    country: 'Marshall Islands',
    languages: ['English', 'Marshallese']
   },
   {
    country: 'Macedonia',
    languages: [
     'Albaniana',
     'Macedonian',
     'Romani',
     'Serbo-Croatian',
     'Turkish'
    ]
   },
   {
    country: 'Mali',
    languages: [
     'Bambara',
     'Ful',
     'Senufo and Minianka',
     'Songhai',
     'Soninke',
     'Tamashek'
    ]
   },
   {
    country: 'Malta',
    languages: ['English', 'Maltese']
   },
   {
    country: 'Myanmar',
    languages: [
     'Burmese',
     'Chin',
     'Kachin',
     'Karen',
     'Kayah',
     'Mon',
     'Rakhine',
     'Shan'
    ]
   },
   {
    country: 'Mongolia',
    languages: ['Bajad', 'Buryat', 'Dariganga', 'Dorbet', 'Kazakh', 'Mongolian']
   },
   {
    country: 'Northern Mariana Islands',
    languages: [
     'Carolinian',
     'Chamorro',
     'Chinese',
     'English',
     'Korean',
     'Philippene Languages'
    ]
   },
   {
    country: 'Mozambique',
    languages: [
     'Chuabo',
     'Lomwe',
     'Makua',
     'Marendje',
     'Nyanja',
     'Ronga',
     'Sena',
     'Shona',
     'Tsonga',
     'Tswa'
    ]
   },
   {
    country: 'Mauritania',
    languages: ['Ful', 'Hassaniya', 'Soninke', 'Tukulor', 'Wolof', 'Zenaga']
   },
   {
    country: 'Montserrat',
    languages: ['English']
   },
   {
    country: 'Martinique',
    languages: ['Creole French', 'French']
   },
   {
    country: 'Mauritius',
    languages: [
     'Bhojpuri',
     'Creole French',
     'French',
     'Hindi',
     'Marathi',
     'Tamil'
    ]
   },
   {
    country: 'Malawi',
    languages: ['Chichewa', 'Lomwe', 'Ngoni', 'Yao']
   },
   {
    country: 'Malaysia',
    languages: ['Chinese', 'Dusun', 'English', 'Iban', 'Malay', 'Tamil']
   },
   {
    country: 'Mayotte',
    languages: ['French', 'Mahor√©', 'Malagasy']
   },
   {
    country: 'Namibia',
    languages: [
     'Afrikaans',
     'Caprivi',
     'German',
     'Herero',
     'Kavango',
     'Nama',
     'Ovambo',
     'San'
    ]
   },
   {
    country: 'New Caledonia',
    languages: ['French', 'Malenasian Languages', 'Polynesian Languages']
   },
   {
    country: 'Niger',
    languages: ['Ful', 'Hausa', 'Kanuri', 'Songhai-zerma', 'Tamashek']
   },
   {
    country: 'Norfolk Island',
    languages: ['English']
   },
   {
    country: 'Nigeria',
    languages: [
     'Bura',
     'Edo',
     'Ful',
     'Hausa',
     'Ibibio',
     'Ibo',
     'Ijo',
     'Yoruba',
     'Kanuri',
     'Tiv'
    ]
   },
   {
    country: 'Nicaragua',
    languages: ['Creole English', 'Miskito', 'Spanish', 'Sumo']
   },
   {
    country: 'Niue',
    languages: ['English', 'Niue']
   },
   {
    country: 'Netherlands',
    languages: ['Arabic', 'Dutch', 'Fries', 'Turkish']
   },
   {
    country: 'Norway',
    languages: ['Danish', 'English', 'Norwegian', 'Saame', 'Swedish']
   },
   {
    country: 'Nepal',
    languages: [
     'Bhojpuri',
     'Hindi',
     'Maithili',
     'Nepali',
     'Newari',
     'Tamang',
     'Tharu'
    ]
   },
   {
    country: 'Nauru',
    languages: ['Chinese', 'English', 'Kiribati', 'Nauru', 'Tuvalu']
   },
   {
    country: 'New Zealand',
    languages: ['English', 'Maori']
   },
   {
    country: 'Oman',
    languages: ['Arabic', 'Balochi']
   },
   {
    country: 'Pakistan',
    languages: [
     'Balochi',
     'Brahui',
     'Hindko',
     'Pashto',
     'Punjabi',
     'Saraiki',
     'Sindhi',
     'Urdu'
    ]
   },
   {
    country: 'Panama',
    languages: [
     'Arabic',
     'Creole English',
     'Cuna',
     'Embera',
     'Guaym√≠',
     'Spanish'
    ]
   },
   {
    country: 'Pitcairn',
    languages: ['Pitcairnese']
   },
   {
    country: 'Peru',
    languages: ['Aimar√°', 'Ket¬öua', 'Spanish']
   },
   {
    country: 'Philippines',
    languages: [
     'Bicol',
     'Cebuano',
     'Hiligaynon',
     'Ilocano',
     'Maguindanao',
     'Maranao',
     'Pampango',
     'Pangasinan',
     'Pilipino',
     'Waray-waray'
    ]
   },
   {
    country: 'Palau',
    languages: ['Chinese', 'English', 'Palau', 'Philippene Languages']
   },
   {
    country: 'Papua New Guinea',
    languages: ['Malenasian Languages', 'Papuan Languages']
   },
   {
    country: 'Poland',
    languages: ['Belorussian', 'German', 'Polish', 'Ukrainian']
   },
   {
    country: 'Puerto Rico',
    languages: ['English', 'Spanish']
   },
   {
    country: 'North Korea',
    languages: ['Chinese', 'Korean']
   },
   {
    country: 'Portugal',
    languages: ['Portuguese']
   },
   {
    country: 'Paraguay',
    languages: ['German', 'Guaran√≠', 'Portuguese', 'Spanish']
   },
   {
    country: 'Palestine',
    languages: ['Arabic', 'Hebrew']
   },
   {
    country: 'French Polynesia',
    languages: ['Chinese', 'French', 'Tahitian']
   },
   {
    country: 'Qatar',
    languages: ['Arabic', 'Urdu']
   },
   {
    country: 'Reunion',
    languages: ['Chinese', 'Comorian', 'Creole French', 'Malagasy', 'Tamil']
   },
   {
    country: 'Romania',
    languages: [
     'German',
     'Hungarian',
     'Romani',
     'Romanian',
     'Serbo-Croatian',
     'Ukrainian'
    ]
   },
   {
    country: 'Russia',
    languages: [
     'Avarian',
     'Bashkir',
     'Belorussian',
     'Chechen',
     'Chuvash',
     'Kazakh',
     'Mari',
     'Mordva',
     'Russian',
     'Tatar',
     'Udmur',
     'Ukrainian'
    ]
   },
   {
    country: 'Rwanda',
    languages: ['French', 'Rwanda']
   },
   {
    country: 'Saudi Arabia',
    languages: ['Arabic']
   },
   {
    country: 'Sudan',
    languages: [
     'Arabic',
     'Bari',
     'Beja',
     'Chilluk',
     'Dinka',
     'Fur',
     'Lotuko',
     'Nubian Languages',
     'Nuer',
     'Zande'
    ]
   },
   {
    country: 'Senegal',
    languages: ['Diola', 'Ful', 'Malinke', 'Serer', 'Soninke', 'Wolof']
   },
   {
    country: 'Serbia',
    languages: [
     'Serbian',
     'Hungarian',
     'Slovak',
     'Romanian',
     'Croatian',
     'Rusyn',
     'Albanian',
     'Bulgarian',
     'English'
    ]
   },
   {
    country: 'Singapore',
    languages: ['Chinese', 'Malay', 'Tamil']
   },
   {
    country: 'Saint Helena',
    languages: ['English']
   },
   {
    country: 'Svalbard and Jan Mayen',
    languages: ['Norwegian', 'Russian']
   },
   {
    country: 'Solomon Islands',
    languages: [
     'Malenasian Languages',
     'Papuan Languages',
     'Polynesian Languages'
    ]
   },
   {
    country: 'Sierra Leone',
    languages: [
     'Bullom-sherbro',
     'Ful',
     'Kono-vai',
     'Kuranko',
     'Limba',
     'Mende',
     'Temne',
     'Yalunka'
    ]
   },
   {
    country: 'El Salvador',
    languages: ['Nahua', 'Spanish']
   },
   {
    country: 'San Marino',
    languages: ['Italian']
   },
   {
    country: 'Somalia',
    languages: ['Arabic', 'Somali']
   },
   {
    country: 'Saint Pierre and Miquelon',
    languages: ['French']
   },
   {
    country: 'Sao Tome and Principe',
    languages: ['Crioulo', 'French']
   },
   {
    country: 'Suriname',
    languages: ['Hindi', 'Sranantonga']
   },
   {
    country: 'Slovakia',
    languages: [
     'Czech and Moravian',
     'Hungarian',
     'Romani',
     'Slovak',
     'Ukrainian and Russian'
    ]
   },
   {
    country: 'Slovenia',
    languages: ['Hungarian', 'Serbo-Croatian', 'Slovene']
   },
   {
    country: 'Sweden',
    languages: [
     'Arabic',
     'Finnish',
     'Norwegian',
     'Southern Slavic Languages',
     'Spanish',
     'Swedish'
    ]
   },
   {
    country: 'Seychelles',
    languages: ['English', 'French', 'Seselwa']
   },
   {
    country: 'Syria',
    languages: ['Arabic', 'Kurdish']
   },
   {
    country: 'Turks and Caicos Islands',
    languages: ['English']
   },
   {
    country: 'Chad',
    languages: [
     'Arabic',
     'Gorane',
     'Hadjarai',
     'Kanem-bornu',
     'Mayo-kebbi',
     'Ouaddai',
     'Sara',
     'Tandjile'
    ]
   },
   {
    country: 'Togo',
    languages: [
     'Ane',
     'Ewe',
     'Gurma',
     'Kaby√©',
     'Kotokoli',
     'Moba',
     'Naudemba',
     'Watyi'
    ]
   },
   {
    country: 'Thailand',
    languages: ['Chinese', 'Khmer', 'Kuy', 'Lao', 'Malay', 'Thai']
   },
   {
    country: 'Tajikistan',
    languages: ['Russian', 'Tadzhik', 'Uzbek']
   },
   {
    country: 'Tokelau',
    languages: ['English', 'Tokelau']
   },
   {
    country: 'Turkmenistan',
    languages: ['Kazakh', 'Russian', 'Turkmenian', 'Uzbek']
   },
   {
    country: 'East Timor',
    languages: ['Portuguese', 'Sunda']
   },
   {
    country: 'Tonga',
    languages: ['English', 'Tongan']
   },
   {
    country: 'Trinidad and Tobago',
    languages: ['Creole English', 'English', 'Hindi']
   },
   {
    country: 'Tunisia',
    languages: ['Arabic', 'Arabic-French', 'Arabic-French-English']
   },
   {
    country: 'Turkey',
    languages: ['Arabic', 'Kurdish', 'Turkish']
   },
   {
    country: 'Tuvalu',
    languages: ['English', 'Kiribati', 'Tuvalu']
   },
   {
    country: 'Taiwan',
    languages: ['Ami', 'Atayal', 'Hakka', 'Mandarin Chinese', 'Min', 'Paiwan']
   },
   {
    country: 'Tanzania',
    languages: [
     'Chaga and Pare',
     'Sambaa',
     'Bondei',
     'Digo',
     'Gogo',
     'Ha',
     'Haya',
     'Hehet',
     'Luguru',
     'Makonde',
     'Nyakusa',
     'Nyamwezi',
     'Shambala',
     'Swahili'
    ]
   },
   {
    country: 'Uganda',
    languages: [
     'Acholi',
     'Ganda',
     'Gisu',
     'Kiga',
     'Lango',
     'Lugbara',
     'Nkole',
     'Rwanda',
     'Soga',
     'Teso'
    ]
   },
   {
    country: 'Ukraine',
    languages: [
     'Belorussian',
     'Bulgariana',
     'Hungarian',
     'Polish',
     'Romanian',
     'Russian',
     'Ukrainian'
    ]
   },
   {
    country: 'United States Minor Outlying Islands',
    languages: ['English']
   },
   {
    country: 'Uruguay',
    languages: ['Spanish']
   },
   {
    country: 'United States',
    languages: [
     'Chinese',
     'English',
     'French',
     'German',
     'Italian',
     'Japanese',
     'Korean',
     'Polish',
     'Portuguese',
     'Spanish',
     'Tagalog',
     'Vietnamese'
    ]
   },
   {
    country: 'Uzbekistan',
    languages: ['Karakalpak', 'Kazakh', 'Russian', 'Tadzhik', 'Tatar', 'Uzbek']
   },
   {
    country: 'Holy See (Vatican City State)',
    languages: ['Italian']
   },
   {
    country: 'Saint Vincent and the Grenadines',
    languages: ['Creole English', 'English']
   },
   {
    country: 'Venezuela',
    languages: ['Goajiro', 'Spanish', 'Warrau']
   },
   {
    country: 'Virgin Islands, British',
    languages: ['English']
   },
   {
    country: 'Virgin Islands, U.S.',
    languages: ['English', 'French', 'Spanish']
   },
   {
    country: 'Vietnam',
    languages: [
     'Chinese',
     'Khmer',
     'Man',
     'Miao',
     'Muong',
     'Nung',
     'Thai',
     'Tho',
     'Vietnamese'
    ]
   },
   {
    country: 'Vanuatu',
    languages: ['Bislama', 'English', 'French']
   },
   {
    country: 'Wallis and Futuna',
    languages: ['Futuna', 'Wallis']
   },
   {
    country: 'Samoa',
    languages: ['English', 'Samoan', 'Samoan-English']
   },
   {
    country: 'Yemen',
    languages: ['Arabic', 'Soqutri']
   },
   {
    country: 'South Africa',
    languages: [
     'Afrikaans',
     'English',
     'Ndebele',
     'Northsotho',
     'Southsotho',
     'Swazi',
     'Tsonga',
     'Tswana',
     'Venda',
     'Xhosa',
     'Zulu'
    ]
   },
   {
    country: 'Zambia',
    languages: ['Bemba', 'Chewa', 'Lozi', 'Nsenga', 'Nyanja', 'Tongan']
   },
   {
    country: 'Zimbabwe',
    languages: ['English', 'Ndebele', 'Nyanja', 'Shona']
   }
  ];
 }

 avgTemperature() {
  return [
   {
    country: 'Afghanistan',
    temperature: 13.37
   },
   {
    country: 'Albania',
    temperature: 12.44
   },
   {
    country: 'Algeria',
    temperature: 23.6
   },
   {
    country: 'American Samoa',
    temperature: 27.38
   },
   {
    country: 'Andorra',
    temperature: 8.27
   },
   {
    country: 'Angola',
    temperature: 21.77
   },
   {
    country: 'Anguilla',
    temperature: 27.71
   },
   {
    country: 'Antarctica',
    temperature: null
   },
   {
    country: 'Antigua and Barbuda',
    temperature: 27.2
   },
   {
    country: 'Argentina',
    temperature: 15.11
   },
   {
    country: 'Armenia',
    temperature: 7.82
   },
   {
    country: 'Aruba',
    temperature: 29.17
   },
   {
    country: 'Australia',
    temperature: 22.05
   },
   {
    country: 'Austria',
    temperature: 7.44
   },
   {
    country: 'Azerbaijan',
    temperature: 12.96
   },
   {
    country: 'Bahamas',
    temperature: 25.58
   },
   {
    country: 'Bahrain',
    temperature: 27.69
   },
   {
    country: 'Bangladesh',
    temperature: 25.71
   },
   {
    country: 'Barbados',
    temperature: 26.61
   },
   {
    country: 'Belarus',
    temperature: 7.45
   },
   {
    country: 'Belgium',
    temperature: 10.67
   },
   {
    country: 'Belize',
    temperature: 25.7
   },
   {
    country: 'Benin',
    temperature: 28.02
   },
   {
    country: 'Bermuda',
    temperature: 21.67
   },
   {
    country: 'Bhutan',
    temperature: 10.38
   },
   {
    country: 'Bolivia',
    temperature: 20.76
   },
   {
    country: 'Bosnia and Herzegovina',
    temperature: 10.35
   },
   {
    country: 'Botswana',
    temperature: 22.09
   },
   {
    country: 'Bouvet Island',
    temperature: null
   },
   {
    country: 'Brazil',
    temperature: 25.44
   },
   {
    country: 'British Indian Ocean Territory',
    temperature: 27.61
   },
   {
    country: 'Brunei',
    temperature: 26.95
   },
   {
    country: 'Bulgaria',
    temperature: 11.35
   },
   {
    country: 'Burkina Faso',
    temperature: 29.26
   },
   {
    country: 'Burundi',
    temperature: 20.51
   },
   {
    country: 'Cambodia',
    temperature: 27.41
   },
   {
    country: 'Cameroon',
    temperature: 24.8
   },
   {
    country: 'Canada',
    temperature: -4.03
   },
   {
    country: 'Cape Verde',
    temperature: 22.53
   },
   {
    country: 'Cayman Islands',
    temperature: 27.82
   },
   {
    country: 'Central African Republic',
    temperature: 25.47
   },
   {
    country: 'Chad',
    temperature: 27.63
   },
   {
    country: 'Chile',
    temperature: 9.39
   },
   {
    country: 'China',
    temperature: 7.59
   },
   {
    country: 'Christmas Island',
    temperature: 26.06
   },
   {
    country: 'Cocos (Keeling) Islands',
    temperature: 26.79
   },
   {
    country: 'Colombia',
    temperature: 25
   },
   {
    country: 'Comoros',
    temperature: 23.73
   },
   {
    country: 'Congo',
    temperature: 24.74
   },
   {
    country: 'Cook Islands',
    temperature: 24.71
   },
   {
    country: 'Costa Rica',
    temperature: 24.83
   },
   {
    country: 'Croatia',
    temperature: 11.96
   },
   {
    country: 'Cuba',
    temperature: 25.81
   },
   {
    country: 'Cyprus',
    temperature: 18.95
   },
   {
    country: 'Czech Republic',
    temperature: 8.6
   },
   {
    country: 'Denmark',
    temperature: 8.9
   },
   {
    country: 'Djibouti',
    temperature: 28.49
   },
   {
    country: 'Dominica',
    temperature: 26.83
   },
   {
    country: 'Dominican Republic',
    temperature: 24.55
   },
   {
    country: 'East Timor',
    temperature: 24.57
   },
   {
    country: 'Ecuador',
    temperature: 21.43
   },
   {
    country: 'Egypt',
    temperature: 23.14
   },
   {
    country: 'El Salvador',
    temperature: 25.23
   },
   {
    country: 'England',
    temperature: null
   },
   {
    country: 'Equatorial Guinea',
    temperature: 24.66
   },
   {
    country: 'Eritrea',
    temperature: 26.63
   },
   {
    country: 'Estonia',
    temperature: 6.34
   },
   {
    country: 'Eswatini',
    temperature: 20.64
   },
   {
    country: 'Ethiopia',
    temperature: 23.37
   },
   {
    country: 'Falkland Islands',
    temperature: null
   },
   {
    country: 'Faroe Islands',
    temperature: 6.6
   },
   {
    country: 'Fiji Islands',
    temperature: 24.68
   },
   {
    country: 'Finland',
    temperature: 2.46
   },
   {
    country: 'France',
    temperature: 11.65
   },
   {
    country: 'French Guiana',
    temperature: null
   },
   {
    country: 'French Polynesia',
    temperature: 24.3
   },
   {
    country: 'French Southern territories',
    temperature: 4.11
   },
   {
    country: 'Gabon',
    temperature: 25.2
   },
   {
    country: 'Gambia',
    temperature: 28.38
   },
   {
    country: 'Georgia',
    temperature: 9.01
   },
   {
    country: 'Germany',
    temperature: 9.59
   },
   {
    country: 'Ghana',
    temperature: 27.66
   },
   {
    country: 'Gibraltar',
    temperature: 18.15
   },
   {
    country: 'Greece',
    temperature: 14.26
   },
   {
    country: 'Greenland',
    temperature: -18.68
   },
   {
    country: 'Grenada',
    temperature: 26.49
   },
   {
    country: 'Guadeloupe',
    temperature: null
   },
   {
    country: 'Guam',
    temperature: 27.81
   },
   {
    country: 'Guatemala',
    temperature: 23.65
   },
   {
    country: 'Guinea',
    temperature: 25.86
   },
   {
    country: 'Guinea-Bissau',
    temperature: 27.98
   },
   {
    country: 'Guyana',
    temperature: 26.12
   },
   {
    country: 'Haiti',
    temperature: 24.95
   },
   {
    country: 'Heard Island and McDonald Islands',
    temperature: 2.46
   },
   {
    country: 'Holy See (Vatican City State)',
    temperature: 16.34
   },
   {
    country: 'Honduras',
    temperature: 24.72
   },
   {
    country: 'Hong Kong',
    temperature: null
   },
   {
    country: 'Hungary',
    temperature: 11.5
   },
   {
    country: 'Iceland',
    temperature: 1.85
   },
   {
    country: 'India',
    temperature: 24.94
   },
   {
    country: 'Indonesia',
    temperature: 25.96
   },
   {
    country: 'Iran',
    temperature: 18.34
   },
   {
    country: 'Iraq',
    temperature: 22.95
   },
   {
    country: 'Ireland',
    temperature: 9.73
   },
   {
    country: 'Israel',
    temperature: 19.99
   },
   {
    country: 'Italy',
    temperature: 13.22
   },
   {
    country: 'Ivory Coast',
    temperature: 26.8
   },
   {
    country: 'Jamaica',
    temperature: 25.91
   },
   {
    country: 'Japan',
    temperature: 11.78
   },
   {
    country: 'Jordan',
    temperature: 19.52
   },
   {
    country: 'Kazakhstan',
    temperature: 7.11
   },
   {
    country: 'Kenya',
    temperature: 25.08
   },
   {
    country: 'Kiribati',
    temperature: 27.77
   },
   {
    country: 'Kuwait',
    temperature: 26.31
   },
   {
    country: 'Kyrgyzstan',
    temperature: 2.65
   },
   {
    country: 'Laos',
    temperature: 24.16
   },
   {
    country: 'Latvia',
    temperature: 6.87
   },
   {
    country: 'Lebanon',
    temperature: 15.45
   },
   {
    country: 'Lesotho',
    temperature: 12.38
   },
   {
    country: 'Liberia',
    temperature: 25.45
   },
   {
    country: 'Libya',
    temperature: 22.81
   },
   {
    country: 'Liechtenstein',
    temperature: 7.55
   },
   {
    country: 'Lithuania',
    temperature: 7.38
   },
   {
    country: 'Luxembourg',
    temperature: 10.02
   },
   {
    country: 'Macao',
    temperature: null
   },
   {
    country: 'North Macedonia',
    temperature: 10.79
   },
   {
    country: 'Madagascar',
    temperature: 22.64
   },
   {
    country: 'Malawi',
    temperature: 22.66
   },
   {
    country: 'Malaysia',
    temperature: 26.38
   },
   {
    country: 'Maldives',
    temperature: 28.11
   },
   {
    country: 'Mali',
    temperature: 29.21
   },
   {
    country: 'Malta',
    temperature: 19.58
   },
   {
    country: 'Marshall Islands',
    temperature: 28.01
   },
   {
    country: 'Martinique',
    temperature: null
   },
   {
    country: 'Mauritania',
    temperature: 28.82
   },
   {
    country: 'Mauritius',
    temperature: 23.33
   },
   {
    country: 'Mayotte',
    temperature: null
   },
   {
    country: 'Mexico',
    temperature: 21.31
   },
   {
    country: 'Micronesia, Federated States of',
    temperature: 27.28
   },
   {
    country: 'Moldova',
    temperature: 10.89
   },
   {
    country: 'Monaco',
    temperature: 13.53
   },
   {
    country: 'Mongolia',
    temperature: 1.07
   },
   {
    country: 'Montserrat',
    temperature: 25.75
   },
   {
    country: 'Morocco',
    temperature: 18.14
   },
   {
    country: 'Mozambique',
    temperature: 24.41
   },
   {
    country: 'Myanmar',
    temperature: 23.82
   },
   {
    country: 'Namibia',
    temperature: 20.45
   },
   {
    country: 'Nauru',
    temperature: 27.83
   },
   {
    country: 'Nepal',
    temperature: 14.17
   },
   {
    country: 'Netherlands',
    temperature: 10.49
   },
   {
    country: 'Netherlands Antilles',
    temperature: null
   },
   {
    country: 'New Caledonia',
    temperature: 22.69
   },
   {
    country: 'New Zealand',
    temperature: 10.46
   },
   {
    country: 'Nicaragua',
    temperature: 25.88
   },
   {
    country: 'Niger',
    temperature: 28.04
   },
   {
    country: 'Nigeria',
    temperature: 27.3
   },
   {
    country: 'Niue',
    temperature: 25.03
   },
   {
    country: 'Norfolk Island',
    temperature: 19.01
   },
   {
    country: 'North Korea',
    temperature: 6.98
   },
   {
    country: 'Northern Ireland',
    temperature: null
   },
   {
    country: 'Northern Mariana Islands',
    temperature: 27.6
   },
   {
    country: 'Norway',
    temperature: 2.21
   },
   {
    country: 'Oman',
    temperature: 27.64
   },
   {
    country: 'Pakistan',
    temperature: 21.38
   },
   {
    country: 'Palau',
    temperature: 27.9
   },
   {
    country: 'Palestine',
    temperature: 19.5
   },
   {
    country: 'Panama',
    temperature: 25.6
   },
   {
    country: 'Papua New Guinea',
    temperature: 24.74
   },
   {
    country: 'Paraguay',
    temperature: 23.92
   },
   {
    country: 'Peru',
    temperature: 19.72
   },
   {
    country: 'Philippines',
    temperature: 26.27
   },
   {
    country: 'Pitcairn',
    temperature: 20.56
   },
   {
    country: 'Poland',
    temperature: 8.78
   },
   {
    country: 'Portugal',
    temperature: 15.85
   },
   {
    country: 'Puerto Rico',
    temperature: 25.04
   },
   {
    country: 'Qatar',
    temperature: 28.02
   },
   {
    country: 'Reunion',
    temperature: null
   },
   {
    country: 'Romania',
    temperature: 10.18
   },
   {
    country: 'Russia',
    temperature: -3.79
   },
   {
    country: 'Rwanda',
    temperature: 19.2
   },
   {
    country: 'Saint Helena',
    temperature: 18.1
   },
   {
    country: 'Saint Kitts and Nevis',
    temperature: 27.47
   },
   {
    country: 'Saint Lucia',
    temperature: 27
   },
   {
    country: 'Saint Pierre and Miquelon',
    temperature: 5.72
   },
   {
    country: 'Saint Vincent and the Grenadines',
    temperature: 26.17
   },
   {
    country: 'Samoa',
    temperature: 27.58
   },
   {
    country: 'San Marino',
    temperature: 12.83
   },
   {
    country: 'Sao Tome and Principe',
    temperature: 24.49
   },
   {
    country: 'Saudi Arabia',
    temperature: 25.94
   },
   {
    country: 'Scotland',
    temperature: null
   },
   {
    country: 'Senegal',
    temperature: 28.9
   },
   {
    country: 'Serbia',
    temperature: 11.4
   },
   {
    country: 'Seychelles',
    temperature: 27.09
   },
   {
    country: 'Sierra Leone',
    temperature: 26.54
   },
   {
    country: 'Singapore',
    temperature: 27.68
   },
   {
    country: 'Slovakia',
    temperature: 8.83
   },
   {
    country: 'Slovenia',
    temperature: 9.86
   },
   {
    country: 'Solomon Islands',
    temperature: 25.92
   },
   {
    country: 'Somalia',
    temperature: 26.95
   },
   {
    country: 'South Africa',
    temperature: 18.23
   },
   {
    country: 'South Georgia and the South Sandwich Islands',
    temperature: null
   },
   {
    country: 'South Korea',
    temperature: 12.22
   },
   {
    country: 'South Sudan',
    temperature: 27.97
   },
   {
    country: 'Spain',
    temperature: 14.07
   },
   {
    country: 'Sri Lanka',
    temperature: 27.25
   },
   {
    country: 'Sudan',
    temperature: 27.95
   },
   {
    country: 'Suriname',
    temperature: 26.58
   },
   {
    country: 'Svalbard and Jan Mayen',
    temperature: -6.78
   },
   {
    country: 'Sweden',
    temperature: 3.23
   },
   {
    country: 'Switzerland',
    temperature: 6.47
   },
   {
    country: 'Syria',
    temperature: 18.75
   },
   {
    country: 'Tajikistan',
    temperature: 3.85
   },
   {
    country: 'Tanzania',
    temperature: 22.92
   },
   {
    country: 'Thailand',
    temperature: 26.85
   },
   {
    country: 'The Democratic Republic of Congo',
    temperature: 24.35
   },
   {
    country: 'Togo',
    temperature: 27.33
   },
   {
    country: 'Tokelau',
    temperature: 28.71
   },
   {
    country: 'Tonga',
    temperature: 25.01
   },
   {
    country: 'Trinidad and Tobago',
    temperature: 26.55
   },
   {
    country: 'Tunisia',
    temperature: 20.53
   },
   {
    country: 'Turkey',
    temperature: 11.66
   },
   {
    country: 'Turkmenistan',
    temperature: 16.66
   },
   {
    country: 'Turks and Caicos Islands',
    temperature: 26.29
   },
   {
    country: 'Tuvalu',
    temperature: 28.62
   },
   {
    country: 'Uganda',
    temperature: 23.25
   },
   {
    country: 'Ukraine',
    temperature: 9.27
   },
   {
    country: 'United Arab Emirates',
    temperature: 28.17
   },
   {
    country: 'United Kingdom',
    temperature: 9.24
   },
   {
    country: 'United States',
    temperature: 9.46
   },
   {
    country: 'United States Minor Outlying Islands',
    temperature: 24.97
   },
   {
    country: 'Uruguay',
    temperature: 17.97
   },
   {
    country: 'Uzbekistan',
    temperature: 13.69
   },
   {
    country: 'Vanuatu',
    temperature: 24.44
   },
   {
    country: 'Venezuela',
    temperature: 25.71
   },
   {
    country: 'Vietnam',
    temperature: 24.79
   },
   {
    country: 'Virgin Islands, British',
    temperature: 26.7
   },
   {
    country: 'Virgin Islands, U.S.',
    temperature: 26.98
   },
   {
    country: 'Wales',
    temperature: null
   },
   {
    country: 'Wallis and Futuna',
    temperature: 27.3
   },
   {
    country: 'Western Sahara',
    temperature: null
   },
   {
    country: 'Yemen',
    temperature: 25.54
   },
   {
    country: 'Zambia',
    temperature: 22.23
   },
   {
    country: 'Zimbabwe',
    temperature: 21.9
   }
  ];
 } // average temperature
} //class
