import type { TrackerItem } from '@prisma/client';
import type { RequestHandler } from './$types';
import prismaClient from '$lib/prisma';
import { json } from '@sveltejs/kit';
import type { CreateItemContract } from '$lib/services/items/createNewItem';
import createNewItem from '$lib/services/items/createNewItem';

export const POST: RequestHandler = async ({ request }) => {
	const contract: CreateItemContract = await request.json();

	const response = await createNewItem(contract);

	return json(response);
};
