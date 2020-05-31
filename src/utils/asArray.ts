export function asArray(value: any|any[]): any[] {
	if (!value) {
		return [];
	}
	return Array.isArray(value) ? value : [value];
}
