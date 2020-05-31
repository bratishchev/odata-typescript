import { Property } from './Property';
import { NavigationProperty } from './NavgationProperty';
import { asArray } from '../utils/asArray';

export class EntityType {

	public readonly name: string;
	public readonly label: string;
	public readonly properties: Property[] = [];
	public readonly navigations: NavigationProperty[] = [];

	constructor(
		private readonly metadata: any,
		private readonly entityData: any
		) {
		this.name = entityData.$.Name;
		this.label = entityData.$['sap:label'] || '';
		this.properties = asArray(entityData.Property).map(property => new Property(property));
		this.navigations = asArray(entityData.NavigationProperty).map(property => new NavigationProperty(metadata, entityData, property));
	}

}
