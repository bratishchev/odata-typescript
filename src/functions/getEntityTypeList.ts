import { EntityType } from '../models/EntityType';
import { asArray } from '../utils';

export function getEntityTypeList(metadata: Object): EntityType[] {
	return asArray(metadata['edmx:Edmx']['edmx:DataServices'])
		.reduce((schemas, service) => schemas.concat(asArray(service['Schema'])), [])
		.reduce((entities, schema) => entities.concat(asArray(schema['EntityType'])), [])
		.map(entity => new EntityType(metadata, entity));
}
