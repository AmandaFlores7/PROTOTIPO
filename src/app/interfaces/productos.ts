export interface productos {
  id:number;
  nombre:string;
  descripcion:string;
  precio:number;
  disponibilidad:boolean;

}

export const ListaProductos:Array<productos>=[
  {
      "id": 1,
      "nombre": "Taco Ricachon",
      "descripcion": "Carne de res salteada con cebolla, pimentón y champiñones, coronado con aguacate y cilantro.",
      "precio": 7990,
      "disponibilidad": true
  },
  {
      "id": 2,
      "nombre": "Taco Camaron Patriota",
      "descripcion": "Camaroncitos salteados con tomate y cebolla, coronados con lechuga, cilantro y crema.",
      "precio": 8490,
      "disponibilidad": true
  },
  {
      "id": 3,
      "nombre": "Tacos del Trompo",
      "descripcion": "Trocitos de cerdo adobado con piña, cebolla, aguacate y cilantro",
      "precio": 7390,
      "disponibilidad": true
  },
  {
      "id": 4,
      "nombre": "Doña Margara",
      "descripcion": "Tequila Reposado, Limón Natural y Triple Sec.",
      "precio": 4590,
      "disponibilidad": true
  },
  {
      "id": 5,
      "nombre": "Doña Chamoy",
      "descripcion": "Nuestra Doña Márgara con Limón de Pica, Borde de Salsa Chamoy y Tajín. Presentados en un Vaso Margarita de Cobre.",
      "precio": 4990,
      "disponibilidad": false
  }
]
