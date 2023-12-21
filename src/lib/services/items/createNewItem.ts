import prismaClient from '$lib/prisma';

export type CreateItemContract = {
	title: string;
	description: string;
	tagNames: string[];
	priority: string;
};

export default async function createNewItem(contract: CreateItemContract) {
	return await prismaClient.trackerItem.create({
		data: {
			description: contract.description,
			title: contract.title,
			priority: {
				connectOrCreate: {
					where: {
						name: contract.priority
					},
					create: {
						name: contract.priority
					}
				}
			},
			tags: {
				connectOrCreate: contract.tagNames.map((tagName) => {
					return {
						where: {
							name: tagName
						},
						create: {
							name: tagName
						}
					};
				})
			}
		}
	});
}
