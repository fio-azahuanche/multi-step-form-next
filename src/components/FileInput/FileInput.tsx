import React from 'react';

interface FileInputProps {
    fileName: string;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FileInput: React.FC<FileInputProps> = ({ fileName, handleFileChange }) => (
    <div>
        <label htmlFor="choose-file" className="text-lg-1600 text-sm-1263 font-medium leading-6">Choose File</label>
        <div className="mt-2">
            <div className="flex sm:max-w-md rounded-lg border border-solid border-customGrayLight bg-white">
                <label htmlFor="choose-file" className="py-1.5 pl-2 pr-2 rounded-bl-lg rounded-tl-lg z-10 cursor-pointer bg-customStep font-medium text-white hover:bg-blue-600">
                    <span className='text-base-1600 text-sm-1263'>Choose file</span>
                    <input
                        id="choose-file"
                        name="choose-file"
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        placeholder="Choose file"
                    />
                </label>
                <p className="py-1.5 pl-2 text-base-1600 text-sm-1263 text-customGrayLight text-sm flex items-center">{fileName}</p>
            </div>
        </div>
    </div>
);
