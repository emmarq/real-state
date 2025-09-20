const realStates = [
  {
    name: "7922 Quintas de Barranquilla",
    address: "7922 Quintas de Barranquilla",
    price: 32247467,
    codeInternal: "1",
    year: "1919",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7922 Quintas de Barranquilla",
        tax: 0.1,
        value: 45146453.8,
      },
    ],
  },
  {
    name: "3391 Reservas de Barranquilla",
    address: "3391 Reservas de Barranquilla",
    price: 17408297,
    codeInternal: "2",
    year: "2001",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3391 Reservas de Barranquilla",
        tax: 0.1,
        value: 24371615.799999997,
      },
    ],
  },
  {
    name: "7726 Paris State",
    address: "7726 Paris State",
    price: 60948727,
    codeInternal: "3",
    year: "2027",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7726 Paris State",
        tax: 0.1,
        value: 85328217.8,
      },
    ],
  },
  {
    name: "4281 Conjunto Residencial Santa Maria",
    address: "4281 Conjunto Residencial Santa Maria",
    price: 33246890,
    codeInternal: "4",
    year: "1952",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4281 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 46545646,
      },
    ],
  },
  {
    name: "3000 Manhattan Collection",
    address: "3000 Manhattan Collection",
    price: 85241018,
    codeInternal: "5",
    year: "1912",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3000 Manhattan Collection",
        tax: 0.1,
        value: 119337425.19999999,
      },
    ],
  },
  {
    name: "3227 Reservas de Santa Maria",
    address: "3227 Reservas de Santa Maria",
    price: 13910940,
    codeInternal: "6",
    year: "2000",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3227 Reservas de Santa Maria",
        tax: 0.1,
        value: 19475316,
      },
    ],
  },
  {
    name: "1468 Santa Marta State",
    address: "1468 Santa Marta State",
    price: 46955824,
    codeInternal: "7",
    year: "2043",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1468 Santa Marta State",
        tax: 0.1,
        value: 65738153.599999994,
      },
    ],
  },
  {
    name: "3309 Miami Boulevard",
    address: "3309 Miami Boulevard",
    price: 84990692,
    codeInternal: "8",
    year: "1986",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3309 Miami Boulevard",
        tax: 0.1,
        value: 118986968.8,
      },
    ],
  },
  {
    name: "9593 Los Angeles State",
    address: "9593 Los Angeles State",
    price: 310081,
    codeInternal: "9",
    year: "1991",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9593 Los Angeles State",
        tax: 0.1,
        value: 434113.39999999997,
      },
    ],
  },
  {
    name: "4616 Quintas de Barranquilla",
    address: "4616 Quintas de Barranquilla",
    price: 59551691,
    codeInternal: "10",
    year: "2039",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4616 Quintas de Barranquilla",
        tax: 0.1,
        value: 83372367.39999999,
      },
    ],
  },
  {
    name: "2007 Manhattan Gardens",
    address: "2007 Manhattan Gardens",
    price: 68825719,
    codeInternal: "11",
    year: "1976",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2007 Manhattan Gardens",
        tax: 0.1,
        value: 96356006.6,
      },
    ],
  },
  {
    name: "4604 Reservas de Cartagena",
    address: "4604 Reservas de Cartagena",
    price: 79694145,
    codeInternal: "12",
    year: "1941",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4604 Reservas de Cartagena",
        tax: 0.1,
        value: 111571803,
      },
    ],
  },
  {
    name: "4730 Villas de Portofino",
    address: "4730 Villas de Portofino",
    price: 99655544,
    codeInternal: "13",
    year: "1960",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4730 Villas de Portofino",
        tax: 0.1,
        value: 139517761.6,
      },
    ],
  },
  {
    name: "1151 Conjunto Residencial Barranquilla",
    address: "1151 Conjunto Residencial Barranquilla",
    price: 2885300,
    codeInternal: "14",
    year: "1944",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1151 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 4039419.9999999995,
      },
    ],
  },
  {
    name: "1826 Conjunto Residencial Montreal",
    address: "1826 Conjunto Residencial Montreal",
    price: 95920539,
    codeInternal: "15",
    year: "2029",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1826 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 134288754.6,
      },
    ],
  },
  {
    name: "8272 Conjunto Residencial Montreal",
    address: "8272 Conjunto Residencial Montreal",
    price: 48393135,
    codeInternal: "16",
    year: "2018",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8272 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 67750389,
      },
    ],
  },
  {
    name: "5606 Paris Street",
    address: "5606 Paris Street",
    price: 76046328,
    codeInternal: "17",
    year: "1907",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5606 Paris Street",
        tax: 0.1,
        value: 106464859.19999999,
      },
    ],
  },
  {
    name: "1902 Paris Beach",
    address: "1902 Paris Beach",
    price: 87467723,
    codeInternal: "18",
    year: "2010",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1902 Paris Beach",
        tax: 0.1,
        value: 122454812.19999999,
      },
    ],
  },
  {
    name: "4794 Miami Street",
    address: "4794 Miami Street",
    price: 37824071,
    codeInternal: "19",
    year: "2027",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4794 Miami Street",
        tax: 0.1,
        value: 52953699.4,
      },
    ],
  },
  {
    name: "7550 Parque Barranquilla",
    address: "7550 Parque Barranquilla",
    price: 43221110,
    codeInternal: "20",
    year: "1978",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7550 Parque Barranquilla",
        tax: 0.1,
        value: 60509553.99999999,
      },
    ],
  },
  {
    name: "9319 Los Angeles Real",
    address: "9319 Los Angeles Real",
    price: 72788230,
    codeInternal: "21",
    year: "2049",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9319 Los Angeles Real",
        tax: 0.1,
        value: 101903522,
      },
    ],
  },
  {
    name: "6688 Parque Barranquilla",
    address: "6688 Parque Barranquilla",
    price: 28855051,
    codeInternal: "22",
    year: "1924",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6688 Parque Barranquilla",
        tax: 0.1,
        value: 40397071.4,
      },
    ],
  },
  {
    name: "5458 Paris Real",
    address: "5458 Paris Real",
    price: 48414179,
    codeInternal: "23",
    year: "1914",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5458 Paris Real",
        tax: 0.1,
        value: 67779850.6,
      },
    ],
  },
  {
    name: "2941 Parque Cartagena",
    address: "2941 Parque Cartagena",
    price: 8161418,
    codeInternal: "24",
    year: "1963",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2941 Parque Cartagena",
        tax: 0.1,
        value: 11425985.2,
      },
    ],
  },
  {
    name: "5417 Villas de Portofino",
    address: "5417 Villas de Portofino",
    price: 13695475,
    codeInternal: "25",
    year: "2045",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5417 Villas de Portofino",
        tax: 0.1,
        value: 19173665,
      },
    ],
  },
  {
    name: "5260 Santa Marta Towers",
    address: "5260 Santa Marta Towers",
    price: 93203207,
    codeInternal: "26",
    year: "2045",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5260 Santa Marta Towers",
        tax: 0.1,
        value: 130484489.8,
      },
    ],
  },
  {
    name: "1611 Los Angeles Villa",
    address: "1611 Los Angeles Villa",
    price: 86583599,
    codeInternal: "27",
    year: "2013",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1611 Los Angeles Villa",
        tax: 0.1,
        value: 121217038.6,
      },
    ],
  },
  {
    name: "7786 Quintas de Cartagena",
    address: "7786 Quintas de Cartagena",
    price: 98241273,
    codeInternal: "28",
    year: "2036",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7786 Quintas de Cartagena",
        tax: 0.1,
        value: 137537782.2,
      },
    ],
  },
  {
    name: "1014 Reservas de Barranquilla",
    address: "1014 Reservas de Barranquilla",
    price: 79006544,
    codeInternal: "29",
    year: "1981",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1014 Reservas de Barranquilla",
        tax: 0.1,
        value: 110609161.6,
      },
    ],
  },
  {
    name: "2962 Miami Terrace",
    address: "2962 Miami Terrace",
    price: 24251836,
    codeInternal: "30",
    year: "1917",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2962 Miami Terrace",
        tax: 0.1,
        value: 33952570.4,
      },
    ],
  },
  {
    name: "3413 Santa Marta Villa",
    address: "3413 Santa Marta Villa",
    price: 99625118,
    codeInternal: "31",
    year: "1978",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3413 Santa Marta Villa",
        tax: 0.1,
        value: 139475165.2,
      },
    ],
  },
  {
    name: "5369 Conjunto Residencial Portofino",
    address: "5369 Conjunto Residencial Portofino",
    price: 50092640,
    codeInternal: "32",
    year: "1988",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5369 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 70129696,
      },
    ],
  },
  {
    name: "5514 Parque Portofino",
    address: "5514 Parque Portofino",
    price: 84671554,
    codeInternal: "33",
    year: "1990",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5514 Parque Portofino",
        tax: 0.1,
        value: 118540175.6,
      },
    ],
  },
  {
    name: "7440 Conjunto Residencial Montreal",
    address: "7440 Conjunto Residencial Montreal",
    price: 98912070,
    codeInternal: "34",
    year: "1954",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7440 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 138476898,
      },
    ],
  },
  {
    name: "7715 Conjunto Residencial Barranquilla",
    address: "7715 Conjunto Residencial Barranquilla",
    price: 92667554,
    codeInternal: "35",
    year: "1991",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7715 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 129734575.6,
      },
    ],
  },
  {
    name: "4154 Manhattan Beach",
    address: "4154 Manhattan Beach",
    price: 41375675,
    codeInternal: "36",
    year: "2007",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4154 Manhattan Beach",
        tax: 0.1,
        value: 57925945,
      },
    ],
  },
  {
    name: "9536 Conjunto Residencial Barranquilla",
    address: "9536 Conjunto Residencial Barranquilla",
    price: 58573506,
    codeInternal: "37",
    year: "1913",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9536 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 82002908.39999999,
      },
    ],
  },
  {
    name: "8888 Quintas de Montreal",
    address: "8888 Quintas de Montreal",
    price: 23990561,
    codeInternal: "38",
    year: "2010",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8888 Quintas de Montreal",
        tax: 0.1,
        value: 33586785.4,
      },
    ],
  },
  {
    name: "1365 Manhattan Street",
    address: "1365 Manhattan Street",
    price: 85814564,
    codeInternal: "39",
    year: "1949",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1365 Manhattan Street",
        tax: 0.1,
        value: 120140389.6,
      },
    ],
  },
  {
    name: "8183 Santa Marta Terrace",
    address: "8183 Santa Marta Terrace",
    price: 52605006,
    codeInternal: "40",
    year: "1969",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8183 Santa Marta Terrace",
        tax: 0.1,
        value: 73647008.39999999,
      },
    ],
  },
  {
    name: "5937 Conjunto Residencial Santa Maria",
    address: "5937 Conjunto Residencial Santa Maria",
    price: 63485014,
    codeInternal: "41",
    year: "1911",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5937 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 88879019.6,
      },
    ],
  },
  {
    name: "8308 Manhattan Street",
    address: "8308 Manhattan Street",
    price: 17385933,
    codeInternal: "42",
    year: "1914",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8308 Manhattan Street",
        tax: 0.1,
        value: 24340306.2,
      },
    ],
  },
  {
    name: "1509 Quintas de Portofino",
    address: "1509 Quintas de Portofino",
    price: 84937001,
    codeInternal: "43",
    year: "2012",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1509 Quintas de Portofino",
        tax: 0.1,
        value: 118911801.39999999,
      },
    ],
  },
  {
    name: "2920 Reservas de Barranquilla",
    address: "2920 Reservas de Barranquilla",
    price: 88462747,
    codeInternal: "44",
    year: "2026",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2920 Reservas de Barranquilla",
        tax: 0.1,
        value: 123847845.8,
      },
    ],
  },
  {
    name: "7693 Los Angeles Collection",
    address: "7693 Los Angeles Collection",
    price: 60570887,
    codeInternal: "45",
    year: "1954",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7693 Los Angeles Collection",
        tax: 0.1,
        value: 84799241.8,
      },
    ],
  },
  {
    name: "6939 Manhattan Gardens",
    address: "6939 Manhattan Gardens",
    price: 93439199,
    codeInternal: "46",
    year: "2042",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6939 Manhattan Gardens",
        tax: 0.1,
        value: 130814878.6,
      },
    ],
  },
  {
    name: "5163 Parque Montreal",
    address: "5163 Parque Montreal",
    price: 5930722,
    codeInternal: "47",
    year: "1919",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5163 Parque Montreal",
        tax: 0.1,
        value: 8303010.8,
      },
    ],
  },
  {
    name: "9669 Manhattan Boulevard",
    address: "9669 Manhattan Boulevard",
    price: 78349987,
    codeInternal: "48",
    year: "1971",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9669 Manhattan Boulevard",
        tax: 0.1,
        value: 109689981.8,
      },
    ],
  },
  {
    name: "1174 Paris Towers",
    address: "1174 Paris Towers",
    price: 8006773,
    codeInternal: "49",
    year: "1974",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1174 Paris Towers",
        tax: 0.1,
        value: 11209482.2,
      },
    ],
  },
  {
    name: "4548 Quintas de Santa Maria",
    address: "4548 Quintas de Santa Maria",
    price: 80722417,
    codeInternal: "50",
    year: "1984",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4548 Quintas de Santa Maria",
        tax: 0.1,
        value: 113011383.8,
      },
    ],
  },
  {
    name: "7670 Villas de Barranquilla",
    address: "7670 Villas de Barranquilla",
    price: 49471712,
    codeInternal: "51",
    year: "1973",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7670 Villas de Barranquilla",
        tax: 0.1,
        value: 69260396.8,
      },
    ],
  },
  {
    name: "1888 Conjunto Residencial Portofino",
    address: "1888 Conjunto Residencial Portofino",
    price: 67695930,
    codeInternal: "52",
    year: "2023",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1888 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 94774302,
      },
    ],
  },
  {
    name: "6758 Reservas de Portofino",
    address: "6758 Reservas de Portofino",
    price: 82942736,
    codeInternal: "53",
    year: "1971",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6758 Reservas de Portofino",
        tax: 0.1,
        value: 116119830.39999999,
      },
    ],
  },
  {
    name: "6338 Parque Cartagena",
    address: "6338 Parque Cartagena",
    price: 45364372,
    codeInternal: "54",
    year: "1984",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6338 Parque Cartagena",
        tax: 0.1,
        value: 63510120.8,
      },
    ],
  },
  {
    name: "1179 Miami Beach",
    address: "1179 Miami Beach",
    price: 26430380,
    codeInternal: "55",
    year: "1960",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1179 Miami Beach",
        tax: 0.1,
        value: 37002532,
      },
    ],
  },
  {
    name: "9076 Reservas de Cartagena",
    address: "9076 Reservas de Cartagena",
    price: 30562095,
    codeInternal: "56",
    year: "1972",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9076 Reservas de Cartagena",
        tax: 0.1,
        value: 42786933,
      },
    ],
  },
  {
    name: "4513 Paris Collection",
    address: "4513 Paris Collection",
    price: 27604525,
    codeInternal: "57",
    year: "1924",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4513 Paris Collection",
        tax: 0.1,
        value: 38646335,
      },
    ],
  },
  {
    name: "1676 Santa Marta Towers",
    address: "1676 Santa Marta Towers",
    price: 38989980,
    codeInternal: "58",
    year: "1985",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1676 Santa Marta Towers",
        tax: 0.1,
        value: 54585972,
      },
    ],
  },
  {
    name: "2349 Miami Place",
    address: "2349 Miami Place",
    price: 82569318,
    codeInternal: "59",
    year: "1971",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2349 Miami Place",
        tax: 0.1,
        value: 115597045.19999999,
      },
    ],
  },
  {
    name: "9552 Reservas de Santa Maria",
    address: "9552 Reservas de Santa Maria",
    price: 52976661,
    codeInternal: "60",
    year: "1979",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9552 Reservas de Santa Maria",
        tax: 0.1,
        value: 74167325.39999999,
      },
    ],
  },
  {
    name: "3324 Paris Avenue",
    address: "3324 Paris Avenue",
    price: 78556681,
    codeInternal: "61",
    year: "2005",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3324 Paris Avenue",
        tax: 0.1,
        value: 109979353.39999999,
      },
    ],
  },
  {
    name: "5381 Paris Villa",
    address: "5381 Paris Villa",
    price: 79529091,
    codeInternal: "62",
    year: "1929",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5381 Paris Villa",
        tax: 0.1,
        value: 111340727.39999999,
      },
    ],
  },
  {
    name: "3079 Villas de Montreal",
    address: "3079 Villas de Montreal",
    price: 28915518,
    codeInternal: "63",
    year: "1951",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3079 Villas de Montreal",
        tax: 0.1,
        value: 40481725.199999996,
      },
    ],
  },
  {
    name: "7941 Parque Barranquilla",
    address: "7941 Parque Barranquilla",
    price: 6887436,
    codeInternal: "64",
    year: "2011",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7941 Parque Barranquilla",
        tax: 0.1,
        value: 9642410.399999999,
      },
    ],
  },
  {
    name: "5195 Miami Villa",
    address: "5195 Miami Villa",
    price: 67550670,
    codeInternal: "65",
    year: "1914",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5195 Miami Villa",
        tax: 0.1,
        value: 94570938,
      },
    ],
  },
  {
    name: "2158 Parque Montreal",
    address: "2158 Parque Montreal",
    price: 7500484,
    codeInternal: "66",
    year: "2033",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2158 Parque Montreal",
        tax: 0.1,
        value: 10500677.6,
      },
    ],
  },
  {
    name: "9408 Reservas de Montreal",
    address: "9408 Reservas de Montreal",
    price: 98453374,
    codeInternal: "67",
    year: "2049",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9408 Reservas de Montreal",
        tax: 0.1,
        value: 137834723.6,
      },
    ],
  },
  {
    name: "8650 Santa Marta Beach",
    address: "8650 Santa Marta Beach",
    price: 29033056,
    codeInternal: "68",
    year: "2049",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8650 Santa Marta Beach",
        tax: 0.1,
        value: 40646278.4,
      },
    ],
  },
  {
    name: "5092 Manhattan Street",
    address: "5092 Manhattan Street",
    price: 8660299,
    codeInternal: "69",
    year: "1947",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5092 Manhattan Street",
        tax: 0.1,
        value: 12124418.6,
      },
    ],
  },
  {
    name: "7925 Conjunto Residencial Montreal",
    address: "7925 Conjunto Residencial Montreal",
    price: 24306494,
    codeInternal: "70",
    year: "1983",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7925 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 34029091.6,
      },
    ],
  },
  {
    name: "6876 Villas de Barranquilla",
    address: "6876 Villas de Barranquilla",
    price: 8953742,
    codeInternal: "71",
    year: "1961",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6876 Villas de Barranquilla",
        tax: 0.1,
        value: 12535238.799999999,
      },
    ],
  },
  {
    name: "9120 Conjunto Residencial Barranquilla",
    address: "9120 Conjunto Residencial Barranquilla",
    price: 51160768,
    codeInternal: "72",
    year: "1936",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9120 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 71625075.19999999,
      },
    ],
  },
  {
    name: "7636 Villas de Barranquilla",
    address: "7636 Villas de Barranquilla",
    price: 86932610,
    codeInternal: "73",
    year: "1950",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7636 Villas de Barranquilla",
        tax: 0.1,
        value: 121705653.99999999,
      },
    ],
  },
  {
    name: "4179 Conjunto Residencial Barranquilla",
    address: "4179 Conjunto Residencial Barranquilla",
    price: 11967837,
    codeInternal: "74",
    year: "1977",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4179 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 16754971.799999999,
      },
    ],
  },
  {
    name: "7833 Parque Santa Maria",
    address: "7833 Parque Santa Maria",
    price: 77907341,
    codeInternal: "75",
    year: "1998",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7833 Parque Santa Maria",
        tax: 0.1,
        value: 109070277.39999999,
      },
    ],
  },
  {
    name: "9297 Manhattan Real",
    address: "9297 Manhattan Real",
    price: 50447757,
    codeInternal: "76",
    year: "1919",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9297 Manhattan Real",
        tax: 0.1,
        value: 70626859.8,
      },
    ],
  },
  {
    name: "7423 Manhattan State",
    address: "7423 Manhattan State",
    price: 99122008,
    codeInternal: "77",
    year: "2031",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7423 Manhattan State",
        tax: 0.1,
        value: 138770811.2,
      },
    ],
  },
  {
    name: "8353 Conjunto Residencial Barranquilla",
    address: "8353 Conjunto Residencial Barranquilla",
    price: 63857619,
    codeInternal: "78",
    year: "1963",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8353 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 89400666.6,
      },
    ],
  },
  {
    name: "9320 Los Angeles Boulevard",
    address: "9320 Los Angeles Boulevard",
    price: 35258893,
    codeInternal: "79",
    year: "2032",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9320 Los Angeles Boulevard",
        tax: 0.1,
        value: 49362450.199999996,
      },
    ],
  },
  {
    name: "1804 Reservas de Cartagena",
    address: "1804 Reservas de Cartagena",
    price: 25200683,
    codeInternal: "80",
    year: "2001",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1804 Reservas de Cartagena",
        tax: 0.1,
        value: 35280956.199999996,
      },
    ],
  },
  {
    name: "7496 Los Angeles State",
    address: "7496 Los Angeles State",
    price: 16305226,
    codeInternal: "81",
    year: "1961",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7496 Los Angeles State",
        tax: 0.1,
        value: 22827316.4,
      },
    ],
  },
  {
    name: "5334 Conjunto Residencial Cartagena",
    address: "5334 Conjunto Residencial Cartagena",
    price: 41216645,
    codeInternal: "82",
    year: "2015",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5334 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 57703303,
      },
    ],
  },
  {
    name: "7462 Santa Marta Real",
    address: "7462 Santa Marta Real",
    price: 16302853,
    codeInternal: "83",
    year: "1912",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7462 Santa Marta Real",
        tax: 0.1,
        value: 22823994.2,
      },
    ],
  },
  {
    name: "6296 Conjunto Residencial Santa Maria",
    address: "6296 Conjunto Residencial Santa Maria",
    price: 94832617,
    codeInternal: "84",
    year: "1977",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6296 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 132765663.8,
      },
    ],
  },
  {
    name: "1166 Manhattan Gardens",
    address: "1166 Manhattan Gardens",
    price: 9635680,
    codeInternal: "85",
    year: "2028",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1166 Manhattan Gardens",
        tax: 0.1,
        value: 13489952,
      },
    ],
  },
  {
    name: "2613 Reservas de Montreal",
    address: "2613 Reservas de Montreal",
    price: 61359938,
    codeInternal: "86",
    year: "1990",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2613 Reservas de Montreal",
        tax: 0.1,
        value: 85903913.19999999,
      },
    ],
  },
  {
    name: "1605 Manhattan Beach",
    address: "1605 Manhattan Beach",
    price: 95803564,
    codeInternal: "87",
    year: "2025",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1605 Manhattan Beach",
        tax: 0.1,
        value: 134124989.6,
      },
    ],
  },
  {
    name: "3284 Manhattan Street",
    address: "3284 Manhattan Street",
    price: 79642032,
    codeInternal: "88",
    year: "2043",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3284 Manhattan Street",
        tax: 0.1,
        value: 111498844.8,
      },
    ],
  },
  {
    name: "9442 Santa Marta Avenue",
    address: "9442 Santa Marta Avenue",
    price: 79926455,
    codeInternal: "89",
    year: "2010",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9442 Santa Marta Avenue",
        tax: 0.1,
        value: 111897037,
      },
    ],
  },
  {
    name: "1902 Villas de Portofino",
    address: "1902 Villas de Portofino",
    price: 11597940,
    codeInternal: "90",
    year: "1972",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1902 Villas de Portofino",
        tax: 0.1,
        value: 16237115.999999998,
      },
    ],
  },
  {
    name: "8045 Los Angeles Boulevard",
    address: "8045 Los Angeles Boulevard",
    price: 34167790,
    codeInternal: "91",
    year: "1920",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8045 Los Angeles Boulevard",
        tax: 0.1,
        value: 47834906,
      },
    ],
  },
  {
    name: "9580 Reservas de Portofino",
    address: "9580 Reservas de Portofino",
    price: 23044137,
    codeInternal: "92",
    year: "2019",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9580 Reservas de Portofino",
        tax: 0.1,
        value: 32261791.799999997,
      },
    ],
  },
  {
    name: "5011 Reservas de Portofino",
    address: "5011 Reservas de Portofino",
    price: 47540919,
    codeInternal: "93",
    year: "1975",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5011 Reservas de Portofino",
        tax: 0.1,
        value: 66557286.599999994,
      },
    ],
  },
  {
    name: "5667 Parque Cartagena",
    address: "5667 Parque Cartagena",
    price: 15980400,
    codeInternal: "94",
    year: "1991",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5667 Parque Cartagena",
        tax: 0.1,
        value: 22372560,
      },
    ],
  },
  {
    name: "3871 Villas de Cartagena",
    address: "3871 Villas de Cartagena",
    price: 65695194,
    codeInternal: "95",
    year: "2020",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3871 Villas de Cartagena",
        tax: 0.1,
        value: 91973271.6,
      },
    ],
  },
  {
    name: "9266 Reservas de Barranquilla",
    address: "9266 Reservas de Barranquilla",
    price: 76204386,
    codeInternal: "96",
    year: "2003",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9266 Reservas de Barranquilla",
        tax: 0.1,
        value: 106686140.39999999,
      },
    ],
  },
  {
    name: "5325 Miami Beach",
    address: "5325 Miami Beach",
    price: 52225412,
    codeInternal: "97",
    year: "1976",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5325 Miami Beach",
        tax: 0.1,
        value: 73115576.8,
      },
    ],
  },
  {
    name: "5936 Santa Marta Real",
    address: "5936 Santa Marta Real",
    price: 94146678,
    codeInternal: "98",
    year: "1920",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5936 Santa Marta Real",
        tax: 0.1,
        value: 131805349.19999999,
      },
    ],
  },
  {
    name: "6368 Miami Boulevard",
    address: "6368 Miami Boulevard",
    price: 70485141,
    codeInternal: "99",
    year: "2012",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6368 Miami Boulevard",
        tax: 0.1,
        value: 98679197.39999999,
      },
    ],
  },
  {
    name: "2415 Miami Place",
    address: "2415 Miami Place",
    price: 63061395,
    codeInternal: "100",
    year: "2045",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2415 Miami Place",
        tax: 0.1,
        value: 88285953,
      },
    ],
  },
  {
    name: "3123 Villas de Portofino",
    address: "3123 Villas de Portofino",
    price: 8583450,
    codeInternal: "101",
    year: "1955",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3123 Villas de Portofino",
        tax: 0.1,
        value: 12016830,
      },
    ],
  },
  {
    name: "8938 Paris Street",
    address: "8938 Paris Street",
    price: 56159991,
    codeInternal: "102",
    year: "1900",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8938 Paris Street",
        tax: 0.1,
        value: 78623987.39999999,
      },
    ],
  },
  {
    name: "5589 Manhattan Beach",
    address: "5589 Manhattan Beach",
    price: 69280705,
    codeInternal: "103",
    year: "1997",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5589 Manhattan Beach",
        tax: 0.1,
        value: 96992987,
      },
    ],
  },
  {
    name: "7301 Conjunto Residencial Santa Maria",
    address: "7301 Conjunto Residencial Santa Maria",
    price: 48166238,
    codeInternal: "104",
    year: "1930",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7301 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 67432733.2,
      },
    ],
  },
  {
    name: "2650 Santa Marta Avenue",
    address: "2650 Santa Marta Avenue",
    price: 78887978,
    codeInternal: "105",
    year: "1996",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2650 Santa Marta Avenue",
        tax: 0.1,
        value: 110443169.19999999,
      },
    ],
  },
  {
    name: "8081 Parque Cartagena",
    address: "8081 Parque Cartagena",
    price: 40398364,
    codeInternal: "106",
    year: "1965",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8081 Parque Cartagena",
        tax: 0.1,
        value: 56557709.599999994,
      },
    ],
  },
  {
    name: "7097 Santa Marta Gardens",
    address: "7097 Santa Marta Gardens",
    price: 36947524,
    codeInternal: "107",
    year: "2022",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7097 Santa Marta Gardens",
        tax: 0.1,
        value: 51726533.599999994,
      },
    ],
  },
  {
    name: "5304 Manhattan State",
    address: "5304 Manhattan State",
    price: 68911388,
    codeInternal: "108",
    year: "2014",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5304 Manhattan State",
        tax: 0.1,
        value: 96475943.19999999,
      },
    ],
  },
  {
    name: "7922 Parque Portofino",
    address: "7922 Parque Portofino",
    price: 89354080,
    codeInternal: "109",
    year: "1948",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7922 Parque Portofino",
        tax: 0.1,
        value: 125095711.99999999,
      },
    ],
  },
  {
    name: "5789 Parque Santa Maria",
    address: "5789 Parque Santa Maria",
    price: 1363350,
    codeInternal: "110",
    year: "2045",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5789 Parque Santa Maria",
        tax: 0.1,
        value: 1908689.9999999998,
      },
    ],
  },
  {
    name: "8261 Los Angeles Place",
    address: "8261 Los Angeles Place",
    price: 79488778,
    codeInternal: "111",
    year: "1989",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8261 Los Angeles Place",
        tax: 0.1,
        value: 111284289.19999999,
      },
    ],
  },
  {
    name: "3422 Conjunto Residencial Portofino",
    address: "3422 Conjunto Residencial Portofino",
    price: 85430804,
    codeInternal: "112",
    year: "2029",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3422 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 119603125.6,
      },
    ],
  },
  {
    name: "2553 Villas de Barranquilla",
    address: "2553 Villas de Barranquilla",
    price: 30683372,
    codeInternal: "113",
    year: "1935",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2553 Villas de Barranquilla",
        tax: 0.1,
        value: 42956720.8,
      },
    ],
  },
  {
    name: "9746 Paris State",
    address: "9746 Paris State",
    price: 49843606,
    codeInternal: "114",
    year: "2018",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9746 Paris State",
        tax: 0.1,
        value: 69781048.39999999,
      },
    ],
  },
  {
    name: "9740 Miami Street",
    address: "9740 Miami Street",
    price: 18028338,
    codeInternal: "115",
    year: "1982",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9740 Miami Street",
        tax: 0.1,
        value: 25239673.2,
      },
    ],
  },
  {
    name: "6320 Parque Portofino",
    address: "6320 Parque Portofino",
    price: 43891944,
    codeInternal: "116",
    year: "1996",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6320 Parque Portofino",
        tax: 0.1,
        value: 61448721.599999994,
      },
    ],
  },
  {
    name: "1744 Reservas de Portofino",
    address: "1744 Reservas de Portofino",
    price: 88808685,
    codeInternal: "117",
    year: "1943",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1744 Reservas de Portofino",
        tax: 0.1,
        value: 124332158.99999999,
      },
    ],
  },
  {
    name: "8572 Manhattan Towers",
    address: "8572 Manhattan Towers",
    price: 8771106,
    codeInternal: "118",
    year: "2042",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8572 Manhattan Towers",
        tax: 0.1,
        value: 12279548.399999999,
      },
    ],
  },
  {
    name: "4994 Conjunto Residencial Santa Maria",
    address: "4994 Conjunto Residencial Santa Maria",
    price: 19391669,
    codeInternal: "119",
    year: "1976",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4994 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 27148336.599999998,
      },
    ],
  },
  {
    name: "8951 Los Angeles Collection",
    address: "8951 Los Angeles Collection",
    price: 54606162,
    codeInternal: "120",
    year: "1909",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8951 Los Angeles Collection",
        tax: 0.1,
        value: 76448626.8,
      },
    ],
  },
  {
    name: "8485 Conjunto Residencial Barranquilla",
    address: "8485 Conjunto Residencial Barranquilla",
    price: 2874928,
    codeInternal: "121",
    year: "1941",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8485 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 4024899.1999999997,
      },
    ],
  },
  {
    name: "8454 Reservas de Santa Maria",
    address: "8454 Reservas de Santa Maria",
    price: 43215437,
    codeInternal: "122",
    year: "1936",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8454 Reservas de Santa Maria",
        tax: 0.1,
        value: 60501611.8,
      },
    ],
  },
  {
    name: "3641 Parque Barranquilla",
    address: "3641 Parque Barranquilla",
    price: 23729064,
    codeInternal: "123",
    year: "2044",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3641 Parque Barranquilla",
        tax: 0.1,
        value: 33220689.599999998,
      },
    ],
  },
  {
    name: "4988 Quintas de Santa Maria",
    address: "4988 Quintas de Santa Maria",
    price: 49695800,
    codeInternal: "124",
    year: "1969",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4988 Quintas de Santa Maria",
        tax: 0.1,
        value: 69574120,
      },
    ],
  },
  {
    name: "5354 Miami Terrace",
    address: "5354 Miami Terrace",
    price: 92906091,
    codeInternal: "125",
    year: "1923",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5354 Miami Terrace",
        tax: 0.1,
        value: 130068527.39999999,
      },
    ],
  },
  {
    name: "9774 Paris Villa",
    address: "9774 Paris Villa",
    price: 99082560,
    codeInternal: "126",
    year: "1936",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9774 Paris Villa",
        tax: 0.1,
        value: 138715584,
      },
    ],
  },
  {
    name: "5652 Conjunto Residencial Montreal",
    address: "5652 Conjunto Residencial Montreal",
    price: 31572044,
    codeInternal: "127",
    year: "1961",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5652 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 44200861.599999994,
      },
    ],
  },
  {
    name: "9764 Miami Boulevard",
    address: "9764 Miami Boulevard",
    price: 58194640,
    codeInternal: "128",
    year: "1936",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9764 Miami Boulevard",
        tax: 0.1,
        value: 81472496,
      },
    ],
  },
  {
    name: "7150 Quintas de Santa Maria",
    address: "7150 Quintas de Santa Maria",
    price: 73956706,
    codeInternal: "129",
    year: "1943",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7150 Quintas de Santa Maria",
        tax: 0.1,
        value: 103539388.39999999,
      },
    ],
  },
  {
    name: "9558 Manhattan Beach",
    address: "9558 Manhattan Beach",
    price: 4363174,
    codeInternal: "130",
    year: "1916",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9558 Manhattan Beach",
        tax: 0.1,
        value: 6108443.6,
      },
    ],
  },
  {
    name: "4809 Parque Montreal",
    address: "4809 Parque Montreal",
    price: 48729131,
    codeInternal: "131",
    year: "1928",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4809 Parque Montreal",
        tax: 0.1,
        value: 68220783.39999999,
      },
    ],
  },
  {
    name: "1947 Santa Marta Avenue",
    address: "1947 Santa Marta Avenue",
    price: 69271243,
    codeInternal: "132",
    year: "1902",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1947 Santa Marta Avenue",
        tax: 0.1,
        value: 96979740.19999999,
      },
    ],
  },
  {
    name: "9231 Manhattan Avenue",
    address: "9231 Manhattan Avenue",
    price: 67656532,
    codeInternal: "133",
    year: "2008",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9231 Manhattan Avenue",
        tax: 0.1,
        value: 94719144.8,
      },
    ],
  },
  {
    name: "5027 Santa Marta Beach",
    address: "5027 Santa Marta Beach",
    price: 20835448,
    codeInternal: "134",
    year: "2014",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5027 Santa Marta Beach",
        tax: 0.1,
        value: 29169627.2,
      },
    ],
  },
  {
    name: "2461 Paris Place",
    address: "2461 Paris Place",
    price: 83199633,
    codeInternal: "135",
    year: "1934",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2461 Paris Place",
        tax: 0.1,
        value: 116479486.19999999,
      },
    ],
  },
  {
    name: "9077 Quintas de Montreal",
    address: "9077 Quintas de Montreal",
    price: 40677303,
    codeInternal: "136",
    year: "1909",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9077 Quintas de Montreal",
        tax: 0.1,
        value: 56948224.199999996,
      },
    ],
  },
  {
    name: "3679 Reservas de Barranquilla",
    address: "3679 Reservas de Barranquilla",
    price: 86191271,
    codeInternal: "137",
    year: "1974",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3679 Reservas de Barranquilla",
        tax: 0.1,
        value: 120667779.39999999,
      },
    ],
  },
  {
    name: "9770 Villas de Montreal",
    address: "9770 Villas de Montreal",
    price: 71301481,
    codeInternal: "138",
    year: "1922",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9770 Villas de Montreal",
        tax: 0.1,
        value: 99822073.39999999,
      },
    ],
  },
  {
    name: "2549 Parque Montreal",
    address: "2549 Parque Montreal",
    price: 61949094,
    codeInternal: "139",
    year: "2034",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2549 Parque Montreal",
        tax: 0.1,
        value: 86728731.6,
      },
    ],
  },
  {
    name: "5924 Miami Place",
    address: "5924 Miami Place",
    price: 35687799,
    codeInternal: "140",
    year: "1929",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5924 Miami Place",
        tax: 0.1,
        value: 49962918.599999994,
      },
    ],
  },
  {
    name: "6251 Santa Marta Avenue",
    address: "6251 Santa Marta Avenue",
    price: 43164138,
    codeInternal: "141",
    year: "1913",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6251 Santa Marta Avenue",
        tax: 0.1,
        value: 60429793.199999996,
      },
    ],
  },
  {
    name: "4652 Parque Barranquilla",
    address: "4652 Parque Barranquilla",
    price: 15817917,
    codeInternal: "142",
    year: "1933",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4652 Parque Barranquilla",
        tax: 0.1,
        value: 22145083.799999997,
      },
    ],
  },
  {
    name: "4104 Los Angeles State",
    address: "4104 Los Angeles State",
    price: 90547630,
    codeInternal: "143",
    year: "1908",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4104 Los Angeles State",
        tax: 0.1,
        value: 126766681.99999999,
      },
    ],
  },
  {
    name: "9565 Quintas de Cartagena",
    address: "9565 Quintas de Cartagena",
    price: 85349820,
    codeInternal: "144",
    year: "1978",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9565 Quintas de Cartagena",
        tax: 0.1,
        value: 119489747.99999999,
      },
    ],
  },
  {
    name: "8048 Manhattan Beach",
    address: "8048 Manhattan Beach",
    price: 67539252,
    codeInternal: "145",
    year: "1912",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8048 Manhattan Beach",
        tax: 0.1,
        value: 94554952.8,
      },
    ],
  },
  {
    name: "2121 Paris Towers",
    address: "2121 Paris Towers",
    price: 64748700,
    codeInternal: "146",
    year: "1988",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2121 Paris Towers",
        tax: 0.1,
        value: 90648180,
      },
    ],
  },
  {
    name: "1924 Paris Villa",
    address: "1924 Paris Villa",
    price: 1441812,
    codeInternal: "147",
    year: "2038",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1924 Paris Villa",
        tax: 0.1,
        value: 2018536.7999999998,
      },
    ],
  },
  {
    name: "1770 Manhattan Street",
    address: "1770 Manhattan Street",
    price: 16871617,
    codeInternal: "148",
    year: "2040",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1770 Manhattan Street",
        tax: 0.1,
        value: 23620263.799999997,
      },
    ],
  },
  {
    name: "6370 Villas de Portofino",
    address: "6370 Villas de Portofino",
    price: 15429546,
    codeInternal: "149",
    year: "2014",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6370 Villas de Portofino",
        tax: 0.1,
        value: 21601364.4,
      },
    ],
  },
  {
    name: "6261 Paris Street",
    address: "6261 Paris Street",
    price: 97227669,
    codeInternal: "150",
    year: "2033",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6261 Paris Street",
        tax: 0.1,
        value: 136118736.6,
      },
    ],
  },
  {
    name: "2901 Santa Marta Collection",
    address: "2901 Santa Marta Collection",
    price: 85956005,
    codeInternal: "151",
    year: "1997",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2901 Santa Marta Collection",
        tax: 0.1,
        value: 120338406.99999999,
      },
    ],
  },
  {
    name: "5302 Parque Montreal",
    address: "5302 Parque Montreal",
    price: 71915614,
    codeInternal: "152",
    year: "1909",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5302 Parque Montreal",
        tax: 0.1,
        value: 100681859.6,
      },
    ],
  },
  {
    name: "3410 Manhattan Towers",
    address: "3410 Manhattan Towers",
    price: 81129112,
    codeInternal: "153",
    year: "1944",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3410 Manhattan Towers",
        tax: 0.1,
        value: 113580756.8,
      },
    ],
  },
  {
    name: "9048 Reservas de Montreal",
    address: "9048 Reservas de Montreal",
    price: 68209147,
    codeInternal: "154",
    year: "1965",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9048 Reservas de Montreal",
        tax: 0.1,
        value: 95492805.8,
      },
    ],
  },
  {
    name: "3825 Manhattan Towers",
    address: "3825 Manhattan Towers",
    price: 97281776,
    codeInternal: "155",
    year: "2005",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3825 Manhattan Towers",
        tax: 0.1,
        value: 136194486.4,
      },
    ],
  },
  {
    name: "2600 Manhattan Gardens",
    address: "2600 Manhattan Gardens",
    price: 82721927,
    codeInternal: "156",
    year: "1969",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2600 Manhattan Gardens",
        tax: 0.1,
        value: 115810697.8,
      },
    ],
  },
  {
    name: "8197 Los Angeles Beach",
    address: "8197 Los Angeles Beach",
    price: 64813513,
    codeInternal: "157",
    year: "1958",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8197 Los Angeles Beach",
        tax: 0.1,
        value: 90738918.19999999,
      },
    ],
  },
  {
    name: "3857 Reservas de Santa Maria",
    address: "3857 Reservas de Santa Maria",
    price: 52252496,
    codeInternal: "158",
    year: "2000",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3857 Reservas de Santa Maria",
        tax: 0.1,
        value: 73153494.39999999,
      },
    ],
  },
  {
    name: "4968 Los Angeles Collection",
    address: "4968 Los Angeles Collection",
    price: 25361394,
    codeInternal: "159",
    year: "2019",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4968 Los Angeles Collection",
        tax: 0.1,
        value: 35505951.599999994,
      },
    ],
  },
  {
    name: "4781 Paris Terrace",
    address: "4781 Paris Terrace",
    price: 91181566,
    codeInternal: "160",
    year: "1958",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4781 Paris Terrace",
        tax: 0.1,
        value: 127654192.39999999,
      },
    ],
  },
  {
    name: "3569 Conjunto Residencial Barranquilla",
    address: "3569 Conjunto Residencial Barranquilla",
    price: 1169950,
    codeInternal: "161",
    year: "1915",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3569 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 1637930,
      },
    ],
  },
  {
    name: "1821 Reservas de Portofino",
    address: "1821 Reservas de Portofino",
    price: 91749901,
    codeInternal: "162",
    year: "1973",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1821 Reservas de Portofino",
        tax: 0.1,
        value: 128449861.39999999,
      },
    ],
  },
  {
    name: "7323 Conjunto Residencial Cartagena",
    address: "7323 Conjunto Residencial Cartagena",
    price: 18851109,
    codeInternal: "163",
    year: "2003",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7323 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 26391552.599999998,
      },
    ],
  },
  {
    name: "2337 Miami Collection",
    address: "2337 Miami Collection",
    price: 37443538,
    codeInternal: "164",
    year: "1925",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2337 Miami Collection",
        tax: 0.1,
        value: 52420953.199999996,
      },
    ],
  },
  {
    name: "8261 Manhattan Place",
    address: "8261 Manhattan Place",
    price: 56650821,
    codeInternal: "165",
    year: "1984",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8261 Manhattan Place",
        tax: 0.1,
        value: 79311149.39999999,
      },
    ],
  },
  {
    name: "6633 Reservas de Santa Maria",
    address: "6633 Reservas de Santa Maria",
    price: 40082427,
    codeInternal: "166",
    year: "2046",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6633 Reservas de Santa Maria",
        tax: 0.1,
        value: 56115397.8,
      },
    ],
  },
  {
    name: "4851 Quintas de Barranquilla",
    address: "4851 Quintas de Barranquilla",
    price: 90806209,
    codeInternal: "167",
    year: "2009",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4851 Quintas de Barranquilla",
        tax: 0.1,
        value: 127128692.6,
      },
    ],
  },
  {
    name: "5835 Miami State",
    address: "5835 Miami State",
    price: 61556261,
    codeInternal: "168",
    year: "1930",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5835 Miami State",
        tax: 0.1,
        value: 86178765.39999999,
      },
    ],
  },
  {
    name: "1264 Conjunto Residencial Portofino",
    address: "1264 Conjunto Residencial Portofino",
    price: 33256384,
    codeInternal: "169",
    year: "2034",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1264 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 46558937.599999994,
      },
    ],
  },
  {
    name: "1813 Santa Marta Place",
    address: "1813 Santa Marta Place",
    price: 47524720,
    codeInternal: "170",
    year: "2043",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1813 Santa Marta Place",
        tax: 0.1,
        value: 66534607.99999999,
      },
    ],
  },
  {
    name: "5560 Paris Villa",
    address: "5560 Paris Villa",
    price: 63923966,
    codeInternal: "171",
    year: "1946",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5560 Paris Villa",
        tax: 0.1,
        value: 89493552.39999999,
      },
    ],
  },
  {
    name: "4060 Reservas de Santa Maria",
    address: "4060 Reservas de Santa Maria",
    price: 35565947,
    codeInternal: "172",
    year: "1953",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4060 Reservas de Santa Maria",
        tax: 0.1,
        value: 49792325.8,
      },
    ],
  },
  {
    name: "1181 Los Angeles State",
    address: "1181 Los Angeles State",
    price: 61351030,
    codeInternal: "173",
    year: "1936",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1181 Los Angeles State",
        tax: 0.1,
        value: 85891442,
      },
    ],
  },
  {
    name: "8426 Miami Collection",
    address: "8426 Miami Collection",
    price: 4032230,
    codeInternal: "174",
    year: "2033",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8426 Miami Collection",
        tax: 0.1,
        value: 5645122,
      },
    ],
  },
  {
    name: "9409 Parque Barranquilla",
    address: "9409 Parque Barranquilla",
    price: 80427584,
    codeInternal: "175",
    year: "1962",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9409 Parque Barranquilla",
        tax: 0.1,
        value: 112598617.6,
      },
    ],
  },
  {
    name: "4742 Villas de Barranquilla",
    address: "4742 Villas de Barranquilla",
    price: 32259229,
    codeInternal: "176",
    year: "1906",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4742 Villas de Barranquilla",
        tax: 0.1,
        value: 45162920.599999994,
      },
    ],
  },
  {
    name: "6841 Reservas de Barranquilla",
    address: "6841 Reservas de Barranquilla",
    price: 17939486,
    codeInternal: "177",
    year: "1995",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6841 Reservas de Barranquilla",
        tax: 0.1,
        value: 25115280.4,
      },
    ],
  },
  {
    name: "8621 Reservas de Cartagena",
    address: "8621 Reservas de Cartagena",
    price: 54272153,
    codeInternal: "178",
    year: "2025",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8621 Reservas de Cartagena",
        tax: 0.1,
        value: 75981014.19999999,
      },
    ],
  },
  {
    name: "2638 Santa Marta Gardens",
    address: "2638 Santa Marta Gardens",
    price: 97859223,
    codeInternal: "179",
    year: "1917",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2638 Santa Marta Gardens",
        tax: 0.1,
        value: 137002912.2,
      },
    ],
  },
  {
    name: "1084 Los Angeles Street",
    address: "1084 Los Angeles Street",
    price: 84272260,
    codeInternal: "180",
    year: "1932",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1084 Los Angeles Street",
        tax: 0.1,
        value: 117981163.99999999,
      },
    ],
  },
  {
    name: "9609 Manhattan Real",
    address: "9609 Manhattan Real",
    price: 82769996,
    codeInternal: "181",
    year: "1940",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9609 Manhattan Real",
        tax: 0.1,
        value: 115877994.39999999,
      },
    ],
  },
  {
    name: "8738 Santa Marta Gardens",
    address: "8738 Santa Marta Gardens",
    price: 48879412,
    codeInternal: "182",
    year: "1982",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8738 Santa Marta Gardens",
        tax: 0.1,
        value: 68431176.8,
      },
    ],
  },
  {
    name: "2010 Parque Montreal",
    address: "2010 Parque Montreal",
    price: 52450302,
    codeInternal: "183",
    year: "1904",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2010 Parque Montreal",
        tax: 0.1,
        value: 73430422.8,
      },
    ],
  },
  {
    name: "8166 Parque Cartagena",
    address: "8166 Parque Cartagena",
    price: 99671320,
    codeInternal: "184",
    year: "1908",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8166 Parque Cartagena",
        tax: 0.1,
        value: 139539848,
      },
    ],
  },
  {
    name: "8516 Los Angeles Beach",
    address: "8516 Los Angeles Beach",
    price: 63388908,
    codeInternal: "185",
    year: "1909",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8516 Los Angeles Beach",
        tax: 0.1,
        value: 88744471.19999999,
      },
    ],
  },
  {
    name: "6629 Manhattan State",
    address: "6629 Manhattan State",
    price: 1008337,
    codeInternal: "186",
    year: "2023",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6629 Manhattan State",
        tax: 0.1,
        value: 1411671.7999999998,
      },
    ],
  },
  {
    name: "9295 Santa Marta Street",
    address: "9295 Santa Marta Street",
    price: 55752990,
    codeInternal: "187",
    year: "2050",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9295 Santa Marta Street",
        tax: 0.1,
        value: 78054186,
      },
    ],
  },
  {
    name: "7451 Quintas de Portofino",
    address: "7451 Quintas de Portofino",
    price: 78647137,
    codeInternal: "188",
    year: "1920",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7451 Quintas de Portofino",
        tax: 0.1,
        value: 110105991.8,
      },
    ],
  },
  {
    name: "6044 Santa Marta Towers",
    address: "6044 Santa Marta Towers",
    price: 53168237,
    codeInternal: "189",
    year: "2037",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6044 Santa Marta Towers",
        tax: 0.1,
        value: 74435531.8,
      },
    ],
  },
  {
    name: "6232 Villas de Santa Maria",
    address: "6232 Villas de Santa Maria",
    price: 39543331,
    codeInternal: "190",
    year: "1989",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6232 Villas de Santa Maria",
        tax: 0.1,
        value: 55360663.4,
      },
    ],
  },
  {
    name: "1097 Santa Marta State",
    address: "1097 Santa Marta State",
    price: 34772063,
    codeInternal: "191",
    year: "1922",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1097 Santa Marta State",
        tax: 0.1,
        value: 48680888.199999996,
      },
    ],
  },
  {
    name: "6967 Santa Marta Collection",
    address: "6967 Santa Marta Collection",
    price: 2103855,
    codeInternal: "192",
    year: "1954",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6967 Santa Marta Collection",
        tax: 0.1,
        value: 2945397,
      },
    ],
  },
  {
    name: "6703 Los Angeles Avenue",
    address: "6703 Los Angeles Avenue",
    price: 12404616,
    codeInternal: "193",
    year: "2047",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6703 Los Angeles Avenue",
        tax: 0.1,
        value: 17366462.4,
      },
    ],
  },
  {
    name: "5274 Reservas de Cartagena",
    address: "5274 Reservas de Cartagena",
    price: 96812245,
    codeInternal: "194",
    year: "1996",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5274 Reservas de Cartagena",
        tax: 0.1,
        value: 135537143,
      },
    ],
  },
  {
    name: "1786 Villas de Santa Maria",
    address: "1786 Villas de Santa Maria",
    price: 42028770,
    codeInternal: "195",
    year: "2037",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1786 Villas de Santa Maria",
        tax: 0.1,
        value: 58840277.99999999,
      },
    ],
  },
  {
    name: "8452 Miami State",
    address: "8452 Miami State",
    price: 48112329,
    codeInternal: "196",
    year: "1978",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8452 Miami State",
        tax: 0.1,
        value: 67357260.6,
      },
    ],
  },
  {
    name: "7881 Los Angeles Towers",
    address: "7881 Los Angeles Towers",
    price: 65205230,
    codeInternal: "197",
    year: "2022",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7881 Los Angeles Towers",
        tax: 0.1,
        value: 91287322,
      },
    ],
  },
  {
    name: "1580 Los Angeles Villa",
    address: "1580 Los Angeles Villa",
    price: 15419805,
    codeInternal: "198",
    year: "1972",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1580 Los Angeles Villa",
        tax: 0.1,
        value: 21587727,
      },
    ],
  },
  {
    name: "2042 Santa Marta Boulevard",
    address: "2042 Santa Marta Boulevard",
    price: 95077529,
    codeInternal: "199",
    year: "1911",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2042 Santa Marta Boulevard",
        tax: 0.1,
        value: 133108540.6,
      },
    ],
  },
  {
    name: "9205 Santa Marta Towers",
    address: "9205 Santa Marta Towers",
    price: 13471634,
    codeInternal: "200",
    year: "1976",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9205 Santa Marta Towers",
        tax: 0.1,
        value: 18860287.599999998,
      },
    ],
  },
  {
    name: "6618 Quintas de Cartagena",
    address: "6618 Quintas de Cartagena",
    price: 15180547,
    codeInternal: "201",
    year: "1981",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6618 Quintas de Cartagena",
        tax: 0.1,
        value: 21252765.799999997,
      },
    ],
  },
  {
    name: "4661 Miami Real",
    address: "4661 Miami Real",
    price: 55982095,
    codeInternal: "202",
    year: "2032",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4661 Miami Real",
        tax: 0.1,
        value: 78374933,
      },
    ],
  },
  {
    name: "2740 Villas de Cartagena",
    address: "2740 Villas de Cartagena",
    price: 26190365,
    codeInternal: "203",
    year: "1917",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2740 Villas de Cartagena",
        tax: 0.1,
        value: 36666511,
      },
    ],
  },
  {
    name: "7634 Villas de Portofino",
    address: "7634 Villas de Portofino",
    price: 78041973,
    codeInternal: "204",
    year: "1985",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7634 Villas de Portofino",
        tax: 0.1,
        value: 109258762.19999999,
      },
    ],
  },
  {
    name: "1298 Reservas de Santa Maria",
    address: "1298 Reservas de Santa Maria",
    price: 65154099,
    codeInternal: "205",
    year: "1972",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1298 Reservas de Santa Maria",
        tax: 0.1,
        value: 91215738.6,
      },
    ],
  },
  {
    name: "3940 Villas de Santa Maria",
    address: "3940 Villas de Santa Maria",
    price: 86172728,
    codeInternal: "206",
    year: "1974",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3940 Villas de Santa Maria",
        tax: 0.1,
        value: 120641819.19999999,
      },
    ],
  },
  {
    name: "7926 Parque Cartagena",
    address: "7926 Parque Cartagena",
    price: 33039858,
    codeInternal: "207",
    year: "2009",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7926 Parque Cartagena",
        tax: 0.1,
        value: 46255801.199999996,
      },
    ],
  },
  {
    name: "1897 Santa Marta Place",
    address: "1897 Santa Marta Place",
    price: 85177660,
    codeInternal: "208",
    year: "1919",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1897 Santa Marta Place",
        tax: 0.1,
        value: 119248723.99999999,
      },
    ],
  },
  {
    name: "3971 Reservas de Portofino",
    address: "3971 Reservas de Portofino",
    price: 22931907,
    codeInternal: "209",
    year: "1994",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3971 Reservas de Portofino",
        tax: 0.1,
        value: 32104669.799999997,
      },
    ],
  },
  {
    name: "2192 Manhattan Terrace",
    address: "2192 Manhattan Terrace",
    price: 60653775,
    codeInternal: "210",
    year: "1916",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2192 Manhattan Terrace",
        tax: 0.1,
        value: 84915285,
      },
    ],
  },
  {
    name: "8092 Los Angeles Villa",
    address: "8092 Los Angeles Villa",
    price: 44727340,
    codeInternal: "211",
    year: "1981",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8092 Los Angeles Villa",
        tax: 0.1,
        value: 62618275.99999999,
      },
    ],
  },
  {
    name: "8011 Los Angeles Villa",
    address: "8011 Los Angeles Villa",
    price: 31468869,
    codeInternal: "212",
    year: "2018",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8011 Los Angeles Villa",
        tax: 0.1,
        value: 44056416.599999994,
      },
    ],
  },
  {
    name: "3775 Villas de Barranquilla",
    address: "3775 Villas de Barranquilla",
    price: 43643847,
    codeInternal: "213",
    year: "1948",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3775 Villas de Barranquilla",
        tax: 0.1,
        value: 61101385.8,
      },
    ],
  },
  {
    name: "2265 Paris Street",
    address: "2265 Paris Street",
    price: 41407440,
    codeInternal: "214",
    year: "2038",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2265 Paris Street",
        tax: 0.1,
        value: 57970416,
      },
    ],
  },
  {
    name: "5555 Parque Santa Maria",
    address: "5555 Parque Santa Maria",
    price: 1016360,
    codeInternal: "215",
    year: "1994",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5555 Parque Santa Maria",
        tax: 0.1,
        value: 1422904,
      },
    ],
  },
  {
    name: "2430 Paris Towers",
    address: "2430 Paris Towers",
    price: 42089451,
    codeInternal: "216",
    year: "1940",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2430 Paris Towers",
        tax: 0.1,
        value: 58925231.4,
      },
    ],
  },
  {
    name: "8413 Los Angeles Real",
    address: "8413 Los Angeles Real",
    price: 80228800,
    codeInternal: "217",
    year: "1914",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8413 Los Angeles Real",
        tax: 0.1,
        value: 112320320,
      },
    ],
  },
  {
    name: "3660 Reservas de Cartagena",
    address: "3660 Reservas de Cartagena",
    price: 49253390,
    codeInternal: "218",
    year: "2003",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3660 Reservas de Cartagena",
        tax: 0.1,
        value: 68954746,
      },
    ],
  },
  {
    name: "4483 Reservas de Santa Maria",
    address: "4483 Reservas de Santa Maria",
    price: 98400523,
    codeInternal: "219",
    year: "1976",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4483 Reservas de Santa Maria",
        tax: 0.1,
        value: 137760732.2,
      },
    ],
  },
  {
    name: "2044 Parque Santa Maria",
    address: "2044 Parque Santa Maria",
    price: 47889566,
    codeInternal: "220",
    year: "1921",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2044 Parque Santa Maria",
        tax: 0.1,
        value: 67045392.4,
      },
    ],
  },
  {
    name: "3539 Santa Marta Place",
    address: "3539 Santa Marta Place",
    price: 47544514,
    codeInternal: "221",
    year: "1942",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3539 Santa Marta Place",
        tax: 0.1,
        value: 66562319.599999994,
      },
    ],
  },
  {
    name: "8940 Miami Boulevard",
    address: "8940 Miami Boulevard",
    price: 17344462,
    codeInternal: "222",
    year: "1954",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8940 Miami Boulevard",
        tax: 0.1,
        value: 24282246.799999997,
      },
    ],
  },
  {
    name: "9689 Villas de Montreal",
    address: "9689 Villas de Montreal",
    price: 49127227,
    codeInternal: "223",
    year: "1928",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9689 Villas de Montreal",
        tax: 0.1,
        value: 68778117.8,
      },
    ],
  },
  {
    name: "9591 Manhattan Real",
    address: "9591 Manhattan Real",
    price: 15631062,
    codeInternal: "224",
    year: "2030",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9591 Manhattan Real",
        tax: 0.1,
        value: 21883486.799999997,
      },
    ],
  },
  {
    name: "3324 Reservas de Santa Maria",
    address: "3324 Reservas de Santa Maria",
    price: 39751631,
    codeInternal: "225",
    year: "1962",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3324 Reservas de Santa Maria",
        tax: 0.1,
        value: 55652283.4,
      },
    ],
  },
  {
    name: "4097 Paris Terrace",
    address: "4097 Paris Terrace",
    price: 31705019,
    codeInternal: "226",
    year: "1981",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4097 Paris Terrace",
        tax: 0.1,
        value: 44387026.599999994,
      },
    ],
  },
  {
    name: "5202 Santa Marta Gardens",
    address: "5202 Santa Marta Gardens",
    price: 39414597,
    codeInternal: "227",
    year: "2029",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5202 Santa Marta Gardens",
        tax: 0.1,
        value: 55180435.8,
      },
    ],
  },
  {
    name: "6419 Quintas de Portofino",
    address: "6419 Quintas de Portofino",
    price: 20379885,
    codeInternal: "228",
    year: "1915",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6419 Quintas de Portofino",
        tax: 0.1,
        value: 28531839,
      },
    ],
  },
  {
    name: "4460 Villas de Portofino",
    address: "4460 Villas de Portofino",
    price: 27699768,
    codeInternal: "229",
    year: "1917",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4460 Villas de Portofino",
        tax: 0.1,
        value: 38779675.199999996,
      },
    ],
  },
  {
    name: "3260 Reservas de Barranquilla",
    address: "3260 Reservas de Barranquilla",
    price: 18027398,
    codeInternal: "230",
    year: "1946",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3260 Reservas de Barranquilla",
        tax: 0.1,
        value: 25238357.2,
      },
    ],
  },
  {
    name: "2258 Parque Santa Maria",
    address: "2258 Parque Santa Maria",
    price: 48617530,
    codeInternal: "231",
    year: "1984",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2258 Parque Santa Maria",
        tax: 0.1,
        value: 68064542,
      },
    ],
  },
  {
    name: "5950 Parque Cartagena",
    address: "5950 Parque Cartagena",
    price: 78771543,
    codeInternal: "232",
    year: "2031",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5950 Parque Cartagena",
        tax: 0.1,
        value: 110280160.19999999,
      },
    ],
  },
  {
    name: "7221 Paris Collection",
    address: "7221 Paris Collection",
    price: 85362479,
    codeInternal: "233",
    year: "1991",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7221 Paris Collection",
        tax: 0.1,
        value: 119507470.6,
      },
    ],
  },
  {
    name: "5528 Reservas de Cartagena",
    address: "5528 Reservas de Cartagena",
    price: 87403320,
    codeInternal: "234",
    year: "2000",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5528 Reservas de Cartagena",
        tax: 0.1,
        value: 122364647.99999999,
      },
    ],
  },
  {
    name: "7249 Santa Marta Villa",
    address: "7249 Santa Marta Villa",
    price: 38993454,
    codeInternal: "235",
    year: "1919",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7249 Santa Marta Villa",
        tax: 0.1,
        value: 54590835.599999994,
      },
    ],
  },
  {
    name: "7804 Manhattan Beach",
    address: "7804 Manhattan Beach",
    price: 9395682,
    codeInternal: "236",
    year: "1902",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7804 Manhattan Beach",
        tax: 0.1,
        value: 13153954.799999999,
      },
    ],
  },
  {
    name: "8031 Paris Collection",
    address: "8031 Paris Collection",
    price: 79802678,
    codeInternal: "237",
    year: "2016",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8031 Paris Collection",
        tax: 0.1,
        value: 111723749.19999999,
      },
    ],
  },
  {
    name: "4463 Miami Street",
    address: "4463 Miami Street",
    price: 31300422,
    codeInternal: "238",
    year: "1987",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4463 Miami Street",
        tax: 0.1,
        value: 43820590.8,
      },
    ],
  },
  {
    name: "6603 Quintas de Montreal",
    address: "6603 Quintas de Montreal",
    price: 84046522,
    codeInternal: "239",
    year: "1957",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6603 Quintas de Montreal",
        tax: 0.1,
        value: 117665130.8,
      },
    ],
  },
  {
    name: "4521 Los Angeles Place",
    address: "4521 Los Angeles Place",
    price: 96914625,
    codeInternal: "240",
    year: "2034",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4521 Los Angeles Place",
        tax: 0.1,
        value: 135680475,
      },
    ],
  },
  {
    name: "9970 Miami State",
    address: "9970 Miami State",
    price: 6063182,
    codeInternal: "241",
    year: "1964",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9970 Miami State",
        tax: 0.1,
        value: 8488454.799999999,
      },
    ],
  },
  {
    name: "4110 Parque Portofino",
    address: "4110 Parque Portofino",
    price: 89022553,
    codeInternal: "242",
    year: "1982",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4110 Parque Portofino",
        tax: 0.1,
        value: 124631574.19999999,
      },
    ],
  },
  {
    name: "2440 Villas de Barranquilla",
    address: "2440 Villas de Barranquilla",
    price: 40798644,
    codeInternal: "243",
    year: "2029",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2440 Villas de Barranquilla",
        tax: 0.1,
        value: 57118101.599999994,
      },
    ],
  },
  {
    name: "1396 Parque Cartagena",
    address: "1396 Parque Cartagena",
    price: 27531843,
    codeInternal: "244",
    year: "2031",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1396 Parque Cartagena",
        tax: 0.1,
        value: 38544580.199999996,
      },
    ],
  },
  {
    name: "1395 Miami State",
    address: "1395 Miami State",
    price: 93430099,
    codeInternal: "245",
    year: "2022",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1395 Miami State",
        tax: 0.1,
        value: 130802138.6,
      },
    ],
  },
  {
    name: "8505 Miami Place",
    address: "8505 Miami Place",
    price: 22305859,
    codeInternal: "246",
    year: "1917",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8505 Miami Place",
        tax: 0.1,
        value: 31228202.599999998,
      },
    ],
  },
  {
    name: "6370 Santa Marta Beach",
    address: "6370 Santa Marta Beach",
    price: 57174028,
    codeInternal: "247",
    year: "1975",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6370 Santa Marta Beach",
        tax: 0.1,
        value: 80043639.19999999,
      },
    ],
  },
  {
    name: "3957 Reservas de Portofino",
    address: "3957 Reservas de Portofino",
    price: 75235761,
    codeInternal: "248",
    year: "2037",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3957 Reservas de Portofino",
        tax: 0.1,
        value: 105330065.39999999,
      },
    ],
  },
  {
    name: "5886 Parque Santa Maria",
    address: "5886 Parque Santa Maria",
    price: 68228879,
    codeInternal: "249",
    year: "2006",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5886 Parque Santa Maria",
        tax: 0.1,
        value: 95520430.6,
      },
    ],
  },
  {
    name: "4416 Conjunto Residencial Portofino",
    address: "4416 Conjunto Residencial Portofino",
    price: 88464970,
    codeInternal: "250",
    year: "2019",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4416 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 123850957.99999999,
      },
    ],
  },
  {
    name: "8022 Villas de Cartagena",
    address: "8022 Villas de Cartagena",
    price: 25597225,
    codeInternal: "251",
    year: "2027",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8022 Villas de Cartagena",
        tax: 0.1,
        value: 35836115,
      },
    ],
  },
  {
    name: "4878 Parque Portofino",
    address: "4878 Parque Portofino",
    price: 73242581,
    codeInternal: "252",
    year: "2014",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4878 Parque Portofino",
        tax: 0.1,
        value: 102539613.39999999,
      },
    ],
  },
  {
    name: "1617 Santa Marta Villa",
    address: "1617 Santa Marta Villa",
    price: 2514244,
    codeInternal: "253",
    year: "1970",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1617 Santa Marta Villa",
        tax: 0.1,
        value: 3519941.5999999996,
      },
    ],
  },
  {
    name: "2175 Paris Terrace",
    address: "2175 Paris Terrace",
    price: 40658582,
    codeInternal: "254",
    year: "2013",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2175 Paris Terrace",
        tax: 0.1,
        value: 56922014.8,
      },
    ],
  },
  {
    name: "4748 Villas de Portofino",
    address: "4748 Villas de Portofino",
    price: 89563948,
    codeInternal: "255",
    year: "1972",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4748 Villas de Portofino",
        tax: 0.1,
        value: 125389527.19999999,
      },
    ],
  },
  {
    name: "8590 Quintas de Santa Maria",
    address: "8590 Quintas de Santa Maria",
    price: 36811732,
    codeInternal: "256",
    year: "2002",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8590 Quintas de Santa Maria",
        tax: 0.1,
        value: 51536424.8,
      },
    ],
  },
  {
    name: "9631 Miami Place",
    address: "9631 Miami Place",
    price: 79554626,
    codeInternal: "257",
    year: "1978",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9631 Miami Place",
        tax: 0.1,
        value: 111376476.39999999,
      },
    ],
  },
  {
    name: "3012 Villas de Cartagena",
    address: "3012 Villas de Cartagena",
    price: 79704176,
    codeInternal: "258",
    year: "1983",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3012 Villas de Cartagena",
        tax: 0.1,
        value: 111585846.39999999,
      },
    ],
  },
  {
    name: "8775 Manhattan Street",
    address: "8775 Manhattan Street",
    price: 11503191,
    codeInternal: "259",
    year: "1913",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8775 Manhattan Street",
        tax: 0.1,
        value: 16104467.399999999,
      },
    ],
  },
  {
    name: "7999 Paris Beach",
    address: "7999 Paris Beach",
    price: 12671369,
    codeInternal: "260",
    year: "2038",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7999 Paris Beach",
        tax: 0.1,
        value: 17739916.599999998,
      },
    ],
  },
  {
    name: "9200 Quintas de Santa Maria",
    address: "9200 Quintas de Santa Maria",
    price: 77224312,
    codeInternal: "261",
    year: "1956",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9200 Quintas de Santa Maria",
        tax: 0.1,
        value: 108114036.8,
      },
    ],
  },
  {
    name: "4198 Paris State",
    address: "4198 Paris State",
    price: 29403334,
    codeInternal: "262",
    year: "2044",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4198 Paris State",
        tax: 0.1,
        value: 41164667.599999994,
      },
    ],
  },
  {
    name: "7552 Los Angeles Villa",
    address: "7552 Los Angeles Villa",
    price: 91583916,
    codeInternal: "263",
    year: "2033",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7552 Los Angeles Villa",
        tax: 0.1,
        value: 128217482.39999999,
      },
    ],
  },
  {
    name: "2456 Quintas de Santa Maria",
    address: "2456 Quintas de Santa Maria",
    price: 51425883,
    codeInternal: "264",
    year: "1961",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2456 Quintas de Santa Maria",
        tax: 0.1,
        value: 71996236.19999999,
      },
    ],
  },
  {
    name: "3680 Villas de Portofino",
    address: "3680 Villas de Portofino",
    price: 38092125,
    codeInternal: "265",
    year: "1902",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3680 Villas de Portofino",
        tax: 0.1,
        value: 53328975,
      },
    ],
  },
  {
    name: "7623 Santa Marta Villa",
    address: "7623 Santa Marta Villa",
    price: 22205715,
    codeInternal: "266",
    year: "2032",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7623 Santa Marta Villa",
        tax: 0.1,
        value: 31088000.999999996,
      },
    ],
  },
  {
    name: "3693 Reservas de Santa Maria",
    address: "3693 Reservas de Santa Maria",
    price: 56846227,
    codeInternal: "267",
    year: "1931",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3693 Reservas de Santa Maria",
        tax: 0.1,
        value: 79584717.8,
      },
    ],
  },
  {
    name: "4618 Manhattan Collection",
    address: "4618 Manhattan Collection",
    price: 28299330,
    codeInternal: "268",
    year: "2028",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4618 Manhattan Collection",
        tax: 0.1,
        value: 39619062,
      },
    ],
  },
  {
    name: "1139 Villas de Barranquilla",
    address: "1139 Villas de Barranquilla",
    price: 61024837,
    codeInternal: "269",
    year: "1984",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1139 Villas de Barranquilla",
        tax: 0.1,
        value: 85434771.8,
      },
    ],
  },
  {
    name: "7426 Reservas de Montreal",
    address: "7426 Reservas de Montreal",
    price: 91977397,
    codeInternal: "270",
    year: "1984",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7426 Reservas de Montreal",
        tax: 0.1,
        value: 128768355.8,
      },
    ],
  },
  {
    name: "5643 Miami Avenue",
    address: "5643 Miami Avenue",
    price: 45877825,
    codeInternal: "271",
    year: "2049",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5643 Miami Avenue",
        tax: 0.1,
        value: 64228954.99999999,
      },
    ],
  },
  {
    name: "6386 Parque Portofino",
    address: "6386 Parque Portofino",
    price: 43372974,
    codeInternal: "272",
    year: "1909",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6386 Parque Portofino",
        tax: 0.1,
        value: 60722163.599999994,
      },
    ],
  },
  {
    name: "6265 Parque Santa Maria",
    address: "6265 Parque Santa Maria",
    price: 92674148,
    codeInternal: "273",
    year: "2033",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6265 Parque Santa Maria",
        tax: 0.1,
        value: 129743807.19999999,
      },
    ],
  },
  {
    name: "1764 Los Angeles Collection",
    address: "1764 Los Angeles Collection",
    price: 25288546,
    codeInternal: "274",
    year: "2024",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1764 Los Angeles Collection",
        tax: 0.1,
        value: 35403964.4,
      },
    ],
  },
  {
    name: "4720 Reservas de Portofino",
    address: "4720 Reservas de Portofino",
    price: 64479355,
    codeInternal: "275",
    year: "2017",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4720 Reservas de Portofino",
        tax: 0.1,
        value: 90271097,
      },
    ],
  },
  {
    name: "9161 Quintas de Cartagena",
    address: "9161 Quintas de Cartagena",
    price: 29513941,
    codeInternal: "276",
    year: "1963",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9161 Quintas de Cartagena",
        tax: 0.1,
        value: 41319517.4,
      },
    ],
  },
  {
    name: "1963 Villas de Santa Maria",
    address: "1963 Villas de Santa Maria",
    price: 31674206,
    codeInternal: "277",
    year: "1969",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1963 Villas de Santa Maria",
        tax: 0.1,
        value: 44343888.4,
      },
    ],
  },
  {
    name: "1069 Paris Street",
    address: "1069 Paris Street",
    price: 50398222,
    codeInternal: "278",
    year: "1951",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1069 Paris Street",
        tax: 0.1,
        value: 70557510.8,
      },
    ],
  },
  {
    name: "4454 Parque Cartagena",
    address: "4454 Parque Cartagena",
    price: 4870211,
    codeInternal: "279",
    year: "1938",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4454 Parque Cartagena",
        tax: 0.1,
        value: 6818295.399999999,
      },
    ],
  },
  {
    name: "6976 Conjunto Residencial Barranquilla",
    address: "6976 Conjunto Residencial Barranquilla",
    price: 48300955,
    codeInternal: "280",
    year: "2040",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6976 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 67621337,
      },
    ],
  },
  {
    name: "8504 Parque Cartagena",
    address: "8504 Parque Cartagena",
    price: 45016042,
    codeInternal: "281",
    year: "1979",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8504 Parque Cartagena",
        tax: 0.1,
        value: 63022458.8,
      },
    ],
  },
  {
    name: "3843 Conjunto Residencial Portofino",
    address: "3843 Conjunto Residencial Portofino",
    price: 10132458,
    codeInternal: "282",
    year: "2019",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3843 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 14185441.2,
      },
    ],
  },
  {
    name: "8158 Quintas de Barranquilla",
    address: "8158 Quintas de Barranquilla",
    price: 15959845,
    codeInternal: "283",
    year: "2002",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8158 Quintas de Barranquilla",
        tax: 0.1,
        value: 22343783,
      },
    ],
  },
  {
    name: "4880 Miami Real",
    address: "4880 Miami Real",
    price: 15494819,
    codeInternal: "284",
    year: "2020",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4880 Miami Real",
        tax: 0.1,
        value: 21692746.599999998,
      },
    ],
  },
  {
    name: "6117 Conjunto Residencial Barranquilla",
    address: "6117 Conjunto Residencial Barranquilla",
    price: 15461178,
    codeInternal: "285",
    year: "1943",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6117 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 21645649.2,
      },
    ],
  },
  {
    name: "5807 Los Angeles Street",
    address: "5807 Los Angeles Street",
    price: 84645298,
    codeInternal: "286",
    year: "2002",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5807 Los Angeles Street",
        tax: 0.1,
        value: 118503417.19999999,
      },
    ],
  },
  {
    name: "1169 Parque Barranquilla",
    address: "1169 Parque Barranquilla",
    price: 36061962,
    codeInternal: "287",
    year: "1924",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1169 Parque Barranquilla",
        tax: 0.1,
        value: 50486746.8,
      },
    ],
  },
  {
    name: "7416 Paris Towers",
    address: "7416 Paris Towers",
    price: 65534730,
    codeInternal: "288",
    year: "1907",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7416 Paris Towers",
        tax: 0.1,
        value: 91748622,
      },
    ],
  },
  {
    name: "6217 Miami Boulevard",
    address: "6217 Miami Boulevard",
    price: 42535262,
    codeInternal: "289",
    year: "2045",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6217 Miami Boulevard",
        tax: 0.1,
        value: 59549366.8,
      },
    ],
  },
  {
    name: "1485 Reservas de Montreal",
    address: "1485 Reservas de Montreal",
    price: 24979478,
    codeInternal: "290",
    year: "1910",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1485 Reservas de Montreal",
        tax: 0.1,
        value: 34971269.199999996,
      },
    ],
  },
  {
    name: "8577 Paris Beach",
    address: "8577 Paris Beach",
    price: 55776519,
    codeInternal: "291",
    year: "2020",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8577 Paris Beach",
        tax: 0.1,
        value: 78087126.6,
      },
    ],
  },
  {
    name: "8298 Reservas de Barranquilla",
    address: "8298 Reservas de Barranquilla",
    price: 7980423,
    codeInternal: "292",
    year: "2042",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8298 Reservas de Barranquilla",
        tax: 0.1,
        value: 11172592.2,
      },
    ],
  },
  {
    name: "2386 Reservas de Montreal",
    address: "2386 Reservas de Montreal",
    price: 97277192,
    codeInternal: "293",
    year: "1988",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2386 Reservas de Montreal",
        tax: 0.1,
        value: 136188068.79999998,
      },
    ],
  },
  {
    name: "7002 Paris Beach",
    address: "7002 Paris Beach",
    price: 84456522,
    codeInternal: "294",
    year: "2035",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7002 Paris Beach",
        tax: 0.1,
        value: 118239130.8,
      },
    ],
  },
  {
    name: "3945 Villas de Santa Maria",
    address: "3945 Villas de Santa Maria",
    price: 40493007,
    codeInternal: "295",
    year: "1952",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3945 Villas de Santa Maria",
        tax: 0.1,
        value: 56690209.8,
      },
    ],
  },
  {
    name: "8900 Parque Cartagena",
    address: "8900 Parque Cartagena",
    price: 32816230,
    codeInternal: "296",
    year: "1920",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8900 Parque Cartagena",
        tax: 0.1,
        value: 45942722,
      },
    ],
  },
  {
    name: "2430 Quintas de Santa Maria",
    address: "2430 Quintas de Santa Maria",
    price: 30361927,
    codeInternal: "297",
    year: "1943",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2430 Quintas de Santa Maria",
        tax: 0.1,
        value: 42506697.8,
      },
    ],
  },
  {
    name: "4915 Quintas de Portofino",
    address: "4915 Quintas de Portofino",
    price: 95511806,
    codeInternal: "298",
    year: "2020",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4915 Quintas de Portofino",
        tax: 0.1,
        value: 133716528.39999999,
      },
    ],
  },
  {
    name: "7919 Villas de Cartagena",
    address: "7919 Villas de Cartagena",
    price: 96786793,
    codeInternal: "299",
    year: "1959",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7919 Villas de Cartagena",
        tax: 0.1,
        value: 135501510.2,
      },
    ],
  },
  {
    name: "1924 Parque Portofino",
    address: "1924 Parque Portofino",
    price: 66321419,
    codeInternal: "300",
    year: "1965",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1924 Parque Portofino",
        tax: 0.1,
        value: 92849986.6,
      },
    ],
  },
  {
    name: "6472 Conjunto Residencial Portofino",
    address: "6472 Conjunto Residencial Portofino",
    price: 79131044,
    codeInternal: "301",
    year: "1971",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6472 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 110783461.6,
      },
    ],
  },
  {
    name: "3046 Quintas de Montreal",
    address: "3046 Quintas de Montreal",
    price: 63948727,
    codeInternal: "302",
    year: "1926",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3046 Quintas de Montreal",
        tax: 0.1,
        value: 89528217.8,
      },
    ],
  },
  {
    name: "7108 Manhattan Place",
    address: "7108 Manhattan Place",
    price: 36618014,
    codeInternal: "303",
    year: "2039",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7108 Manhattan Place",
        tax: 0.1,
        value: 51265219.599999994,
      },
    ],
  },
  {
    name: "9601 Reservas de Cartagena",
    address: "9601 Reservas de Cartagena",
    price: 85287327,
    codeInternal: "304",
    year: "1982",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9601 Reservas de Cartagena",
        tax: 0.1,
        value: 119402257.8,
      },
    ],
  },
  {
    name: "7000 Miami Beach",
    address: "7000 Miami Beach",
    price: 29072262,
    codeInternal: "305",
    year: "2009",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7000 Miami Beach",
        tax: 0.1,
        value: 40701166.8,
      },
    ],
  },
  {
    name: "8133 Manhattan Towers",
    address: "8133 Manhattan Towers",
    price: 29009941,
    codeInternal: "306",
    year: "1987",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8133 Manhattan Towers",
        tax: 0.1,
        value: 40613917.4,
      },
    ],
  },
  {
    name: "8651 Santa Marta Real",
    address: "8651 Santa Marta Real",
    price: 5663634,
    codeInternal: "307",
    year: "1918",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8651 Santa Marta Real",
        tax: 0.1,
        value: 7929087.6,
      },
    ],
  },
  {
    name: "7790 Conjunto Residencial Cartagena",
    address: "7790 Conjunto Residencial Cartagena",
    price: 58618592,
    codeInternal: "308",
    year: "1914",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7790 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 82066028.8,
      },
    ],
  },
  {
    name: "5979 Conjunto Residencial Cartagena",
    address: "5979 Conjunto Residencial Cartagena",
    price: 88500702,
    codeInternal: "309",
    year: "1965",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5979 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 123900982.8,
      },
    ],
  },
  {
    name: "6963 Miami Gardens",
    address: "6963 Miami Gardens",
    price: 1652699,
    codeInternal: "310",
    year: "1967",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6963 Miami Gardens",
        tax: 0.1,
        value: 2313778.5999999996,
      },
    ],
  },
  {
    name: "6152 Villas de Portofino",
    address: "6152 Villas de Portofino",
    price: 90052504,
    codeInternal: "311",
    year: "1956",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6152 Villas de Portofino",
        tax: 0.1,
        value: 126073505.6,
      },
    ],
  },
  {
    name: "8112 Manhattan Avenue",
    address: "8112 Manhattan Avenue",
    price: 60773124,
    codeInternal: "312",
    year: "1995",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8112 Manhattan Avenue",
        tax: 0.1,
        value: 85082373.6,
      },
    ],
  },
  {
    name: "4087 Paris Avenue",
    address: "4087 Paris Avenue",
    price: 42581419,
    codeInternal: "313",
    year: "1989",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4087 Paris Avenue",
        tax: 0.1,
        value: 59613986.599999994,
      },
    ],
  },
  {
    name: "6488 Santa Marta Beach",
    address: "6488 Santa Marta Beach",
    price: 12451171,
    codeInternal: "314",
    year: "1993",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6488 Santa Marta Beach",
        tax: 0.1,
        value: 17431639.4,
      },
    ],
  },
  {
    name: "1402 Los Angeles Place",
    address: "1402 Los Angeles Place",
    price: 42907751,
    codeInternal: "315",
    year: "1993",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1402 Los Angeles Place",
        tax: 0.1,
        value: 60070851.4,
      },
    ],
  },
  {
    name: "5286 Conjunto Residencial Barranquilla",
    address: "5286 Conjunto Residencial Barranquilla",
    price: 8707235,
    codeInternal: "316",
    year: "2000",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5286 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 12190129,
      },
    ],
  },
  {
    name: "7161 Santa Marta Collection",
    address: "7161 Santa Marta Collection",
    price: 17088569,
    codeInternal: "317",
    year: "1980",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7161 Santa Marta Collection",
        tax: 0.1,
        value: 23923996.599999998,
      },
    ],
  },
  {
    name: "9578 Los Angeles Gardens",
    address: "9578 Los Angeles Gardens",
    price: 75465559,
    codeInternal: "318",
    year: "1922",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9578 Los Angeles Gardens",
        tax: 0.1,
        value: 105651782.6,
      },
    ],
  },
  {
    name: "6856 Los Angeles Street",
    address: "6856 Los Angeles Street",
    price: 47728960,
    codeInternal: "319",
    year: "1941",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6856 Los Angeles Street",
        tax: 0.1,
        value: 66820543.99999999,
      },
    ],
  },
  {
    name: "4481 Manhattan Place",
    address: "4481 Manhattan Place",
    price: 4329815,
    codeInternal: "320",
    year: "1924",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4481 Manhattan Place",
        tax: 0.1,
        value: 6061741,
      },
    ],
  },
  {
    name: "1826 Villas de Santa Maria",
    address: "1826 Villas de Santa Maria",
    price: 41404750,
    codeInternal: "321",
    year: "2029",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1826 Villas de Santa Maria",
        tax: 0.1,
        value: 57966650,
      },
    ],
  },
  {
    name: "5673 Manhattan Real",
    address: "5673 Manhattan Real",
    price: 8811227,
    codeInternal: "322",
    year: "1928",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5673 Manhattan Real",
        tax: 0.1,
        value: 12335717.799999999,
      },
    ],
  },
  {
    name: "4095 Santa Marta Gardens",
    address: "4095 Santa Marta Gardens",
    price: 68660581,
    codeInternal: "323",
    year: "2038",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4095 Santa Marta Gardens",
        tax: 0.1,
        value: 96124813.39999999,
      },
    ],
  },
  {
    name: "8760 Santa Marta Terrace",
    address: "8760 Santa Marta Terrace",
    price: 95567281,
    codeInternal: "324",
    year: "1906",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8760 Santa Marta Terrace",
        tax: 0.1,
        value: 133794193.39999999,
      },
    ],
  },
  {
    name: "3484 Santa Marta Real",
    address: "3484 Santa Marta Real",
    price: 5026236,
    codeInternal: "325",
    year: "2033",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3484 Santa Marta Real",
        tax: 0.1,
        value: 7036730.399999999,
      },
    ],
  },
  {
    name: "5458 Los Angeles State",
    address: "5458 Los Angeles State",
    price: 187244,
    codeInternal: "326",
    year: "2000",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5458 Los Angeles State",
        tax: 0.1,
        value: 262141.59999999998,
      },
    ],
  },
  {
    name: "2961 Quintas de Portofino",
    address: "2961 Quintas de Portofino",
    price: 81325724,
    codeInternal: "327",
    year: "1934",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2961 Quintas de Portofino",
        tax: 0.1,
        value: 113856013.6,
      },
    ],
  },
  {
    name: "1286 Paris Collection",
    address: "1286 Paris Collection",
    price: 99301608,
    codeInternal: "328",
    year: "1920",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1286 Paris Collection",
        tax: 0.1,
        value: 139022251.2,
      },
    ],
  },
  {
    name: "7052 Santa Marta Collection",
    address: "7052 Santa Marta Collection",
    price: 39902078,
    codeInternal: "329",
    year: "1985",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7052 Santa Marta Collection",
        tax: 0.1,
        value: 55862909.199999996,
      },
    ],
  },
  {
    name: "2528 Santa Marta Avenue",
    address: "2528 Santa Marta Avenue",
    price: 74281927,
    codeInternal: "330",
    year: "2032",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2528 Santa Marta Avenue",
        tax: 0.1,
        value: 103994697.8,
      },
    ],
  },
  {
    name: "1356 Los Angeles Gardens",
    address: "1356 Los Angeles Gardens",
    price: 5483270,
    codeInternal: "331",
    year: "1996",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1356 Los Angeles Gardens",
        tax: 0.1,
        value: 7676577.999999999,
      },
    ],
  },
  {
    name: "5399 Los Angeles Villa",
    address: "5399 Los Angeles Villa",
    price: 27564145,
    codeInternal: "332",
    year: "2044",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5399 Los Angeles Villa",
        tax: 0.1,
        value: 38589803,
      },
    ],
  },
  {
    name: "7662 Paris State",
    address: "7662 Paris State",
    price: 29966865,
    codeInternal: "333",
    year: "1944",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7662 Paris State",
        tax: 0.1,
        value: 41953611,
      },
    ],
  },
  {
    name: "5736 Parque Barranquilla",
    address: "5736 Parque Barranquilla",
    price: 69110083,
    codeInternal: "334",
    year: "1975",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5736 Parque Barranquilla",
        tax: 0.1,
        value: 96754116.19999999,
      },
    ],
  },
  {
    name: "8683 Quintas de Portofino",
    address: "8683 Quintas de Portofino",
    price: 83226340,
    codeInternal: "335",
    year: "1970",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8683 Quintas de Portofino",
        tax: 0.1,
        value: 116516876,
      },
    ],
  },
  {
    name: "3770 Parque Montreal",
    address: "3770 Parque Montreal",
    price: 12220999,
    codeInternal: "336",
    year: "2030",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3770 Parque Montreal",
        tax: 0.1,
        value: 17109398.599999998,
      },
    ],
  },
  {
    name: "6343 Paris Place",
    address: "6343 Paris Place",
    price: 39474859,
    codeInternal: "337",
    year: "1925",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6343 Paris Place",
        tax: 0.1,
        value: 55264802.599999994,
      },
    ],
  },
  {
    name: "3991 Villas de Barranquilla",
    address: "3991 Villas de Barranquilla",
    price: 43938823,
    codeInternal: "338",
    year: "1960",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3991 Villas de Barranquilla",
        tax: 0.1,
        value: 61514352.199999996,
      },
    ],
  },
  {
    name: "2795 Villas de Portofino",
    address: "2795 Villas de Portofino",
    price: 96980938,
    codeInternal: "339",
    year: "2028",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2795 Villas de Portofino",
        tax: 0.1,
        value: 135773313.2,
      },
    ],
  },
  {
    name: "4322 Miami Collection",
    address: "4322 Miami Collection",
    price: 77998147,
    codeInternal: "340",
    year: "1931",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4322 Miami Collection",
        tax: 0.1,
        value: 109197405.8,
      },
    ],
  },
  {
    name: "8433 Parque Santa Maria",
    address: "8433 Parque Santa Maria",
    price: 90839575,
    codeInternal: "341",
    year: "1913",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8433 Parque Santa Maria",
        tax: 0.1,
        value: 127175404.99999999,
      },
    ],
  },
  {
    name: "7732 Villas de Barranquilla",
    address: "7732 Villas de Barranquilla",
    price: 94212696,
    codeInternal: "342",
    year: "1949",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7732 Villas de Barranquilla",
        tax: 0.1,
        value: 131897774.39999999,
      },
    ],
  },
  {
    name: "9221 Conjunto Residencial Cartagena",
    address: "9221 Conjunto Residencial Cartagena",
    price: 30804696,
    codeInternal: "343",
    year: "1988",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9221 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 43126574.4,
      },
    ],
  },
  {
    name: "2125 Parque Portofino",
    address: "2125 Parque Portofino",
    price: 1797586,
    codeInternal: "344",
    year: "1972",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2125 Parque Portofino",
        tax: 0.1,
        value: 2516620.4,
      },
    ],
  },
  {
    name: "4883 Villas de Portofino",
    address: "4883 Villas de Portofino",
    price: 95224231,
    codeInternal: "345",
    year: "1971",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4883 Villas de Portofino",
        tax: 0.1,
        value: 133313923.39999999,
      },
    ],
  },
  {
    name: "5432 Los Angeles State",
    address: "5432 Los Angeles State",
    price: 50229029,
    codeInternal: "346",
    year: "1932",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5432 Los Angeles State",
        tax: 0.1,
        value: 70320640.6,
      },
    ],
  },
  {
    name: "9420 Miami Boulevard",
    address: "9420 Miami Boulevard",
    price: 75114181,
    codeInternal: "347",
    year: "1932",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9420 Miami Boulevard",
        tax: 0.1,
        value: 105159853.39999999,
      },
    ],
  },
  {
    name: "9717 Santa Marta Collection",
    address: "9717 Santa Marta Collection",
    price: 12831159,
    codeInternal: "348",
    year: "1978",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9717 Santa Marta Collection",
        tax: 0.1,
        value: 17963622.599999998,
      },
    ],
  },
  {
    name: "2869 Miami Terrace",
    address: "2869 Miami Terrace",
    price: 61339840,
    codeInternal: "349",
    year: "1971",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2869 Miami Terrace",
        tax: 0.1,
        value: 85875776,
      },
    ],
  },
  {
    name: "8656 Reservas de Portofino",
    address: "8656 Reservas de Portofino",
    price: 58731404,
    codeInternal: "350",
    year: "2048",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8656 Reservas de Portofino",
        tax: 0.1,
        value: 82223965.6,
      },
    ],
  },
  {
    name: "4098 Conjunto Residencial Portofino",
    address: "4098 Conjunto Residencial Portofino",
    price: 24666833,
    codeInternal: "351",
    year: "2035",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4098 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 34533566.199999996,
      },
    ],
  },
  {
    name: "6339 Villas de Montreal",
    address: "6339 Villas de Montreal",
    price: 9676089,
    codeInternal: "352",
    year: "2009",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6339 Villas de Montreal",
        tax: 0.1,
        value: 13546524.6,
      },
    ],
  },
  {
    name: "6417 Manhattan Terrace",
    address: "6417 Manhattan Terrace",
    price: 5371429,
    codeInternal: "353",
    year: "2011",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6417 Manhattan Terrace",
        tax: 0.1,
        value: 7520000.6,
      },
    ],
  },
  {
    name: "5452 Villas de Barranquilla",
    address: "5452 Villas de Barranquilla",
    price: 78152161,
    codeInternal: "354",
    year: "1915",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5452 Villas de Barranquilla",
        tax: 0.1,
        value: 109413025.39999999,
      },
    ],
  },
  {
    name: "8661 Quintas de Cartagena",
    address: "8661 Quintas de Cartagena",
    price: 30105901,
    codeInternal: "355",
    year: "1916",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8661 Quintas de Cartagena",
        tax: 0.1,
        value: 42148261.4,
      },
    ],
  },
  {
    name: "1190 Manhattan Place",
    address: "1190 Manhattan Place",
    price: 30959580,
    codeInternal: "356",
    year: "1954",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1190 Manhattan Place",
        tax: 0.1,
        value: 43343412,
      },
    ],
  },
  {
    name: "4118 Conjunto Residencial Barranquilla",
    address: "4118 Conjunto Residencial Barranquilla",
    price: 39993792,
    codeInternal: "357",
    year: "2031",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4118 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 55991308.8,
      },
    ],
  },
  {
    name: "5907 Miami State",
    address: "5907 Miami State",
    price: 7317416,
    codeInternal: "358",
    year: "1907",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5907 Miami State",
        tax: 0.1,
        value: 10244382.399999999,
      },
    ],
  },
  {
    name: "1511 Conjunto Residencial Portofino",
    address: "1511 Conjunto Residencial Portofino",
    price: 62749083,
    codeInternal: "359",
    year: "1989",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1511 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 87848716.19999999,
      },
    ],
  },
  {
    name: "3245 Manhattan Villa",
    address: "3245 Manhattan Villa",
    price: 743139,
    codeInternal: "360",
    year: "1960",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3245 Manhattan Villa",
        tax: 0.1,
        value: 1040394.6,
      },
    ],
  },
  {
    name: "5221 Parque Santa Maria",
    address: "5221 Parque Santa Maria",
    price: 37830253,
    codeInternal: "361",
    year: "2004",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5221 Parque Santa Maria",
        tax: 0.1,
        value: 52962354.199999996,
      },
    ],
  },
  {
    name: "8118 Reservas de Santa Maria",
    address: "8118 Reservas de Santa Maria",
    price: 46246443,
    codeInternal: "362",
    year: "1936",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8118 Reservas de Santa Maria",
        tax: 0.1,
        value: 64745020.199999996,
      },
    ],
  },
  {
    name: "3247 Santa Marta Street",
    address: "3247 Santa Marta Street",
    price: 60356203,
    codeInternal: "363",
    year: "2026",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3247 Santa Marta Street",
        tax: 0.1,
        value: 84498684.19999999,
      },
    ],
  },
  {
    name: "6996 Miami Collection",
    address: "6996 Miami Collection",
    price: 41037928,
    codeInternal: "364",
    year: "1908",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6996 Miami Collection",
        tax: 0.1,
        value: 57453099.199999996,
      },
    ],
  },
  {
    name: "5272 Quintas de Santa Maria",
    address: "5272 Quintas de Santa Maria",
    price: 74648263,
    codeInternal: "365",
    year: "1967",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5272 Quintas de Santa Maria",
        tax: 0.1,
        value: 104507568.19999999,
      },
    ],
  },
  {
    name: "9516 Parque Montreal",
    address: "9516 Parque Montreal",
    price: 57340379,
    codeInternal: "366",
    year: "1907",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9516 Parque Montreal",
        tax: 0.1,
        value: 80276530.6,
      },
    ],
  },
  {
    name: "8822 Quintas de Barranquilla",
    address: "8822 Quintas de Barranquilla",
    price: 74929483,
    codeInternal: "367",
    year: "1990",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8822 Quintas de Barranquilla",
        tax: 0.1,
        value: 104901276.19999999,
      },
    ],
  },
  {
    name: "8201 Reservas de Portofino",
    address: "8201 Reservas de Portofino",
    price: 57575169,
    codeInternal: "368",
    year: "1938",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8201 Reservas de Portofino",
        tax: 0.1,
        value: 80605236.6,
      },
    ],
  },
  {
    name: "1649 Parque Montreal",
    address: "1649 Parque Montreal",
    price: 75543746,
    codeInternal: "369",
    year: "2040",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1649 Parque Montreal",
        tax: 0.1,
        value: 105761244.39999999,
      },
    ],
  },
  {
    name: "3641 Santa Marta Avenue",
    address: "3641 Santa Marta Avenue",
    price: 90095332,
    codeInternal: "370",
    year: "1959",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3641 Santa Marta Avenue",
        tax: 0.1,
        value: 126133464.8,
      },
    ],
  },
  {
    name: "5705 Paris Beach",
    address: "5705 Paris Beach",
    price: 65414288,
    codeInternal: "371",
    year: "1920",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5705 Paris Beach",
        tax: 0.1,
        value: 91580003.19999999,
      },
    ],
  },
  {
    name: "8214 Paris Real",
    address: "8214 Paris Real",
    price: 3885589,
    codeInternal: "372",
    year: "1957",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8214 Paris Real",
        tax: 0.1,
        value: 5439824.6,
      },
    ],
  },
  {
    name: "9220 Villas de Santa Maria",
    address: "9220 Villas de Santa Maria",
    price: 19194183,
    codeInternal: "373",
    year: "2042",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9220 Villas de Santa Maria",
        tax: 0.1,
        value: 26871856.2,
      },
    ],
  },
  {
    name: "2757 Paris Avenue",
    address: "2757 Paris Avenue",
    price: 61584114,
    codeInternal: "374",
    year: "2019",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2757 Paris Avenue",
        tax: 0.1,
        value: 86217759.6,
      },
    ],
  },
  {
    name: "1455 Santa Marta Real",
    address: "1455 Santa Marta Real",
    price: 23740245,
    codeInternal: "375",
    year: "1971",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1455 Santa Marta Real",
        tax: 0.1,
        value: 33236342.999999996,
      },
    ],
  },
  {
    name: "8800 Parque Cartagena",
    address: "8800 Parque Cartagena",
    price: 17561464,
    codeInternal: "376",
    year: "2029",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8800 Parque Cartagena",
        tax: 0.1,
        value: 24586049.599999998,
      },
    ],
  },
  {
    name: "4401 Santa Marta Collection",
    address: "4401 Santa Marta Collection",
    price: 56162436,
    codeInternal: "377",
    year: "2037",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4401 Santa Marta Collection",
        tax: 0.1,
        value: 78627410.39999999,
      },
    ],
  },
  {
    name: "3390 Parque Cartagena",
    address: "3390 Parque Cartagena",
    price: 34418592,
    codeInternal: "378",
    year: "1958",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3390 Parque Cartagena",
        tax: 0.1,
        value: 48186028.8,
      },
    ],
  },
  {
    name: "2864 Paris Collection",
    address: "2864 Paris Collection",
    price: 86025337,
    codeInternal: "379",
    year: "1935",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2864 Paris Collection",
        tax: 0.1,
        value: 120435471.8,
      },
    ],
  },
  {
    name: "6510 Parque Barranquilla",
    address: "6510 Parque Barranquilla",
    price: 11869393,
    codeInternal: "380",
    year: "1939",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6510 Parque Barranquilla",
        tax: 0.1,
        value: 16617150.2,
      },
    ],
  },
  {
    name: "6812 Parque Cartagena",
    address: "6812 Parque Cartagena",
    price: 41817586,
    codeInternal: "381",
    year: "1961",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6812 Parque Cartagena",
        tax: 0.1,
        value: 58544620.4,
      },
    ],
  },
  {
    name: "1010 Villas de Montreal",
    address: "1010 Villas de Montreal",
    price: 42472722,
    codeInternal: "382",
    year: "1933",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1010 Villas de Montreal",
        tax: 0.1,
        value: 59461810.8,
      },
    ],
  },
  {
    name: "4649 Quintas de Montreal",
    address: "4649 Quintas de Montreal",
    price: 76447324,
    codeInternal: "383",
    year: "1929",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4649 Quintas de Montreal",
        tax: 0.1,
        value: 107026253.6,
      },
    ],
  },
  {
    name: "6431 Reservas de Portofino",
    address: "6431 Reservas de Portofino",
    price: 57065939,
    codeInternal: "384",
    year: "2018",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6431 Reservas de Portofino",
        tax: 0.1,
        value: 79892314.6,
      },
    ],
  },
  {
    name: "1734 Villas de Barranquilla",
    address: "1734 Villas de Barranquilla",
    price: 69865440,
    codeInternal: "385",
    year: "1926",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1734 Villas de Barranquilla",
        tax: 0.1,
        value: 97811616,
      },
    ],
  },
  {
    name: "2480 Santa Marta Avenue",
    address: "2480 Santa Marta Avenue",
    price: 55580388,
    codeInternal: "386",
    year: "2039",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2480 Santa Marta Avenue",
        tax: 0.1,
        value: 77812543.19999999,
      },
    ],
  },
  {
    name: "4368 Miami Towers",
    address: "4368 Miami Towers",
    price: 8972764,
    codeInternal: "387",
    year: "2047",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4368 Miami Towers",
        tax: 0.1,
        value: 12561869.6,
      },
    ],
  },
  {
    name: "3688 Manhattan Gardens",
    address: "3688 Manhattan Gardens",
    price: 70062838,
    codeInternal: "388",
    year: "1941",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3688 Manhattan Gardens",
        tax: 0.1,
        value: 98087973.19999999,
      },
    ],
  },
  {
    name: "1936 Miami Avenue",
    address: "1936 Miami Avenue",
    price: 79868665,
    codeInternal: "389",
    year: "1937",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1936 Miami Avenue",
        tax: 0.1,
        value: 111816131,
      },
    ],
  },
  {
    name: "5653 Villas de Portofino",
    address: "5653 Villas de Portofino",
    price: 72453838,
    codeInternal: "390",
    year: "1940",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5653 Villas de Portofino",
        tax: 0.1,
        value: 101435373.19999999,
      },
    ],
  },
  {
    name: "4015 Santa Marta Towers",
    address: "4015 Santa Marta Towers",
    price: 94877220,
    codeInternal: "391",
    year: "1923",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4015 Santa Marta Towers",
        tax: 0.1,
        value: 132828107.99999999,
      },
    ],
  },
  {
    name: "5991 Los Angeles Collection",
    address: "5991 Los Angeles Collection",
    price: 68009466,
    codeInternal: "392",
    year: "2044",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5991 Los Angeles Collection",
        tax: 0.1,
        value: 95213252.39999999,
      },
    ],
  },
  {
    name: "5449 Conjunto Residencial Montreal",
    address: "5449 Conjunto Residencial Montreal",
    price: 90915137,
    codeInternal: "393",
    year: "1962",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5449 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 127281191.8,
      },
    ],
  },
  {
    name: "4583 Miami Avenue",
    address: "4583 Miami Avenue",
    price: 54509739,
    codeInternal: "394",
    year: "1916",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4583 Miami Avenue",
        tax: 0.1,
        value: 76313634.6,
      },
    ],
  },
  {
    name: "4090 Manhattan Gardens",
    address: "4090 Manhattan Gardens",
    price: 73798158,
    codeInternal: "395",
    year: "1928",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4090 Manhattan Gardens",
        tax: 0.1,
        value: 103317421.19999999,
      },
    ],
  },
  {
    name: "6605 Manhattan Boulevard",
    address: "6605 Manhattan Boulevard",
    price: 9819462,
    codeInternal: "396",
    year: "1968",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6605 Manhattan Boulevard",
        tax: 0.1,
        value: 13747246.799999999,
      },
    ],
  },
  {
    name: "7527 Conjunto Residencial Montreal",
    address: "7527 Conjunto Residencial Montreal",
    price: 88653498,
    codeInternal: "397",
    year: "1960",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7527 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 124114897.19999999,
      },
    ],
  },
  {
    name: "3363 Santa Marta Real",
    address: "3363 Santa Marta Real",
    price: 99238474,
    codeInternal: "398",
    year: "2026",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3363 Santa Marta Real",
        tax: 0.1,
        value: 138933863.6,
      },
    ],
  },
  {
    name: "6334 Paris Boulevard",
    address: "6334 Paris Boulevard",
    price: 19659590,
    codeInternal: "399",
    year: "1926",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6334 Paris Boulevard",
        tax: 0.1,
        value: 27523426,
      },
    ],
  },
  {
    name: "8660 Conjunto Residencial Santa Maria",
    address: "8660 Conjunto Residencial Santa Maria",
    price: 47062733,
    codeInternal: "400",
    year: "2017",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8660 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 65887826.199999996,
      },
    ],
  },
  {
    name: "7195 Parque Portofino",
    address: "7195 Parque Portofino",
    price: 63380230,
    codeInternal: "401",
    year: "1955",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7195 Parque Portofino",
        tax: 0.1,
        value: 88732322,
      },
    ],
  },
  {
    name: "5082 Reservas de Portofino",
    address: "5082 Reservas de Portofino",
    price: 78471821,
    codeInternal: "402",
    year: "2015",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5082 Reservas de Portofino",
        tax: 0.1,
        value: 109860549.39999999,
      },
    ],
  },
  {
    name: "3382 Los Angeles Terrace",
    address: "3382 Los Angeles Terrace",
    price: 5227837,
    codeInternal: "403",
    year: "1931",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3382 Los Angeles Terrace",
        tax: 0.1,
        value: 7318971.8,
      },
    ],
  },
  {
    name: "4342 Quintas de Cartagena",
    address: "4342 Quintas de Cartagena",
    price: 43383377,
    codeInternal: "404",
    year: "1901",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4342 Quintas de Cartagena",
        tax: 0.1,
        value: 60736727.8,
      },
    ],
  },
  {
    name: "2174 Miami Boulevard",
    address: "2174 Miami Boulevard",
    price: 63331483,
    codeInternal: "405",
    year: "1995",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2174 Miami Boulevard",
        tax: 0.1,
        value: 88664076.19999999,
      },
    ],
  },
  {
    name: "8212 Santa Marta Villa",
    address: "8212 Santa Marta Villa",
    price: 2318948,
    codeInternal: "406",
    year: "1940",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8212 Santa Marta Villa",
        tax: 0.1,
        value: 3246527.1999999997,
      },
    ],
  },
  {
    name: "3620 Paris Beach",
    address: "3620 Paris Beach",
    price: 22024054,
    codeInternal: "407",
    year: "1911",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3620 Paris Beach",
        tax: 0.1,
        value: 30833675.599999998,
      },
    ],
  },
  {
    name: "8518 Quintas de Barranquilla",
    address: "8518 Quintas de Barranquilla",
    price: 90991535,
    codeInternal: "408",
    year: "2023",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8518 Quintas de Barranquilla",
        tax: 0.1,
        value: 127388148.99999999,
      },
    ],
  },
  {
    name: "2993 Reservas de Portofino",
    address: "2993 Reservas de Portofino",
    price: 93022566,
    codeInternal: "409",
    year: "1928",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2993 Reservas de Portofino",
        tax: 0.1,
        value: 130231592.39999999,
      },
    ],
  },
  {
    name: "3866 Reservas de Portofino",
    address: "3866 Reservas de Portofino",
    price: 18190037,
    codeInternal: "410",
    year: "1988",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3866 Reservas de Portofino",
        tax: 0.1,
        value: 25466051.799999997,
      },
    ],
  },
  {
    name: "9000 Paris Villa",
    address: "9000 Paris Villa",
    price: 16864575,
    codeInternal: "411",
    year: "1930",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9000 Paris Villa",
        tax: 0.1,
        value: 23610405,
      },
    ],
  },
  {
    name: "1162 Quintas de Portofino",
    address: "1162 Quintas de Portofino",
    price: 3142858,
    codeInternal: "412",
    year: "2002",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1162 Quintas de Portofino",
        tax: 0.1,
        value: 4400001.2,
      },
    ],
  },
  {
    name: "4096 Santa Marta State",
    address: "4096 Santa Marta State",
    price: 68247950,
    codeInternal: "413",
    year: "1930",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4096 Santa Marta State",
        tax: 0.1,
        value: 95547130,
      },
    ],
  },
  {
    name: "8559 Paris Place",
    address: "8559 Paris Place",
    price: 21851395,
    codeInternal: "414",
    year: "1963",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8559 Paris Place",
        tax: 0.1,
        value: 30591952.999999996,
      },
    ],
  },
  {
    name: "2891 Santa Marta State",
    address: "2891 Santa Marta State",
    price: 30839758,
    codeInternal: "415",
    year: "2006",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2891 Santa Marta State",
        tax: 0.1,
        value: 43175661.199999996,
      },
    ],
  },
  {
    name: "6028 Parque Cartagena",
    address: "6028 Parque Cartagena",
    price: 55957753,
    codeInternal: "416",
    year: "1979",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6028 Parque Cartagena",
        tax: 0.1,
        value: 78340854.19999999,
      },
    ],
  },
  {
    name: "6226 Conjunto Residencial Barranquilla",
    address: "6226 Conjunto Residencial Barranquilla",
    price: 83393057,
    codeInternal: "417",
    year: "1903",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6226 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 116750279.8,
      },
    ],
  },
  {
    name: "3692 Los Angeles Avenue",
    address: "3692 Los Angeles Avenue",
    price: 34908744,
    codeInternal: "418",
    year: "1980",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3692 Los Angeles Avenue",
        tax: 0.1,
        value: 48872241.599999994,
      },
    ],
  },
  {
    name: "2262 Paris State",
    address: "2262 Paris State",
    price: 48768188,
    codeInternal: "419",
    year: "1964",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2262 Paris State",
        tax: 0.1,
        value: 68275463.2,
      },
    ],
  },
  {
    name: "4369 Quintas de Santa Maria",
    address: "4369 Quintas de Santa Maria",
    price: 14221686,
    codeInternal: "420",
    year: "2021",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4369 Quintas de Santa Maria",
        tax: 0.1,
        value: 19910360.4,
      },
    ],
  },
  {
    name: "9327 Paris Place",
    address: "9327 Paris Place",
    price: 28101602,
    codeInternal: "421",
    year: "1985",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9327 Paris Place",
        tax: 0.1,
        value: 39342242.8,
      },
    ],
  },
  {
    name: "1349 Reservas de Montreal",
    address: "1349 Reservas de Montreal",
    price: 93047090,
    codeInternal: "422",
    year: "1948",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1349 Reservas de Montreal",
        tax: 0.1,
        value: 130265925.99999999,
      },
    ],
  },
  {
    name: "6680 Los Angeles Street",
    address: "6680 Los Angeles Street",
    price: 72208716,
    codeInternal: "423",
    year: "1925",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6680 Los Angeles Street",
        tax: 0.1,
        value: 101092202.39999999,
      },
    ],
  },
  {
    name: "4648 Parque Barranquilla",
    address: "4648 Parque Barranquilla",
    price: 34679829,
    codeInternal: "424",
    year: "2014",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4648 Parque Barranquilla",
        tax: 0.1,
        value: 48551760.599999994,
      },
    ],
  },
  {
    name: "5754 Manhattan Collection",
    address: "5754 Manhattan Collection",
    price: 46089422,
    codeInternal: "425",
    year: "2024",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5754 Manhattan Collection",
        tax: 0.1,
        value: 64525190.8,
      },
    ],
  },
  {
    name: "9760 Paris Collection",
    address: "9760 Paris Collection",
    price: 50036222,
    codeInternal: "426",
    year: "1928",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9760 Paris Collection",
        tax: 0.1,
        value: 70050710.8,
      },
    ],
  },
  {
    name: "2070 Santa Marta Villa",
    address: "2070 Santa Marta Villa",
    price: 7844104,
    codeInternal: "427",
    year: "2030",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2070 Santa Marta Villa",
        tax: 0.1,
        value: 10981745.6,
      },
    ],
  },
  {
    name: "6354 Santa Marta Villa",
    address: "6354 Santa Marta Villa",
    price: 19477313,
    codeInternal: "428",
    year: "2016",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6354 Santa Marta Villa",
        tax: 0.1,
        value: 27268238.2,
      },
    ],
  },
  {
    name: "9057 Reservas de Portofino",
    address: "9057 Reservas de Portofino",
    price: 84137375,
    codeInternal: "429",
    year: "2003",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9057 Reservas de Portofino",
        tax: 0.1,
        value: 117792324.99999999,
      },
    ],
  },
  {
    name: "5071 Los Angeles Collection",
    address: "5071 Los Angeles Collection",
    price: 2875607,
    codeInternal: "430",
    year: "1900",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5071 Los Angeles Collection",
        tax: 0.1,
        value: 4025849.8,
      },
    ],
  },
  {
    name: "6873 Quintas de Cartagena",
    address: "6873 Quintas de Cartagena",
    price: 7441932,
    codeInternal: "431",
    year: "1917",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6873 Quintas de Cartagena",
        tax: 0.1,
        value: 10418704.799999999,
      },
    ],
  },
  {
    name: "7839 Manhattan Towers",
    address: "7839 Manhattan Towers",
    price: 54036883,
    codeInternal: "432",
    year: "1909",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7839 Manhattan Towers",
        tax: 0.1,
        value: 75651636.19999999,
      },
    ],
  },
  {
    name: "2583 Paris Gardens",
    address: "2583 Paris Gardens",
    price: 34439381,
    codeInternal: "433",
    year: "1991",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2583 Paris Gardens",
        tax: 0.1,
        value: 48215133.4,
      },
    ],
  },
  {
    name: "8801 Paris Towers",
    address: "8801 Paris Towers",
    price: 67102824,
    codeInternal: "434",
    year: "2006",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8801 Paris Towers",
        tax: 0.1,
        value: 93943953.6,
      },
    ],
  },
  {
    name: "2813 Conjunto Residencial Barranquilla",
    address: "2813 Conjunto Residencial Barranquilla",
    price: 12695919,
    codeInternal: "435",
    year: "1916",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2813 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 17774286.599999998,
      },
    ],
  },
  {
    name: "1675 Quintas de Barranquilla",
    address: "1675 Quintas de Barranquilla",
    price: 19289009,
    codeInternal: "436",
    year: "1931",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1675 Quintas de Barranquilla",
        tax: 0.1,
        value: 27004612.599999998,
      },
    ],
  },
  {
    name: "4806 Santa Marta Towers",
    address: "4806 Santa Marta Towers",
    price: 83661700,
    codeInternal: "437",
    year: "2033",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4806 Santa Marta Towers",
        tax: 0.1,
        value: 117126380,
      },
    ],
  },
  {
    name: "7545 Paris Gardens",
    address: "7545 Paris Gardens",
    price: 81040289,
    codeInternal: "438",
    year: "1986",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7545 Paris Gardens",
        tax: 0.1,
        value: 113456404.6,
      },
    ],
  },
  {
    name: "5804 Manhattan Boulevard",
    address: "5804 Manhattan Boulevard",
    price: 40027352,
    codeInternal: "439",
    year: "2044",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5804 Manhattan Boulevard",
        tax: 0.1,
        value: 56038292.8,
      },
    ],
  },
  {
    name: "6782 Reservas de Portofino",
    address: "6782 Reservas de Portofino",
    price: 74569991,
    codeInternal: "440",
    year: "2048",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6782 Reservas de Portofino",
        tax: 0.1,
        value: 104397987.39999999,
      },
    ],
  },
  {
    name: "6934 Los Angeles Street",
    address: "6934 Los Angeles Street",
    price: 97463402,
    codeInternal: "441",
    year: "1964",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6934 Los Angeles Street",
        tax: 0.1,
        value: 136448762.79999998,
      },
    ],
  },
  {
    name: "8698 Conjunto Residencial Santa Maria",
    address: "8698 Conjunto Residencial Santa Maria",
    price: 76610801,
    codeInternal: "442",
    year: "1965",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8698 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 107255121.39999999,
      },
    ],
  },
  {
    name: "5991 Los Angeles Place",
    address: "5991 Los Angeles Place",
    price: 57535073,
    codeInternal: "443",
    year: "1998",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5991 Los Angeles Place",
        tax: 0.1,
        value: 80549102.19999999,
      },
    ],
  },
  {
    name: "1387 Parque Cartagena",
    address: "1387 Parque Cartagena",
    price: 12668682,
    codeInternal: "444",
    year: "2025",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1387 Parque Cartagena",
        tax: 0.1,
        value: 17736154.799999997,
      },
    ],
  },
  {
    name: "5573 Conjunto Residencial Portofino",
    address: "5573 Conjunto Residencial Portofino",
    price: 51902559,
    codeInternal: "445",
    year: "1975",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5573 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 72663582.6,
      },
    ],
  },
  {
    name: "9099 Paris Gardens",
    address: "9099 Paris Gardens",
    price: 76630598,
    codeInternal: "446",
    year: "1907",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9099 Paris Gardens",
        tax: 0.1,
        value: 107282837.19999999,
      },
    ],
  },
  {
    name: "2200 Miami Avenue",
    address: "2200 Miami Avenue",
    price: 22179181,
    codeInternal: "447",
    year: "1931",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2200 Miami Avenue",
        tax: 0.1,
        value: 31050853.4,
      },
    ],
  },
  {
    name: "5154 Conjunto Residencial Montreal",
    address: "5154 Conjunto Residencial Montreal",
    price: 10805522,
    codeInternal: "448",
    year: "1931",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5154 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 15127730.799999999,
      },
    ],
  },
  {
    name: "5851 Manhattan Street",
    address: "5851 Manhattan Street",
    price: 13378790,
    codeInternal: "449",
    year: "1927",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5851 Manhattan Street",
        tax: 0.1,
        value: 18730306,
      },
    ],
  },
  {
    name: "3077 Villas de Barranquilla",
    address: "3077 Villas de Barranquilla",
    price: 95233644,
    codeInternal: "450",
    year: "2016",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3077 Villas de Barranquilla",
        tax: 0.1,
        value: 133327101.6,
      },
    ],
  },
  {
    name: "9075 Villas de Montreal",
    address: "9075 Villas de Montreal",
    price: 68060438,
    codeInternal: "451",
    year: "1915",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9075 Villas de Montreal",
        tax: 0.1,
        value: 95284613.19999999,
      },
    ],
  },
  {
    name: "1379 Quintas de Santa Maria",
    address: "1379 Quintas de Santa Maria",
    price: 14377135,
    codeInternal: "452",
    year: "2008",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1379 Quintas de Santa Maria",
        tax: 0.1,
        value: 20127989,
      },
    ],
  },
  {
    name: "4818 Paris Avenue",
    address: "4818 Paris Avenue",
    price: 35488945,
    codeInternal: "453",
    year: "1916",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4818 Paris Avenue",
        tax: 0.1,
        value: 49684523,
      },
    ],
  },
  {
    name: "2718 Manhattan Towers",
    address: "2718 Manhattan Towers",
    price: 54287749,
    codeInternal: "454",
    year: "1989",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2718 Manhattan Towers",
        tax: 0.1,
        value: 76002848.6,
      },
    ],
  },
  {
    name: "5394 Paris Terrace",
    address: "5394 Paris Terrace",
    price: 69592396,
    codeInternal: "455",
    year: "2022",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5394 Paris Terrace",
        tax: 0.1,
        value: 97429354.39999999,
      },
    ],
  },
  {
    name: "8483 Manhattan State",
    address: "8483 Manhattan State",
    price: 75644457,
    codeInternal: "456",
    year: "1969",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8483 Manhattan State",
        tax: 0.1,
        value: 105902239.8,
      },
    ],
  },
  {
    name: "7752 Manhattan Gardens",
    address: "7752 Manhattan Gardens",
    price: 58579388,
    codeInternal: "457",
    year: "2015",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7752 Manhattan Gardens",
        tax: 0.1,
        value: 82011143.19999999,
      },
    ],
  },
  {
    name: "5368 Los Angeles Beach",
    address: "5368 Los Angeles Beach",
    price: 73775839,
    codeInternal: "458",
    year: "2050",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5368 Los Angeles Beach",
        tax: 0.1,
        value: 103286174.6,
      },
    ],
  },
  {
    name: "4927 Manhattan Beach",
    address: "4927 Manhattan Beach",
    price: 8647618,
    codeInternal: "459",
    year: "2001",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4927 Manhattan Beach",
        tax: 0.1,
        value: 12106665.2,
      },
    ],
  },
  {
    name: "4413 Los Angeles Towers",
    address: "4413 Los Angeles Towers",
    price: 43514833,
    codeInternal: "460",
    year: "2039",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4413 Los Angeles Towers",
        tax: 0.1,
        value: 60920766.199999996,
      },
    ],
  },
  {
    name: "3428 Parque Barranquilla",
    address: "3428 Parque Barranquilla",
    price: 98711986,
    codeInternal: "461",
    year: "1956",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3428 Parque Barranquilla",
        tax: 0.1,
        value: 138196780.4,
      },
    ],
  },
  {
    name: "7137 Paris Real",
    address: "7137 Paris Real",
    price: 47762344,
    codeInternal: "462",
    year: "2025",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7137 Paris Real",
        tax: 0.1,
        value: 66867281.599999994,
      },
    ],
  },
  {
    name: "1596 Parque Santa Maria",
    address: "1596 Parque Santa Maria",
    price: 35985859,
    codeInternal: "463",
    year: "1932",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1596 Parque Santa Maria",
        tax: 0.1,
        value: 50380202.599999994,
      },
    ],
  },
  {
    name: "1559 Villas de Santa Maria",
    address: "1559 Villas de Santa Maria",
    price: 7104377,
    codeInternal: "464",
    year: "2050",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1559 Villas de Santa Maria",
        tax: 0.1,
        value: 9946127.799999999,
      },
    ],
  },
  {
    name: "6273 Quintas de Barranquilla",
    address: "6273 Quintas de Barranquilla",
    price: 42481271,
    codeInternal: "465",
    year: "1931",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6273 Quintas de Barranquilla",
        tax: 0.1,
        value: 59473779.4,
      },
    ],
  },
  {
    name: "5719 Quintas de Montreal",
    address: "5719 Quintas de Montreal",
    price: 72240974,
    codeInternal: "466",
    year: "1954",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5719 Quintas de Montreal",
        tax: 0.1,
        value: 101137363.6,
      },
    ],
  },
  {
    name: "5421 Los Angeles Terrace",
    address: "5421 Los Angeles Terrace",
    price: 89068260,
    codeInternal: "467",
    year: "1942",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5421 Los Angeles Terrace",
        tax: 0.1,
        value: 124695563.99999999,
      },
    ],
  },
  {
    name: "1804 Reservas de Cartagena",
    address: "1804 Reservas de Cartagena",
    price: 59935108,
    codeInternal: "468",
    year: "1969",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1804 Reservas de Cartagena",
        tax: 0.1,
        value: 83909151.19999999,
      },
    ],
  },
  {
    name: "9385 Manhattan Beach",
    address: "9385 Manhattan Beach",
    price: 93229980,
    codeInternal: "469",
    year: "1951",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9385 Manhattan Beach",
        tax: 0.1,
        value: 130521971.99999999,
      },
    ],
  },
  {
    name: "8475 Parque Montreal",
    address: "8475 Parque Montreal",
    price: 27152732,
    codeInternal: "470",
    year: "1952",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8475 Parque Montreal",
        tax: 0.1,
        value: 38013824.8,
      },
    ],
  },
  {
    name: "5994 Miami Beach",
    address: "5994 Miami Beach",
    price: 14906316,
    codeInternal: "471",
    year: "1991",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5994 Miami Beach",
        tax: 0.1,
        value: 20868842.4,
      },
    ],
  },
  {
    name: "6767 Parque Montreal",
    address: "6767 Parque Montreal",
    price: 28152831,
    codeInternal: "472",
    year: "1928",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6767 Parque Montreal",
        tax: 0.1,
        value: 39413963.4,
      },
    ],
  },
  {
    name: "6638 Reservas de Montreal",
    address: "6638 Reservas de Montreal",
    price: 18179326,
    codeInternal: "473",
    year: "1923",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6638 Reservas de Montreal",
        tax: 0.1,
        value: 25451056.4,
      },
    ],
  },
  {
    name: "2983 Miami Collection",
    address: "2983 Miami Collection",
    price: 29848020,
    codeInternal: "474",
    year: "1902",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2983 Miami Collection",
        tax: 0.1,
        value: 41787228,
      },
    ],
  },
  {
    name: "2072 Miami Gardens",
    address: "2072 Miami Gardens",
    price: 13655135,
    codeInternal: "475",
    year: "2016",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2072 Miami Gardens",
        tax: 0.1,
        value: 19117189,
      },
    ],
  },
  {
    name: "8019 Parque Santa Maria",
    address: "8019 Parque Santa Maria",
    price: 83537052,
    codeInternal: "476",
    year: "1979",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8019 Parque Santa Maria",
        tax: 0.1,
        value: 116951872.8,
      },
    ],
  },
  {
    name: "5799 Los Angeles Collection",
    address: "5799 Los Angeles Collection",
    price: 24603327,
    codeInternal: "477",
    year: "2010",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5799 Los Angeles Collection",
        tax: 0.1,
        value: 34444657.8,
      },
    ],
  },
  {
    name: "1555 Conjunto Residencial Portofino",
    address: "1555 Conjunto Residencial Portofino",
    price: 37092753,
    codeInternal: "478",
    year: "1982",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1555 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 51929854.199999996,
      },
    ],
  },
  {
    name: "6870 Santa Marta Street",
    address: "6870 Santa Marta Street",
    price: 55886300,
    codeInternal: "479",
    year: "1902",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6870 Santa Marta Street",
        tax: 0.1,
        value: 78240820,
      },
    ],
  },
  {
    name: "8464 Miami Avenue",
    address: "8464 Miami Avenue",
    price: 57001343,
    codeInternal: "480",
    year: "2033",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8464 Miami Avenue",
        tax: 0.1,
        value: 79801880.19999999,
      },
    ],
  },
  {
    name: "1301 Los Angeles Place",
    address: "1301 Los Angeles Place",
    price: 47336724,
    codeInternal: "481",
    year: "1909",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1301 Los Angeles Place",
        tax: 0.1,
        value: 66271413.599999994,
      },
    ],
  },
  {
    name: "9691 Miami Terrace",
    address: "9691 Miami Terrace",
    price: 34347814,
    codeInternal: "482",
    year: "1994",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9691 Miami Terrace",
        tax: 0.1,
        value: 48086939.599999994,
      },
    ],
  },
  {
    name: "1385 Villas de Montreal",
    address: "1385 Villas de Montreal",
    price: 98771647,
    codeInternal: "483",
    year: "1936",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1385 Villas de Montreal",
        tax: 0.1,
        value: 138280305.79999998,
      },
    ],
  },
  {
    name: "7895 Los Angeles Beach",
    address: "7895 Los Angeles Beach",
    price: 78711857,
    codeInternal: "484",
    year: "2003",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7895 Los Angeles Beach",
        tax: 0.1,
        value: 110196599.8,
      },
    ],
  },
  {
    name: "2881 Parque Cartagena",
    address: "2881 Parque Cartagena",
    price: 37021415,
    codeInternal: "485",
    year: "1991",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2881 Parque Cartagena",
        tax: 0.1,
        value: 51829981,
      },
    ],
  },
  {
    name: "4391 Parque Barranquilla",
    address: "4391 Parque Barranquilla",
    price: 8022487,
    codeInternal: "486",
    year: "1945",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4391 Parque Barranquilla",
        tax: 0.1,
        value: 11231481.799999999,
      },
    ],
  },
  {
    name: "4697 Conjunto Residencial Cartagena",
    address: "4697 Conjunto Residencial Cartagena",
    price: 67513262,
    codeInternal: "487",
    year: "1996",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4697 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 94518566.8,
      },
    ],
  },
  {
    name: "5285 Los Angeles Place",
    address: "5285 Los Angeles Place",
    price: 77896127,
    codeInternal: "488",
    year: "2002",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5285 Los Angeles Place",
        tax: 0.1,
        value: 109054577.8,
      },
    ],
  },
  {
    name: "6403 Parque Cartagena",
    address: "6403 Parque Cartagena",
    price: 95206385,
    codeInternal: "489",
    year: "2034",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6403 Parque Cartagena",
        tax: 0.1,
        value: 133288938.99999999,
      },
    ],
  },
  {
    name: "9592 Los Angeles Villa",
    address: "9592 Los Angeles Villa",
    price: 26300672,
    codeInternal: "490",
    year: "1996",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9592 Los Angeles Villa",
        tax: 0.1,
        value: 36820940.8,
      },
    ],
  },
  {
    name: "4905 Conjunto Residencial Barranquilla",
    address: "4905 Conjunto Residencial Barranquilla",
    price: 76148354,
    codeInternal: "491",
    year: "1929",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4905 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 106607695.6,
      },
    ],
  },
  {
    name: "3763 Quintas de Montreal",
    address: "3763 Quintas de Montreal",
    price: 48603804,
    codeInternal: "492",
    year: "1929",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3763 Quintas de Montreal",
        tax: 0.1,
        value: 68045325.6,
      },
    ],
  },
  {
    name: "4479 Quintas de Santa Maria",
    address: "4479 Quintas de Santa Maria",
    price: 64558735,
    codeInternal: "493",
    year: "1955",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4479 Quintas de Santa Maria",
        tax: 0.1,
        value: 90382229,
      },
    ],
  },
  {
    name: "1506 Los Angeles Gardens",
    address: "1506 Los Angeles Gardens",
    price: 37641640,
    codeInternal: "494",
    year: "2030",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1506 Los Angeles Gardens",
        tax: 0.1,
        value: 52698296,
      },
    ],
  },
  {
    name: "4141 Miami Terrace",
    address: "4141 Miami Terrace",
    price: 25473614,
    codeInternal: "495",
    year: "2038",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4141 Miami Terrace",
        tax: 0.1,
        value: 35663059.599999994,
      },
    ],
  },
  {
    name: "8156 Paris Gardens",
    address: "8156 Paris Gardens",
    price: 95663812,
    codeInternal: "496",
    year: "1927",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8156 Paris Gardens",
        tax: 0.1,
        value: 133929336.8,
      },
    ],
  },
  {
    name: "3288 Quintas de Cartagena",
    address: "3288 Quintas de Cartagena",
    price: 15726097,
    codeInternal: "497",
    year: "1984",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3288 Quintas de Cartagena",
        tax: 0.1,
        value: 22016535.799999997,
      },
    ],
  },
  {
    name: "3568 Parque Cartagena",
    address: "3568 Parque Cartagena",
    price: 88822965,
    codeInternal: "498",
    year: "1943",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3568 Parque Cartagena",
        tax: 0.1,
        value: 124352150.99999999,
      },
    ],
  },
  {
    name: "4953 Parque Cartagena",
    address: "4953 Parque Cartagena",
    price: 45096907,
    codeInternal: "499",
    year: "2002",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4953 Parque Cartagena",
        tax: 0.1,
        value: 63135669.8,
      },
    ],
  },
  {
    name: "9816 Reservas de Cartagena",
    address: "9816 Reservas de Cartagena",
    price: 56683286,
    codeInternal: "500",
    year: "1939",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9816 Reservas de Cartagena",
        tax: 0.1,
        value: 79356600.39999999,
      },
    ],
  },
  {
    name: "9341 Quintas de Cartagena",
    address: "9341 Quintas de Cartagena",
    price: 53308693,
    codeInternal: "501",
    year: "1984",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9341 Quintas de Cartagena",
        tax: 0.1,
        value: 74632170.19999999,
      },
    ],
  },
  {
    name: "2734 Los Angeles Boulevard",
    address: "2734 Los Angeles Boulevard",
    price: 76236536,
    codeInternal: "502",
    year: "1966",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2734 Los Angeles Boulevard",
        tax: 0.1,
        value: 106731150.39999999,
      },
    ],
  },
  {
    name: "3140 Paris Collection",
    address: "3140 Paris Collection",
    price: 12951427,
    codeInternal: "503",
    year: "1902",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3140 Paris Collection",
        tax: 0.1,
        value: 18131997.799999997,
      },
    ],
  },
  {
    name: "1908 Quintas de Barranquilla",
    address: "1908 Quintas de Barranquilla",
    price: 62154061,
    codeInternal: "504",
    year: "2030",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1908 Quintas de Barranquilla",
        tax: 0.1,
        value: 87015685.39999999,
      },
    ],
  },
  {
    name: "6301 Manhattan Collection",
    address: "6301 Manhattan Collection",
    price: 73578364,
    codeInternal: "505",
    year: "2029",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6301 Manhattan Collection",
        tax: 0.1,
        value: 103009709.6,
      },
    ],
  },
  {
    name: "2251 Los Angeles Street",
    address: "2251 Los Angeles Street",
    price: 81302327,
    codeInternal: "506",
    year: "2011",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2251 Los Angeles Street",
        tax: 0.1,
        value: 113823257.8,
      },
    ],
  },
  {
    name: "4053 Quintas de Portofino",
    address: "4053 Quintas de Portofino",
    price: 3999947,
    codeInternal: "507",
    year: "1916",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4053 Quintas de Portofino",
        tax: 0.1,
        value: 5599925.8,
      },
    ],
  },
  {
    name: "3044 Reservas de Montreal",
    address: "3044 Reservas de Montreal",
    price: 73923815,
    codeInternal: "508",
    year: "1932",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3044 Reservas de Montreal",
        tax: 0.1,
        value: 103493341,
      },
    ],
  },
  {
    name: "5355 Quintas de Barranquilla",
    address: "5355 Quintas de Barranquilla",
    price: 36621263,
    codeInternal: "509",
    year: "1977",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5355 Quintas de Barranquilla",
        tax: 0.1,
        value: 51269768.199999996,
      },
    ],
  },
  {
    name: "5574 Manhattan Terrace",
    address: "5574 Manhattan Terrace",
    price: 93982150,
    codeInternal: "510",
    year: "1907",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5574 Manhattan Terrace",
        tax: 0.1,
        value: 131575009.99999999,
      },
    ],
  },
  {
    name: "2864 Santa Marta Towers",
    address: "2864 Santa Marta Towers",
    price: 13663611,
    codeInternal: "511",
    year: "2037",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2864 Santa Marta Towers",
        tax: 0.1,
        value: 19129055.4,
      },
    ],
  },
  {
    name: "9078 Conjunto Residencial Santa Maria",
    address: "9078 Conjunto Residencial Santa Maria",
    price: 25673809,
    codeInternal: "512",
    year: "1949",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9078 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 35943332.599999994,
      },
    ],
  },
  {
    name: "8643 Villas de Montreal",
    address: "8643 Villas de Montreal",
    price: 54175057,
    codeInternal: "513",
    year: "1990",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8643 Villas de Montreal",
        tax: 0.1,
        value: 75845079.8,
      },
    ],
  },
  {
    name: "8323 Reservas de Montreal",
    address: "8323 Reservas de Montreal",
    price: 72222744,
    codeInternal: "514",
    year: "1905",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8323 Reservas de Montreal",
        tax: 0.1,
        value: 101111841.6,
      },
    ],
  },
  {
    name: "9668 Quintas de Barranquilla",
    address: "9668 Quintas de Barranquilla",
    price: 37784975,
    codeInternal: "515",
    year: "1956",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9668 Quintas de Barranquilla",
        tax: 0.1,
        value: 52898965,
      },
    ],
  },
  {
    name: "9343 Paris Boulevard",
    address: "9343 Paris Boulevard",
    price: 40833793,
    codeInternal: "516",
    year: "1922",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9343 Paris Boulevard",
        tax: 0.1,
        value: 57167310.199999996,
      },
    ],
  },
  {
    name: "5070 Miami Real",
    address: "5070 Miami Real",
    price: 98561546,
    codeInternal: "517",
    year: "1989",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5070 Miami Real",
        tax: 0.1,
        value: 137986164.4,
      },
    ],
  },
  {
    name: "3491 Reservas de Santa Maria",
    address: "3491 Reservas de Santa Maria",
    price: 99673549,
    codeInternal: "518",
    year: "2029",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3491 Reservas de Santa Maria",
        tax: 0.1,
        value: 139542968.6,
      },
    ],
  },
  {
    name: "1569 Villas de Cartagena",
    address: "1569 Villas de Cartagena",
    price: 65872507,
    codeInternal: "519",
    year: "1930",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1569 Villas de Cartagena",
        tax: 0.1,
        value: 92221509.8,
      },
    ],
  },
  {
    name: "6988 Conjunto Residencial Barranquilla",
    address: "6988 Conjunto Residencial Barranquilla",
    price: 30110458,
    codeInternal: "520",
    year: "1913",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6988 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 42154641.199999996,
      },
    ],
  },
  {
    name: "9369 Parque Portofino",
    address: "9369 Parque Portofino",
    price: 83188653,
    codeInternal: "521",
    year: "1903",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9369 Parque Portofino",
        tax: 0.1,
        value: 116464114.19999999,
      },
    ],
  },
  {
    name: "2205 Manhattan Towers",
    address: "2205 Manhattan Towers",
    price: 76954696,
    codeInternal: "522",
    year: "1915",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2205 Manhattan Towers",
        tax: 0.1,
        value: 107736574.39999999,
      },
    ],
  },
  {
    name: "6748 Conjunto Residencial Cartagena",
    address: "6748 Conjunto Residencial Cartagena",
    price: 12612622,
    codeInternal: "523",
    year: "2007",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6748 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 17657670.799999997,
      },
    ],
  },
  {
    name: "8678 Manhattan Real",
    address: "8678 Manhattan Real",
    price: 31735237,
    codeInternal: "524",
    year: "1920",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8678 Manhattan Real",
        tax: 0.1,
        value: 44429331.8,
      },
    ],
  },
  {
    name: "4243 Conjunto Residencial Cartagena",
    address: "4243 Conjunto Residencial Cartagena",
    price: 23224346,
    codeInternal: "525",
    year: "1926",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4243 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 32514084.4,
      },
    ],
  },
  {
    name: "1012 Manhattan Boulevard",
    address: "1012 Manhattan Boulevard",
    price: 44152168,
    codeInternal: "526",
    year: "1978",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1012 Manhattan Boulevard",
        tax: 0.1,
        value: 61813035.199999996,
      },
    ],
  },
  {
    name: "4627 Paris Terrace",
    address: "4627 Paris Terrace",
    price: 6609921,
    codeInternal: "527",
    year: "2028",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4627 Paris Terrace",
        tax: 0.1,
        value: 9253889.399999999,
      },
    ],
  },
  {
    name: "5714 Reservas de Barranquilla",
    address: "5714 Reservas de Barranquilla",
    price: 43493958,
    codeInternal: "528",
    year: "1927",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5714 Reservas de Barranquilla",
        tax: 0.1,
        value: 60891541.199999996,
      },
    ],
  },
  {
    name: "3515 Conjunto Residencial Cartagena",
    address: "3515 Conjunto Residencial Cartagena",
    price: 73886061,
    codeInternal: "529",
    year: "2038",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3515 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 103440485.39999999,
      },
    ],
  },
  {
    name: "4124 Santa Marta Gardens",
    address: "4124 Santa Marta Gardens",
    price: 53385614,
    codeInternal: "530",
    year: "1997",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4124 Santa Marta Gardens",
        tax: 0.1,
        value: 74739859.6,
      },
    ],
  },
  {
    name: "4047 Villas de Santa Maria",
    address: "4047 Villas de Santa Maria",
    price: 82970072,
    codeInternal: "531",
    year: "1976",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4047 Villas de Santa Maria",
        tax: 0.1,
        value: 116158100.8,
      },
    ],
  },
  {
    name: "7661 Paris Beach",
    address: "7661 Paris Beach",
    price: 6296718,
    codeInternal: "532",
    year: "1948",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7661 Paris Beach",
        tax: 0.1,
        value: 8815405.2,
      },
    ],
  },
  {
    name: "3769 Parque Montreal",
    address: "3769 Parque Montreal",
    price: 77302643,
    codeInternal: "533",
    year: "1933",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3769 Parque Montreal",
        tax: 0.1,
        value: 108223700.19999999,
      },
    ],
  },
  {
    name: "2585 Conjunto Residencial Portofino",
    address: "2585 Conjunto Residencial Portofino",
    price: 42454475,
    codeInternal: "534",
    year: "2023",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2585 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 59436264.99999999,
      },
    ],
  },
  {
    name: "7788 Los Angeles Boulevard",
    address: "7788 Los Angeles Boulevard",
    price: 99127006,
    codeInternal: "535",
    year: "1911",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7788 Los Angeles Boulevard",
        tax: 0.1,
        value: 138777808.4,
      },
    ],
  },
  {
    name: "3275 Parque Portofino",
    address: "3275 Parque Portofino",
    price: 59010681,
    codeInternal: "536",
    year: "1908",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3275 Parque Portofino",
        tax: 0.1,
        value: 82614953.39999999,
      },
    ],
  },
  {
    name: "6069 Parque Montreal",
    address: "6069 Parque Montreal",
    price: 81721151,
    codeInternal: "537",
    year: "2008",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6069 Parque Montreal",
        tax: 0.1,
        value: 114409611.39999999,
      },
    ],
  },
  {
    name: "4633 Quintas de Montreal",
    address: "4633 Quintas de Montreal",
    price: 31697801,
    codeInternal: "538",
    year: "2011",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4633 Quintas de Montreal",
        tax: 0.1,
        value: 44376921.4,
      },
    ],
  },
  {
    name: "2346 Paris Place",
    address: "2346 Paris Place",
    price: 36529474,
    codeInternal: "539",
    year: "2006",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2346 Paris Place",
        tax: 0.1,
        value: 51141263.599999994,
      },
    ],
  },
  {
    name: "9623 Parque Portofino",
    address: "9623 Parque Portofino",
    price: 11427188,
    codeInternal: "540",
    year: "1909",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9623 Parque Portofino",
        tax: 0.1,
        value: 15998063.2,
      },
    ],
  },
  {
    name: "1574 Los Angeles Collection",
    address: "1574 Los Angeles Collection",
    price: 81197106,
    codeInternal: "541",
    year: "1941",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1574 Los Angeles Collection",
        tax: 0.1,
        value: 113675948.39999999,
      },
    ],
  },
  {
    name: "1616 Manhattan Avenue",
    address: "1616 Manhattan Avenue",
    price: 51862472,
    codeInternal: "542",
    year: "2002",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1616 Manhattan Avenue",
        tax: 0.1,
        value: 72607460.8,
      },
    ],
  },
  {
    name: "8738 Paris State",
    address: "8738 Paris State",
    price: 54930881,
    codeInternal: "543",
    year: "1902",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8738 Paris State",
        tax: 0.1,
        value: 76903233.39999999,
      },
    ],
  },
  {
    name: "9611 Quintas de Santa Maria",
    address: "9611 Quintas de Santa Maria",
    price: 28886715,
    codeInternal: "544",
    year: "2025",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9611 Quintas de Santa Maria",
        tax: 0.1,
        value: 40441401,
      },
    ],
  },
  {
    name: "7035 Santa Marta Avenue",
    address: "7035 Santa Marta Avenue",
    price: 85600871,
    codeInternal: "545",
    year: "1930",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7035 Santa Marta Avenue",
        tax: 0.1,
        value: 119841219.39999999,
      },
    ],
  },
  {
    name: "8680 Santa Marta Place",
    address: "8680 Santa Marta Place",
    price: 2395703,
    codeInternal: "546",
    year: "2011",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8680 Santa Marta Place",
        tax: 0.1,
        value: 3353984.1999999997,
      },
    ],
  },
  {
    name: "9298 Santa Marta Collection",
    address: "9298 Santa Marta Collection",
    price: 74595712,
    codeInternal: "547",
    year: "1960",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9298 Santa Marta Collection",
        tax: 0.1,
        value: 104433996.8,
      },
    ],
  },
  {
    name: "1744 Quintas de Cartagena",
    address: "1744 Quintas de Cartagena",
    price: 82954323,
    codeInternal: "548",
    year: "2005",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1744 Quintas de Cartagena",
        tax: 0.1,
        value: 116136052.19999999,
      },
    ],
  },
  {
    name: "8456 Villas de Santa Maria",
    address: "8456 Villas de Santa Maria",
    price: 29675698,
    codeInternal: "549",
    year: "1928",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8456 Villas de Santa Maria",
        tax: 0.1,
        value: 41545977.199999996,
      },
    ],
  },
  {
    name: "8677 Manhattan Villa",
    address: "8677 Manhattan Villa",
    price: 72899682,
    codeInternal: "550",
    year: "2045",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8677 Manhattan Villa",
        tax: 0.1,
        value: 102059554.8,
      },
    ],
  },
  {
    name: "4903 Los Angeles Real",
    address: "4903 Los Angeles Real",
    price: 67616861,
    codeInternal: "551",
    year: "2004",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4903 Los Angeles Real",
        tax: 0.1,
        value: 94663605.39999999,
      },
    ],
  },
  {
    name: "1648 Conjunto Residencial Portofino",
    address: "1648 Conjunto Residencial Portofino",
    price: 80143811,
    codeInternal: "552",
    year: "2045",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1648 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 112201335.39999999,
      },
    ],
  },
  {
    name: "4282 Los Angeles State",
    address: "4282 Los Angeles State",
    price: 3774139,
    codeInternal: "553",
    year: "1911",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4282 Los Angeles State",
        tax: 0.1,
        value: 5283794.6,
      },
    ],
  },
  {
    name: "9710 Santa Marta Villa",
    address: "9710 Santa Marta Villa",
    price: 43610458,
    codeInternal: "554",
    year: "1986",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9710 Santa Marta Villa",
        tax: 0.1,
        value: 61054641.199999996,
      },
    ],
  },
  {
    name: "4558 Santa Marta Villa",
    address: "4558 Santa Marta Villa",
    price: 68824723,
    codeInternal: "555",
    year: "2028",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4558 Santa Marta Villa",
        tax: 0.1,
        value: 96354612.19999999,
      },
    ],
  },
  {
    name: "3523 Reservas de Montreal",
    address: "3523 Reservas de Montreal",
    price: 89229625,
    codeInternal: "556",
    year: "1914",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3523 Reservas de Montreal",
        tax: 0.1,
        value: 124921474.99999999,
      },
    ],
  },
  {
    name: "4922 Paris Real",
    address: "4922 Paris Real",
    price: 31981606,
    codeInternal: "557",
    year: "1928",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4922 Paris Real",
        tax: 0.1,
        value: 44774248.4,
      },
    ],
  },
  {
    name: "3607 Miami Avenue",
    address: "3607 Miami Avenue",
    price: 98269834,
    codeInternal: "558",
    year: "1992",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3607 Miami Avenue",
        tax: 0.1,
        value: 137577767.6,
      },
    ],
  },
  {
    name: "2092 Paris Place",
    address: "2092 Paris Place",
    price: 83662904,
    codeInternal: "559",
    year: "1928",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2092 Paris Place",
        tax: 0.1,
        value: 117128065.6,
      },
    ],
  },
  {
    name: "7680 Parque Barranquilla",
    address: "7680 Parque Barranquilla",
    price: 99349535,
    codeInternal: "560",
    year: "1956",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7680 Parque Barranquilla",
        tax: 0.1,
        value: 139089349,
      },
    ],
  },
  {
    name: "5060 Villas de Santa Maria",
    address: "5060 Villas de Santa Maria",
    price: 9747365,
    codeInternal: "561",
    year: "2020",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5060 Villas de Santa Maria",
        tax: 0.1,
        value: 13646311,
      },
    ],
  },
  {
    name: "6513 Reservas de Barranquilla",
    address: "6513 Reservas de Barranquilla",
    price: 52781249,
    codeInternal: "562",
    year: "2047",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6513 Reservas de Barranquilla",
        tax: 0.1,
        value: 73893748.6,
      },
    ],
  },
  {
    name: "2695 Conjunto Residencial Santa Maria",
    address: "2695 Conjunto Residencial Santa Maria",
    price: 50883211,
    codeInternal: "563",
    year: "1964",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2695 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 71236495.39999999,
      },
    ],
  },
  {
    name: "6347 Villas de Santa Maria",
    address: "6347 Villas de Santa Maria",
    price: 62652902,
    codeInternal: "564",
    year: "2036",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6347 Villas de Santa Maria",
        tax: 0.1,
        value: 87714062.8,
      },
    ],
  },
  {
    name: "2009 Los Angeles Street",
    address: "2009 Los Angeles Street",
    price: 23750539,
    codeInternal: "565",
    year: "1904",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2009 Los Angeles Street",
        tax: 0.1,
        value: 33250754.599999998,
      },
    ],
  },
  {
    name: "2121 Villas de Barranquilla",
    address: "2121 Villas de Barranquilla",
    price: 36464132,
    codeInternal: "566",
    year: "2027",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2121 Villas de Barranquilla",
        tax: 0.1,
        value: 51049784.8,
      },
    ],
  },
  {
    name: "2142 Paris Street",
    address: "2142 Paris Street",
    price: 1348894,
    codeInternal: "567",
    year: "1997",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2142 Paris Street",
        tax: 0.1,
        value: 1888451.5999999999,
      },
    ],
  },
  {
    name: "7536 Miami State",
    address: "7536 Miami State",
    price: 69708514,
    codeInternal: "568",
    year: "1970",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7536 Miami State",
        tax: 0.1,
        value: 97591919.6,
      },
    ],
  },
  {
    name: "2417 Reservas de Santa Maria",
    address: "2417 Reservas de Santa Maria",
    price: 80271595,
    codeInternal: "569",
    year: "1931",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2417 Reservas de Santa Maria",
        tax: 0.1,
        value: 112380233,
      },
    ],
  },
  {
    name: "2265 Los Angeles Real",
    address: "2265 Los Angeles Real",
    price: 47176962,
    codeInternal: "570",
    year: "1948",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2265 Los Angeles Real",
        tax: 0.1,
        value: 66047746.8,
      },
    ],
  },
  {
    name: "7811 Quintas de Portofino",
    address: "7811 Quintas de Portofino",
    price: 79401359,
    codeInternal: "571",
    year: "1974",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7811 Quintas de Portofino",
        tax: 0.1,
        value: 111161902.6,
      },
    ],
  },
  {
    name: "6574 Manhattan Beach",
    address: "6574 Manhattan Beach",
    price: 46766981,
    codeInternal: "572",
    year: "1971",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6574 Manhattan Beach",
        tax: 0.1,
        value: 65473773.4,
      },
    ],
  },
  {
    name: "6004 Conjunto Residencial Cartagena",
    address: "6004 Conjunto Residencial Cartagena",
    price: 46750199,
    codeInternal: "573",
    year: "2005",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6004 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 65450278.599999994,
      },
    ],
  },
  {
    name: "8076 Conjunto Residencial Portofino",
    address: "8076 Conjunto Residencial Portofino",
    price: 88955048,
    codeInternal: "574",
    year: "2018",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8076 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 124537067.19999999,
      },
    ],
  },
  {
    name: "4214 Parque Barranquilla",
    address: "4214 Parque Barranquilla",
    price: 20412069,
    codeInternal: "575",
    year: "1902",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4214 Parque Barranquilla",
        tax: 0.1,
        value: 28576896.599999998,
      },
    ],
  },
  {
    name: "3908 Villas de Barranquilla",
    address: "3908 Villas de Barranquilla",
    price: 48460581,
    codeInternal: "576",
    year: "1957",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3908 Villas de Barranquilla",
        tax: 0.1,
        value: 67844813.39999999,
      },
    ],
  },
  {
    name: "1067 Santa Marta Terrace",
    address: "1067 Santa Marta Terrace",
    price: 5097883,
    codeInternal: "577",
    year: "1968",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1067 Santa Marta Terrace",
        tax: 0.1,
        value: 7137036.199999999,
      },
    ],
  },
  {
    name: "9797 Reservas de Barranquilla",
    address: "9797 Reservas de Barranquilla",
    price: 96574912,
    codeInternal: "578",
    year: "1964",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9797 Reservas de Barranquilla",
        tax: 0.1,
        value: 135204876.79999998,
      },
    ],
  },
  {
    name: "9860 Santa Marta Avenue",
    address: "9860 Santa Marta Avenue",
    price: 78669673,
    codeInternal: "579",
    year: "1907",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9860 Santa Marta Avenue",
        tax: 0.1,
        value: 110137542.19999999,
      },
    ],
  },
  {
    name: "6099 Conjunto Residencial Portofino",
    address: "6099 Conjunto Residencial Portofino",
    price: 30248336,
    codeInternal: "580",
    year: "1918",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6099 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 42347670.4,
      },
    ],
  },
  {
    name: "8868 Miami Avenue",
    address: "8868 Miami Avenue",
    price: 23153708,
    codeInternal: "581",
    year: "2007",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8868 Miami Avenue",
        tax: 0.1,
        value: 32415191.2,
      },
    ],
  },
  {
    name: "7227 Paris Street",
    address: "7227 Paris Street",
    price: 85282777,
    codeInternal: "582",
    year: "2004",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7227 Paris Street",
        tax: 0.1,
        value: 119395887.8,
      },
    ],
  },
  {
    name: "9396 Manhattan Villa",
    address: "9396 Manhattan Villa",
    price: 24934215,
    codeInternal: "583",
    year: "2039",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9396 Manhattan Villa",
        tax: 0.1,
        value: 34907901,
      },
    ],
  },
  {
    name: "3145 Miami Real",
    address: "3145 Miami Real",
    price: 13236109,
    codeInternal: "584",
    year: "1977",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3145 Miami Real",
        tax: 0.1,
        value: 18530552.599999998,
      },
    ],
  },
  {
    name: "6409 Villas de Cartagena",
    address: "6409 Villas de Cartagena",
    price: 47759628,
    codeInternal: "585",
    year: "1956",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6409 Villas de Cartagena",
        tax: 0.1,
        value: 66863479.199999996,
      },
    ],
  },
  {
    name: "5386 Reservas de Barranquilla",
    address: "5386 Reservas de Barranquilla",
    price: 40698415,
    codeInternal: "586",
    year: "1911",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5386 Reservas de Barranquilla",
        tax: 0.1,
        value: 56977781,
      },
    ],
  },
  {
    name: "4238 Villas de Montreal",
    address: "4238 Villas de Montreal",
    price: 17018366,
    codeInternal: "587",
    year: "1971",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4238 Villas de Montreal",
        tax: 0.1,
        value: 23825712.4,
      },
    ],
  },
  {
    name: "3093 Villas de Montreal",
    address: "3093 Villas de Montreal",
    price: 95712672,
    codeInternal: "588",
    year: "1990",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3093 Villas de Montreal",
        tax: 0.1,
        value: 133997740.8,
      },
    ],
  },
  {
    name: "9125 Reservas de Santa Maria",
    address: "9125 Reservas de Santa Maria",
    price: 76614064,
    codeInternal: "589",
    year: "1956",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9125 Reservas de Santa Maria",
        tax: 0.1,
        value: 107259689.6,
      },
    ],
  },
  {
    name: "4625 Quintas de Cartagena",
    address: "4625 Quintas de Cartagena",
    price: 33704602,
    codeInternal: "590",
    year: "2010",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4625 Quintas de Cartagena",
        tax: 0.1,
        value: 47186442.8,
      },
    ],
  },
  {
    name: "8876 Los Angeles Real",
    address: "8876 Los Angeles Real",
    price: 94776261,
    codeInternal: "591",
    year: "2037",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8876 Los Angeles Real",
        tax: 0.1,
        value: 132686765.39999999,
      },
    ],
  },
  {
    name: "3321 Santa Marta Terrace",
    address: "3321 Santa Marta Terrace",
    price: 91652553,
    codeInternal: "592",
    year: "2049",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3321 Santa Marta Terrace",
        tax: 0.1,
        value: 128313574.19999999,
      },
    ],
  },
  {
    name: "1012 Parque Cartagena",
    address: "1012 Parque Cartagena",
    price: 23904415,
    codeInternal: "593",
    year: "1906",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1012 Parque Cartagena",
        tax: 0.1,
        value: 33466180.999999996,
      },
    ],
  },
  {
    name: "3220 Santa Marta Place",
    address: "3220 Santa Marta Place",
    price: 26424433,
    codeInternal: "594",
    year: "1918",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3220 Santa Marta Place",
        tax: 0.1,
        value: 36994206.199999996,
      },
    ],
  },
  {
    name: "7120 Conjunto Residencial Montreal",
    address: "7120 Conjunto Residencial Montreal",
    price: 10039299,
    codeInternal: "595",
    year: "1962",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7120 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 14055018.6,
      },
    ],
  },
  {
    name: "3622 Los Angeles Villa",
    address: "3622 Los Angeles Villa",
    price: 49282948,
    codeInternal: "596",
    year: "1938",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3622 Los Angeles Villa",
        tax: 0.1,
        value: 68996127.2,
      },
    ],
  },
  {
    name: "5423 Miami Collection",
    address: "5423 Miami Collection",
    price: 91919207,
    codeInternal: "597",
    year: "1982",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5423 Miami Collection",
        tax: 0.1,
        value: 128686889.8,
      },
    ],
  },
  {
    name: "6839 Miami State",
    address: "6839 Miami State",
    price: 8641127,
    codeInternal: "598",
    year: "1918",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6839 Miami State",
        tax: 0.1,
        value: 12097577.799999999,
      },
    ],
  },
  {
    name: "6033 Manhattan Villa",
    address: "6033 Manhattan Villa",
    price: 60041572,
    codeInternal: "599",
    year: "2000",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6033 Manhattan Villa",
        tax: 0.1,
        value: 84058200.8,
      },
    ],
  },
  {
    name: "9798 Villas de Barranquilla",
    address: "9798 Villas de Barranquilla",
    price: 88926441,
    codeInternal: "600",
    year: "2038",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9798 Villas de Barranquilla",
        tax: 0.1,
        value: 124497017.39999999,
      },
    ],
  },
  {
    name: "9226 Reservas de Montreal",
    address: "9226 Reservas de Montreal",
    price: 88205840,
    codeInternal: "601",
    year: "2012",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9226 Reservas de Montreal",
        tax: 0.1,
        value: 123488175.99999999,
      },
    ],
  },
  {
    name: "6343 Quintas de Barranquilla",
    address: "6343 Quintas de Barranquilla",
    price: 1484374,
    codeInternal: "602",
    year: "1924",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6343 Quintas de Barranquilla",
        tax: 0.1,
        value: 2078123.5999999999,
      },
    ],
  },
  {
    name: "7667 Quintas de Portofino",
    address: "7667 Quintas de Portofino",
    price: 42265373,
    codeInternal: "603",
    year: "1952",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7667 Quintas de Portofino",
        tax: 0.1,
        value: 59171522.199999996,
      },
    ],
  },
  {
    name: "8894 Santa Marta Avenue",
    address: "8894 Santa Marta Avenue",
    price: 59719270,
    codeInternal: "604",
    year: "1958",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8894 Santa Marta Avenue",
        tax: 0.1,
        value: 83606978,
      },
    ],
  },
  {
    name: "3800 Paris Towers",
    address: "3800 Paris Towers",
    price: 36790916,
    codeInternal: "605",
    year: "1910",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3800 Paris Towers",
        tax: 0.1,
        value: 51507282.4,
      },
    ],
  },
  {
    name: "8344 Reservas de Montreal",
    address: "8344 Reservas de Montreal",
    price: 53494546,
    codeInternal: "606",
    year: "1969",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8344 Reservas de Montreal",
        tax: 0.1,
        value: 74892364.39999999,
      },
    ],
  },
  {
    name: "7021 Reservas de Barranquilla",
    address: "7021 Reservas de Barranquilla",
    price: 66854458,
    codeInternal: "607",
    year: "1969",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7021 Reservas de Barranquilla",
        tax: 0.1,
        value: 93596241.19999999,
      },
    ],
  },
  {
    name: "1350 Los Angeles Gardens",
    address: "1350 Los Angeles Gardens",
    price: 62490669,
    codeInternal: "608",
    year: "1959",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1350 Los Angeles Gardens",
        tax: 0.1,
        value: 87486936.6,
      },
    ],
  },
  {
    name: "6275 Villas de Barranquilla",
    address: "6275 Villas de Barranquilla",
    price: 55391271,
    codeInternal: "609",
    year: "2030",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6275 Villas de Barranquilla",
        tax: 0.1,
        value: 77547779.39999999,
      },
    ],
  },
  {
    name: "4962 Santa Marta Boulevard",
    address: "4962 Santa Marta Boulevard",
    price: 44113029,
    codeInternal: "610",
    year: "1905",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4962 Santa Marta Boulevard",
        tax: 0.1,
        value: 61758240.599999994,
      },
    ],
  },
  {
    name: "5331 Manhattan Boulevard",
    address: "5331 Manhattan Boulevard",
    price: 9273552,
    codeInternal: "611",
    year: "2018",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5331 Manhattan Boulevard",
        tax: 0.1,
        value: 12982972.799999999,
      },
    ],
  },
  {
    name: "2403 Villas de Santa Maria",
    address: "2403 Villas de Santa Maria",
    price: 61418330,
    codeInternal: "612",
    year: "1974",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2403 Villas de Santa Maria",
        tax: 0.1,
        value: 85985662,
      },
    ],
  },
  {
    name: "9253 Manhattan Avenue",
    address: "9253 Manhattan Avenue",
    price: 31235550,
    codeInternal: "613",
    year: "2049",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9253 Manhattan Avenue",
        tax: 0.1,
        value: 43729770,
      },
    ],
  },
  {
    name: "8735 Quintas de Portofino",
    address: "8735 Quintas de Portofino",
    price: 15914126,
    codeInternal: "614",
    year: "1920",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8735 Quintas de Portofino",
        tax: 0.1,
        value: 22279776.4,
      },
    ],
  },
  {
    name: "6441 Conjunto Residencial Santa Maria",
    address: "6441 Conjunto Residencial Santa Maria",
    price: 7975645,
    codeInternal: "615",
    year: "1953",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6441 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 11165903,
      },
    ],
  },
  {
    name: "5706 Conjunto Residencial Montreal",
    address: "5706 Conjunto Residencial Montreal",
    price: 78781967,
    codeInternal: "616",
    year: "1920",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5706 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 110294753.8,
      },
    ],
  },
  {
    name: "1178 Villas de Portofino",
    address: "1178 Villas de Portofino",
    price: 33101587,
    codeInternal: "617",
    year: "1924",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1178 Villas de Portofino",
        tax: 0.1,
        value: 46342221.8,
      },
    ],
  },
  {
    name: "2079 Conjunto Residencial Portofino",
    address: "2079 Conjunto Residencial Portofino",
    price: 98748386,
    codeInternal: "618",
    year: "2009",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2079 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 138247740.4,
      },
    ],
  },
  {
    name: "6402 Santa Marta Beach",
    address: "6402 Santa Marta Beach",
    price: 55085461,
    codeInternal: "619",
    year: "1915",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6402 Santa Marta Beach",
        tax: 0.1,
        value: 77119645.39999999,
      },
    ],
  },
  {
    name: "2564 Santa Marta Villa",
    address: "2564 Santa Marta Villa",
    price: 67300229,
    codeInternal: "620",
    year: "2026",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2564 Santa Marta Villa",
        tax: 0.1,
        value: 94220320.6,
      },
    ],
  },
  {
    name: "3148 Conjunto Residencial Montreal",
    address: "3148 Conjunto Residencial Montreal",
    price: 48130293,
    codeInternal: "621",
    year: "2034",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3148 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 67382410.2,
      },
    ],
  },
  {
    name: "1653 Reservas de Montreal",
    address: "1653 Reservas de Montreal",
    price: 45269030,
    codeInternal: "622",
    year: "1990",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1653 Reservas de Montreal",
        tax: 0.1,
        value: 63376641.99999999,
      },
    ],
  },
  {
    name: "8120 Paris Avenue",
    address: "8120 Paris Avenue",
    price: 30667479,
    codeInternal: "623",
    year: "2013",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8120 Paris Avenue",
        tax: 0.1,
        value: 42934470.599999994,
      },
    ],
  },
  {
    name: "9495 Los Angeles Terrace",
    address: "9495 Los Angeles Terrace",
    price: 76300539,
    codeInternal: "624",
    year: "1919",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9495 Los Angeles Terrace",
        tax: 0.1,
        value: 106820754.6,
      },
    ],
  },
  {
    name: "7692 Los Angeles Villa",
    address: "7692 Los Angeles Villa",
    price: 64831893,
    codeInternal: "625",
    year: "1970",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7692 Los Angeles Villa",
        tax: 0.1,
        value: 90764650.19999999,
      },
    ],
  },
  {
    name: "3139 Santa Marta State",
    address: "3139 Santa Marta State",
    price: 90433497,
    codeInternal: "626",
    year: "1961",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3139 Santa Marta State",
        tax: 0.1,
        value: 126606895.8,
      },
    ],
  },
  {
    name: "9817 Manhattan Street",
    address: "9817 Manhattan Street",
    price: 64349254,
    codeInternal: "627",
    year: "1934",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9817 Manhattan Street",
        tax: 0.1,
        value: 90088955.6,
      },
    ],
  },
  {
    name: "2337 Conjunto Residencial Cartagena",
    address: "2337 Conjunto Residencial Cartagena",
    price: 51242272,
    codeInternal: "628",
    year: "1999",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2337 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 71739180.8,
      },
    ],
  },
  {
    name: "7596 Quintas de Santa Maria",
    address: "7596 Quintas de Santa Maria",
    price: 38079550,
    codeInternal: "629",
    year: "2036",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7596 Quintas de Santa Maria",
        tax: 0.1,
        value: 53311370,
      },
    ],
  },
  {
    name: "9529 Quintas de Santa Maria",
    address: "9529 Quintas de Santa Maria",
    price: 55295217,
    codeInternal: "630",
    year: "1973",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9529 Quintas de Santa Maria",
        tax: 0.1,
        value: 77413303.8,
      },
    ],
  },
  {
    name: "4169 Manhattan Street",
    address: "4169 Manhattan Street",
    price: 30522772,
    codeInternal: "631",
    year: "1935",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4169 Manhattan Street",
        tax: 0.1,
        value: 42731880.8,
      },
    ],
  },
  {
    name: "3548 Villas de Portofino",
    address: "3548 Villas de Portofino",
    price: 21541677,
    codeInternal: "632",
    year: "1907",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3548 Villas de Portofino",
        tax: 0.1,
        value: 30158347.799999997,
      },
    ],
  },
  {
    name: "9788 Parque Portofino",
    address: "9788 Parque Portofino",
    price: 95355397,
    codeInternal: "633",
    year: "2022",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9788 Parque Portofino",
        tax: 0.1,
        value: 133497555.8,
      },
    ],
  },
  {
    name: "3263 Parque Portofino",
    address: "3263 Parque Portofino",
    price: 59571335,
    codeInternal: "634",
    year: "2048",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3263 Parque Portofino",
        tax: 0.1,
        value: 83399869,
      },
    ],
  },
  {
    name: "3003 Paris Beach",
    address: "3003 Paris Beach",
    price: 62938275,
    codeInternal: "635",
    year: "1942",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3003 Paris Beach",
        tax: 0.1,
        value: 88113585,
      },
    ],
  },
  {
    name: "6320 Reservas de Cartagena",
    address: "6320 Reservas de Cartagena",
    price: 70994102,
    codeInternal: "636",
    year: "1934",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6320 Reservas de Cartagena",
        tax: 0.1,
        value: 99391742.8,
      },
    ],
  },
  {
    name: "1339 Quintas de Portofino",
    address: "1339 Quintas de Portofino",
    price: 27535956,
    codeInternal: "637",
    year: "1937",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1339 Quintas de Portofino",
        tax: 0.1,
        value: 38550338.4,
      },
    ],
  },
  {
    name: "5625 Parque Montreal",
    address: "5625 Parque Montreal",
    price: 45745853,
    codeInternal: "638",
    year: "1902",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5625 Parque Montreal",
        tax: 0.1,
        value: 64044194.199999996,
      },
    ],
  },
  {
    name: "4929 Miami Place",
    address: "4929 Miami Place",
    price: 61390170,
    codeInternal: "639",
    year: "1979",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4929 Miami Place",
        tax: 0.1,
        value: 85946238,
      },
    ],
  },
  {
    name: "1262 Santa Marta Terrace",
    address: "1262 Santa Marta Terrace",
    price: 81404508,
    codeInternal: "640",
    year: "2044",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1262 Santa Marta Terrace",
        tax: 0.1,
        value: 113966311.19999999,
      },
    ],
  },
  {
    name: "2582 Reservas de Santa Maria",
    address: "2582 Reservas de Santa Maria",
    price: 84614557,
    codeInternal: "641",
    year: "2046",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2582 Reservas de Santa Maria",
        tax: 0.1,
        value: 118460379.8,
      },
    ],
  },
  {
    name: "5222 Conjunto Residencial Montreal",
    address: "5222 Conjunto Residencial Montreal",
    price: 17205281,
    codeInternal: "642",
    year: "2009",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5222 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 24087393.4,
      },
    ],
  },
  {
    name: "1568 Conjunto Residencial Montreal",
    address: "1568 Conjunto Residencial Montreal",
    price: 28650382,
    codeInternal: "643",
    year: "1908",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1568 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 40110534.8,
      },
    ],
  },
  {
    name: "3555 Santa Marta Gardens",
    address: "3555 Santa Marta Gardens",
    price: 90559845,
    codeInternal: "644",
    year: "1940",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3555 Santa Marta Gardens",
        tax: 0.1,
        value: 126783782.99999999,
      },
    ],
  },
  {
    name: "4660 Reservas de Santa Maria",
    address: "4660 Reservas de Santa Maria",
    price: 77497391,
    codeInternal: "645",
    year: "1944",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4660 Reservas de Santa Maria",
        tax: 0.1,
        value: 108496347.39999999,
      },
    ],
  },
  {
    name: "9574 Santa Marta Street",
    address: "9574 Santa Marta Street",
    price: 18182092,
    codeInternal: "646",
    year: "1993",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9574 Santa Marta Street",
        tax: 0.1,
        value: 25454928.799999997,
      },
    ],
  },
  {
    name: "9096 Villas de Barranquilla",
    address: "9096 Villas de Barranquilla",
    price: 30450681,
    codeInternal: "647",
    year: "2018",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9096 Villas de Barranquilla",
        tax: 0.1,
        value: 42630953.4,
      },
    ],
  },
  {
    name: "8720 Reservas de Barranquilla",
    address: "8720 Reservas de Barranquilla",
    price: 35473802,
    codeInternal: "648",
    year: "2006",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8720 Reservas de Barranquilla",
        tax: 0.1,
        value: 49663322.8,
      },
    ],
  },
  {
    name: "8795 Los Angeles Towers",
    address: "8795 Los Angeles Towers",
    price: 69020374,
    codeInternal: "649",
    year: "1926",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8795 Los Angeles Towers",
        tax: 0.1,
        value: 96628523.6,
      },
    ],
  },
  {
    name: "5936 Quintas de Cartagena",
    address: "5936 Quintas de Cartagena",
    price: 87363871,
    codeInternal: "650",
    year: "1921",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5936 Quintas de Cartagena",
        tax: 0.1,
        value: 122309419.39999999,
      },
    ],
  },
  {
    name: "7331 Reservas de Montreal",
    address: "7331 Reservas de Montreal",
    price: 58241900,
    codeInternal: "651",
    year: "1987",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7331 Reservas de Montreal",
        tax: 0.1,
        value: 81538660,
      },
    ],
  },
  {
    name: "2797 Los Angeles Gardens",
    address: "2797 Los Angeles Gardens",
    price: 49442824,
    codeInternal: "652",
    year: "1914",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2797 Los Angeles Gardens",
        tax: 0.1,
        value: 69219953.6,
      },
    ],
  },
  {
    name: "4764 Manhattan State",
    address: "4764 Manhattan State",
    price: 79840228,
    codeInternal: "653",
    year: "2028",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4764 Manhattan State",
        tax: 0.1,
        value: 111776319.19999999,
      },
    ],
  },
  {
    name: "7572 Villas de Portofino",
    address: "7572 Villas de Portofino",
    price: 54663133,
    codeInternal: "654",
    year: "1977",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7572 Villas de Portofino",
        tax: 0.1,
        value: 76528386.19999999,
      },
    ],
  },
  {
    name: "6563 Reservas de Cartagena",
    address: "6563 Reservas de Cartagena",
    price: 99624026,
    codeInternal: "655",
    year: "1916",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6563 Reservas de Cartagena",
        tax: 0.1,
        value: 139473636.4,
      },
    ],
  },
  {
    name: "3549 Villas de Santa Maria",
    address: "3549 Villas de Santa Maria",
    price: 31058595,
    codeInternal: "656",
    year: "2047",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3549 Villas de Santa Maria",
        tax: 0.1,
        value: 43482033,
      },
    ],
  },
  {
    name: "7057 Quintas de Montreal",
    address: "7057 Quintas de Montreal",
    price: 73713875,
    codeInternal: "657",
    year: "1996",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7057 Quintas de Montreal",
        tax: 0.1,
        value: 103199425,
      },
    ],
  },
  {
    name: "8042 Santa Marta State",
    address: "8042 Santa Marta State",
    price: 89112089,
    codeInternal: "658",
    year: "1948",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8042 Santa Marta State",
        tax: 0.1,
        value: 124756924.6,
      },
    ],
  },
  {
    name: "8209 Villas de Santa Maria",
    address: "8209 Villas de Santa Maria",
    price: 85632176,
    codeInternal: "659",
    year: "1920",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8209 Villas de Santa Maria",
        tax: 0.1,
        value: 119885046.39999999,
      },
    ],
  },
  {
    name: "4251 Quintas de Cartagena",
    address: "4251 Quintas de Cartagena",
    price: 79046144,
    codeInternal: "660",
    year: "2013",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4251 Quintas de Cartagena",
        tax: 0.1,
        value: 110664601.6,
      },
    ],
  },
  {
    name: "5062 Reservas de Santa Maria",
    address: "5062 Reservas de Santa Maria",
    price: 54391733,
    codeInternal: "661",
    year: "1919",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5062 Reservas de Santa Maria",
        tax: 0.1,
        value: 76148426.19999999,
      },
    ],
  },
  {
    name: "1952 Quintas de Cartagena",
    address: "1952 Quintas de Cartagena",
    price: 79599446,
    codeInternal: "662",
    year: "1954",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1952 Quintas de Cartagena",
        tax: 0.1,
        value: 111439224.39999999,
      },
    ],
  },
  {
    name: "4174 Los Angeles Towers",
    address: "4174 Los Angeles Towers",
    price: 51439116,
    codeInternal: "663",
    year: "1963",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4174 Los Angeles Towers",
        tax: 0.1,
        value: 72014762.39999999,
      },
    ],
  },
  {
    name: "7340 Villas de Barranquilla",
    address: "7340 Villas de Barranquilla",
    price: 90702562,
    codeInternal: "664",
    year: "2040",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7340 Villas de Barranquilla",
        tax: 0.1,
        value: 126983586.8,
      },
    ],
  },
  {
    name: "4782 Miami Avenue",
    address: "4782 Miami Avenue",
    price: 28575060,
    codeInternal: "665",
    year: "1991",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4782 Miami Avenue",
        tax: 0.1,
        value: 40005084,
      },
    ],
  },
  {
    name: "9657 Paris Place",
    address: "9657 Paris Place",
    price: 84865619,
    codeInternal: "666",
    year: "1925",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9657 Paris Place",
        tax: 0.1,
        value: 118811866.6,
      },
    ],
  },
  {
    name: "6225 Reservas de Santa Maria",
    address: "6225 Reservas de Santa Maria",
    price: 77376122,
    codeInternal: "667",
    year: "1977",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6225 Reservas de Santa Maria",
        tax: 0.1,
        value: 108326570.8,
      },
    ],
  },
  {
    name: "7782 Santa Marta Collection",
    address: "7782 Santa Marta Collection",
    price: 42836169,
    codeInternal: "668",
    year: "1917",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7782 Santa Marta Collection",
        tax: 0.1,
        value: 59970636.599999994,
      },
    ],
  },
  {
    name: "2351 Miami Collection",
    address: "2351 Miami Collection",
    price: 79969957,
    codeInternal: "669",
    year: "1969",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2351 Miami Collection",
        tax: 0.1,
        value: 111957939.8,
      },
    ],
  },
  {
    name: "9662 Parque Santa Maria",
    address: "9662 Parque Santa Maria",
    price: 30630224,
    codeInternal: "670",
    year: "1950",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9662 Parque Santa Maria",
        tax: 0.1,
        value: 42882313.599999994,
      },
    ],
  },
  {
    name: "3160 Reservas de Santa Maria",
    address: "3160 Reservas de Santa Maria",
    price: 75175813,
    codeInternal: "671",
    year: "1968",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3160 Reservas de Santa Maria",
        tax: 0.1,
        value: 105246138.19999999,
      },
    ],
  },
  {
    name: "9593 Reservas de Barranquilla",
    address: "9593 Reservas de Barranquilla",
    price: 41608178,
    codeInternal: "672",
    year: "2001",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9593 Reservas de Barranquilla",
        tax: 0.1,
        value: 58251449.199999996,
      },
    ],
  },
  {
    name: "2258 Santa Marta Real",
    address: "2258 Santa Marta Real",
    price: 23327252,
    codeInternal: "673",
    year: "1992",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2258 Santa Marta Real",
        tax: 0.1,
        value: 32658152.799999997,
      },
    ],
  },
  {
    name: "9978 Villas de Barranquilla",
    address: "9978 Villas de Barranquilla",
    price: 55020449,
    codeInternal: "674",
    year: "1963",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9978 Villas de Barranquilla",
        tax: 0.1,
        value: 77028628.6,
      },
    ],
  },
  {
    name: "2200 Villas de Portofino",
    address: "2200 Villas de Portofino",
    price: 40354183,
    codeInternal: "675",
    year: "2048",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2200 Villas de Portofino",
        tax: 0.1,
        value: 56495856.199999996,
      },
    ],
  },
  {
    name: "2144 Villas de Montreal",
    address: "2144 Villas de Montreal",
    price: 64786034,
    codeInternal: "676",
    year: "1915",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2144 Villas de Montreal",
        tax: 0.1,
        value: 90700447.6,
      },
    ],
  },
  {
    name: "7030 Parque Barranquilla",
    address: "7030 Parque Barranquilla",
    price: 51441340,
    codeInternal: "677",
    year: "2008",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7030 Parque Barranquilla",
        tax: 0.1,
        value: 72017876,
      },
    ],
  },
  {
    name: "7463 Manhattan Beach",
    address: "7463 Manhattan Beach",
    price: 83833690,
    codeInternal: "678",
    year: "2031",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7463 Manhattan Beach",
        tax: 0.1,
        value: 117367166,
      },
    ],
  },
  {
    name: "7343 Manhattan Villa",
    address: "7343 Manhattan Villa",
    price: 17920013,
    codeInternal: "679",
    year: "1943",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7343 Manhattan Villa",
        tax: 0.1,
        value: 25088018.2,
      },
    ],
  },
  {
    name: "9664 Los Angeles State",
    address: "9664 Los Angeles State",
    price: 80192383,
    codeInternal: "680",
    year: "1957",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9664 Los Angeles State",
        tax: 0.1,
        value: 112269336.19999999,
      },
    ],
  },
  {
    name: "7778 Villas de Cartagena",
    address: "7778 Villas de Cartagena",
    price: 62721203,
    codeInternal: "681",
    year: "1926",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7778 Villas de Cartagena",
        tax: 0.1,
        value: 87809684.19999999,
      },
    ],
  },
  {
    name: "1310 Parque Cartagena",
    address: "1310 Parque Cartagena",
    price: 2307324,
    codeInternal: "682",
    year: "2017",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1310 Parque Cartagena",
        tax: 0.1,
        value: 3230253.5999999996,
      },
    ],
  },
  {
    name: "7060 Quintas de Santa Maria",
    address: "7060 Quintas de Santa Maria",
    price: 19689066,
    codeInternal: "683",
    year: "2019",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7060 Quintas de Santa Maria",
        tax: 0.1,
        value: 27564692.4,
      },
    ],
  },
  {
    name: "6192 Miami Place",
    address: "6192 Miami Place",
    price: 85523004,
    codeInternal: "684",
    year: "1956",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6192 Miami Place",
        tax: 0.1,
        value: 119732205.6,
      },
    ],
  },
  {
    name: "5650 Miami Avenue",
    address: "5650 Miami Avenue",
    price: 74423268,
    codeInternal: "685",
    year: "1997",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5650 Miami Avenue",
        tax: 0.1,
        value: 104192575.19999999,
      },
    ],
  },
  {
    name: "9698 Villas de Cartagena",
    address: "9698 Villas de Cartagena",
    price: 76774261,
    codeInternal: "686",
    year: "1909",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9698 Villas de Cartagena",
        tax: 0.1,
        value: 107483965.39999999,
      },
    ],
  },
  {
    name: "3745 Conjunto Residencial Portofino",
    address: "3745 Conjunto Residencial Portofino",
    price: 69239562,
    codeInternal: "687",
    year: "1920",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3745 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 96935386.8,
      },
    ],
  },
  {
    name: "6676 Miami Avenue",
    address: "6676 Miami Avenue",
    price: 13375567,
    codeInternal: "688",
    year: "2050",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6676 Miami Avenue",
        tax: 0.1,
        value: 18725793.799999997,
      },
    ],
  },
  {
    name: "2267 Los Angeles Street",
    address: "2267 Los Angeles Street",
    price: 13037022,
    codeInternal: "689",
    year: "2007",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2267 Los Angeles Street",
        tax: 0.1,
        value: 18251830.799999997,
      },
    ],
  },
  {
    name: "4908 Conjunto Residencial Portofino",
    address: "4908 Conjunto Residencial Portofino",
    price: 33997304,
    codeInternal: "690",
    year: "2021",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4908 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 47596225.599999994,
      },
    ],
  },
  {
    name: "2178 Parque Barranquilla",
    address: "2178 Parque Barranquilla",
    price: 14874437,
    codeInternal: "691",
    year: "2021",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2178 Parque Barranquilla",
        tax: 0.1,
        value: 20824211.799999997,
      },
    ],
  },
  {
    name: "3004 Conjunto Residencial Santa Maria",
    address: "3004 Conjunto Residencial Santa Maria",
    price: 57776550,
    codeInternal: "692",
    year: "2011",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3004 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 80887170,
      },
    ],
  },
  {
    name: "5985 Miami State",
    address: "5985 Miami State",
    price: 75108470,
    codeInternal: "693",
    year: "2049",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5985 Miami State",
        tax: 0.1,
        value: 105151858,
      },
    ],
  },
  {
    name: "4667 Conjunto Residencial Barranquilla",
    address: "4667 Conjunto Residencial Barranquilla",
    price: 5511534,
    codeInternal: "694",
    year: "1971",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4667 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 7716147.6,
      },
    ],
  },
  {
    name: "7500 Parque Santa Maria",
    address: "7500 Parque Santa Maria",
    price: 21699349,
    codeInternal: "695",
    year: "1902",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7500 Parque Santa Maria",
        tax: 0.1,
        value: 30379088.599999998,
      },
    ],
  },
  {
    name: "9793 Villas de Portofino",
    address: "9793 Villas de Portofino",
    price: 35513149,
    codeInternal: "696",
    year: "1940",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9793 Villas de Portofino",
        tax: 0.1,
        value: 49718408.599999994,
      },
    ],
  },
  {
    name: "3689 Quintas de Santa Maria",
    address: "3689 Quintas de Santa Maria",
    price: 64922983,
    codeInternal: "697",
    year: "1976",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3689 Quintas de Santa Maria",
        tax: 0.1,
        value: 90892176.19999999,
      },
    ],
  },
  {
    name: "6396 Los Angeles Real",
    address: "6396 Los Angeles Real",
    price: 66615623,
    codeInternal: "698",
    year: "1994",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6396 Los Angeles Real",
        tax: 0.1,
        value: 93261872.19999999,
      },
    ],
  },
  {
    name: "1965 Villas de Portofino",
    address: "1965 Villas de Portofino",
    price: 68068309,
    codeInternal: "699",
    year: "2002",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1965 Villas de Portofino",
        tax: 0.1,
        value: 95295632.6,
      },
    ],
  },
  {
    name: "6155 Parque Portofino",
    address: "6155 Parque Portofino",
    price: 17520157,
    codeInternal: "700",
    year: "2003",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6155 Parque Portofino",
        tax: 0.1,
        value: 24528219.799999997,
      },
    ],
  },
  {
    name: "7180 Manhattan Street",
    address: "7180 Manhattan Street",
    price: 47724645,
    codeInternal: "701",
    year: "1954",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7180 Manhattan Street",
        tax: 0.1,
        value: 66814502.99999999,
      },
    ],
  },
  {
    name: "9633 Parque Barranquilla",
    address: "9633 Parque Barranquilla",
    price: 72689502,
    codeInternal: "702",
    year: "1949",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9633 Parque Barranquilla",
        tax: 0.1,
        value: 101765302.8,
      },
    ],
  },
  {
    name: "8616 Conjunto Residencial Cartagena",
    address: "8616 Conjunto Residencial Cartagena",
    price: 25446639,
    codeInternal: "703",
    year: "1941",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8616 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 35625294.599999994,
      },
    ],
  },
  {
    name: "5857 Reservas de Cartagena",
    address: "5857 Reservas de Cartagena",
    price: 35019242,
    codeInternal: "704",
    year: "1945",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5857 Reservas de Cartagena",
        tax: 0.1,
        value: 49026938.8,
      },
    ],
  },
  {
    name: "8072 Parque Portofino",
    address: "8072 Parque Portofino",
    price: 23538791,
    codeInternal: "705",
    year: "1964",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8072 Parque Portofino",
        tax: 0.1,
        value: 32954307.4,
      },
    ],
  },
  {
    name: "4474 Paris Collection",
    address: "4474 Paris Collection",
    price: 47797667,
    codeInternal: "706",
    year: "2001",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4474 Paris Collection",
        tax: 0.1,
        value: 66916733.8,
      },
    ],
  },
  {
    name: "5629 Manhattan Collection",
    address: "5629 Manhattan Collection",
    price: 90695975,
    codeInternal: "707",
    year: "1988",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5629 Manhattan Collection",
        tax: 0.1,
        value: 126974364.99999999,
      },
    ],
  },
  {
    name: "6506 Villas de Santa Maria",
    address: "6506 Villas de Santa Maria",
    price: 85533893,
    codeInternal: "708",
    year: "2043",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6506 Villas de Santa Maria",
        tax: 0.1,
        value: 119747450.19999999,
      },
    ],
  },
  {
    name: "1559 Miami Villa",
    address: "1559 Miami Villa",
    price: 83475111,
    codeInternal: "709",
    year: "2036",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1559 Miami Villa",
        tax: 0.1,
        value: 116865155.39999999,
      },
    ],
  },
  {
    name: "5958 Santa Marta Beach",
    address: "5958 Santa Marta Beach",
    price: 33907456,
    codeInternal: "710",
    year: "1909",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5958 Santa Marta Beach",
        tax: 0.1,
        value: 47470438.4,
      },
    ],
  },
  {
    name: "2550 Reservas de Santa Maria",
    address: "2550 Reservas de Santa Maria",
    price: 92747388,
    codeInternal: "711",
    year: "1946",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2550 Reservas de Santa Maria",
        tax: 0.1,
        value: 129846343.19999999,
      },
    ],
  },
  {
    name: "5336 Villas de Cartagena",
    address: "5336 Villas de Cartagena",
    price: 42805965,
    codeInternal: "712",
    year: "1919",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5336 Villas de Cartagena",
        tax: 0.1,
        value: 59928350.99999999,
      },
    ],
  },
  {
    name: "5636 Los Angeles Avenue",
    address: "5636 Los Angeles Avenue",
    price: 34709865,
    codeInternal: "713",
    year: "1969",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5636 Los Angeles Avenue",
        tax: 0.1,
        value: 48593811,
      },
    ],
  },
  {
    name: "2440 Conjunto Residencial Cartagena",
    address: "2440 Conjunto Residencial Cartagena",
    price: 13347408,
    codeInternal: "714",
    year: "2032",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2440 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 18686371.2,
      },
    ],
  },
  {
    name: "8851 Parque Cartagena",
    address: "8851 Parque Cartagena",
    price: 4839251,
    codeInternal: "715",
    year: "1904",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8851 Parque Cartagena",
        tax: 0.1,
        value: 6774951.399999999,
      },
    ],
  },
  {
    name: "2715 Quintas de Cartagena",
    address: "2715 Quintas de Cartagena",
    price: 57195696,
    codeInternal: "716",
    year: "1959",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2715 Quintas de Cartagena",
        tax: 0.1,
        value: 80073974.39999999,
      },
    ],
  },
  {
    name: "7091 Quintas de Montreal",
    address: "7091 Quintas de Montreal",
    price: 77519968,
    codeInternal: "717",
    year: "2001",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7091 Quintas de Montreal",
        tax: 0.1,
        value: 108527955.19999999,
      },
    ],
  },
  {
    name: "4207 Manhattan Place",
    address: "4207 Manhattan Place",
    price: 17989437,
    codeInternal: "718",
    year: "1930",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4207 Manhattan Place",
        tax: 0.1,
        value: 25185211.799999997,
      },
    ],
  },
  {
    name: "5646 Los Angeles Street",
    address: "5646 Los Angeles Street",
    price: 20329301,
    codeInternal: "719",
    year: "1901",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5646 Los Angeles Street",
        tax: 0.1,
        value: 28461021.4,
      },
    ],
  },
  {
    name: "9105 Reservas de Portofino",
    address: "9105 Reservas de Portofino",
    price: 9672772,
    codeInternal: "720",
    year: "2014",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9105 Reservas de Portofino",
        tax: 0.1,
        value: 13541880.799999999,
      },
    ],
  },
  {
    name: "8756 Miami State",
    address: "8756 Miami State",
    price: 11335600,
    codeInternal: "721",
    year: "1936",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8756 Miami State",
        tax: 0.1,
        value: 15869839.999999998,
      },
    ],
  },
  {
    name: "7498 Los Angeles State",
    address: "7498 Los Angeles State",
    price: 91603747,
    codeInternal: "722",
    year: "1966",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7498 Los Angeles State",
        tax: 0.1,
        value: 128245245.8,
      },
    ],
  },
  {
    name: "6473 Parque Montreal",
    address: "6473 Parque Montreal",
    price: 66533766,
    codeInternal: "723",
    year: "2024",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6473 Parque Montreal",
        tax: 0.1,
        value: 93147272.39999999,
      },
    ],
  },
  {
    name: "4568 Villas de Santa Maria",
    address: "4568 Villas de Santa Maria",
    price: 21213893,
    codeInternal: "724",
    year: "1989",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4568 Villas de Santa Maria",
        tax: 0.1,
        value: 29699450.2,
      },
    ],
  },
  {
    name: "8818 Villas de Portofino",
    address: "8818 Villas de Portofino",
    price: 60839264,
    codeInternal: "725",
    year: "1934",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8818 Villas de Portofino",
        tax: 0.1,
        value: 85174969.6,
      },
    ],
  },
  {
    name: "7614 Villas de Barranquilla",
    address: "7614 Villas de Barranquilla",
    price: 80022348,
    codeInternal: "726",
    year: "2021",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7614 Villas de Barranquilla",
        tax: 0.1,
        value: 112031287.19999999,
      },
    ],
  },
  {
    name: "6445 Santa Marta Beach",
    address: "6445 Santa Marta Beach",
    price: 4215925,
    codeInternal: "727",
    year: "1909",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6445 Santa Marta Beach",
        tax: 0.1,
        value: 5902295,
      },
    ],
  },
  {
    name: "2070 Miami Real",
    address: "2070 Miami Real",
    price: 25784331,
    codeInternal: "728",
    year: "1989",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2070 Miami Real",
        tax: 0.1,
        value: 36098063.4,
      },
    ],
  },
  {
    name: "2749 Miami Beach",
    address: "2749 Miami Beach",
    price: 54930248,
    codeInternal: "729",
    year: "1933",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2749 Miami Beach",
        tax: 0.1,
        value: 76902347.19999999,
      },
    ],
  },
  {
    name: "8445 Conjunto Residencial Montreal",
    address: "8445 Conjunto Residencial Montreal",
    price: 31638340,
    codeInternal: "730",
    year: "1986",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8445 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 44293676,
      },
    ],
  },
  {
    name: "2765 Miami Avenue",
    address: "2765 Miami Avenue",
    price: 94540981,
    codeInternal: "731",
    year: "1916",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2765 Miami Avenue",
        tax: 0.1,
        value: 132357373.39999999,
      },
    ],
  },
  {
    name: "6329 Manhattan Terrace",
    address: "6329 Manhattan Terrace",
    price: 43154605,
    codeInternal: "732",
    year: "1935",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6329 Manhattan Terrace",
        tax: 0.1,
        value: 60416446.99999999,
      },
    ],
  },
  {
    name: "1074 Los Angeles Real",
    address: "1074 Los Angeles Real",
    price: 785084,
    codeInternal: "733",
    year: "2031",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1074 Los Angeles Real",
        tax: 0.1,
        value: 1099117.5999999999,
      },
    ],
  },
  {
    name: "6666 Santa Marta Place",
    address: "6666 Santa Marta Place",
    price: 3883832,
    codeInternal: "734",
    year: "2005",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6666 Santa Marta Place",
        tax: 0.1,
        value: 5437364.8,
      },
    ],
  },
  {
    name: "9211 Parque Montreal",
    address: "9211 Parque Montreal",
    price: 84936166,
    codeInternal: "735",
    year: "2004",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9211 Parque Montreal",
        tax: 0.1,
        value: 118910632.39999999,
      },
    ],
  },
  {
    name: "8878 Reservas de Portofino",
    address: "8878 Reservas de Portofino",
    price: 32682964,
    codeInternal: "736",
    year: "1906",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8878 Reservas de Portofino",
        tax: 0.1,
        value: 45756149.599999994,
      },
    ],
  },
  {
    name: "3848 Quintas de Montreal",
    address: "3848 Quintas de Montreal",
    price: 54151483,
    codeInternal: "737",
    year: "1928",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3848 Quintas de Montreal",
        tax: 0.1,
        value: 75812076.19999999,
      },
    ],
  },
  {
    name: "9601 Villas de Portofino",
    address: "9601 Villas de Portofino",
    price: 88599380,
    codeInternal: "738",
    year: "1980",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9601 Villas de Portofino",
        tax: 0.1,
        value: 124039131.99999999,
      },
    ],
  },
  {
    name: "3455 Miami Place",
    address: "3455 Miami Place",
    price: 38123369,
    codeInternal: "739",
    year: "1959",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3455 Miami Place",
        tax: 0.1,
        value: 53372716.599999994,
      },
    ],
  },
  {
    name: "5304 Quintas de Santa Maria",
    address: "5304 Quintas de Santa Maria",
    price: 65545042,
    codeInternal: "740",
    year: "1916",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5304 Quintas de Santa Maria",
        tax: 0.1,
        value: 91763058.8,
      },
    ],
  },
  {
    name: "6838 Conjunto Residencial Cartagena",
    address: "6838 Conjunto Residencial Cartagena",
    price: 92457586,
    codeInternal: "741",
    year: "2033",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6838 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 129440620.39999999,
      },
    ],
  },
  {
    name: "2498 Santa Marta Gardens",
    address: "2498 Santa Marta Gardens",
    price: 60409964,
    codeInternal: "742",
    year: "2003",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2498 Santa Marta Gardens",
        tax: 0.1,
        value: 84573949.6,
      },
    ],
  },
  {
    name: "1852 Reservas de Montreal",
    address: "1852 Reservas de Montreal",
    price: 33776920,
    codeInternal: "743",
    year: "1970",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1852 Reservas de Montreal",
        tax: 0.1,
        value: 47287688,
      },
    ],
  },
  {
    name: "3258 Paris Gardens",
    address: "3258 Paris Gardens",
    price: 42112859,
    codeInternal: "744",
    year: "1908",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3258 Paris Gardens",
        tax: 0.1,
        value: 58958002.599999994,
      },
    ],
  },
  {
    name: "4224 Santa Marta State",
    address: "4224 Santa Marta State",
    price: 13953124,
    codeInternal: "745",
    year: "1983",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4224 Santa Marta State",
        tax: 0.1,
        value: 19534373.599999998,
      },
    ],
  },
  {
    name: "6843 Santa Marta Gardens",
    address: "6843 Santa Marta Gardens",
    price: 30887436,
    codeInternal: "746",
    year: "1974",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6843 Santa Marta Gardens",
        tax: 0.1,
        value: 43242410.4,
      },
    ],
  },
  {
    name: "7089 Manhattan Boulevard",
    address: "7089 Manhattan Boulevard",
    price: 44159743,
    codeInternal: "747",
    year: "2044",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7089 Manhattan Boulevard",
        tax: 0.1,
        value: 61823640.199999996,
      },
    ],
  },
  {
    name: "9366 Paris Collection",
    address: "9366 Paris Collection",
    price: 5717264,
    codeInternal: "748",
    year: "1908",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9366 Paris Collection",
        tax: 0.1,
        value: 8004169.6,
      },
    ],
  },
  {
    name: "2341 Parque Cartagena",
    address: "2341 Parque Cartagena",
    price: 15598468,
    codeInternal: "749",
    year: "1986",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2341 Parque Cartagena",
        tax: 0.1,
        value: 21837855.2,
      },
    ],
  },
  {
    name: "6302 Reservas de Cartagena",
    address: "6302 Reservas de Cartagena",
    price: 53125907,
    codeInternal: "750",
    year: "1981",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6302 Reservas de Cartagena",
        tax: 0.1,
        value: 74376269.8,
      },
    ],
  },
  {
    name: "3727 Reservas de Montreal",
    address: "3727 Reservas de Montreal",
    price: 17143147,
    codeInternal: "751",
    year: "1916",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3727 Reservas de Montreal",
        tax: 0.1,
        value: 24000405.799999997,
      },
    ],
  },
  {
    name: "7420 Conjunto Residencial Santa Maria",
    address: "7420 Conjunto Residencial Santa Maria",
    price: 48036141,
    codeInternal: "752",
    year: "2021",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7420 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 67250597.39999999,
      },
    ],
  },
  {
    name: "6568 Santa Marta Terrace",
    address: "6568 Santa Marta Terrace",
    price: 54575614,
    codeInternal: "753",
    year: "1924",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6568 Santa Marta Terrace",
        tax: 0.1,
        value: 76405859.6,
      },
    ],
  },
  {
    name: "1604 Manhattan Street",
    address: "1604 Manhattan Street",
    price: 64188198,
    codeInternal: "754",
    year: "2019",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1604 Manhattan Street",
        tax: 0.1,
        value: 89863477.19999999,
      },
    ],
  },
  {
    name: "6714 Manhattan Terrace",
    address: "6714 Manhattan Terrace",
    price: 68256500,
    codeInternal: "755",
    year: "1975",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6714 Manhattan Terrace",
        tax: 0.1,
        value: 95559100,
      },
    ],
  },
  {
    name: "4525 Quintas de Montreal",
    address: "4525 Quintas de Montreal",
    price: 3216246,
    codeInternal: "756",
    year: "1905",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4525 Quintas de Montreal",
        tax: 0.1,
        value: 4502744.399999999,
      },
    ],
  },
  {
    name: "6914 Conjunto Residencial Barranquilla",
    address: "6914 Conjunto Residencial Barranquilla",
    price: 69720755,
    codeInternal: "757",
    year: "1943",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6914 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 97609057,
      },
    ],
  },
  {
    name: "9828 Conjunto Residencial Santa Maria",
    address: "9828 Conjunto Residencial Santa Maria",
    price: 856918,
    codeInternal: "758",
    year: "1972",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9828 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 1199685.2,
      },
    ],
  },
  {
    name: "9506 Conjunto Residencial Montreal",
    address: "9506 Conjunto Residencial Montreal",
    price: 30303123,
    codeInternal: "759",
    year: "2049",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9506 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 42424372.199999996,
      },
    ],
  },
  {
    name: "2450 Villas de Barranquilla",
    address: "2450 Villas de Barranquilla",
    price: 44210145,
    codeInternal: "760",
    year: "1994",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2450 Villas de Barranquilla",
        tax: 0.1,
        value: 61894202.99999999,
      },
    ],
  },
  {
    name: "3710 Parque Portofino",
    address: "3710 Parque Portofino",
    price: 62524745,
    codeInternal: "761",
    year: "1984",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3710 Parque Portofino",
        tax: 0.1,
        value: 87534643,
      },
    ],
  },
  {
    name: "3691 Manhattan Real",
    address: "3691 Manhattan Real",
    price: 26007740,
    codeInternal: "762",
    year: "1965",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3691 Manhattan Real",
        tax: 0.1,
        value: 36410836,
      },
    ],
  },
  {
    name: "2133 Manhattan Real",
    address: "2133 Manhattan Real",
    price: 61737389,
    codeInternal: "763",
    year: "1997",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2133 Manhattan Real",
        tax: 0.1,
        value: 86432344.6,
      },
    ],
  },
  {
    name: "2601 Santa Marta Gardens",
    address: "2601 Santa Marta Gardens",
    price: 32321683,
    codeInternal: "764",
    year: "2016",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2601 Santa Marta Gardens",
        tax: 0.1,
        value: 45250356.199999996,
      },
    ],
  },
  {
    name: "2336 Santa Marta Gardens",
    address: "2336 Santa Marta Gardens",
    price: 43199423,
    codeInternal: "765",
    year: "1941",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2336 Santa Marta Gardens",
        tax: 0.1,
        value: 60479192.199999996,
      },
    ],
  },
  {
    name: "5029 Quintas de Santa Maria",
    address: "5029 Quintas de Santa Maria",
    price: 10464571,
    codeInternal: "766",
    year: "2030",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5029 Quintas de Santa Maria",
        tax: 0.1,
        value: 14650399.399999999,
      },
    ],
  },
  {
    name: "5449 Villas de Santa Maria",
    address: "5449 Villas de Santa Maria",
    price: 31266774,
    codeInternal: "767",
    year: "2038",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5449 Villas de Santa Maria",
        tax: 0.1,
        value: 43773483.599999994,
      },
    ],
  },
  {
    name: "6358 Manhattan Street",
    address: "6358 Manhattan Street",
    price: 77328825,
    codeInternal: "768",
    year: "1989",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6358 Manhattan Street",
        tax: 0.1,
        value: 108260355,
      },
    ],
  },
  {
    name: "2955 Parque Barranquilla",
    address: "2955 Parque Barranquilla",
    price: 54424679,
    codeInternal: "769",
    year: "1927",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2955 Parque Barranquilla",
        tax: 0.1,
        value: 76194550.6,
      },
    ],
  },
  {
    name: "4251 Conjunto Residencial Cartagena",
    address: "4251 Conjunto Residencial Cartagena",
    price: 8355118,
    codeInternal: "770",
    year: "1910",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4251 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 11697165.2,
      },
    ],
  },
  {
    name: "7918 Reservas de Montreal",
    address: "7918 Reservas de Montreal",
    price: 57953631,
    codeInternal: "771",
    year: "1978",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7918 Reservas de Montreal",
        tax: 0.1,
        value: 81135083.39999999,
      },
    ],
  },
  {
    name: "7776 Villas de Santa Maria",
    address: "7776 Villas de Santa Maria",
    price: 9260038,
    codeInternal: "772",
    year: "1916",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7776 Villas de Santa Maria",
        tax: 0.1,
        value: 12964053.2,
      },
    ],
  },
  {
    name: "2627 Miami Gardens",
    address: "2627 Miami Gardens",
    price: 20160395,
    codeInternal: "773",
    year: "1958",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2627 Miami Gardens",
        tax: 0.1,
        value: 28224553,
      },
    ],
  },
  {
    name: "3883 Villas de Montreal",
    address: "3883 Villas de Montreal",
    price: 72852291,
    codeInternal: "774",
    year: "1912",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3883 Villas de Montreal",
        tax: 0.1,
        value: 101993207.39999999,
      },
    ],
  },
  {
    name: "2825 Parque Santa Maria",
    address: "2825 Parque Santa Maria",
    price: 88589154,
    codeInternal: "775",
    year: "1980",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2825 Parque Santa Maria",
        tax: 0.1,
        value: 124024815.6,
      },
    ],
  },
  {
    name: "9537 Parque Cartagena",
    address: "9537 Parque Cartagena",
    price: 14418105,
    codeInternal: "776",
    year: "1939",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9537 Parque Cartagena",
        tax: 0.1,
        value: 20185347,
      },
    ],
  },
  {
    name: "1471 Quintas de Barranquilla",
    address: "1471 Quintas de Barranquilla",
    price: 17521047,
    codeInternal: "777",
    year: "1940",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1471 Quintas de Barranquilla",
        tax: 0.1,
        value: 24529465.799999997,
      },
    ],
  },
  {
    name: "8917 Reservas de Barranquilla",
    address: "8917 Reservas de Barranquilla",
    price: 68502234,
    codeInternal: "778",
    year: "2023",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8917 Reservas de Barranquilla",
        tax: 0.1,
        value: 95903127.6,
      },
    ],
  },
  {
    name: "9943 Los Angeles Villa",
    address: "9943 Los Angeles Villa",
    price: 68678764,
    codeInternal: "779",
    year: "2040",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9943 Los Angeles Villa",
        tax: 0.1,
        value: 96150269.6,
      },
    ],
  },
  {
    name: "9511 Conjunto Residencial Cartagena",
    address: "9511 Conjunto Residencial Cartagena",
    price: 90060866,
    codeInternal: "780",
    year: "1987",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9511 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 126085212.39999999,
      },
    ],
  },
  {
    name: "9732 Quintas de Santa Maria",
    address: "9732 Quintas de Santa Maria",
    price: 36212088,
    codeInternal: "781",
    year: "1964",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9732 Quintas de Santa Maria",
        tax: 0.1,
        value: 50696923.199999996,
      },
    ],
  },
  {
    name: "6575 Paris Collection",
    address: "6575 Paris Collection",
    price: 37285785,
    codeInternal: "782",
    year: "1941",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6575 Paris Collection",
        tax: 0.1,
        value: 52200099,
      },
    ],
  },
  {
    name: "1560 Santa Marta Boulevard",
    address: "1560 Santa Marta Boulevard",
    price: 8888299,
    codeInternal: "783",
    year: "1987",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1560 Santa Marta Boulevard",
        tax: 0.1,
        value: 12443618.6,
      },
    ],
  },
  {
    name: "3230 Miami State",
    address: "3230 Miami State",
    price: 74001698,
    codeInternal: "784",
    year: "1958",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3230 Miami State",
        tax: 0.1,
        value: 103602377.19999999,
      },
    ],
  },
  {
    name: "1589 Miami Terrace",
    address: "1589 Miami Terrace",
    price: 43156358,
    codeInternal: "785",
    year: "2045",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1589 Miami Terrace",
        tax: 0.1,
        value: 60418901.199999996,
      },
    ],
  },
  {
    name: "1580 Santa Marta Collection",
    address: "1580 Santa Marta Collection",
    price: 75826844,
    codeInternal: "786",
    year: "1911",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1580 Santa Marta Collection",
        tax: 0.1,
        value: 106157581.6,
      },
    ],
  },
  {
    name: "8302 Los Angeles Beach",
    address: "8302 Los Angeles Beach",
    price: 10684313,
    codeInternal: "787",
    year: "1905",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8302 Los Angeles Beach",
        tax: 0.1,
        value: 14958038.2,
      },
    ],
  },
  {
    name: "8304 Los Angeles State",
    address: "8304 Los Angeles State",
    price: 37767036,
    codeInternal: "788",
    year: "1968",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8304 Los Angeles State",
        tax: 0.1,
        value: 52873850.4,
      },
    ],
  },
  {
    name: "2883 Miami Beach",
    address: "2883 Miami Beach",
    price: 58413538,
    codeInternal: "789",
    year: "1907",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2883 Miami Beach",
        tax: 0.1,
        value: 81778953.19999999,
      },
    ],
  },
  {
    name: "9823 Conjunto Residencial Montreal",
    address: "9823 Conjunto Residencial Montreal",
    price: 30815391,
    codeInternal: "790",
    year: "2005",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9823 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 43141547.4,
      },
    ],
  },
  {
    name: "3536 Paris Collection",
    address: "3536 Paris Collection",
    price: 62789846,
    codeInternal: "791",
    year: "1962",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3536 Paris Collection",
        tax: 0.1,
        value: 87905784.39999999,
      },
    ],
  },
  {
    name: "5142 Reservas de Barranquilla",
    address: "5142 Reservas de Barranquilla",
    price: 15521588,
    codeInternal: "792",
    year: "1966",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5142 Reservas de Barranquilla",
        tax: 0.1,
        value: 21730223.2,
      },
    ],
  },
  {
    name: "8666 Reservas de Barranquilla",
    address: "8666 Reservas de Barranquilla",
    price: 55870865,
    codeInternal: "793",
    year: "1965",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8666 Reservas de Barranquilla",
        tax: 0.1,
        value: 78219211,
      },
    ],
  },
  {
    name: "5036 Quintas de Santa Maria",
    address: "5036 Quintas de Santa Maria",
    price: 77455644,
    codeInternal: "794",
    year: "1914",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5036 Quintas de Santa Maria",
        tax: 0.1,
        value: 108437901.6,
      },
    ],
  },
  {
    name: "6928 Quintas de Cartagena",
    address: "6928 Quintas de Cartagena",
    price: 67454669,
    codeInternal: "795",
    year: "1907",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6928 Quintas de Cartagena",
        tax: 0.1,
        value: 94436536.6,
      },
    ],
  },
  {
    name: "7298 Conjunto Residencial Portofino",
    address: "7298 Conjunto Residencial Portofino",
    price: 46345862,
    codeInternal: "796",
    year: "1945",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7298 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 64884206.8,
      },
    ],
  },
  {
    name: "6448 Santa Marta Real",
    address: "6448 Santa Marta Real",
    price: 176852,
    codeInternal: "797",
    year: "2004",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6448 Santa Marta Real",
        tax: 0.1,
        value: 247592.8,
      },
    ],
  },
  {
    name: "2627 Santa Marta Gardens",
    address: "2627 Santa Marta Gardens",
    price: 28832296,
    codeInternal: "798",
    year: "1966",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2627 Santa Marta Gardens",
        tax: 0.1,
        value: 40365214.4,
      },
    ],
  },
  {
    name: "1749 Miami Boulevard",
    address: "1749 Miami Boulevard",
    price: 98346549,
    codeInternal: "799",
    year: "1996",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1749 Miami Boulevard",
        tax: 0.1,
        value: 137685168.6,
      },
    ],
  },
  {
    name: "6725 Santa Marta Beach",
    address: "6725 Santa Marta Beach",
    price: 29755753,
    codeInternal: "800",
    year: "1997",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6725 Santa Marta Beach",
        tax: 0.1,
        value: 41658054.199999996,
      },
    ],
  },
  {
    name: "2343 Villas de Montreal",
    address: "2343 Villas de Montreal",
    price: 54810206,
    codeInternal: "801",
    year: "1974",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2343 Villas de Montreal",
        tax: 0.1,
        value: 76734288.39999999,
      },
    ],
  },
  {
    name: "5934 Santa Marta Beach",
    address: "5934 Santa Marta Beach",
    price: 21808600,
    codeInternal: "802",
    year: "2035",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5934 Santa Marta Beach",
        tax: 0.1,
        value: 30532039.999999996,
      },
    ],
  },
  {
    name: "1664 Quintas de Montreal",
    address: "1664 Quintas de Montreal",
    price: 50133587,
    codeInternal: "803",
    year: "1960",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1664 Quintas de Montreal",
        tax: 0.1,
        value: 70187021.8,
      },
    ],
  },
  {
    name: "6760 Los Angeles Terrace",
    address: "6760 Los Angeles Terrace",
    price: 65770724,
    codeInternal: "804",
    year: "2006",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6760 Los Angeles Terrace",
        tax: 0.1,
        value: 92079013.6,
      },
    ],
  },
  {
    name: "9053 Miami Collection",
    address: "9053 Miami Collection",
    price: 15608464,
    codeInternal: "805",
    year: "2018",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9053 Miami Collection",
        tax: 0.1,
        value: 21851849.599999998,
      },
    ],
  },
  {
    name: "7777 Los Angeles Avenue",
    address: "7777 Los Angeles Avenue",
    price: 28888007,
    codeInternal: "806",
    year: "2029",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7777 Los Angeles Avenue",
        tax: 0.1,
        value: 40443209.8,
      },
    ],
  },
  {
    name: "4136 Santa Marta Terrace",
    address: "4136 Santa Marta Terrace",
    price: 64137866,
    codeInternal: "807",
    year: "2035",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4136 Santa Marta Terrace",
        tax: 0.1,
        value: 89793012.39999999,
      },
    ],
  },
  {
    name: "4965 Parque Cartagena",
    address: "4965 Parque Cartagena",
    price: 93667193,
    codeInternal: "808",
    year: "1904",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4965 Parque Cartagena",
        tax: 0.1,
        value: 131134070.19999999,
      },
    ],
  },
  {
    name: "6546 Los Angeles Place",
    address: "6546 Los Angeles Place",
    price: 60527850,
    codeInternal: "809",
    year: "2047",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6546 Los Angeles Place",
        tax: 0.1,
        value: 84738990,
      },
    ],
  },
  {
    name: "6262 Paris Villa",
    address: "6262 Paris Villa",
    price: 43081449,
    codeInternal: "810",
    year: "1946",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6262 Paris Villa",
        tax: 0.1,
        value: 60314028.599999994,
      },
    ],
  },
  {
    name: "6831 Miami Collection",
    address: "6831 Miami Collection",
    price: 27161921,
    codeInternal: "811",
    year: "1986",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6831 Miami Collection",
        tax: 0.1,
        value: 38026689.4,
      },
    ],
  },
  {
    name: "6491 Miami Terrace",
    address: "6491 Miami Terrace",
    price: 47961166,
    codeInternal: "812",
    year: "1905",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6491 Miami Terrace",
        tax: 0.1,
        value: 67145632.39999999,
      },
    ],
  },
  {
    name: "1135 Quintas de Portofino",
    address: "1135 Quintas de Portofino",
    price: 37363304,
    codeInternal: "813",
    year: "1961",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1135 Quintas de Portofino",
        tax: 0.1,
        value: 52308625.599999994,
      },
    ],
  },
  {
    name: "4640 Reservas de Barranquilla",
    address: "4640 Reservas de Barranquilla",
    price: 40276025,
    codeInternal: "814",
    year: "1974",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4640 Reservas de Barranquilla",
        tax: 0.1,
        value: 56386435,
      },
    ],
  },
  {
    name: "3526 Santa Marta Street",
    address: "3526 Santa Marta Street",
    price: 36618791,
    codeInternal: "815",
    year: "2019",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3526 Santa Marta Street",
        tax: 0.1,
        value: 51266307.4,
      },
    ],
  },
  {
    name: "8179 Villas de Santa Maria",
    address: "8179 Villas de Santa Maria",
    price: 22904320,
    codeInternal: "816",
    year: "2004",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8179 Villas de Santa Maria",
        tax: 0.1,
        value: 32066047.999999996,
      },
    ],
  },
  {
    name: "7373 Manhattan Real",
    address: "7373 Manhattan Real",
    price: 83378370,
    codeInternal: "817",
    year: "2046",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7373 Manhattan Real",
        tax: 0.1,
        value: 116729718,
      },
    ],
  },
  {
    name: "3794 Paris Towers",
    address: "3794 Paris Towers",
    price: 19056033,
    codeInternal: "818",
    year: "1990",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3794 Paris Towers",
        tax: 0.1,
        value: 26678446.2,
      },
    ],
  },
  {
    name: "2504 Parque Cartagena",
    address: "2504 Parque Cartagena",
    price: 90571699,
    codeInternal: "819",
    year: "1995",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2504 Parque Cartagena",
        tax: 0.1,
        value: 126800378.6,
      },
    ],
  },
  {
    name: "9902 Paris Street",
    address: "9902 Paris Street",
    price: 17090402,
    codeInternal: "820",
    year: "1954",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9902 Paris Street",
        tax: 0.1,
        value: 23926562.799999997,
      },
    ],
  },
  {
    name: "5181 Paris Real",
    address: "5181 Paris Real",
    price: 94305155,
    codeInternal: "821",
    year: "2004",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5181 Paris Real",
        tax: 0.1,
        value: 132027216.99999999,
      },
    ],
  },
  {
    name: "8216 Miami Avenue",
    address: "8216 Miami Avenue",
    price: 15317117,
    codeInternal: "822",
    year: "2020",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8216 Miami Avenue",
        tax: 0.1,
        value: 21443963.799999997,
      },
    ],
  },
  {
    name: "2238 Manhattan Terrace",
    address: "2238 Manhattan Terrace",
    price: 80997495,
    codeInternal: "823",
    year: "2013",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2238 Manhattan Terrace",
        tax: 0.1,
        value: 113396493,
      },
    ],
  },
  {
    name: "7039 Los Angeles Towers",
    address: "7039 Los Angeles Towers",
    price: 82440120,
    codeInternal: "824",
    year: "2015",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7039 Los Angeles Towers",
        tax: 0.1,
        value: 115416168,
      },
    ],
  },
  {
    name: "5663 Paris Avenue",
    address: "5663 Paris Avenue",
    price: 1697806,
    codeInternal: "825",
    year: "1989",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5663 Paris Avenue",
        tax: 0.1,
        value: 2376928.4,
      },
    ],
  },
  {
    name: "8645 Quintas de Santa Maria",
    address: "8645 Quintas de Santa Maria",
    price: 6994859,
    codeInternal: "826",
    year: "2028",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8645 Quintas de Santa Maria",
        tax: 0.1,
        value: 9792802.6,
      },
    ],
  },
  {
    name: "3382 Reservas de Barranquilla",
    address: "3382 Reservas de Barranquilla",
    price: 91589291,
    codeInternal: "827",
    year: "2035",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3382 Reservas de Barranquilla",
        tax: 0.1,
        value: 128225007.39999999,
      },
    ],
  },
  {
    name: "5447 Quintas de Santa Maria",
    address: "5447 Quintas de Santa Maria",
    price: 7349949,
    codeInternal: "828",
    year: "1955",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5447 Quintas de Santa Maria",
        tax: 0.1,
        value: 10289928.6,
      },
    ],
  },
  {
    name: "7727 Villas de Montreal",
    address: "7727 Villas de Montreal",
    price: 41316038,
    codeInternal: "829",
    year: "1906",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7727 Villas de Montreal",
        tax: 0.1,
        value: 57842453.199999996,
      },
    ],
  },
  {
    name: "2666 Manhattan Towers",
    address: "2666 Manhattan Towers",
    price: 50841648,
    codeInternal: "830",
    year: "2050",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2666 Manhattan Towers",
        tax: 0.1,
        value: 71178307.19999999,
      },
    ],
  },
  {
    name: "3195 Quintas de Montreal",
    address: "3195 Quintas de Montreal",
    price: 81586486,
    codeInternal: "831",
    year: "1967",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3195 Quintas de Montreal",
        tax: 0.1,
        value: 114221080.39999999,
      },
    ],
  },
  {
    name: "4579 Santa Marta Avenue",
    address: "4579 Santa Marta Avenue",
    price: 18960136,
    codeInternal: "832",
    year: "1926",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4579 Santa Marta Avenue",
        tax: 0.1,
        value: 26544190.4,
      },
    ],
  },
  {
    name: "5220 Villas de Portofino",
    address: "5220 Villas de Portofino",
    price: 79982378,
    codeInternal: "833",
    year: "2004",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5220 Villas de Portofino",
        tax: 0.1,
        value: 111975329.19999999,
      },
    ],
  },
  {
    name: "2816 Miami Boulevard",
    address: "2816 Miami Boulevard",
    price: 14578106,
    codeInternal: "834",
    year: "1949",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2816 Miami Boulevard",
        tax: 0.1,
        value: 20409348.4,
      },
    ],
  },
  {
    name: "1244 Villas de Cartagena",
    address: "1244 Villas de Cartagena",
    price: 63660991,
    codeInternal: "835",
    year: "2007",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1244 Villas de Cartagena",
        tax: 0.1,
        value: 89125387.39999999,
      },
    ],
  },
  {
    name: "2375 Quintas de Cartagena",
    address: "2375 Quintas de Cartagena",
    price: 71766813,
    codeInternal: "836",
    year: "2033",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2375 Quintas de Cartagena",
        tax: 0.1,
        value: 100473538.19999999,
      },
    ],
  },
  {
    name: "5165 Los Angeles Collection",
    address: "5165 Los Angeles Collection",
    price: 4581857,
    codeInternal: "837",
    year: "2009",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5165 Los Angeles Collection",
        tax: 0.1,
        value: 6414599.8,
      },
    ],
  },
  {
    name: "6432 Parque Portofino",
    address: "6432 Parque Portofino",
    price: 23886022,
    codeInternal: "838",
    year: "1924",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6432 Parque Portofino",
        tax: 0.1,
        value: 33440430.799999997,
      },
    ],
  },
  {
    name: "8601 Reservas de Cartagena",
    address: "8601 Reservas de Cartagena",
    price: 17171880,
    codeInternal: "839",
    year: "1952",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8601 Reservas de Cartagena",
        tax: 0.1,
        value: 24040632,
      },
    ],
  },
  {
    name: "2768 Los Angeles Terrace",
    address: "2768 Los Angeles Terrace",
    price: 14740500,
    codeInternal: "840",
    year: "1959",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2768 Los Angeles Terrace",
        tax: 0.1,
        value: 20636700,
      },
    ],
  },
  {
    name: "2299 Villas de Barranquilla",
    address: "2299 Villas de Barranquilla",
    price: 44636870,
    codeInternal: "841",
    year: "1929",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2299 Villas de Barranquilla",
        tax: 0.1,
        value: 62491617.99999999,
      },
    ],
  },
  {
    name: "2418 Reservas de Santa Maria",
    address: "2418 Reservas de Santa Maria",
    price: 3964014,
    codeInternal: "842",
    year: "2040",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2418 Reservas de Santa Maria",
        tax: 0.1,
        value: 5549619.6,
      },
    ],
  },
  {
    name: "9121 Quintas de Portofino",
    address: "9121 Quintas de Portofino",
    price: 20763615,
    codeInternal: "843",
    year: "1972",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9121 Quintas de Portofino",
        tax: 0.1,
        value: 29069061,
      },
    ],
  },
  {
    name: "3619 Villas de Santa Maria",
    address: "3619 Villas de Santa Maria",
    price: 15671823,
    codeInternal: "844",
    year: "1998",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3619 Villas de Santa Maria",
        tax: 0.1,
        value: 21940552.2,
      },
    ],
  },
  {
    name: "2749 Miami Villa",
    address: "2749 Miami Villa",
    price: 49362038,
    codeInternal: "845",
    year: "2005",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2749 Miami Villa",
        tax: 0.1,
        value: 69106853.2,
      },
    ],
  },
  {
    name: "9504 Parque Portofino",
    address: "9504 Parque Portofino",
    price: 87993069,
    codeInternal: "846",
    year: "1997",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9504 Parque Portofino",
        tax: 0.1,
        value: 123190296.6,
      },
    ],
  },
  {
    name: "4390 Quintas de Barranquilla",
    address: "4390 Quintas de Barranquilla",
    price: 31050361,
    codeInternal: "847",
    year: "1990",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4390 Quintas de Barranquilla",
        tax: 0.1,
        value: 43470505.4,
      },
    ],
  },
  {
    name: "1379 Parque Montreal",
    address: "1379 Parque Montreal",
    price: 21048423,
    codeInternal: "848",
    year: "2033",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1379 Parque Montreal",
        tax: 0.1,
        value: 29467792.2,
      },
    ],
  },
  {
    name: "2266 Quintas de Portofino",
    address: "2266 Quintas de Portofino",
    price: 70644144,
    codeInternal: "849",
    year: "1975",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2266 Quintas de Portofino",
        tax: 0.1,
        value: 98901801.6,
      },
    ],
  },
  {
    name: "2196 Villas de Santa Maria",
    address: "2196 Villas de Santa Maria",
    price: 51326007,
    codeInternal: "850",
    year: "1951",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2196 Villas de Santa Maria",
        tax: 0.1,
        value: 71856409.8,
      },
    ],
  },
  {
    name: "3579 Manhattan Collection",
    address: "3579 Manhattan Collection",
    price: 89806396,
    codeInternal: "851",
    year: "1999",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3579 Manhattan Collection",
        tax: 0.1,
        value: 125728954.39999999,
      },
    ],
  },
  {
    name: "3838 Reservas de Barranquilla",
    address: "3838 Reservas de Barranquilla",
    price: 46879102,
    codeInternal: "852",
    year: "2012",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3838 Reservas de Barranquilla",
        tax: 0.1,
        value: 65630742.8,
      },
    ],
  },
  {
    name: "9288 Quintas de Barranquilla",
    address: "9288 Quintas de Barranquilla",
    price: 43282447,
    codeInternal: "853",
    year: "1998",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9288 Quintas de Barranquilla",
        tax: 0.1,
        value: 60595425.8,
      },
    ],
  },
  {
    name: "9192 Paris Avenue",
    address: "9192 Paris Avenue",
    price: 59607182,
    codeInternal: "854",
    year: "1907",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9192 Paris Avenue",
        tax: 0.1,
        value: 83450054.8,
      },
    ],
  },
  {
    name: "3118 Reservas de Cartagena",
    address: "3118 Reservas de Cartagena",
    price: 21913395,
    codeInternal: "855",
    year: "2004",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3118 Reservas de Cartagena",
        tax: 0.1,
        value: 30678752.999999996,
      },
    ],
  },
  {
    name: "8282 Santa Marta Street",
    address: "8282 Santa Marta Street",
    price: 30517175,
    codeInternal: "856",
    year: "1926",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8282 Santa Marta Street",
        tax: 0.1,
        value: 42724045,
      },
    ],
  },
  {
    name: "5284 Miami Gardens",
    address: "5284 Miami Gardens",
    price: 33477543,
    codeInternal: "857",
    year: "1989",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5284 Miami Gardens",
        tax: 0.1,
        value: 46868560.199999996,
      },
    ],
  },
  {
    name: "1491 Conjunto Residencial Cartagena",
    address: "1491 Conjunto Residencial Cartagena",
    price: 6679435,
    codeInternal: "858",
    year: "2022",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1491 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 9351209,
      },
    ],
  },
  {
    name: "7997 Santa Marta Collection",
    address: "7997 Santa Marta Collection",
    price: 50615288,
    codeInternal: "859",
    year: "1929",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7997 Santa Marta Collection",
        tax: 0.1,
        value: 70861403.19999999,
      },
    ],
  },
  {
    name: "8283 Parque Cartagena",
    address: "8283 Parque Cartagena",
    price: 8417165,
    codeInternal: "860",
    year: "2045",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8283 Parque Cartagena",
        tax: 0.1,
        value: 11784031,
      },
    ],
  },
  {
    name: "5795 Reservas de Montreal",
    address: "5795 Reservas de Montreal",
    price: 98188916,
    codeInternal: "861",
    year: "1905",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5795 Reservas de Montreal",
        tax: 0.1,
        value: 137464482.4,
      },
    ],
  },
  {
    name: "8321 Los Angeles Street",
    address: "8321 Los Angeles Street",
    price: 48074060,
    codeInternal: "862",
    year: "1941",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8321 Los Angeles Street",
        tax: 0.1,
        value: 67303684,
      },
    ],
  },
  {
    name: "9296 Villas de Barranquilla",
    address: "9296 Villas de Barranquilla",
    price: 74844136,
    codeInternal: "863",
    year: "2030",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9296 Villas de Barranquilla",
        tax: 0.1,
        value: 104781790.39999999,
      },
    ],
  },
  {
    name: "7454 Quintas de Portofino",
    address: "7454 Quintas de Portofino",
    price: 95725988,
    codeInternal: "864",
    year: "1999",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7454 Quintas de Portofino",
        tax: 0.1,
        value: 134016383.19999999,
      },
    ],
  },
  {
    name: "2735 Parque Montreal",
    address: "2735 Parque Montreal",
    price: 91982189,
    codeInternal: "865",
    year: "2028",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2735 Parque Montreal",
        tax: 0.1,
        value: 128775064.6,
      },
    ],
  },
  {
    name: "6900 Reservas de Cartagena",
    address: "6900 Reservas de Cartagena",
    price: 85523518,
    codeInternal: "866",
    year: "2049",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6900 Reservas de Cartagena",
        tax: 0.1,
        value: 119732925.19999999,
      },
    ],
  },
  {
    name: "3040 Paris Boulevard",
    address: "3040 Paris Boulevard",
    price: 21199486,
    codeInternal: "867",
    year: "2012",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3040 Paris Boulevard",
        tax: 0.1,
        value: 29679280.4,
      },
    ],
  },
  {
    name: "7636 Reservas de Barranquilla",
    address: "7636 Reservas de Barranquilla",
    price: 83966014,
    codeInternal: "868",
    year: "1962",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7636 Reservas de Barranquilla",
        tax: 0.1,
        value: 117552419.6,
      },
    ],
  },
  {
    name: "8078 Manhattan Villa",
    address: "8078 Manhattan Villa",
    price: 66634198,
    codeInternal: "869",
    year: "1991",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8078 Manhattan Villa",
        tax: 0.1,
        value: 93287877.19999999,
      },
    ],
  },
  {
    name: "3323 Manhattan Villa",
    address: "3323 Manhattan Villa",
    price: 30688598,
    codeInternal: "870",
    year: "1902",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3323 Manhattan Villa",
        tax: 0.1,
        value: 42964037.199999996,
      },
    ],
  },
  {
    name: "3324 Miami State",
    address: "3324 Miami State",
    price: 89888968,
    codeInternal: "871",
    year: "2036",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3324 Miami State",
        tax: 0.1,
        value: 125844555.19999999,
      },
    ],
  },
  {
    name: "2770 Manhattan Avenue",
    address: "2770 Manhattan Avenue",
    price: 2377037,
    codeInternal: "872",
    year: "2013",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2770 Manhattan Avenue",
        tax: 0.1,
        value: 3327851.8,
      },
    ],
  },
  {
    name: "4909 Parque Cartagena",
    address: "4909 Parque Cartagena",
    price: 8210644,
    codeInternal: "873",
    year: "2043",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4909 Parque Cartagena",
        tax: 0.1,
        value: 11494901.6,
      },
    ],
  },
  {
    name: "4131 Parque Montreal",
    address: "4131 Parque Montreal",
    price: 33338068,
    codeInternal: "874",
    year: "2019",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4131 Parque Montreal",
        tax: 0.1,
        value: 46673295.199999996,
      },
    ],
  },
  {
    name: "6764 Quintas de Santa Maria",
    address: "6764 Quintas de Santa Maria",
    price: 35207573,
    codeInternal: "875",
    year: "1926",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6764 Quintas de Santa Maria",
        tax: 0.1,
        value: 49290602.199999996,
      },
    ],
  },
  {
    name: "6430 Reservas de Montreal",
    address: "6430 Reservas de Montreal",
    price: 38481692,
    codeInternal: "876",
    year: "1910",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6430 Reservas de Montreal",
        tax: 0.1,
        value: 53874368.8,
      },
    ],
  },
  {
    name: "9523 Conjunto Residencial Cartagena",
    address: "9523 Conjunto Residencial Cartagena",
    price: 1633152,
    codeInternal: "877",
    year: "1940",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9523 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 2286412.8,
      },
    ],
  },
  {
    name: "7247 Villas de Portofino",
    address: "7247 Villas de Portofino",
    price: 12854518,
    codeInternal: "878",
    year: "2012",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7247 Villas de Portofino",
        tax: 0.1,
        value: 17996325.2,
      },
    ],
  },
  {
    name: "2708 Reservas de Montreal",
    address: "2708 Reservas de Montreal",
    price: 2214805,
    codeInternal: "879",
    year: "2020",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2708 Reservas de Montreal",
        tax: 0.1,
        value: 3100727,
      },
    ],
  },
  {
    name: "6449 Los Angeles Villa",
    address: "6449 Los Angeles Villa",
    price: 73925932,
    codeInternal: "880",
    year: "1981",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6449 Los Angeles Villa",
        tax: 0.1,
        value: 103496304.8,
      },
    ],
  },
  {
    name: "6196 Miami Beach",
    address: "6196 Miami Beach",
    price: 53336463,
    codeInternal: "881",
    year: "1981",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6196 Miami Beach",
        tax: 0.1,
        value: 74671048.19999999,
      },
    ],
  },
  {
    name: "5824 Paris Terrace",
    address: "5824 Paris Terrace",
    price: 74269753,
    codeInternal: "882",
    year: "1926",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5824 Paris Terrace",
        tax: 0.1,
        value: 103977654.19999999,
      },
    ],
  },
  {
    name: "1822 Paris Collection",
    address: "1822 Paris Collection",
    price: 87812222,
    codeInternal: "883",
    year: "2028",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1822 Paris Collection",
        tax: 0.1,
        value: 122937110.8,
      },
    ],
  },
  {
    name: "6108 Santa Marta Place",
    address: "6108 Santa Marta Place",
    price: 42806229,
    codeInternal: "884",
    year: "1957",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6108 Santa Marta Place",
        tax: 0.1,
        value: 59928720.599999994,
      },
    ],
  },
  {
    name: "3253 Los Angeles Gardens",
    address: "3253 Los Angeles Gardens",
    price: 20802134,
    codeInternal: "885",
    year: "1916",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3253 Los Angeles Gardens",
        tax: 0.1,
        value: 29122987.599999998,
      },
    ],
  },
  {
    name: "7593 Reservas de Portofino",
    address: "7593 Reservas de Portofino",
    price: 74880733,
    codeInternal: "886",
    year: "1991",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7593 Reservas de Portofino",
        tax: 0.1,
        value: 104833026.19999999,
      },
    ],
  },
  {
    name: "4320 Los Angeles Terrace",
    address: "4320 Los Angeles Terrace",
    price: 45772889,
    codeInternal: "887",
    year: "1962",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4320 Los Angeles Terrace",
        tax: 0.1,
        value: 64082044.599999994,
      },
    ],
  },
  {
    name: "7326 Parque Portofino",
    address: "7326 Parque Portofino",
    price: 57259103,
    codeInternal: "888",
    year: "2020",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7326 Parque Portofino",
        tax: 0.1,
        value: 80162744.19999999,
      },
    ],
  },
  {
    name: "6104 Paris Collection",
    address: "6104 Paris Collection",
    price: 59123268,
    codeInternal: "889",
    year: "1914",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6104 Paris Collection",
        tax: 0.1,
        value: 82772575.19999999,
      },
    ],
  },
  {
    name: "9763 Quintas de Santa Maria",
    address: "9763 Quintas de Santa Maria",
    price: 66324660,
    codeInternal: "890",
    year: "1966",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9763 Quintas de Santa Maria",
        tax: 0.1,
        value: 92854524,
      },
    ],
  },
  {
    name: "6528 Paris Street",
    address: "6528 Paris Street",
    price: 93242735,
    codeInternal: "891",
    year: "2020",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6528 Paris Street",
        tax: 0.1,
        value: 130539828.99999999,
      },
    ],
  },
  {
    name: "7686 Conjunto Residencial Barranquilla",
    address: "7686 Conjunto Residencial Barranquilla",
    price: 91396410,
    codeInternal: "892",
    year: "1988",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7686 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 127954973.99999999,
      },
    ],
  },
  {
    name: "9222 Quintas de Portofino",
    address: "9222 Quintas de Portofino",
    price: 4847728,
    codeInternal: "893",
    year: "1958",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9222 Quintas de Portofino",
        tax: 0.1,
        value: 6786819.199999999,
      },
    ],
  },
  {
    name: "3840 Miami Collection",
    address: "3840 Miami Collection",
    price: 41418647,
    codeInternal: "894",
    year: "1972",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3840 Miami Collection",
        tax: 0.1,
        value: 57986105.8,
      },
    ],
  },
  {
    name: "5532 Quintas de Portofino",
    address: "5532 Quintas de Portofino",
    price: 8369400,
    codeInternal: "895",
    year: "2049",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5532 Quintas de Portofino",
        tax: 0.1,
        value: 11717160,
      },
    ],
  },
  {
    name: "9400 Conjunto Residencial Santa Maria",
    address: "9400 Conjunto Residencial Santa Maria",
    price: 99260591,
    codeInternal: "896",
    year: "1944",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9400 Conjunto Residencial Santa Maria",
        tax: 0.1,
        value: 138964827.4,
      },
    ],
  },
  {
    name: "2149 Miami Real",
    address: "2149 Miami Real",
    price: 65362237,
    codeInternal: "897",
    year: "1963",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2149 Miami Real",
        tax: 0.1,
        value: 91507131.8,
      },
    ],
  },
  {
    name: "1987 Manhattan Place",
    address: "1987 Manhattan Place",
    price: 31000106,
    codeInternal: "898",
    year: "1992",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1987 Manhattan Place",
        tax: 0.1,
        value: 43400148.4,
      },
    ],
  },
  {
    name: "1112 Manhattan Towers",
    address: "1112 Manhattan Towers",
    price: 54640360,
    codeInternal: "899",
    year: "1933",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1112 Manhattan Towers",
        tax: 0.1,
        value: 76496504,
      },
    ],
  },
  {
    name: "2923 Quintas de Barranquilla",
    address: "2923 Quintas de Barranquilla",
    price: 57781203,
    codeInternal: "900",
    year: "2002",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2923 Quintas de Barranquilla",
        tax: 0.1,
        value: 80893684.19999999,
      },
    ],
  },
  {
    name: "8775 Quintas de Portofino",
    address: "8775 Quintas de Portofino",
    price: 66439037,
    codeInternal: "901",
    year: "1944",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8775 Quintas de Portofino",
        tax: 0.1,
        value: 93014651.8,
      },
    ],
  },
  {
    name: "1051 Villas de Montreal",
    address: "1051 Villas de Montreal",
    price: 40452808,
    codeInternal: "902",
    year: "1944",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1051 Villas de Montreal",
        tax: 0.1,
        value: 56633931.199999996,
      },
    ],
  },
  {
    name: "2847 Villas de Montreal",
    address: "2847 Villas de Montreal",
    price: 19800577,
    codeInternal: "903",
    year: "2013",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2847 Villas de Montreal",
        tax: 0.1,
        value: 27720807.799999997,
      },
    ],
  },
  {
    name: "5865 Parque Barranquilla",
    address: "5865 Parque Barranquilla",
    price: 16066354,
    codeInternal: "904",
    year: "1921",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5865 Parque Barranquilla",
        tax: 0.1,
        value: 22492895.599999998,
      },
    ],
  },
  {
    name: "9428 Santa Marta State",
    address: "9428 Santa Marta State",
    price: 88622482,
    codeInternal: "905",
    year: "1973",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9428 Santa Marta State",
        tax: 0.1,
        value: 124071474.8,
      },
    ],
  },
  {
    name: "1557 Manhattan Gardens",
    address: "1557 Manhattan Gardens",
    price: 780261,
    codeInternal: "906",
    year: "2013",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1557 Manhattan Gardens",
        tax: 0.1,
        value: 1092365.4,
      },
    ],
  },
  {
    name: "4974 Santa Marta Boulevard",
    address: "4974 Santa Marta Boulevard",
    price: 92706339,
    codeInternal: "907",
    year: "2013",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4974 Santa Marta Boulevard",
        tax: 0.1,
        value: 129788874.6,
      },
    ],
  },
  {
    name: "1698 Reservas de Santa Maria",
    address: "1698 Reservas de Santa Maria",
    price: 77220994,
    codeInternal: "908",
    year: "2039",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1698 Reservas de Santa Maria",
        tax: 0.1,
        value: 108109391.6,
      },
    ],
  },
  {
    name: "5195 Conjunto Residencial Barranquilla",
    address: "5195 Conjunto Residencial Barranquilla",
    price: 19347050,
    codeInternal: "909",
    year: "1979",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5195 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 27085870,
      },
    ],
  },
  {
    name: "2174 Paris Gardens",
    address: "2174 Paris Gardens",
    price: 83488330,
    codeInternal: "910",
    year: "2043",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2174 Paris Gardens",
        tax: 0.1,
        value: 116883662,
      },
    ],
  },
  {
    name: "7954 Parque Barranquilla",
    address: "7954 Parque Barranquilla",
    price: 39437179,
    codeInternal: "911",
    year: "2020",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7954 Parque Barranquilla",
        tax: 0.1,
        value: 55212050.599999994,
      },
    ],
  },
  {
    name: "5409 Quintas de Santa Maria",
    address: "5409 Quintas de Santa Maria",
    price: 62384268,
    codeInternal: "912",
    year: "1935",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5409 Quintas de Santa Maria",
        tax: 0.1,
        value: 87337975.19999999,
      },
    ],
  },
  {
    name: "3849 Miami Collection",
    address: "3849 Miami Collection",
    price: 6078543,
    codeInternal: "913",
    year: "1997",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3849 Miami Collection",
        tax: 0.1,
        value: 8509960.2,
      },
    ],
  },
  {
    name: "3158 Miami Real",
    address: "3158 Miami Real",
    price: 66447328,
    codeInternal: "914",
    year: "2035",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3158 Miami Real",
        tax: 0.1,
        value: 93026259.19999999,
      },
    ],
  },
  {
    name: "8406 Quintas de Cartagena",
    address: "8406 Quintas de Cartagena",
    price: 53532773,
    codeInternal: "915",
    year: "1977",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8406 Quintas de Cartagena",
        tax: 0.1,
        value: 74945882.19999999,
      },
    ],
  },
  {
    name: "3369 Conjunto Residencial Barranquilla",
    address: "3369 Conjunto Residencial Barranquilla",
    price: 80584875,
    codeInternal: "916",
    year: "2006",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3369 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 112818825,
      },
    ],
  },
  {
    name: "7958 Miami Villa",
    address: "7958 Miami Villa",
    price: 97280581,
    codeInternal: "917",
    year: "1993",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7958 Miami Villa",
        tax: 0.1,
        value: 136192813.4,
      },
    ],
  },
  {
    name: "1655 Los Angeles Gardens",
    address: "1655 Los Angeles Gardens",
    price: 73241086,
    codeInternal: "918",
    year: "2008",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1655 Los Angeles Gardens",
        tax: 0.1,
        value: 102537520.39999999,
      },
    ],
  },
  {
    name: "7817 Manhattan Beach",
    address: "7817 Manhattan Beach",
    price: 26265980,
    codeInternal: "919",
    year: "2047",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7817 Manhattan Beach",
        tax: 0.1,
        value: 36772372,
      },
    ],
  },
  {
    name: "1543 Quintas de Cartagena",
    address: "1543 Quintas de Cartagena",
    price: 2317174,
    codeInternal: "920",
    year: "2026",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1543 Quintas de Cartagena",
        tax: 0.1,
        value: 3244043.5999999996,
      },
    ],
  },
  {
    name: "8974 Quintas de Montreal",
    address: "8974 Quintas de Montreal",
    price: 9082519,
    codeInternal: "921",
    year: "1921",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8974 Quintas de Montreal",
        tax: 0.1,
        value: 12715526.6,
      },
    ],
  },
  {
    name: "1063 Miami Towers",
    address: "1063 Miami Towers",
    price: 39884768,
    codeInternal: "922",
    year: "1937",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1063 Miami Towers",
        tax: 0.1,
        value: 55838675.199999996,
      },
    ],
  },
  {
    name: "5317 Los Angeles Villa",
    address: "5317 Los Angeles Villa",
    price: 48796869,
    codeInternal: "923",
    year: "1919",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5317 Los Angeles Villa",
        tax: 0.1,
        value: 68315616.6,
      },
    ],
  },
  {
    name: "2787 Quintas de Portofino",
    address: "2787 Quintas de Portofino",
    price: 96847472,
    codeInternal: "924",
    year: "1908",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2787 Quintas de Portofino",
        tax: 0.1,
        value: 135586460.79999998,
      },
    ],
  },
  {
    name: "1714 Los Angeles Street",
    address: "1714 Los Angeles Street",
    price: 79571190,
    codeInternal: "925",
    year: "1904",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1714 Los Angeles Street",
        tax: 0.1,
        value: 111399666,
      },
    ],
  },
  {
    name: "3922 Quintas de Portofino",
    address: "3922 Quintas de Portofino",
    price: 53769593,
    codeInternal: "926",
    year: "1953",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3922 Quintas de Portofino",
        tax: 0.1,
        value: 75277430.19999999,
      },
    ],
  },
  {
    name: "4374 Quintas de Portofino",
    address: "4374 Quintas de Portofino",
    price: 46843078,
    codeInternal: "927",
    year: "1962",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4374 Quintas de Portofino",
        tax: 0.1,
        value: 65580309.199999996,
      },
    ],
  },
  {
    name: "4871 Santa Marta Collection",
    address: "4871 Santa Marta Collection",
    price: 24594199,
    codeInternal: "928",
    year: "1905",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4871 Santa Marta Collection",
        tax: 0.1,
        value: 34431878.6,
      },
    ],
  },
  {
    name: "2961 Villas de Santa Maria",
    address: "2961 Villas de Santa Maria",
    price: 1308723,
    codeInternal: "929",
    year: "1974",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2961 Villas de Santa Maria",
        tax: 0.1,
        value: 1832212.2,
      },
    ],
  },
  {
    name: "2883 Conjunto Residencial Barranquilla",
    address: "2883 Conjunto Residencial Barranquilla",
    price: 55161386,
    codeInternal: "930",
    year: "1972",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2883 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 77225940.39999999,
      },
    ],
  },
  {
    name: "9858 Quintas de Barranquilla",
    address: "9858 Quintas de Barranquilla",
    price: 15897680,
    codeInternal: "931",
    year: "2003",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9858 Quintas de Barranquilla",
        tax: 0.1,
        value: 22256752,
      },
    ],
  },
  {
    name: "3063 Los Angeles Beach",
    address: "3063 Los Angeles Beach",
    price: 85598638,
    codeInternal: "932",
    year: "2024",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3063 Los Angeles Beach",
        tax: 0.1,
        value: 119838093.19999999,
      },
    ],
  },
  {
    name: "9928 Conjunto Residencial Barranquilla",
    address: "9928 Conjunto Residencial Barranquilla",
    price: 58725455,
    codeInternal: "933",
    year: "2000",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9928 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 82215637,
      },
    ],
  },
  {
    name: "2640 Los Angeles Real",
    address: "2640 Los Angeles Real",
    price: 76581964,
    codeInternal: "934",
    year: "1984",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2640 Los Angeles Real",
        tax: 0.1,
        value: 107214749.6,
      },
    ],
  },
  {
    name: "2616 Quintas de Montreal",
    address: "2616 Quintas de Montreal",
    price: 28601374,
    codeInternal: "935",
    year: "1975",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2616 Quintas de Montreal",
        tax: 0.1,
        value: 40041923.599999994,
      },
    ],
  },
  {
    name: "8958 Villas de Montreal",
    address: "8958 Villas de Montreal",
    price: 84991501,
    codeInternal: "936",
    year: "2008",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8958 Villas de Montreal",
        tax: 0.1,
        value: 118988101.39999999,
      },
    ],
  },
  {
    name: "7697 Parque Cartagena",
    address: "7697 Parque Cartagena",
    price: 52087669,
    codeInternal: "937",
    year: "1978",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7697 Parque Cartagena",
        tax: 0.1,
        value: 72922736.6,
      },
    ],
  },
  {
    name: "6195 Miami Place",
    address: "6195 Miami Place",
    price: 88902850,
    codeInternal: "938",
    year: "1922",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6195 Miami Place",
        tax: 0.1,
        value: 124463989.99999999,
      },
    ],
  },
  {
    name: "3670 Los Angeles Avenue",
    address: "3670 Los Angeles Avenue",
    price: 84976119,
    codeInternal: "939",
    year: "2029",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3670 Los Angeles Avenue",
        tax: 0.1,
        value: 118966566.6,
      },
    ],
  },
  {
    name: "7833 Los Angeles State",
    address: "7833 Los Angeles State",
    price: 90600332,
    codeInternal: "940",
    year: "1991",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7833 Los Angeles State",
        tax: 0.1,
        value: 126840464.8,
      },
    ],
  },
  {
    name: "9059 Quintas de Cartagena",
    address: "9059 Quintas de Cartagena",
    price: 29851203,
    codeInternal: "941",
    year: "1986",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9059 Quintas de Cartagena",
        tax: 0.1,
        value: 41791684.199999996,
      },
    ],
  },
  {
    name: "7603 Reservas de Montreal",
    address: "7603 Reservas de Montreal",
    price: 69640335,
    codeInternal: "942",
    year: "1967",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7603 Reservas de Montreal",
        tax: 0.1,
        value: 97496469,
      },
    ],
  },
  {
    name: "3715 Miami Gardens",
    address: "3715 Miami Gardens",
    price: 39156141,
    codeInternal: "943",
    year: "2009",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3715 Miami Gardens",
        tax: 0.1,
        value: 54818597.4,
      },
    ],
  },
  {
    name: "4154 Reservas de Cartagena",
    address: "4154 Reservas de Cartagena",
    price: 42268934,
    codeInternal: "944",
    year: "1915",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4154 Reservas de Cartagena",
        tax: 0.1,
        value: 59176507.599999994,
      },
    ],
  },
  {
    name: "3697 Santa Marta Place",
    address: "3697 Santa Marta Place",
    price: 62144286,
    codeInternal: "945",
    year: "1948",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3697 Santa Marta Place",
        tax: 0.1,
        value: 87002000.39999999,
      },
    ],
  },
  {
    name: "3343 Los Angeles Boulevard",
    address: "3343 Los Angeles Boulevard",
    price: 4632573,
    codeInternal: "946",
    year: "2044",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3343 Los Angeles Boulevard",
        tax: 0.1,
        value: 6485602.199999999,
      },
    ],
  },
  {
    name: "6147 Quintas de Santa Maria",
    address: "6147 Quintas de Santa Maria",
    price: 98440637,
    codeInternal: "947",
    year: "1941",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6147 Quintas de Santa Maria",
        tax: 0.1,
        value: 137816891.79999998,
      },
    ],
  },
  {
    name: "3015 Quintas de Portofino",
    address: "3015 Quintas de Portofino",
    price: 95913674,
    codeInternal: "948",
    year: "1978",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3015 Quintas de Portofino",
        tax: 0.1,
        value: 134279143.6,
      },
    ],
  },
  {
    name: "9197 Los Angeles Real",
    address: "9197 Los Angeles Real",
    price: 18964746,
    codeInternal: "949",
    year: "2007",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9197 Los Angeles Real",
        tax: 0.1,
        value: 26550644.4,
      },
    ],
  },
  {
    name: "6577 Manhattan Avenue",
    address: "6577 Manhattan Avenue",
    price: 80405278,
    codeInternal: "950",
    year: "2001",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6577 Manhattan Avenue",
        tax: 0.1,
        value: 112567389.19999999,
      },
    ],
  },
  {
    name: "6014 Paris State",
    address: "6014 Paris State",
    price: 75015826,
    codeInternal: "951",
    year: "2027",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "6014 Paris State",
        tax: 0.1,
        value: 105022156.39999999,
      },
    ],
  },
  {
    name: "5043 Parque Portofino",
    address: "5043 Parque Portofino",
    price: 46157255,
    codeInternal: "952",
    year: "1954",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5043 Parque Portofino",
        tax: 0.1,
        value: 64620156.99999999,
      },
    ],
  },
  {
    name: "7900 Conjunto Residencial Montreal",
    address: "7900 Conjunto Residencial Montreal",
    price: 54371610,
    codeInternal: "953",
    year: "1910",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7900 Conjunto Residencial Montreal",
        tax: 0.1,
        value: 76120254,
      },
    ],
  },
  {
    name: "3765 Santa Marta Gardens",
    address: "3765 Santa Marta Gardens",
    price: 77987390,
    codeInternal: "954",
    year: "1968",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3765 Santa Marta Gardens",
        tax: 0.1,
        value: 109182346,
      },
    ],
  },
  {
    name: "4273 Quintas de Portofino",
    address: "4273 Quintas de Portofino",
    price: 19437927,
    codeInternal: "955",
    year: "2048",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4273 Quintas de Portofino",
        tax: 0.1,
        value: 27213097.799999997,
      },
    ],
  },
  {
    name: "2883 Conjunto Residencial Cartagena",
    address: "2883 Conjunto Residencial Cartagena",
    price: 38483703,
    codeInternal: "956",
    year: "1905",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2883 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 53877184.199999996,
      },
    ],
  },
  {
    name: "2756 Reservas de Cartagena",
    address: "2756 Reservas de Cartagena",
    price: 6927215,
    codeInternal: "957",
    year: "1943",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2756 Reservas de Cartagena",
        tax: 0.1,
        value: 9698101,
      },
    ],
  },
  {
    name: "4816 Reservas de Montreal",
    address: "4816 Reservas de Montreal",
    price: 28380381,
    codeInternal: "958",
    year: "1941",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4816 Reservas de Montreal",
        tax: 0.1,
        value: 39732533.4,
      },
    ],
  },
  {
    name: "4766 Conjunto Residencial Portofino",
    address: "4766 Conjunto Residencial Portofino",
    price: 52199798,
    codeInternal: "959",
    year: "2047",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2016/07/28/09/01/mountains-1547302_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4766 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 73079717.19999999,
      },
    ],
  },
  {
    name: "8634 Villas de Portofino",
    address: "8634 Villas de Portofino",
    price: 88162044,
    codeInternal: "960",
    year: "1942",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8634 Villas de Portofino",
        tax: 0.1,
        value: 123426861.6,
      },
    ],
  },
  {
    name: "7195 Reservas de Montreal",
    address: "7195 Reservas de Montreal",
    price: 38822999,
    codeInternal: "961",
    year: "2036",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7195 Reservas de Montreal",
        tax: 0.1,
        value: 54352198.599999994,
      },
    ],
  },
  {
    name: "4597 Manhattan Place",
    address: "4597 Manhattan Place",
    price: 24481655,
    codeInternal: "962",
    year: "1930",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4597 Manhattan Place",
        tax: 0.1,
        value: 34274317,
      },
    ],
  },
  {
    name: "7664 Santa Marta Collection",
    address: "7664 Santa Marta Collection",
    price: 58632101,
    codeInternal: "963",
    year: "1906",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7664 Santa Marta Collection",
        tax: 0.1,
        value: 82084941.39999999,
      },
    ],
  },
  {
    name: "7427 Parque Santa Maria",
    address: "7427 Parque Santa Maria",
    price: 6094742,
    codeInternal: "964",
    year: "1919",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7427 Parque Santa Maria",
        tax: 0.1,
        value: 8532638.799999999,
      },
    ],
  },
  {
    name: "1363 Villas de Montreal",
    address: "1363 Villas de Montreal",
    price: 97024881,
    codeInternal: "965",
    year: "1942",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1363 Villas de Montreal",
        tax: 0.1,
        value: 135834833.4,
      },
    ],
  },
  {
    name: "5814 Manhattan State",
    address: "5814 Manhattan State",
    price: 82053397,
    codeInternal: "966",
    year: "1971",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5814 Manhattan State",
        tax: 0.1,
        value: 114874755.8,
      },
    ],
  },
  {
    name: "9073 Conjunto Residencial Cartagena",
    address: "9073 Conjunto Residencial Cartagena",
    price: 20948357,
    codeInternal: "967",
    year: "2008",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9073 Conjunto Residencial Cartagena",
        tax: 0.1,
        value: 29327699.799999997,
      },
    ],
  },
  {
    name: "2625 Manhattan State",
    address: "2625 Manhattan State",
    price: 56398865,
    codeInternal: "968",
    year: "1979",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2625 Manhattan State",
        tax: 0.1,
        value: 78958411,
      },
    ],
  },
  {
    name: "1689 Quintas de Barranquilla",
    address: "1689 Quintas de Barranquilla",
    price: 6983621,
    codeInternal: "969",
    year: "1964",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1689 Quintas de Barranquilla",
        tax: 0.1,
        value: 9777069.399999999,
      },
    ],
  },
  {
    name: "5794 Conjunto Residencial Barranquilla",
    address: "5794 Conjunto Residencial Barranquilla",
    price: 54253373,
    codeInternal: "970",
    year: "1965",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5794 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 75954722.19999999,
      },
    ],
  },
  {
    name: "9457 Quintas de Portofino",
    address: "9457 Quintas de Portofino",
    price: 1163843,
    codeInternal: "971",
    year: "2013",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9457 Quintas de Portofino",
        tax: 0.1,
        value: 1629380.2,
      },
    ],
  },
  {
    name: "9088 Santa Marta Avenue",
    address: "9088 Santa Marta Avenue",
    price: 53342020,
    codeInternal: "972",
    year: "1911",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9088 Santa Marta Avenue",
        tax: 0.1,
        value: 74678828,
      },
    ],
  },
  {
    name: "5344 Manhattan Avenue",
    address: "5344 Manhattan Avenue",
    price: 74119157,
    codeInternal: "973",
    year: "1963",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5344 Manhattan Avenue",
        tax: 0.1,
        value: 103766819.8,
      },
    ],
  },
  {
    name: "2754 Miami Street",
    address: "2754 Miami Street",
    price: 98979594,
    codeInternal: "974",
    year: "1950",
    owner: {
      name: "Janeczka Allom",
      address: "417 Eliot Crossing",
      photo: "https://robohash.org/ipsumnesciuntsoluta.png?size=50x50&set=set1",
      birthday: "1984-02-22T17:13:33Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2754 Miami Street",
        tax: 0.1,
        value: 138571431.6,
      },
    ],
  },
  {
    name: "1812 Manhattan Villa",
    address: "1812 Manhattan Villa",
    price: 20557121,
    codeInternal: "975",
    year: "1946",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1812 Manhattan Villa",
        tax: 0.1,
        value: 28779969.4,
      },
    ],
  },
  {
    name: "3642 Los Angeles Collection",
    address: "3642 Los Angeles Collection",
    price: 39575048,
    codeInternal: "976",
    year: "1988",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/09/15/14/22/coast-4478424_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3642 Los Angeles Collection",
        tax: 0.1,
        value: 55405067.199999996,
      },
    ],
  },
  {
    name: "1100 Parque Barranquilla",
    address: "1100 Parque Barranquilla",
    price: 87275049,
    codeInternal: "977",
    year: "1931",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1100 Parque Barranquilla",
        tax: 0.1,
        value: 122185068.6,
      },
    ],
  },
  {
    name: "9711 Quintas de Portofino",
    address: "9711 Quintas de Portofino",
    price: 58797945,
    codeInternal: "978",
    year: "2035",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9711 Quintas de Portofino",
        tax: 0.1,
        value: 82317123,
      },
    ],
  },
  {
    name: "7253 Conjunto Residencial Portofino",
    address: "7253 Conjunto Residencial Portofino",
    price: 83508832,
    codeInternal: "979",
    year: "1978",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7253 Conjunto Residencial Portofino",
        tax: 0.1,
        value: 116912364.8,
      },
    ],
  },
  {
    name: "3209 Quintas de Portofino",
    address: "3209 Quintas de Portofino",
    price: 53732996,
    codeInternal: "980",
    year: "2026",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3209 Quintas de Portofino",
        tax: 0.1,
        value: 75226194.39999999,
      },
    ],
  },
  {
    name: "9141 Parque Cartagena",
    address: "9141 Parque Cartagena",
    price: 8590191,
    codeInternal: "981",
    year: "1927",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "9141 Parque Cartagena",
        tax: 0.1,
        value: 12026267.399999999,
      },
    ],
  },
  {
    name: "2095 Los Angeles Street",
    address: "2095 Los Angeles Street",
    price: 24666879,
    codeInternal: "982",
    year: "2023",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "2095 Los Angeles Street",
        tax: 0.1,
        value: 34533630.6,
      },
    ],
  },
  {
    name: "4628 Paris Gardens",
    address: "4628 Paris Gardens",
    price: 1106858,
    codeInternal: "983",
    year: "1973",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4628 Paris Gardens",
        tax: 0.1,
        value: 1549601.2,
      },
    ],
  },
  {
    name: "4759 Parque Montreal",
    address: "4759 Parque Montreal",
    price: 73688300,
    codeInternal: "984",
    year: "1946",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4759 Parque Montreal",
        tax: 0.1,
        value: 103163620,
      },
    ],
  },
  {
    name: "4172 Los Angeles Collection",
    address: "4172 Los Angeles Collection",
    price: 9838709,
    codeInternal: "985",
    year: "1921",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/12/29/21/21/big-ben-4728199_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4172 Los Angeles Collection",
        tax: 0.1,
        value: 13774192.6,
      },
    ],
  },
  {
    name: "8872 Los Angeles Beach",
    address: "8872 Los Angeles Beach",
    price: 69997064,
    codeInternal: "986",
    year: "1956",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/03/14/10/20/copenhagen-4054563_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8872 Los Angeles Beach",
        tax: 0.1,
        value: 97995889.6,
      },
    ],
  },
  {
    name: "8066 Quintas de Barranquilla",
    address: "8066 Quintas de Barranquilla",
    price: 16766002,
    codeInternal: "987",
    year: "1953",
    owner: {
      name: "Cindra Heartfield",
      address: "82 Towne Center",
      photo:
        "https://robohash.org/fugadebitisrecusandae.png?size=50x50&set=set1",
      birthday: "1973-07-26T16:29:40Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/17/57/cottages-5224102_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8066 Quintas de Barranquilla",
        tax: 0.1,
        value: 23472402.799999997,
      },
    ],
  },
  {
    name: "4280 Quintas de Santa Maria",
    address: "4280 Quintas de Santa Maria",
    price: 24880128,
    codeInternal: "988",
    year: "2041",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4280 Quintas de Santa Maria",
        tax: 0.1,
        value: 34832179.199999996,
      },
    ],
  },
  {
    name: "5421 Conjunto Residencial Barranquilla",
    address: "5421 Conjunto Residencial Barranquilla",
    price: 55840533,
    codeInternal: "989",
    year: "1979",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5421 Conjunto Residencial Barranquilla",
        tax: 0.1,
        value: 78176746.19999999,
      },
    ],
  },
  {
    name: "1532 Villas de Santa Maria",
    address: "1532 Villas de Santa Maria",
    price: 43883368,
    codeInternal: "990",
    year: "1907",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2021/12/09/11/53/empire-state-building-6858030_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1532 Villas de Santa Maria",
        tax: 0.1,
        value: 61436715.199999996,
      },
    ],
  },
  {
    name: "5115 Los Angeles State",
    address: "5115 Los Angeles State",
    price: 46407447,
    codeInternal: "991",
    year: "1986",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5115 Los Angeles State",
        tax: 0.1,
        value: 64970425.8,
      },
    ],
  },
  {
    name: "8588 Quintas de Cartagena",
    address: "8588 Quintas de Cartagena",
    price: 50268229,
    codeInternal: "992",
    year: "1926",
    owner: {
      name: "Andi Izzett",
      address: "8 Delaware Parkway",
      photo:
        "https://robohash.org/possimusaliquidconsequuntur.png?size=50x50&set=set1",
      birthday: "2004-11-17T18:10:55Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2018/12/14/21/29/sunset-3875817_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8588 Quintas de Cartagena",
        tax: 0.1,
        value: 70375520.6,
      },
    ],
  },
  {
    name: "8160 Miami Towers",
    address: "8160 Miami Towers",
    price: 5387393,
    codeInternal: "993",
    year: "2008",
    owner: {
      name: "Rossie Huddy",
      address: "8199 Messerschmidt Circle",
      photo: "https://robohash.org/deseruntsitrerum.png?size=50x50&set=set1",
      birthday: "1999-04-17T08:33:28Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8160 Miami Towers",
        tax: 0.1,
        value: 7542350.199999999,
      },
    ],
  },
  {
    name: "8477 Los Angeles Beach",
    address: "8477 Los Angeles Beach",
    price: 7385638,
    codeInternal: "994",
    year: "1929",
    owner: {
      name: "Alexina Hampshaw",
      address: "2537 Red Cloud Terrace",
      photo: "https://robohash.org/modiautemnesciunt.png?size=50x50&set=set1",
      birthday: "1973-04-02T09:14:15Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2023/03/27/23/09/house-7881834_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "8477 Los Angeles Beach",
        tax: 0.1,
        value: 10339893.2,
      },
    ],
  },
  {
    name: "3204 Manhattan Collection",
    address: "3204 Manhattan Collection",
    price: 11843441,
    codeInternal: "995",
    year: "1903",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2017/07/04/09/06/houses-2470398_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "3204 Manhattan Collection",
        tax: 0.1,
        value: 16580817.399999999,
      },
    ],
  },
  {
    name: "5772 Parque Cartagena",
    address: "5772 Parque Cartagena",
    price: 66760976,
    codeInternal: "996",
    year: "2010",
    owner: {
      name: "Eleen Brideaux",
      address: "32448 Monica Point",
      photo: "https://robohash.org/velofficianon.png?size=50x50&set=set1",
      birthday: "1991-02-24T09:07:42Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2022/08/24/17/11/windmill-7408365_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5772 Parque Cartagena",
        tax: 0.1,
        value: 93465366.39999999,
      },
    ],
  },
  {
    name: "4431 Parque Barranquilla",
    address: "4431 Parque Barranquilla",
    price: 65620980,
    codeInternal: "997",
    year: "2028",
    owner: {
      name: "Stephana Corkill",
      address: "745 7th Drive",
      photo: "https://robohash.org/eaquesuntillum.png?size=50x50&set=set1",
      birthday: "1995-11-01T21:05:09Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2019/08/13/17/17/vienna-state-opera-4403839_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "4431 Parque Barranquilla",
        tax: 0.1,
        value: 91869372,
      },
    ],
  },
  {
    name: "7450 Quintas de Montreal",
    address: "7450 Quintas de Montreal",
    price: 67074189,
    codeInternal: "998",
    year: "1980",
    owner: {
      name: "Michail Knox",
      address: "950 Caliangt Parkway",
      photo:
        "https://robohash.org/consecteturmolestiaeautem.png?size=50x50&set=set1",
      birthday: "2002-05-01T08:16:51Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "7450 Quintas de Montreal",
        tax: 0.1,
        value: 93903864.6,
      },
    ],
  },
  {
    name: "5301 Paris Gardens",
    address: "5301 Paris Gardens",
    price: 11451172,
    codeInternal: "999",
    year: "1930",
    owner: {
      name: "Lorine De Simoni",
      address: "3 Swallow Drive",
      photo:
        "https://robohash.org/consequaturrepellendusomnis.png?size=50x50&set=set1",
      birthday: "2003-07-23T19:39:47Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "5301 Paris Gardens",
        tax: 0.1,
        value: 16031640.799999999,
      },
    ],
  },
  {
    name: "1372 Miami Avenue",
    address: "1372 Miami Avenue",
    price: 47087829,
    codeInternal: "1000",
    year: "2029",
    owner: {
      name: "Mohandis Dyte",
      address: "8 Messerschmidt Lane",
      photo:
        "https://robohash.org/dolorespariaturvoluptatum.png?size=50x50&set=set1",
      birthday: "2000-11-04T06:04:43Z",
    },
    image:
      "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    trace: [
      {
        dateSale: "2025-09-12T16:02:30Z",
        name: "1372 Miami Avenue",
        tax: 0.1,
        value: 65922960.599999994,
      },
    ],
  },
];

db = db.getSiblingDB("RealStatesStore");

db.createCollection("RealStates");

db.RealStates.insertMany(realStates);
