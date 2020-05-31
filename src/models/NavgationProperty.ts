import { asArray } from '../utils/asArray';

export class NavigationProperty {

	public readonly name: string = '';
	public readonly type: string = '';
	public readonly label: string = '';
	public readonly multiple: boolean = false;

	constructor(
		private readonly metadata,
		private readonly entityData,
		private readonly propertyData
	) {
		this.name = propertyData.$.Name;
		const associationName: string = propertyData.$.Relationship.slice(propertyData.$.Relationship.indexOf('.') + 1);
		const association = asArray(metadata['edmx:Edmx']['edmx:DataServices'])
			.reduce((schemas, service) => schemas.concat(asArray(service['Schema'])), [])
			.reduce((associations, schema) => associations.concat(asArray(schema['Association'])), [])
			.find(association => association.$.Name === associationName);
		const relatedEntity = association.End.find(end => end.$.Role === propertyData.$.ToRole);
		this.multiple = relatedEntity.$.Multiplicity === '*';
		this.type = relatedEntity.$.Type.slice(relatedEntity.$.Type.indexOf('.') + 1) + (this.multiple ? '[]' : '');
		this.label = propertyData.$['sap:label'] || '';
	}

}
