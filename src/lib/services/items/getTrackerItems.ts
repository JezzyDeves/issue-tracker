import prismaClient from '$lib/prisma';

export default async function getTrackerItems() {
	return await prismaClient.trackerItem.findMany({
		orderBy: {
			priorityId: 'desc'
		}
	});
}
