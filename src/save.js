import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<h3>Contents:</h3>
			<InnerBlocks.Content />
		</div>
	);
}
