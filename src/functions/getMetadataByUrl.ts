import * as axios from 'axios';

export function getMetadataByUrl(url: string): string {
	return (axios as any).get(url).then(({ data }) => data);
}
