const Constant = "d3";
const Array = `${Constant}-Array`;
const Zoom = `${Constant}-Zoom`;
const Timer = `${Constant}-Timer`;
const Geo = `${Constant}-Geo`;
const Scale = `${Constant}-Scale`;
const Queue = `${Constant}-Queue`;
const Ease = `${Constant}-Ease`;
const Force = `${Constant}-Force`;
const Polygon = `${Constant}-Polygon`;
const Chord = `${Constant}-Chord`;
const Drag = `${Constant}-Drag`;
const Path = `${Constant}-Path`;
const Axis = `${Constant}-Axis`;
const Parse = `${Constant}-Parse`;

export const dagData: {
  size: number;
  path: string;
}[] = [
  //////////////// Initializing ///////
  {
    size: 99,
    path: `${Constant}`,
  },
  {
    size: 113,
    path: `${Constant}/${Zoom}`,
  },
  {
    size: 656,
    path: `${Constant}/${Timer}`,
  },
  {
    size: 1236,
    path: `${Constant}/${Geo}`,
  },
  {
    size: 187,
    path: `${Constant}/${Array}`,
  },
  {
    size: 257,
    path: `${Constant}/${Scale}`,
  },
  {
    size: 770,
    path: `${Constant}/${Queue}`,
  },
  {
    size: 177,
    path: `${Constant}/${Ease}`,
  },
  {
    size: 887,
    path: `${Constant}/${Force}`,
  },
  {
    size: 117,
    path: `${Constant}/${Polygon}`,
  },
  {
    size: 987,
    path: `${Constant}/${Chord}`,
  },
  {
    size: 187,
    path: `${Constant}/${Drag}`,
  },
  {
    size: 1287,
    path: `${Constant}/${Parse}`,
  },
  {
    size: 267,
    path: `${Constant}/${Path}`,
  },
  {
    size: 881,
    path: `${Constant}/${Axis}`,
  },
  // {
  //   size: 454,
  //   path: `${Constant}/${Scale}/${Force}`,
  // },
  // {
  //   size: 954,
  //   path: `${Constant}/${Scale}/${Ease}`,
  // },
  // {
  //   size: 1954,
  //   path: `${Constant}/${Ease}/${Force}`,
  // },

  ////////// Utilzing //////////////

  ///////// Zoom //////////////
  // {
  //   size: 668,
  //   path: `${Constant}/${Zoom}/Zoom-1.js`,
  // },
  // {
  //   size: 668,
  //   path: `${Constant}/${Zoom}/Zoom-2.js`,
  // },
  // {
  //   size: 668,
  //   path: `${Constant}/${Zoom}/Zoom-3.js`,
  // },
  // {
  //   size: 668,
  //   path: `${Constant}/${Zoom}/Zoom-4.js`,
  // },
  // {
  //   size: 668,
  //   path: `${Constant}/${Zoom}/Zoom-5.js`,
  // },

  // //////////// Queue //////////
  // {
  //   size: 998,
  //   path: `${Constant}/${Queue}/Queue-1.js`,
  // },
  // {
  //   size: 998,
  //   path: `${Constant}/${Queue}/Queue-2.js`,
  // },
  // {
  //   size: 998,
  //   path: `${Constant}/${Queue}/Queue-3.js`,
  // },
  // {
  //   size: 998,
  //   path: `${Constant}/${Queue}/Queue-4.js`,
  // },
  // {
  //   size: 998,
  //   path: `${Constant}/${Queue}/Queue-5.js`,
  // },

  // ///////////// Scale ////////////
  // {
  //   size: 335,
  //   path: `${Constant}/${Scale}/Scale-1.js`,
  // },
  // {
  //   size: 335,
  //   path: `${Constant}/${Scale}/Scale-2.js`,
  // },
  // {
  //   size: 335,
  //   path: `${Constant}/${Scale}/Scale-3.js`,
  // },
  // {
  //   size: 335,
  //   path: `${Constant}/${Scale}/Scale-4.js`,
  // },

  // /////////// Geo ////////////
  // {
  //   size: 665,
  //   path: `${Constant}/${Geo}/Geo-1`,
  // },
  // {
  //   size: 665,
  //   path: `${Constant}/${Geo}/Geo-2`,
  // },
  // {
  //   size: 665,
  //   path: `${Constant}/${Geo}/Geo-3`,
  // },
  // {
  //   size: 665,
  //   path: `${Constant}/${Geo}/Geo-4`,
  // },
  // {
  //   size: 665,
  //   path: `${Constant}/${Geo}/Geo-5`,
  // },

  // //////////// Timer //////////
  // {
  //   size: 898,
  //   path: `${Constant}/${Timer}/Timer-1.js`,
  // },
  // {
  //   size: 898,
  //   path: `${Constant}/${Timer}/Timer-3.js`,
  // },
  // {
  //   size: 898,
  //   path: `${Constant}/${Timer}/Timer-2.js`,
  // },

  ////////// Ease /////////
  // {
  //   size: 1340,
  //   path: `${Constant}/${Ease}/Ease-1.js`,
  // },
  // {
  //   size: 1340,
  //   path: `${Constant}/${Ease}/Ease-2.js`,
  // },
  // {
  //   size: 1340,
  //   path: `${Constant}/${Ease}/Ease-3.js`,
  // },
  // {
  //   size: 1340,
  //   path: `${Constant}/${Ease}/Ease-4.js`,
  // },

  // /////////// Array ////////////
  // {
  //   size: 2101,
  //   path: `${Constant}/${Array}/Array-1.sj`,
  // },
  // {
  //   size: 2101,
  //   path: `${Constant}/${Array}/Array-11.sj`,
  // },

  // ////////// Force ////////
  // {
  //   size: 1567,
  //   path: `${Constant}/${Force}/Force1.kk`,
  // },
  // {
  //   size: 1567,
  //   path: `${Constant}/${Force}/Force2.kk`,
  // },
  // {
  //   size: 1567,
  //   path: `${Constant}/${Force}/Force4.kk`,
  // },

  ////////// Mix of Scale & Force ///////////
  // {
  //   size: 454,
  //   path: `${Constant}/${Scale}/${Force}/SF-1`,
  // },
  // {
  //   size: 454,
  //   path: `${Constant}/${Scale}/${Force}/SF-2`,
  // },
  // {
  //   size: 454,
  //   path: `${Constant}/${Scale}/${Force}/SF-3`,
  // },

  ///////// Mix of Scale & Ease ///////////
  // {
  //   size: 454,
  //   path: `${Constant}/${Scale}/${Ease}/SE-1`,
  // },
  // {
  //   size: 454,
  //   path: `${Constant}/${Scale}/${Ease}/SE-2`,
  // },
  // {
  //   size: 454,
  //   path: `${Constant}/${Scale}/${Ease}/SE-3`,
  // },

  ///////// Mix of Ease and Force /////////
  // {
  //   size: 333,
  //   path: `${Constant}/${Ease}/${Force}/EF-1`,
  // },
  // {
  //   size: 3330,
  //   path: `${Constant}/${Ease}/${Force}/EF-3`,
  // },
];
