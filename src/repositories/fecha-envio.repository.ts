import {DefaultCrudRepository} from '@loopback/repository';
import {FechaEnvio, FechaEnvioRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FechaEnvioRepository extends DefaultCrudRepository<
  FechaEnvio,
  typeof FechaEnvio.prototype.proveedorId,
  FechaEnvioRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(FechaEnvio, dataSource);
  }
}
