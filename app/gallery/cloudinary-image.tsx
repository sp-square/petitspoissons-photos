'use client';

import { CldImage } from 'next-cloudinary';

export default function CloudinaryImage(props: any) {
	console.log(props);
	return <CldImage {...props} />;
}
