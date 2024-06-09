import cloudinary from 'cloudinary';
import CloudinaryImage from '@/components/pictures/cloudinary-image';
import { ImageData, ImagesSearchResult } from '@/types/props';
import { ForceRefresh } from '@/components/force-refresh';

export default async function GalleryPage() {
	const result: ImagesSearchResult = await cloudinary.v2.search
		.expression('resource_type:image AND tags=favorite')
		.sort_by('created_at', 'desc')
		.with_field('tags')
		.max_results(30)
		.execute();

	return (
		<section>
			<ForceRefresh />
			<div className="flex flex-col gap-8">
				<div className="flex justify-between">
					<h1 className="text-4xl font-bold">Favorites</h1>
				</div>
				<div className="grid grid-cols-4 gap-4">
					{result.resources.map((resource: ImageData) => (
						<CloudinaryImage key={resource.public_id} imageData={resource} />
					))}
				</div>
			</div>
		</section>
	);
}
