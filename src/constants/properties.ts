export default [
  {
    name: "106 Calavo Street",
    units: [
      {
        name: "a",
        area_in: 1952,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "b",
        area_in: 2003,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "c",
        area_in: 2003,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "d",
        area_in: 2003,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "e",
        area_in: 2003,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "f",
        area_in: 2003,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "g",
        area_in: 2003,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "h",
        area_in: 2003,
        area_out: null,
        rent: null,
        is_available: false,
        notes: null,
      },
    ],
  },
  {
    name: "108 Calavo Street",
    units: [
      {
        name: "a",
        area_in: 3250,
        area_out: 1100,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "b",
        area_in: 3356,
        area_out: 1100,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "c",
        area_in: 3356,
        area_out: 1100,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "d",
        area_in: 3356,
        area_out: 1100,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "e",
        area_in: 3356,
        area_out: 1100,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "f",
        area_in: 3356,
        area_out: 1100,
        rent: null,
        is_available: false,
        notes: null,
      },
    ],
  },
  {
    name: "110 Calavo Street",
    units: [
      {
        name: "a",
        area_in: 2517,
        area_out: 1080,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "b",
        area_in: 2517,
        area_out: 1080,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "c/d",
        area_in: 5034,
        area_out: 2160,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "e",
        area_in: 2517,
        area_out: 1080,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "f",
        area_in: 2517,
        area_out: 1080,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "g/h",
        area_in: 5034,
        area_out: 2160,
        rent: null,
        is_available: false,
        notes: null,
      },
    ],
  },
  {
    name: "120 Calavo Street",
    units: [
      {
        name: "a",
        area_in: 2517,
        area_out: 1000,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "b",
        area_in: 2517,
        area_out: 1000,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "c/d",
        area_in: 5034,
        area_out: 2160,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "e",
        area_in: 2517,
        area_out: 1000,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "f",
        area_in: 2517,
        area_out: 1000,
        rent: null,
        is_available: false,
        notes: null,
      },
      {
        name: "g/h",
        area_in: 5034,
        area_out: 2160,
        rent: null,
        is_available: false,
        notes: null,
      },
    ],
  },
];

export type Property = {
  name: string;
  units: {
    name: string;
    area_in: number | null;
    area_out: number | null;
    rent: number | null;
    is_available: boolean;
    notes: string | null;
  }[];
};
