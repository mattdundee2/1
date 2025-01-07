import { cn } from '@/lib/utils';
import Link from 'next/link';

function NavButton({
	children,
	className,
	href,
	primary,
}: {
	children: React.ReactNode;
	className?: string;
	href: string;
	primary?: boolean;
}) {
	return (
		<Link
			className={cn(
				' tracking-wide text-neutral-600 px-3 py-3 sm:py-2 rounded-lg hover:text-green-600 focus:text-green-600  underline-offset-2 transition-all duration-150 text-sm hover:no-underline sm:backdrop-blur',
				className,
				primary &&
					'bg-green-500 text-white focus:text-white hover:bg-green-600 hover:text-white'
			)}
			href={href}>
			{children}
		</Link>
	);
}

export default NavButton;
