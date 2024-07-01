// FileUpload.test.js
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import FileUpload from '../FileUpload.jsx';
import { describe, expect, it, vi } from 'vitest';

describe('FileUpload Component', () => {
  it('should render the input and label', () => {
    const { getByLabelText, getByText } = render(
      <FileUpload onFileChange={() => {}} />
    );

    expect(getByLabelText(/upload xml file/i)).toBeInTheDocument();
    expect(getByText(/upload xml file/i)).toBeInTheDocument();
  });

  it('should call onFileChange when a file is selected', () => {
    const onFileChange = vi.fn();
    const { getByLabelText } = render(
      <FileUpload onFileChange={onFileChange} />
    );
    const input = getByLabelText(/upload xml file/i);

    fireEvent.change(input, {
      target: {
        files: [
          new File(['dummy content'], 'example.xml', {
            type: 'application/xml',
          }),
        ],
      },
    });

    expect(onFileChange).toHaveBeenCalledTimes(1);
    expect(onFileChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it('should be disabled when the disabled prop is true', () => {
    const { getByLabelText, getByText } = render(
      <FileUpload onFileChange={() => {}} disabled />
    );

    expect(getByLabelText(/upload xml file/i)).toBeDisabled();
    expect(getByText(/upload xml file/i)).toHaveClass('disabled');
  });

  it('should display "Uploading..." when loading prop is true', () => {
    const { getByText } = render(
      <FileUpload onFileChange={() => {}} loading />
    );

    expect(getByText(/uploading/i)).toBeInTheDocument();
  });

  it('should pass other props to the input element', () => {
    const { getByLabelText } = render(
      <FileUpload onFileChange={() => {}} data-testid="custom-id" />
    );

    expect(getByLabelText(/upload xml file/i)).toHaveAttribute(
      'data-testid',
      'custom-id'
    );
  });
});
