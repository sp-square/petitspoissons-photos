'use client';
import { useEffect, useState, useTransition } from 'react';
import { CldImage } from 'next-cloudinary';
import { HeartSolid } from '../ui/icons/heart-solid';
import { HeartOutline } from '../ui/icons/heart-outline';
import { setAsFavoriteAction } from '@/lib/actions';
import { ImageData } from '@/types/props';

export default function CloudinaryImage({
	imageData,
}: {
	imageData: ImageData;
}) {
	const [isFavorite, setIsFavorite] = useState(
		imageData.tags.includes('favorite')
	);

	// TODO: set up a loading spinner using 'transition' below
	const [transition, startTransition] = useTransition();

	return (
		<div className="relative">
			<CldImage
				{...imageData}
				src={imageData.public_id}
				alt={imageData.filename}
			/>
			{isFavorite ? (
				<HeartSolid
					className="absolute bottom-2 right-2 hover:text-red-200 text-red-500 cursor-pointer"
					onClick={() => {
						setIsFavorite(false);
						startTransition(() => {
							setAsFavoriteAction(imageData.public_id, false);
						});
					}}
				/>
			) : (
				<HeartOutline
					className="absolute bottom-2 right-2 hover:text-red-500 cursor-pointer"
					onClick={() => {
						setIsFavorite(true);
						startTransition(() => {
							setAsFavoriteAction(imageData.public_id, true);
						});
					}}
				/>
			)}
		</div>
	);
}
