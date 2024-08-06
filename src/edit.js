/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, PanelHeader, SelectControl } from '@wordpress/components';

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
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({attributes, setAttributes}) {


	const blockProps = useBlockProps( {
		className: [attributes.layoutDirection, attributes.contentJustify],
	} );

	return (
		<div { ...blockProps }>
			<InspectorControls>
				<Panel>
					<PanelBody title="Layout Direction" initialOpen={ true }>
						<PanelRow>
							<SelectControl
								label="Layout"
								value={attributes.layoutDirection}
								options={[
									{label:'veritcal', value:'is-acc-vertical'},
									{label:'horizontal', value:'is-acc-horizontal'},
								]}
								onChange={value => setAttributes({layoutDirection: value})}
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="Content Justification" initialOpen={ true }>
						<PanelRow>
							<SelectControl
								label="Layout"
								value={attributes.contentJustify}
								options={[
									{label:'start', value:'is-acc-justify-start'},
									{label:'end', value:'is-acc-justify-end'},
								]}
								onChange={value => setAttributes({contentJustify: value})}
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<InnerBlocks/>
		</div>
	);
}
