import { metadata } from '../../data/metadata';
import { asArray } from '../utils/asArray';
import { NavigationProperty } from './NavgationProperty';

describe('NavigationProperty', () => {
	it('should parse NavigationProperty', () => {
		const entityData = asArray(metadata['edmx:Edmx']['edmx:DataServices'])
			.reduce((schemas, service) => schemas.concat(asArray(service['Schema'])), [])
			.reduce((entities, schema) => entities.concat(asArray(schema['EntityType'])), [])
			.find(entity => entity.$.Name === 'Category');
		const propertyData = entityData
			.NavigationProperty
			.find(property => property.$.Name === 'Products');
		const property = new NavigationProperty(metadata, entityData, propertyData);
		expect(property.name).toBe('Products');
		expect(property.type).toBe('Product[]');
		expect(property.label).toBe('Related products');
	});
});
