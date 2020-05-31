import { promises as fs } from 'fs';
import { parseStringPromise } from 'xml2js';
import * as Handlebars from 'handlebars';
import { getMetadataByUrl } from './functions/getMetadataByUrl';
import { getEntityTypeList } from './functions/getEntityTypeList';
import { metadata } from '../data/$metadata';

export async function generateTypings(url) {
	// const metadata = await getMetadataByUrl(url);
	const entities = await getEntityTypeList(await parseStringPromise(metadata));

	const dtoSource = await fs.readFile('./templates/dto.handlebars', 'utf8');
	const dtoTemplate = Handlebars.compile(dtoSource);
	const dtoResult = dtoTemplate({ entities });
	await fs.writeFile('./typings/dto.d.ts', dtoResult, 'utf8');

	const entitiesSource = await fs.readFile('./templates/entities.handlebars', 'utf8');
	const entitiesTemplate = Handlebars.compile(entitiesSource);
	const entitiesResult = entitiesTemplate({ entities });
	await fs.writeFile('./typings/entities.d.ts', entitiesResult, 'utf8');
}

const url = process.argv.find(argv => argv.includes('--url=')).replace('--url=', '');
generateTypings(url);
