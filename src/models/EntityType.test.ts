import { metadata } from '../../data/metadata';
import { EntityType } from './EntityType';
import { asArray } from '../utils/asArray';

describe('EntityType', () => {
	it('should parse EntityType', () => {
		const data = asArray(metadata['edmx:Edmx']['edmx:DataServices'])
			.reduce((schemas, service) => schemas.concat(asArray(service['Schema'])), [])
			.reduce((entities, schema) => entities.concat(asArray(schema['EntityType'])), [])
			.find(entity => entity.$.Name === 'Category');
		const entityType = new EntityType(metadata, data);
		expect(entityType.name).toBe('Category');
		expect(entityType.label).toBe('Products category');
		expect(entityType.properties.length).toBe(4);
		expect(entityType.navigations.length).toBe(1);
	});
});
