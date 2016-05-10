import {
  NORTH_AMERICA, SOUTH_AMERICA,
  EUROPE, AFRICA, ASIA, OCEANIA
} from './regions';

const flags = [
  {
    name: 'Afghanistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg',
    region: ASIA
  },
  {
    name: 'Albania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
    region: EUROPE
  },
  {
    name: 'Algeria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
    region: AFRICA
  },
  {
    name: 'Andorra',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
    region: EUROPE
  },
  {
    name: 'Angola',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
    region: AFRICA
  },
  {
    name: 'Antigua and Barbuda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Argentina',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Armenia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
    region: ASIA
  },
  {
    name: 'Australia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
    region: OCEANIA
  },
  {
    name: 'Austria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
    region: EUROPE
  },
  {
    name: 'Azerbaijan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
    region: ASIA
  },
  {
    name: 'Bahamas',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Bahrain',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
    region: ASIA
  },
  {
    name: 'Bangladesh',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
    region: ASIA
  },
  {
    name: 'Barbados',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Belarus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg',
    region: EUROPE
  },
  {
    name: 'Belgium',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg',
    region: EUROPE
  },
  {
    name: 'Belize',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Benin',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg',
    region: AFRICA
  },
  {
    name: 'Bhutan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
    region: ASIA
  },
  {
    name: 'Bolivia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Flag_of_Bolivia_%28state%29.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Bosnia and Herzegovina',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
    accepts: ['Bosnia'],
    region: EUROPE
  },
  {
    name: 'Botswana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg',
    region: AFRICA
  },
  {
    name: 'Brazil',
    url: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Brunei',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
    region: ASIA
  },
  {
    name: 'Bulgaria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
    region: EUROPE
  },
  {
    name: 'Burkina Faso',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
    region: AFRICA
  },
  {
    name: 'Burundi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
    region: AFRICA
  },
  {
    name: 'Cambodia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
    region: ASIA
  },
  {
    name: 'Cameroon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
    region: AFRICA
  },
  {
    name: 'Canada',
    url: 'https://upload.wikimedia.org/wikipedia/en/c/cf/Flag_of_Canada.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Cape Verde',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
    accepts: ['Cabo Verde'],
    region: AFRICA
  },
  {
    name: 'Central African Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
    accepts: ['CAR'],
    region: AFRICA
  },
  {
    name: 'Chad',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
    region: AFRICA
  },
  {
    name: 'Chile',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'China',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    accepts: ['People\'s Republic of China'],
    region: ASIA
  },
  {
    name: 'Colombia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Comoros',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg',
    region: AFRICA
  },
  {
    name: 'Democratic Republic of the Congo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
    accepts: ['DRC'],
    region: AFRICA
  },
  {
    name: 'Republic of the Congo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
    region: AFRICA
  },
  {
    name: 'Costa Rica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Croatia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
    region: EUROPE
  },
  {
    name: 'Cuba',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Cyprus',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
    region: EUROPE
  },
  {
    name: 'Czech Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
    region: EUROPE
  },
  {
    name: 'Denmark',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
    region: EUROPE
  },
  {
    name: 'Djibouti',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg',
    region: AFRICA
  },
  {
    name: 'Dominica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Dominican Republic',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'East Timor',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
    accepts: ['Timor Leste'],
    region: ASIA
  },
  {
    name: 'Ecuador',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Egypt',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
    region: AFRICA
  },
  {
    name: 'El Salvador',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Equatorial Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg',
    region: AFRICA
  },
  {
    name: 'Eritrea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg',
    region: AFRICA
  },
  {
    name: 'Estonia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
    region: EUROPE
  },
  {
    name: 'Ethiopia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
    region: AFRICA
  },
  {
    name: 'Fiji',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
    region: OCEANIA
  },
  {
    name: 'Finland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
    region: EUROPE
  },
  {
    name: 'France',
    url: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
    region: EUROPE
  },
  {
    name: 'Gabon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
    region: AFRICA
  },
  {
    name: 'Gamiba',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg',
    region: AFRICA
  },
  {
    name: 'Georgia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
    region: ASIA
  },
  {
    name: 'Germany',
    url: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    region: EUROPE
  },
  {
    name: 'Ghana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
    region: AFRICA
  },
  {
    name: 'Greece',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
    region: EUROPE
  },
  {
    name: 'Grenada',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Guatemala',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg',
    region: AFRICA
  },
  {
    name: 'Guinea-Bissau',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg',
    region: AFRICA
  },
  {
    name: 'Guyana',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Haiti',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Honduras',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Hungary',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
    region: EUROPE
  },
  {
    name: 'Iceland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
    region: EUROPE
  },
  {
    name: 'India',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
    region: ASIA
  },
  {
    name: 'Indonesia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
    region: ASIA
  },
  {
    name: 'Iran',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
    region: ASIA
  },
  {
    name: 'Iraq',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
    region: ASIA
  },
  {
    name: 'Ireland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
    region: EUROPE
  },
  {
    name: 'Israel',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
    region: ASIA
  },
  {
    name: 'Italy',
    url: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
    region: EUROPE
  },
  {
    name: 'Côte d\'Ivoire',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg',
    accepts: ['Ivory Coast', 'Cote d\'Ivoire'],
    region: AFRICA
  },
  {
    name: 'Jamaica',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Japan',
    url: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
    region: ASIA
  },
  {
    name: 'Jordan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
    region: ASIA
  },
  {
    name: 'Kazakhstan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg',
    region: ASIA
  },
  {
    name: 'Kenya',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
    region: AFRICA
  },
  {
    name: 'Kiribati',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg',
    region: OCEANIA
  },
  {
    name: 'North Korea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
    accepts: ['Democratic People\'s Republic of Korea', 'Best Korea', 'True Korea', 'Perfect Nation'],
    region: ASIA
  },
  {
    name: 'South Korea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
    accepts: ['Republic of Korea'],
    region: ASIA
  },
  {
    name: 'Kuwait',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
    region: ASIA
  },
  {
    name: 'Kyrgyzstan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg',
    region: ASIA
  },
  {
    name: 'Laos',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
    region: ASIA
  },
  {
    name: 'Latvia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
    region: EUROPE
  },
  {
    name: 'Lebanon',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
    region: ASIA
  },
  {
    name: 'Lesotho',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg',
    region: AFRICA
  },
  {
    name: 'Liberia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg',
    region: AFRICA
  },
  {
    name: 'Libya',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg',
    region: AFRICA
  },
  {
    name: 'Liechtenstein',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
    region: EUROPE
  },
  {
    name: 'Lithuania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
    region: EUROPE
  },
  {
    name: 'Luxembourg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
    region: EUROPE
  },
  {
    name: 'Macedonia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_Macedonia.svg',
    region: EUROPE
  },
  {
    name: 'Madagascar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
    region: AFRICA
  },
  {
    name: 'Malawi',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
    region: AFRICA
  },
  {
    name: 'Malaysia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
    region: ASIA
  },
  {
    name: 'Maldives',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg',
    region: ASIA
  },
  {
    name: 'Mali',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
    region: AFRICA
  },
  {
    name: 'Malta',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg',
    region: EUROPE
  },
  {
    name: 'Marshall Islands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
    region: OCEANIA
  },
  {
    name: 'Mauritania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg',
    region: AFRICA
  },
  {
    name: 'Mauritius',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
    region: AFRICA
  },
  {
    name: 'Mexico',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Micronesia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg',
    region: OCEANIA
  },
  {
    name: 'Moldova',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg',
    region: EUROPE
  },
  {
    name: 'Monaco',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
    region: EUROPE
  },
  {
    name: 'Mongolia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg',
    region: ASIA
  },
  {
    name: 'Montenegro',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
    region: EUROPE
  },
  {
    name: 'Morocco',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
    region: AFRICA
  },
  {
    name: 'Mozambique',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
    region: AFRICA
  },
  {
    name: 'Myanmar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
    accepts: ['Burma'],
    region: ASIA
  },
  {
    name: 'Namibia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
    region: AFRICA
  },
  {
    name: 'Nauru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg',
    region: OCEANIA
  },
  {
    name: 'Nepal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
    region: ASIA
  },
  {
    name: 'Netherlands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
    region: EUROPE
  },
  {
    name: 'New Zealand',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
    region: OCEANIA
  },
  {
    name: 'Nicaragua',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Niger',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
    region: AFRICA
  },
  {
    name: 'Nigeria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
    region: AFRICA
  },
  {
    name: 'Norway',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
    region: EUROPE
  },
  {
    name: 'Oman',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
    region: ASIA
  },
  {
    name: 'Pakistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
    region: ASIA
  },
  {
    name: 'Palau',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg',
    region: ASIA
  },
  {
    name: 'Palestine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg',
    region: ASIA
  },
  {
    name: 'Panama',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Papua New Guinea',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
    region: OCEANIA
  },
  {
    name: 'Paraguay',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Peru',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Philippines',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
    region: ASIA
  },
  {
    name: 'Poland',
    url: 'https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg',
    region: EUROPE
  },
  {
    name: 'Portugal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    region: EUROPE
  },
  {
    name: 'Qatar',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
    region: ASIA
  },
  {
    name: 'Romania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
    region: EUROPE
  },
  {
    name: 'Russia',
    url: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg',
    region: [EUROPE, ASIA]
  },
  {
    name: 'Rwanda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
    region: AFRICA
  },
  {
    name: 'Saint Kitts and Nevis',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
    accepts: ['St Kitts and Nevis'],
    region: NORTH_AMERICA
  },
  {
    name: 'Saint Lucia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
    accepts: ['St Lucia'],
    region: NORTH_AMERICA
  },
  {
    name: 'Saint Vincent and the Grenadines',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
    accepts: ['St Vincent and the Grenadines'],
    region: NORTH_AMERICA
  },
  {
    name: 'Samoa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg',
    region: OCEANIA
  },
  {
    name: 'San Marino',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
    region: EUROPE
  },
  {
    name: 'Sao Tome and Principe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg',
    region: AFRICA
  },
  {
    name: 'Saudi Arabia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
    region: ASIA
  },
  {
    name: 'Senegal',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
    region: AFRICA
  },
  {
    name: 'Serbia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
    region: EUROPE
  },
  {
    name: 'Seychelles',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
    accepts: ['Seychelle Islands'],
    region: OCEANIA
  },
  {
    name: 'Sierra Leone',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg',
    region: AFRICA
  },
  {
    name: 'Singapore',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
    region: ASIA
  },
  {
    name: 'Slovakia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
    region: EUROPE
  },
  {
    name: 'Slovenia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
    region: EUROPE
  },
  {
    name: 'Solomon Islands',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg',
    region: OCEANIA
  },
  {
    name: 'Somalia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg',
    region: AFRICA
  },
  {
    name: 'South Africa',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
    region: AFRICA
  },
  {
    name: 'South Sudan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
    region: AFRICA
  },
  {
    name: 'Spain',
    url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    region: EUROPE
  },
  {
    name: 'Sri Lanka',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
    region: ASIA
  },
  {
    name: 'Sudan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
    region: AFRICA
  },
  {
    name: 'Suriname',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Swaziland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Swaziland.svg',
    region: AFRICA
  },
  {
    name: 'Sweden',
    url: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg',
    region: EUROPE
  },
  {
    name: 'Switzerland',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Flag_of_Switzerland_%28Pantone%29.svg',
    region: EUROPE
  },
  {
    name: 'Syria',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
    region: ASIA
  },
  {
    name: 'Tajikistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg',
    region: ASIA
  },
  {
    name: 'Tanzania',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg',
    region: AFRICA
  },
  {
    name: 'Thailand',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
    region: ASIA
  },
  {
    name: 'Togo',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg',
    region: AFRICA
  },
  {
    name: 'Tonga',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg',
    region: OCEANIA
  },
  {
    name: 'Trinidad and Tobago',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
    region: NORTH_AMERICA
  },
  {
    name: 'Tunisia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
    region: AFRICA
  },
  {
    name: 'Turkey',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
    region: [EUROPE, ASIA]
  },
  {
    name: 'Turkmenistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg',
    region: ASIA
  },
  {
    name: 'Tuvalu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
    region: OCEANIA
  },
  {
    name: 'Uganda',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
    region: AFRICA
  },
  {
    name: 'Ukraine',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
    region: EUROPE
  },
  {
    name: 'United Arab Emirates',
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
    accepts: ['UAE'],
    region: ASIA
  },
  {
    name: 'United Kingdom',
    url: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg',
    accepts: ['UK'],
    region: EUROPE
  },
  {
    name: 'United States',
    url: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    accepts: ['US', 'USA', 'United States of America'],
    region: NORTH_AMERICA
  },
  {
    name: 'Uruguay',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Uzbekistan',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg',
    region: ASIA
  },
  {
    name: 'Vanuatu',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
    region: OCEANIA
  },
  {
    name: 'Vatican City',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
    accepts: ['Vatican'],
    region: EUROPE
  },
  {
    name: 'Venezuela',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg',
    region: SOUTH_AMERICA
  },
  {
    name: 'Vietnam',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
    region: ASIA
  },
  {
    name: 'Yemen',
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
    region: ASIA
  },
  {
    name: 'Zambia',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
    region: AFRICA
  },
  {
    name: 'Zimbabwe',
    url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
    region: AFRICA
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
