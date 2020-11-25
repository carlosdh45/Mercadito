import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedores, ProveedoresRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedoresRepository extends DefaultCrudRepository<
  Proveedores,
  typeof Proveedores.prototype.id,
  ProveedoresRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Proveedores, dataSource);
  }
}
