import cloudinary from 'cloudinary';
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import UploadButton from './upload-button';
import CloudinaryImage from './cloudinary-image';

export interface ImagesSearchResult {
	total_count: number;
	next_cursor: string;
	resources: {
		public_id: string;
		filename: string;
		tags: string[];
	}[];
}

export default async function GalleryPage() {
	const result: ImagesSearchResult = await cloudinary.v2.search
		.expression('resource_type:image')
		.sort_by('created_at', 'desc')
		.max_results(10)
		.execute();

	return (
		<section>
			<div className="flex flex-col gap-8">
				<div className="flex justify-between">
					<h1 className="text-4xl font-bold">Gallery</h1>
					<UploadButton />
				</div>
				<div className="grid grid-cols-4 gap-4">
					{result.resources.map((resource) => (
						<CloudinaryImage
							key={resource.public_id}
							src={resource.public_id}
							width="400"
							height="300"
							alt={resource.filename}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
