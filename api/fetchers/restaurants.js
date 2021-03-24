const restaurants = [
  {
    id: '-1590684144',
    ref: 'RWwgQ29ydGU=',
    label: "El Corte Inglés Portal de l'Àngel",
  },
  {
    id: '81086126',
    ref: 'RWwgQ29ydGU=',
    label: 'El Corte Inglés Plaça de Catalunya',
  },
  {
    id: '2106480328',
    ref: 'RWwgQ29ydGU=',
    label: 'El Corte Inglés Cornellà de Llobregat',
  },
  {
    id: '2010706377',
    ref: 'SHlkcm8gQWw=',
    label: 'Hydro Aluminium Rolled Products Iberia SLU',
  },
  {
    id: '-136153162',
    ref: 'RWwgQ29ydGU=',
    label: 'El Corte Inglés',
  },
  {
    id: '777669490',
    ref: 'QmFyY2Vsb24=',
    label: 'Barcelona Corte Inglés',
  },
  {
    id: '-1205734885',
    ref: 'TGEgR3Vpbmc=',
    label: 'La Guingueta del Escribà',
  },
  {
    id: '1001651029',
    ref: 'SG90ZWwgTmU=',
    label: 'Hotel Neri Relais & Chateaux‎',
  },
  {
    id: '1596038490',
    ref: 'RmluYW5jaWE=',
    label: 'Financial Times Barcelona',
  },
  {
    id: '-1831593926',
    ref: 'WGlyaW5ndWk=',
    label: 'Xiringuito Escribà',
  },
]

module.exports = (req, res) => {
  res.status(200).json(restaurants)
}
