const menus = {
  'corte-ingles-angel': [
    {
      id: 'dzuYopPDGpu0',
      ref: '4eddb354-8e5e-4be5-ad3b-3b8ad9646cc8',
      label: 'Steak',
      attachment: {
        type: 'image',
        href: 'https://images.typeform.com/images/q6cvLH5xY3pj',
        properties: {
          description: 'grilled meat on brown wooden chopping board',
        },
      },
    },
    {
      id: '3FUNSVvVXY0L',
      ref: '28cbcebf-8f00-443c-bfcf-fa0c95933831',
      label: 'Tartar',
      attachment: {
        type: 'image',
        href: 'https://images.typeform.com/images/hiibi7UhKhxx',
        properties: {
          description: 'row meat on plate',
        },
      },
    },
  ],
}

module.exports = (req, res) => {
  const { restaurant } = req.query

  const menu = menus[restaurant]

  res.status(200).json(menu)
}
