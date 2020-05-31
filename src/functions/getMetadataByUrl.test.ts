import * as axios from 'axios';
import { getMetadataByUrl } from './getMetadataByUrl';
import { metadata } from '../../data/$metadata';

jest.mock('axios');

it('get metadata via http', async () => {
	axios.get.mockResolvedValue({ data: metadata });
	expect.assertions(1);
	const response = await getMetadataByUrl('$metadata');
	expect(response).toMatch(/^<\?xml.*/);
});
