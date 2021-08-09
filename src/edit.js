import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	const blockProps = useBlockProps();

	return (
		<div {...blockProps}>
			<h3>Contents:</h3>
			<InnerBlocks allowedBlocks={['core/list']} />
		</div>
	);
}
