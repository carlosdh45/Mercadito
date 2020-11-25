import {DefaultCrudRepository} from '@loopback/repository';
import {Factura, FacturaRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype.id,
  FacturaRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Factura, dataSource);
  }
}
