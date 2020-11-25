import {DefaultCrudRepository} from '@loopback/repository';
import {Categoria, CategoriaRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
