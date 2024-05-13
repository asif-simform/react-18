import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
// import imageCompression from 'browser-image-compression';
import Compressor from 'compressorjs';

const ImageUplaod = () => {
    const [fileList, setFileList] = useState([]);
    const [isLoading, setLoading] = useState(false);

    // const options = {
    //     // maxSizeMB: 1,
    //     maxWidthOrHeight: 1300,
    //     // maxWidthOrHeight: 5000,
    //     useWebWorker: true,
    // }

    const handleUpload = ({ fileList }) => {
        setFileList(fileList);
    };

    const handleRemove = file => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        setFileList(newFileList);
    };

    // const compressFile = async (imageFile) => {
    //     const compressedFile = await imageCompression(imageFile, options);
    //     return compressedFile;
    // }

    const compressFileUsingCompressorJS = async (imageFile) => {
        const compressedFile = new Promise((resolve, reject) => {
            new Compressor(imageFile, { 
                quality: 0.8,
                success(result) {
                    resolve(result);
                },
                error(err) {
                  console.log("Error in file convert", err.message);
                },
              });
          });

        return compressedFile;
    }

    const handleUploadButton = async () => {
        // You can implement your upload logic here
        // For example, send the files to the server
        message.success('Files upload processing....');
        console.log('Images :: ', fileList);
        setLoading(true);

        const processedData = [];
        for (let i = 0; i < fileList.length; i++) {
            console.log(`================ :: ${i + 1} :: =====================`);
            // Measure start time
            const startTime = new Date();
            const item = fileList[i];
            // Perform asynchronous operation on item
            console.log(`Before compress :: Size ${Math.round(item.size / 1024 / 1024)} MB`);
            const processedItem = await compressFileUsingCompressorJS(item.originFileObj);
            processedData.push(processedItem);

            console.log('Processed file:', processedItem);

            console.log(`After compress :: Size ${Math.round(processedItem.size / 1024 / 1024)} MB`);

            // Measure end time
            const endTime = new Date();

            // Calculate time difference in milliseconds
            const timeDiff = endTime - startTime;

            // Convert time difference to seconds
            let seconds = Math.floor(timeDiff / 1000);

            // Convert seconds to minutes and hours
            let minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);

            // Calculate remaining seconds after converting to minutes
            seconds = seconds % 60;
            // Calculate remaining minutes after converting to hours
            minutes = minutes % 60;

            console.log("Time taken: " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds.");

            console.log(`=====================================================`);
        }

        console.log('Processed data:', processedData);

        setFileList([]);
        setLoading(false);
        message.success('Files uploaded successfully');
    };

    const uploadProps = {
        fileList,
        onChange: handleUpload,
        onRemove: handleRemove,
        multiple: true,
        customRequest: (options) => {
            const { onSuccess } = options;
            onSuccess('Ok');
        }
    };

    return (
        <div>
            <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>Select Images</Button>
            </Upload>
            <Button
                onClick={handleUploadButton}
                type="primary"
                disabled={fileList.length === 0 || isLoading}
                style={{ marginTop: 16 }}
            >
               {isLoading? 'Uploading...' :  'Upload'}
            </Button>
        </div>
    );
}

export default ImageUplaod