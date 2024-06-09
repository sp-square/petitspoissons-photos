import Link from 'next/link';
import { Button } from '../ui/button';
import { FolderOpen } from '../ui/icons/folder-open';
import { HeartOutline } from '../ui/icons/heart-outline';
import { Photo } from '../ui/icons/photo';

export default function SideNav() {
	return (
		<div className="pb-12 w-1/5">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
						Manage
					</h2>
					<div className="space-y-1">
						<Button
							asChild
							variant="secondary"
							className="w-full justify-start flex gap-2"
						>
							<Link href="/gallery">
								<Photo />
								Gallery
							</Link>
						</Button>
						<Button
							asChild
							variant="ghost"
							className="w-full justify-start flex gap-2"
						>
							<Link href="/albums">
								<FolderOpen />
								Albums
							</Link>
						</Button>
						<Button
							asChild
							variant="ghost"
							className="w-full justify-start flex gap-2"
						>
							<Link href="/favorites">
								<HeartOutline />
								Favorites
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
