import { metadata } from '../../data/$metadata';
import { parseStringPromise } from 'xml2js';
import { getEntityTypeList } from './getEntityTypeList';

it('get all EntityType`s from metadata', async () => {
	expect.assertions(1);
	expect(getEntityTypeList(await parseStringPromise(metadata)).length).toBe(26)
});
