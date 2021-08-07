/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { TextControl, ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	AlignmentToolbar,
	BlockControls,
} from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const MY_TEMPLATE = [
	['core/list', {}],
	// [ 'core/heading', { placeholder: 'Book Title' } ],
	// [ 'core/paragraph', { placeholder: 'Summary' } ],
];

// contents-block
export default function Edit({ attributes, setAttributes, isSelected }) {
	const blockProps = useBlockProps();

	const [target, setTarget] = useState(false);

	const onChangeContent = (newContent) => {
		setAttributes({ content: newContent });
	};

	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		});
	};

	return (
		<div {...blockProps}>
			{isSelected ? (
				<>
					<TextControl
						value={attributes.linkLabel}
						label={'Label'}
						onChange={(val) => setAttributes({ linkLabel: val })}
					/>
					<TextControl
						value={attributes.linkUrl}
						label={'Url'}
						onChange={(val) => setAttributes({ linkUrl: val })}
					/>
					{/*<ToggleControl
						label={'Open in new tab'}
						checked={Boolean(attributes.linkTarget)}
						onChange={(val) => {
							console.log('val', val);
							if (val) {
								setAttributes({ linkTarget: '_blank' });
							} else {
								setAttributes({ linkTarget: '' });
							}
						}}
					/>*/}
				</>
			) : (
				<>
					<a
						className={attributes.className}
						style={{ textAlign: attributes.alignment }}
						onChange={onChangeContent}
						href={attributes.linkUrl}
						title={attributes.linkLabel}
					>
						{attributes.linkLabel}
					</a>{' '}
				</>
			)}
		</div>
	);
}
