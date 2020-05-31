import { metadata } from '../../data/metadata';
import { asArray } from '../utils/asArray';
import { Property } from './Property';

describe('Property', () => {
	it('should parse Property', () => {
		const data = asArray(metadata['edmx:Edmx']['edmx:DataServices'])
			.reduce((schemas, service) => schemas.concat(asArray(service['Schema'])), [])
			.reduce((entities, schema) => entities.concat(asArray(schema['EntityType'])), [])
			.find(entity => entity.$.Name === 'Category')
			.Property
			.find(property => property.$.Name === 'CategoryID');
		const property = new Property(data);
		expect(property.name).toBe('CategoryID');
		expect(property.type).toBe('number');
		expect(property.label).toBe('Category identifier');
		expect(property.nullable).toBe(false);
	});
});
