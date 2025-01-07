import Link from 'next/link';
import SectionHeading from '../ui/section-heading';
import {
	Brain,
	CheckCircle,
	icons,
	LayoutDashboard,
	Move3d,
	ShieldCheck,
} from 'lucide-react';

export default function KeyFeatures() {
	const features = [
		{
			title: 'Modular Design',
			description:
				'Create customizable training scenarios with our flexible modular system, tailored to your needs.',
			icon: LayoutDashboard,
		},
		{
			title: 'Advanced Swarm Coordination',
			description:
				'Experience cutting-edge swarm intelligence for coordinated autonomous flight missions.',
			icon: Brain,
		},
		{
			title: 'NDAA Compliance',
			description:
				'Our technology adheres to NDAA standards, ensuring security, reliability, and compliance.',
			icon: ShieldCheck,
		},
	];

	return (
		<section
			id="KeyFeatures"
			className="flex items-center justify-center py-20">
			<div className="container mx-auto px-6 lg:px-8 max-w-6xl space-y-16">
				{/* Heading */}
				<div className="text-center">
					<SectionHeading noMargin>
						<span className="text-4xl sm:text-5xl font-bold text-gray-800">
							Key Features
						</span>
					</SectionHeading>
					<p className="text-lg sm:text-xl text-gray-600 mt-4">
						Discover the innovative features that set us apart.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
					{/* Feature 1 */}
					{features.map((feature) => (
						<div className="flex flex-col justify-start rounded-2xl border-green-400 border p-6">
							<div className="flex flex-col items-start gap-4 mb-4">
								<feature.icon className="w-12 h-12 text-green-600" />
								<h3 className="text-2xl font-semibold text-gray-800">
									{feature.title}
								</h3>
							</div>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
				{/* Call-to-Action */}
				<div className="text-center">
					<Link
						href="/solutions"
						className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-blue-500 transition duration-300">
						Learn about our solutions
					</Link>
				</div>
			</div>
		</section>
	);
}
