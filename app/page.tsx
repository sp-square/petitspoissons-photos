'use client';

import { useState } from 'react';
import Image from 'next/image';
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

type UploadResult = {
	info: {
		public_id: string;
	};
	event: 'success';
};

export default function Home() {
	const [imageId, setImageId] = useState('cld-sample-5');
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{imageId && (
				<CldImage
					width="500"
					height="300"
					src={imageId}
					sizes="100vw"
					blurFaces
					alt="Description of my image"
				/>
			)}
		</main>
	);
}
