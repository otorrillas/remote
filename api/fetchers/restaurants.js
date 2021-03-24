const restaurants = [
  {
    id: '-1590684144',
    ref: 'corte-ingles-angel',
    label: "El Corte Inglés Portal de l'Àngel",
  },
  {
    id: '81086126',
    ref: 'corte-ingles-cataluna',
    label: 'El Corte Inglés Plaça de Catalunya',
  },
  {
    id: '2106480328',
    ref: 'corte-ingles-cornella',
    label: 'El Corte Inglés Cornellà de Llobregat',
  },
  {
    id: '2010706377',
    ref: 'hydro-aluminium',
    label: 'Hydro Aluminium Rolled Products Iberia SLU',
  },
  {
    id: '-136153162',
    ref: 'corte-ingles',
    label: 'El Corte Inglés',
  },
  {
    id: '777669490',
    ref: 'corte-ingles-barcelona',
    label: 'Barcelona Corte Inglés',
  },
  {
    id: '-1205734885',
    ref: 'guingueta-del-escriba',
    label: 'La Guingueta del Escribà',
  },
  {
    id: '1001651029',
    ref: 'neri-relais-chateaux',
    label: 'Hotel Neri Relais & Chateaux‎',
  },
  {
    id: '1596038490',
    ref: 'financial-times-barcelona',
    label: 'Financial Times Barcelona',
  },
  {
    id: '-1831593926',
    ref: 'xiringuito-escriba',
    label: 'Xiringuito Escribà',
  },
]

module.exports = (req, res) => {
  res.status(200).json(restaurants)
}
