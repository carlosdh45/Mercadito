import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'FechaEnvio'}}})
export class FechaEnvio extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'ProveedorId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  proveedorId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Fecha', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'CanCompra', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  canCompra: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'OrdenCompra', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  ordenCompra: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<FechaEnvio>) {
    super(data);
  }
}

export interface FechaEnvioRelations {
  // describe navigational properties here
}

export type FechaEnvioWithRelations = FechaEnvio & FechaEnvioRelations;
