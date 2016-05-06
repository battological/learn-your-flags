import {
  NORTH_AMERICA, SOUTH_AMERICA,
  EUROPE, AFRICA, ASIA, OCEANIA
} from './continents';

const flags = [
  {
    name: 'Afghanistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg',
    continent: ASIA
  },
  {
    name: 'Albania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
    continent: EUROPE
  },
  {
    name: 'Algeria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
    continent: AFRICA
  },
  {
    name: 'Andorra',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
    continent: EUROPE
  },
  {
    name: 'Angola',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
    continent: AFRICA
  },
  {
    name: 'Antigua and Barbuda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Argentina',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Armenia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
    continent: ASIA
  },
  {
    name: 'Australia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    continent: OCEANIA
  },
  {
    name: 'Austria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
    continent: EUROPE
  },
  {
    name: 'Azerbaijan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
    continent: ASIA
  },
  {
    name: 'Bahamas',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Bahrain',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
    continent: ASIA
  },
  {
    name: 'Bangladesh',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
    continent: ASIA
  },
  {
    name: 'Barbados',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Belarus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg',
    continent: EUROPE
  },
  {
    name: 'Belgium',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg',
    continent: EUROPE
  },
  {
    name: 'Belize',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Benin',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg',
    continent: AFRICA
  },
  {
    name: 'Bhutan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
    continent: ASIA
  },
  {
    name: 'Bolivia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Bosnia and Herzegovina',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
    accepts: ['Bosnia'],
    continent: EUROPE
  },
  {
    name: 'Botswana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg',
    continent: AFRICA
  },
  {
    name: 'Brazil',
    url: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Brunei',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
    continent: ASIA
  },
  {
    name: 'Bulgaria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
    continent: EUROPE
  },
  {
    name: 'Burkina Faso',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
    continent: AFRICA
  },
  {
    name: 'Burundi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
    continent: AFRICA
  },
  {
    name: 'Cambodia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
    continent: ASIA
  },
  {
    name: 'Cameroon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
    continent: AFRICA
  },
  {
    name: 'Canada',
    url: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Cape Verde',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
    accepts: ['Cabo Verde'],
    continent: AFRICA
  },
  {
    name: 'Central African Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
    accepts: ['CAR'],
    continent: AFRICA
  },
  {
    name: 'Chad',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
    continent: AFRICA
  },
  {
    name: 'Chile',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'China',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    accepts: ['People\'s Republic of China'],
    continent: ASIA
  },
  {
    name: 'Colombia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Comoros',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg',
    continent: AFRICA
  },
  {
    name: 'Democratic Republic of the Congo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
    accepts: ['DRC'],
    continent: AFRICA
  },
  {
    name: 'Republic of the Congo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
    continent: AFRICA
  },
  {
    name: 'Costa Rica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Croatia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
    continent: EUROPE
  },
  {
    name: 'Cuba',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Cyprus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
    continent: EUROPE
  },
  {
    name: 'Czech Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
    continent: EUROPE
  },
  {
    name: 'Denmark',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    continent: EUROPE
  },
  {
    name: 'Djibouti',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg',
    continent: AFRICA
  },
  {
    name: 'Dominica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Dominican Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'East Timor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
    accepts: ['Timor Leste'],
    continent: ASIA
  },
  {
    name: 'Ecuador',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Egypt',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
    continent: AFRICA
  },
  {
    name: 'El Salvador',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Equatorial Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg',
    continent: AFRICA
  },
  {
    name: 'Eritrea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg',
    continent: AFRICA
  },
  {
    name: 'Estonia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
    continent: EUROPE
  },
  {
    name: 'Ethiopia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
    continent: AFRICA
  },
  {
    name: 'Fiji',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
    continent: OCEANIA
  },
  {
    name: 'Finland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
    continent: EUROPE
  },
  {
    name: 'France',
    url: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    continent: EUROPE
  },
  {
    name: 'Gabon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
    continent: AFRICA
  },
  {
    name: 'Gamiba',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg',
    continent: AFRICA
  },
  {
    name: 'Georgia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
    continent: ASIA
  },
  {
    name: 'Germany',
    url: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    continent: EUROPE
  },
  {
    name: 'Ghana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
    continent: AFRICA
  },
  {
    name: 'Greece',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
    continent: EUROPE
  },
  {
    name: 'Grenada',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Guatemala',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg',
    continent: AFRICA
  },
  {
    name: 'Guinea-Bissau',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg',
    continent: AFRICA
  },
  {
    name: 'Guyana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Haiti',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Honduras',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Hungary',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
    continent: EUROPE
  },
  {
    name: 'Iceland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
    continent: EUROPE
  },
  {
    name: 'India',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    continent: ASIA
  },
  {
    name: 'Indonesia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
    continent: ASIA
  },
  {
    name: 'Iran',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
    continent: ASIA
  },
  {
    name: 'Iraq',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
    continent: ASIA
  },
  {
    name: 'Ireland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
    continent: EUROPE
  },
  {
    name: 'Israel',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
    continent: ASIA
  },
  {
    name: 'Italy',
    url: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    continent: EUROPE
  },
  {
    name: 'Côte d\'Ivoire',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg',
    accepts: ['Ivory Coast', 'Cote d\'Ivoire'],
    continent: AFRICA
  },
  {
    name: 'Jamaica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Japan',
    url: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    continent: ASIA
  },
  {
    name: 'Jordan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
    continent: ASIA
  },
  {
    name: 'Kazakhstan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg',
    continent: ASIA
  },
  {
    name: 'Kenya',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
    continent: AFRICA
  },
  {
    name: 'Kiribati',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg',
    continent: OCEANIA
  },
  {
    name: 'North Korea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
    accepts: ['Democratic People\'s Republic of Korea', 'Best Korea', 'True Korea', 'Perfect Nation'],
    continent: ASIA
  },
  {
    name: 'South Korea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
    accepts: ['Republic of Korea'],
    continent: ASIA
  },
  {
    name: 'Kuwait',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
    continent: ASIA
  },
  {
    name: 'Kyrgyzstan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg',
    continent: ASIA
  },
  {
    name: 'Laos',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
    continent: ASIA
  },
  {
    name: 'Latvia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
    continent: EUROPE
  },
  {
    name: 'Lebanon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
    continent: ASIA
  },
  {
    name: 'Lesotho',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg',
    continent: AFRICA
  },
  {
    name: 'Liberia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg',
    continent: AFRICA
  },
  {
    name: 'Libya',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg',
    continent: AFRICA
  },
  {
    name: 'Liechtenstein',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
    continent: EUROPE
  },
  {
    name: 'Lithuania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
    continent: EUROPE
  },
  {
    name: 'Luxembourg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
    continent: EUROPE
  },
  {
    name: 'Macedonia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Macedonia.svg',
    continent: EUROPE
  },
  {
    name: 'Madagascar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
    continent: AFRICA
  },
  {
    name: 'Malawi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
    continent: AFRICA
  },
  {
    name: 'Malaysia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
    continent: ASIA
  },
  {
    name: 'Maldives',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg',
    continent: ASIA
  },
  {
    name: 'Mali',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
    continent: AFRICA
  },
  {
    name: 'Malta',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg',
    continent: EUROPE
  },
  {
    name: 'Marshall Islands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
    continent: OCEANIA
  },
  {
    name: 'Mauritania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg',
    continent: AFRICA
  },
  {
    name: 'Mauritius',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
    continent: AFRICA
  },
  {
    name: 'Mexico',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Micronesia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg',
    continent: OCEANIA
  },
  {
    name: 'Moldova',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg',
    continent: EUROPE
  },
  {
    name: 'Monaco',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
    continent: EUROPE
  },
  {
    name: 'Mongolia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg',
    continent: ASIA
  },
  {
    name: 'Montenegro',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
    continent: EUROPE
  },
  {
    name: 'Morocco',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
    continent: AFRICA
  },
  {
    name: 'Mozambique',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
    continent: AFRICA
  },
  {
    name: 'Myanmar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
    accepts: ['Burma'],
    continent: ASIA
  },
  {
    name: 'Namibia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
    continent: AFRICA
  },
  {
    name: 'Nauru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg',
    continent: OCEANIA
  },
  {
    name: 'Nepal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
    continent: ASIA
  },
  {
    name: 'Netherlands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    continent: EUROPE
  },
  {
    name: 'New Zealand',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
    continent: OCEANIA
  },
  {
    name: 'Nicaragua',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Niger',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
    continent: AFRICA
  },
  {
    name: 'Nigeria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
    continent: AFRICA
  },
  {
    name: 'Norway',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    continent: EUROPE
  },
  {
    name: 'Oman',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
    continent: ASIA
  },
  {
    name: 'Pakistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
    continent: ASIA
  },
  {
    name: 'Palau',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg',
    continent: ASIA
  },
  {
    name: 'Palestine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg',
    continent: ASIA
  },
  {
    name: 'Panama',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Papua New Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
    continent: OCEANIA
  },
  {
    name: 'Paraguay',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Peru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Philippines',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
    continent: ASIA
  },
  {
    name: 'Poland',
    url: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
    continent: EUROPE
  },
  {
    name: 'Portugal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    continent: EUROPE
  },
  {
    name: 'Qatar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
    continent: ASIA
  },
  {
    name: 'Romania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
    continent: EUROPE
  },
  {
    name: 'Russia',
    url: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
    continent: [EUROPE, ASIA]
  },
  {
    name: 'Rwanda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
    continent: AFRICA
  },
  {
    name: 'Saint Kitts and Nevis',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
    accepts: ['St Kitts and Nevis'],
    continent: NORTH_AMERICA
  },
  {
    name: 'Saint Lucia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
    accepts: ['St Lucia'],
    continent: NORTH_AMERICA
  },
  {
    name: 'Saint Vincent and the Grenadines',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
    accepts: ['St Vincent and the Grenadines'],
    continent: NORTH_AMERICA
  },
  {
    name: 'Samoa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg',
    continent: OCEANIA
  },
  {
    name: 'San Marino',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
    continent: EUROPE
  },
  {
    name: 'Sao Tome and Principe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg',
    continent: AFRICA
  },
  {
    name: 'Saudi Arabia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
    continent: ASIA
  },
  {
    name: 'Senegal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
    continent: AFRICA
  },
  {
    name: 'Serbia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
    continent: EUROPE
  },
  {
    name: 'Seychelles',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
    accepts: ['Seychelle Islands'],
    continent: OCEANIA
  },
  {
    name: 'Sierra Leone',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg',
    continent: AFRICA
  },
  {
    name: 'Singapore',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
    continent: ASIA
  },
  {
    name: 'Slovakia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
    continent: EUROPE
  },
  {
    name: 'Slovenia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
    continent: EUROPE
  },
  {
    name: 'Solomon Islands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg',
    continent: OCEANIA
  },
  {
    name: 'Somalia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg',
    continent: AFRICA
  },
  {
    name: 'South Africa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
    continent: AFRICA
  },
  {
    name: 'South Sudan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
    continent: AFRICA
  },
  {
    name: 'Spain',
    url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    continent: EUROPE
  },
  {
    name: 'Sri Lanka',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
    continent: ASIA
  },
  {
    name: 'Sudan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
    continent: AFRICA
  },
  {
    name: 'Suriname',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Swaziland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Swaziland.svg',
    continent: AFRICA
  },
  {
    name: 'Sweden',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
    continent: EUROPE
  },
  {
    name: 'Switzerland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
    continent: EUROPE
  },
  {
    name: 'Syria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
    continent: ASIA
  },
  {
    name: 'Tajikistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg',
    continent: ASIA
  },
  {
    name: 'Tanzania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg',
    continent: AFRICA
  },
  {
    name: 'Thailand',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
    continent: ASIA
  },
  {
    name: 'Togo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg',
    continent: AFRICA
  },
  {
    name: 'Tonga',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg',
    continent: OCEANIA
  },
  {
    name: 'Trinidad and Tobago',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
    continent: NORTH_AMERICA
  },
  {
    name: 'Tunisia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
    continent: AFRICA
  },
  {
    name: 'Turkey',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
    continent: [EUROPE, ASIA]
  },
  {
    name: 'Turkmenistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg',
    continent: ASIA
  },
  {
    name: 'Tuvalu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
    continent: OCEANIA
  },
  {
    name: 'Uganda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
    continent: AFRICA
  },
  {
    name: 'Ukraine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
    continent: EUROPE
  },
  {
    name: 'United Arab Emirates',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
    accepts: ['UAE'],
    continent: ASIA
  },
  {
    name: 'United Kingdom',
    url: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    accepts: ['UK'],
    continent: EUROPE
  },
  {
    name: 'United States',
    url: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    accepts: ['US', 'USA', 'United States of America'],
    continent: NORTH_AMERICA
  },
  {
    name: 'Uruguay',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Uzbekistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg',
    continent: ASIA
  },
  {
    name: 'Vanuatu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
    continent: OCEANIA
  },
  {
    name: 'Vatican City',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
    accepts: ['Vatican'],
    continent: EUROPE
  },
  {
    name: 'Venezuela',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg',
    continent: SOUTH_AMERICA
  },
  {
    name: 'Vietnam',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
    continent: ASIA
  },
  {
    name: 'Yemen',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
    continent: ASIA
  },
  {
    name: 'Zambia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
    continent: AFRICA
  },
  {
    name: 'Zimbabwe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
    continent: AFRICA
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
