import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SideNav from '@/components/navigation/side-nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={inter.className}>
				<div className="border-b">
					<div className="flex h-16 items-center px-4 container mx-auto">
						PHOTOS APP
						<div className="ml-auto flex items-center space-x-4">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</div>
				<div className="flex">
					<SideNav />
					<div className="w-full px-4 pt-8">{children}</div>
				</div>
			</body>
		</html>
	);
}
