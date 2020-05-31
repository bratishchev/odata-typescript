const typeMap = {
	'Edm.Binary': 'string',
	'Edm.Boolean': 'boolean',
	'Edm.DateTime': 'Date',
	'Edm.Time': 'Date',
	'Edm.DateTimeOffset': 'number',
	'Edm.Decimal': 'number',
	'Edm.Single': 'number',
	'Edm.Guid': 'string',
	'Edm.Double': 'number',
	'Edm.SByte': 'number',
	'Edm.Int16': 'number',
	'Edm.Int32': 'number',
	'Edm.Int64': 'number',
	'Edm.String': 'string'
}

export class Property {

	public readonly name: string = '';
	public readonly type: string = '';
	public readonly label: string = '';
	public readonly nullable: boolean = false;

	constructor(private readonly data) {
		this.name = data.$.Name;
		this.type = typeMap[data.$.Type] || 'any';
		this.label = data.$['sap:label'] || '';
		this.nullable = data.$.Nullable === 'true';
	}

}
