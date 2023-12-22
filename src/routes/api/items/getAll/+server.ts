import getTrackerItems from '$lib/services/items/getTrackerItems';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const trackerItems = await getTrackerItems();

	return json(trackerItems);
};
