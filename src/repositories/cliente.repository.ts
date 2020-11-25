import {DefaultCrudRepository} from '@loopback/repository';
import {Cliente, ClienteRelations} from '../models';
import {ConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Cliente, dataSource);
  }
}
