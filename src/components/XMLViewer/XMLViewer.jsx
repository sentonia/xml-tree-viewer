import React from 'react';
import './XMLViewer.style.css';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';
import { successInfoMessage, noXMLInfoMessage } from './XMLViewer.config';

const XMLViewer = ({ xmlData }) => {
	return (
		<>
			{xmlData ? (
				<>
					<p className='success-message'>{successInfoMessage}</p>
					<div className="xml-viewer-wrapper">
						<ReactJson theme={"monokai"} iconStyle='square' indentWidth={2} enableClipboard={true} src={xmlData} displayDataTypes={true} />
					</div>
				</>
			) : (
				<p className="info-message">{noXMLInfoMessage}</p>
			)}
		</>
	);
};

export default XMLViewer;

XMLViewer.propTypes = {
	xmlData: PropTypes.object,
};
