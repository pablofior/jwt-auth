
'use strict'

/*
 * All commonly used functions are placed here, mostly CRUD operations
 */



class BaseRepository{

  constructor(model){
    this.model = model;
  }

  loadRelations(relations) {
    let query = this.model.query();

    if(Array.isArray(relations) && relations.length > 0) {
      relations.forEach((value, index) => {
        query.with(value);
      });
    }

    return query;
  }

  async find(id, relations) {
    let query = await this.loadRelations(relations);

    return await query.where('id', id).fetch();
  }

  async findBy(field, value, operator = '=', relations) {
    let query = await this.loadRelations(relations);

    query.where(field, operator, value);

    return await query.fetch();
  }

// //Get all records
  async all(relations){

    let query = await this.loadRelations(relations);

    return await query.fetch();
  }


  //Save a record
  async store(data){
    let modelObj = new this.model();

    modelObj.fill(data);

    await modelObj.save();

    return modelObj;
  }

  //Update a record
  async update(id, data){
    const modelObj = await this.model.find(id);

    modelObj.merge(data);

    await modelObj.save();

    return modelObj;
  }


  async destroy(id){
    const modelObj = await this.model.find(id)

    await modelObj.delete();
  }
}

module.exports = BaseRepository
