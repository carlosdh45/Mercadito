import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {FechaEnvio} from '../models';
import {FechaEnvioRepository} from '../repositories';

export class FechaEnvioController {
  constructor(
    @repository(FechaEnvioRepository)
    public fechaEnvioRepository : FechaEnvioRepository,
  ) {}

  @post('/fecha-envios', {
    responses: {
      '200': {
        description: 'FechaEnvio model instance',
        content: {'application/json': {schema: getModelSchemaRef(FechaEnvio)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FechaEnvio, {
            title: 'NewFechaEnvio',
            
          }),
        },
      },
    })
    fechaEnvio: FechaEnvio,
  ): Promise<FechaEnvio> {
    return this.fechaEnvioRepository.create(fechaEnvio);
  }

  @get('/fecha-envios/count', {
    responses: {
      '200': {
        description: 'FechaEnvio model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(FechaEnvio) where?: Where<FechaEnvio>,
  ): Promise<Count> {
    return this.fechaEnvioRepository.count(where);
  }

  @get('/fecha-envios', {
    responses: {
      '200': {
        description: 'Array of FechaEnvio model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(FechaEnvio, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(FechaEnvio) filter?: Filter<FechaEnvio>,
  ): Promise<FechaEnvio[]> {
    return this.fechaEnvioRepository.find(filter);
  }

  @patch('/fecha-envios', {
    responses: {
      '200': {
        description: 'FechaEnvio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FechaEnvio, {partial: true}),
        },
      },
    })
    fechaEnvio: FechaEnvio,
    @param.where(FechaEnvio) where?: Where<FechaEnvio>,
  ): Promise<Count> {
    return this.fechaEnvioRepository.updateAll(fechaEnvio, where);
  }

  @get('/fecha-envios/{id}', {
    responses: {
      '200': {
        description: 'FechaEnvio model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(FechaEnvio, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(FechaEnvio, {exclude: 'where'}) filter?: FilterExcludingWhere<FechaEnvio>
  ): Promise<FechaEnvio> {
    return this.fechaEnvioRepository.findById(id, filter);
  }

  @patch('/fecha-envios/{id}', {
    responses: {
      '204': {
        description: 'FechaEnvio PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FechaEnvio, {partial: true}),
        },
      },
    })
    fechaEnvio: FechaEnvio,
  ): Promise<void> {
    await this.fechaEnvioRepository.updateById(id, fechaEnvio);
  }

  @put('/fecha-envios/{id}', {
    responses: {
      '204': {
        description: 'FechaEnvio PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() fechaEnvio: FechaEnvio,
  ): Promise<void> {
    await this.fechaEnvioRepository.replaceById(id, fechaEnvio);
  }

  @del('/fecha-envios/{id}', {
    responses: {
      '204': {
        description: 'FechaEnvio DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.fechaEnvioRepository.deleteById(id);
  }
}
