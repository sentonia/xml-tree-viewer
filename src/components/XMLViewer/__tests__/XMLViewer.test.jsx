// XMLViewer.test.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import XMLViewer from '../XMLViewer';
import { describe, it, expect } from 'vitest';
import { noXMLInfoMessage } from '../XMLViewer.config.jsx';

describe('XMLViewer Component', () => {
  it('should render success message and ReactJson when xmlData is provided', () => {
    const xmlData = { name: 'test' };
    const { getByText, container } = render(<XMLViewer xmlData={xmlData} />);

    expect(getByText(/XML data successfully processed./i)).toBeInTheDocument();
    expect(container.querySelector('.xml-viewer-wrapper')).toBeInTheDocument();
    expect(
      container.querySelector('.xml-viewer-wrapper .react-json-view')
    ).toBeInTheDocument();
  });

  it('should render info message when xmlData is not provided', () => {
    const { getByText } = render(<XMLViewer xmlData={null} />);

    expect(getByText(noXMLInfoMessage)).toBeInTheDocument();
  });
});
