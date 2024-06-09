export interface UploadResult {
	info: {
		public_id: string;
	};
	event: 'success';
}

export interface ImagesSearchResult {
	resources: ImageData[];
}

export interface ImageData {
	public_id: string;
	filename: string;
	tags: string[];
}
