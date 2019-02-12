module.exports.controller = (app, knex) => {
  app.get('/cars', async (req, res) => {
    let cars = await getFilteredCars(req.query, knex);
    cars.forEach(car => {
      console.log(req.protocol);
      car.picture =
        `${req.protocol}://${req.headers.host}/images/cars/${car.picture}`;
    });
    res.json(cars);
  });
};


function getFilteredCars(request, knex) {
  return knex.select('car.id',
    'car.year',
    'car.picture',
    'model.name as model',
    'manufacturer.name as manufacturer',
    'manufacturer.country',
    'color.hex as colorHex',
    'color.name as color')
    .from('car')
    .where((qb) => {

      if (request.manufacturer) {
        qb.where('manufacturer.name', '=', request.manufacturer);
      }

      if (request.model) {
        qb.where('model.name', '=', request.model);
      }

      if (request.color) {
        qb.andWhere('color.name', '=', request.color);
      }

      if (request.year) {
        qb.andWhere('car.year', '=', request.year);
      }
    })
    .join('model', {'model.id': 'car.fk_model'})
    .join('manufacturer', {'manufacturer.id': 'model.fk_manufacturer'})
    .join('color', {'color.id': 'car.fk_color'});
}
