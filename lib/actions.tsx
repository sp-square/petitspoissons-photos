'use server';

import cloudinary from 'cloudinary';
import { revalidatePath } from 'next/cache';

export async function setAsFavoriteAction(
	imagePublicId: string,
	isFavorite: boolean
) {
	isFavorite
		? await cloudinary.v2.uploader.add_tag('favorite', [imagePublicId])
		: await cloudinary.v2.uploader.remove_tag('favorite', [imagePublicId]);
}
