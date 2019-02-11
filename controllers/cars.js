module.exports.controller = (app, knex) => {
  app.get('/cars', async (req, res) =>  {
    let cars = await getFilteredCars(req.query, knex);
    res.json(cars);
  });
};


function getFilteredCars (request, knex) {
  return knex.select('car.id',
    'car.year',
    'model.name as model',
    'manufacturer.name as manufacturer',
    'manufacturer.country',
    'color.hex',
    'color.name')
    .from('car')
    .where((qb) => {

      if (request.model) {
        qb.where('model.name', '=', request.model.toUpperCase());
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
