const flags = [
  {
    name: 'Afghanistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg'
  },
  {
    name: 'Albania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg'
  },
  {
    name: 'Algeria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg'
  },
  {
    name: 'Andorra',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg'
  },
  {
    name: 'Angola',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg'
  },
  {
    name: 'Antigua and Barbuda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg'
  },
  {
    name: 'Argentina',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg'
  },
  {
    name: 'Armenia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg'
  },
  {
    name: 'Australia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg'
  },
  {
    name: 'Austria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg'
  },
  {
    name: 'Azerbaijan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg'
  },
  {
    name: 'Bahamas',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg'
  },
  {
    name: 'Bahrain',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg'
  },
  {
    name: 'Bangladesh',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg'
  },
  {
    name: 'Barbados',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg'
  },
  {
    name: 'Belarus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg'
  },
  {
    name: 'Belgium',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg'
  },
  {
    name: 'Belize',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg'
  },
  {
    name: 'Benin',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg'
  },
  {
    name: 'Bhutan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg'
  },
  {
    name: 'Bolivia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29.svg'
  },
  {
    name: 'Bosnia and Herzegovina',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
    accepts: ['Bosnia']
  },
  {
    name: 'Botswana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg'
  },
  {
    name: 'Brazil',
    url: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg'
  },
  {
    name: 'Brunei',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg'
  },
  {
    name: 'Bulgaria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg'
  },
  {
    name: 'Burkina Faso',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg'
  },
  {
    name: 'Burundi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg'
  },
  {
    name: 'Cambodia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg'
  },
  {
    name: 'Cameroon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg'
  },
  {
    name: 'Canada',
    url: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg'
  },
  {
    name: 'Cape Verde',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
    accepts: ['Cabo Verde']
  },
  {
    name: 'Central African Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
    accepts: ['CAR']
  },
  {
    name: 'Chad',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg'
  },
  {
    name: 'Chile',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg'
  },
  {
    name: 'China',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    accepts: ['People\'s Republic of China']
  },
  {
    name: 'Colombia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'
  },
  {
    name: 'Comoros',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg'
  },
  {
    name: 'Democratic Republic of the Congo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
    accepts: ['DRC']
  },
  {
    name: 'Republic of the Congo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg'
  },
  {
    name: 'Costa Rica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg'
  },
  {
    name: 'Croatia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg'
  },
  {
    name: 'Cuba',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg'
  },
  {
    name: 'Cyprus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg'
  },
  {
    name: 'Czech Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg'
  },
  {
    name: 'Denmark',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg'
  },
  {
    name: 'Djibouti',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg'
  },
  {
    name: 'Dominica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg'
  },
  {
    name: 'Dominican Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg'
  },
  {
    name: 'East Timor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
    accepts: ['Timor Leste']
  },
  {
    name: 'Ecuador',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg'
  },
  {
    name: 'Egypt',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg'
  },
  {
    name: 'El Salvador',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg'
  },
  {
    name: 'Equatorial Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg'
  },
  {
    name: 'Eritrea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg'
  },
  {
    name: 'Estonia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg'
  },
  {
    name: 'Ethiopia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg'
  },
  {
    name: 'Fiji',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg'
  },
  {
    name: 'Finland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg'
  },
  {
    name: 'France',
    url: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
  },
  {
    name: 'Gabon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg'
  },
  {
    name: 'Gamiba',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg'
  },
  {
    name: 'Georgia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg'
  },
  {
    name: 'Germany',
    url: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
  },
  {
    name: 'Ghana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg'
  },
  {
    name: 'Greece',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg'
  },
  {
    name: 'Grenada',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg'
  },
  {
    name: 'Guatemala',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg'
  },
  {
    name: 'Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg'
  },
  {
    name: 'Guinea-Bissau',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg'
  },
  {
    name: 'Guyana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg'
  },
  {
    name: 'Haiti',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg'
  },
  {
    name: 'Honduras',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg'
  },
  {
    name: 'Hungary',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg'
  },
  {
    name: 'Iceland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg'
  },
  {
    name: 'India',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg'
  },
  {
    name: 'Indonesia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg'
  },
  {
    name: 'Iran',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg'
  },
  {
    name: 'Iraq',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg'
  },
  {
    name: 'Ireland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg'
  },
  {
    name: 'Israel',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg'
  },
  {
    name: 'Italy',
    url: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg'
  },
  {
    name: 'Côte d\'Ivoire',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg',
    accepts: ['Ivory Coast', 'Cote d\'Ivoire']
  },
  {
    name: 'Jamaica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg'
  },
  {
    name: 'Japan',
    url: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg'
  },
  {
    name: 'Jordan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg'
  },
  {
    name: 'Kazakhstan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg'
  },
  {
    name: 'Kenya',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg'
  },
  {
    name: 'Kiribati',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg'
  },
  {
    name: 'North Korea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
    accepts: ['Democratic People\'s Republic of Korea', 'Best Korea']
  },
  {
    name: 'South Korea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
    accepts: ['Republic of Korea']
  },
  {
    name: 'Kuwait',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg'
  },
  {
    name: 'Kyrgyzstan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg'
  },
  {
    name: 'Laos',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg'
  },
  {
    name: 'Latvia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg'
  },
  {
    name: 'Lebanon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg'
  },
  {
    name: 'Lesotho',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg'
  },
  {
    name: 'Liberia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg'
  },
  {
    name: 'Libya',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg'
  },
  {
    name: 'Liechtenstein',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg'
  },
  {
    name: 'Lithuania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg'
  },
  {
    name: 'Luxembourg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg'
  },
  {
    name: 'Macedonia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Macedonia.svg'
  },
  {
    name: 'Madagascar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg'
  },
  {
    name: 'Malawi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg'
  },
  {
    name: 'Malaysia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg'
  },
  {
    name: 'Maldives',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg'
  },
  {
    name: 'Mali',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg'
  },
  {
    name: 'Malta',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg'
  },
  {
    name: 'Marshall Islands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg'
  },
  {
    name: 'Mauritania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg'
  },
  {
    name: 'Mauritius',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg'
  },
  {
    name: 'Mexico',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg'
  },
  {
    name: 'Micronesia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg'
  },
  {
    name: 'Moldova',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg'
  },
  {
    name: 'Monaco',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg'
  },
  {
    name: 'Mongolia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg'
  },
  {
    name: 'Montenegro',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg'
  },
  {
    name: 'Morocco',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg'
  },
  {
    name: 'Mozambique',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg'
  },
  {
    name: 'Myanmar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
    accepts: ['Burma']
  },
  {
    name: 'Namibia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg'
  },
  {
    name: 'Nauru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg'
  },
  {
    name: 'Nepal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg'
  },
  {
    name: 'Netherlands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg'
  },
  {
    name: 'New Zealand',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'
  },
  {
    name: 'Nicaragua',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg'
  },
  {
    name: 'Niger',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg'
  },
  {
    name: 'Nigeria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg'
  },
  {
    name: 'Norway',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg'
  },
  {
    name: 'Oman',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg'
  },
  {
    name: 'Pakistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg'
  },
  {
    name: 'Palau',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg'
  },
  {
    name: 'Palestine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg'
  },
  {
    name: 'Panama',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg'
  },
  {
    name: 'Papua New Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg'
  },
  {
    name: 'Paraguay',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg'
  },
  {
    name: 'Peru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg'
  },
  {
    name: 'Philippines',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg'
  },
  {
    name: 'Poland',
    url: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg'
  },
  {
    name: 'Portugal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg'
  },
  {
    name: 'Qatar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg'
  },
  {
    name: 'Romania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg'
  },
  {
    name: 'Russia',
    url: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg'
  },
  {
    name: 'Rwanda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg'
  },
  {
    name: 'Saint Kitts and Nevis',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
    accepts: ['St Kitts and Nevis']
  },
  {
    name: 'Saint Lucia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
    accepts: ['St Lucia']
  },
  {
    name: 'Saint Vincent and the Grenadines',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
    accepts: ['St Vincent and the Grenadines']
  },
  {
    name: 'Samoa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg'
  },
  {
    name: 'San Marino',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg'
  },
  {
    name: 'Sao Tome and Principe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg'
  },
  {
    name: 'Saudi Arabia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg'
  },
  {
    name: 'Senegal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg'
  },
  {
    name: 'Serbia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg'
  },
  {
    name: 'Seychelles',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
    accepts: ['Seychelle Islands']
  },
  {
    name: 'Sierra Leone',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg'
  },
  {
    name: 'Singapore',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg'
  },
  {
    name: 'Slovakia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg'
  },
  {
    name: 'Slovenia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg'
  },
  {
    name: 'Solomon Islands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg'
  },
  {
    name: 'Somalia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg'
  },
  {
    name: 'South Africa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg'
  },
  {
    name: 'South Sudan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg'
  },
  {
    name: 'Spain',
    url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg'
  },
  {
    name: 'Sri Lanka',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg'
  },
  {
    name: 'Sudan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg'
  },
  {
    name: 'Suriname',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg'
  },
  {
    name: 'Swaziland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Swaziland.svg'
  },
  {
    name: 'Sweden',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg'
  },
  {
    name: 'Switzerland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg'
  },
  {
    name: 'Syria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg'
  },
  {
    name: 'Tajikistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg'
  },
  {
    name: 'Tanzania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg'
  },
  {
    name: 'Thailand',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg'
  },
  {
    name: 'Togo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg'
  },
  {
    name: 'Tonga',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg'
  },
  {
    name: 'Trinidad and Tobago',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg'
  },
  {
    name: 'Tunisia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg'
  },
  {
    name: 'Turkey',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg'
  },
  {
    name: 'Turkmenistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg'
  },
  {
    name: 'Tuvalu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg'
  },
  {
    name: 'Uganda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg'
  },
  {
    name: 'Ukraine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg'
  },
  {
    name: 'United Arab Emirates',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
    accepts: ['UAE']
  },
  {
    name: 'United Kingdom',
    url: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    accepts: ['UK']
  },
  {
    name: 'United States',
    url: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    accepts: ['US', 'USA', 'United States of America']
  },
  {
    name: 'Uruguay',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg'
  },
  {
    name: 'Uzbekistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg'
  },
  {
    name: 'Vanuatu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg'
  },
  {
    name: 'Vatican City',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
    accepts: ['Vatican']
  },
  {
    name: 'Venezuela',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg'
  },
  {
    name: 'Vietnam',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg'
  },
  {
    name: 'Yemen',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg'
  },
  {
    name: 'Zambia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg'
  },
  {
    name: 'Zimbabwe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg'
  }
];

export const nonUN = [
  {
    name: 'Abkhazia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Abkhazia.svg'
  },
  {
    name: 'Kosovo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg'
  },
  {
    name: 'Taiwan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
    accepts: ['Republic of China']
  }
];

export const UK = [
  {
    name: 'England',
    url: 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg'
  },
  {
    name: 'Scotland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Scotland.svg'
  },
  {
    name: 'Wales',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Wales_2.svg'
  }
];

export default flags;
