import React from 'react';

function SectionHeading({
	children,
	noMargin = false,
}: {
	children: React.ReactNode;
	noMargin?: boolean;
}) {
	return (
		<h2
			className={`text-6xl font-bold text-neutral-900 leading-tight  ${
				noMargin ? '' : ' mb-12 sm:mb-16'
			}`}>
			{children}
		</h2>
	);
}

export default SectionHeading;
