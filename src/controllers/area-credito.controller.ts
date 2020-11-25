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
import {AreaCredito} from '../models';
import {AreaCreditoRepository} from '../repositories';

export class AreaCreditoController {
  constructor(
    @repository(AreaCreditoRepository)
    public areaCreditoRepository : AreaCreditoRepository,
  ) {}

  @post('/area-creditos', {
    responses: {
      '200': {
        description: 'AreaCredito model instance',
        content: {'application/json': {schema: getModelSchemaRef(AreaCredito)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaCredito, {
            title: 'NewAreaCredito',
            
          }),
        },
      },
    })
    areaCredito: AreaCredito,
  ): Promise<AreaCredito> {
    return this.areaCreditoRepository.create(areaCredito);
  }

  @get('/area-creditos/count', {
    responses: {
      '200': {
        description: 'AreaCredito model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(AreaCredito) where?: Where<AreaCredito>,
  ): Promise<Count> {
    return this.areaCreditoRepository.count(where);
  }

  @get('/area-creditos', {
    responses: {
      '200': {
        description: 'Array of AreaCredito model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(AreaCredito, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(AreaCredito) filter?: Filter<AreaCredito>,
  ): Promise<AreaCredito[]> {
    return this.areaCreditoRepository.find(filter);
  }

  @patch('/area-creditos', {
    responses: {
      '200': {
        description: 'AreaCredito PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaCredito, {partial: true}),
        },
      },
    })
    areaCredito: AreaCredito,
    @param.where(AreaCredito) where?: Where<AreaCredito>,
  ): Promise<Count> {
    return this.areaCreditoRepository.updateAll(areaCredito, where);
  }

  @get('/area-creditos/{id}', {
    responses: {
      '200': {
        description: 'AreaCredito model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(AreaCredito, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(AreaCredito, {exclude: 'where'}) filter?: FilterExcludingWhere<AreaCredito>
  ): Promise<AreaCredito> {
    return this.areaCreditoRepository.findById(id, filter);
  }

  @patch('/area-creditos/{id}', {
    responses: {
      '204': {
        description: 'AreaCredito PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AreaCredito, {partial: true}),
        },
      },
    })
    areaCredito: AreaCredito,
  ): Promise<void> {
    await this.areaCreditoRepository.updateById(id, areaCredito);
  }

  @put('/area-creditos/{id}', {
    responses: {
      '204': {
        description: 'AreaCredito PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() areaCredito: AreaCredito,
  ): Promise<void> {
    await this.areaCreditoRepository.replaceById(id, areaCredito);
  }

  @del('/area-creditos/{id}', {
    responses: {
      '204': {
        description: 'AreaCredito DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.areaCreditoRepository.deleteById(id);
  }
}
