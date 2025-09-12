var mix1 = [
  ["Miami", "Los Angeles", "Santa Marta", "Paris", "Manhattan"],
  [
    "Beach",
    "Avenue",
    "Place",
    "Gardens",
    "Boulevard",
    "Street",
    "Towers",
    "Collection",
    "Villa",
    "Real",
    "State",
    "Terrace",
  ],
];
var mix2 = [
  ["Quintas de", "Villas de", "Parque", "Reservas de", "Conjunto Residencial"],
  ["Barranquilla", "Cartagena", "Montreal", "Santa Maria", "Portofino"],
];

var realStates = [];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var images = [
  "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
  "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
  "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
  "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/05/09/23/13/home-3386450_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
];

var owners = [
  {
    name: "Mohandis Dyte",
    address: "8 Messerschmidt Lane",
    photo:
      "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
    birthday: "2000-11-04T06:04:43Z",
  },
  {
    name: "Eleen Brideaux",
    address: "32448 Monica Point",
    photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
    birthday: "1991-02-24T09:07:42Z",
  },
  {
    name: "Lorine De Simoni",
    address: "3 Swallow Drive",
    photo:
      "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
    birthday: "2003-07-23T19:39:47Z",
  },
  {
    name: "Michail Knox",
    address: "950 Caliangt Parkway",
    photo:
      "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
    birthday: "2002-05-01T08:16:51Z",
  },
  {
    name: "Andi Izzett",
    address: "8 Delaware Parkway",
    photo:
      "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
    birthday: "2004-11-17T18:10:55Z",
  },
  {
    name: "Stephana Corkill",
    address: "745 7th Drive",
    photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
    birthday: "1995-11-01T21:05:09Z",
  },
  {
    name: "Janeczka Allom",
    address: "417 Eliot Crossing",
    photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
    birthday: "1984-02-22T17:13:33Z",
  },
  {
    name: "Rossie Huddy",
    address: "8199 Messerschmidt Circle",
    photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
    birthday: "1999-04-17T08:33:28Z",
  },
  {
    name: "Alexina Hampshaw",
    address: "2537 Red Cloud Terrace",
    photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
    birthday: "1973-04-02T09:14:15Z",
  },
  {
    name: "Cindra Heartfield",
    address: "82 Towne Center",
    photo: "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
    birthday: "1973-07-26T16:29:40Z",
  },
];
var count = 1;
for (var i = 0; i < 1000; i++) {
  var numero = getRandomInt(1000, 9999);
  var mixes = [mix1, mix2];
  var mix = mixes[getRandomInt(0, 1)];
  var first = getRandomInt(0, mix[0].length - 1);
  var second = getRandomInt(0, mix[1].length - 1);
  var price = getRandomInt(100000, 99999999);
  realStates.push({
    name: numero + " " + mix[0][first] + " " + mix[1][second],
    address: numero + " " + mix[0][first] + " " + mix[1][second],
    price: price,
    codeInternal: count + "",
    year: getRandomInt(1900, 2050) + "",
    owner: owners[getRandomInt(0, owners.length - 1)],
    image: images[getRandomInt(0, images.length - 1)],
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: numero + " " + mix[0][first] + " " + mix[1][second],
        tax: 0.1,
        value: price * 1.4,
      },
    ],
  });
}

db = db.getSiblingDB("RealStatesStore");

db.createCollection("RealStates");

db.RealStates.insertMany(realStates);
