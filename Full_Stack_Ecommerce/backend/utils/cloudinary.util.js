const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
    cloud_name: 'barun0989',
    api_key: '146739689118879',
    api_secret: 'eaaX4tofPKEv3VaAedu9q1J-VLI',
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        const result = await cloudinary.uploader.upload(localFilePath, {
            folder: 'chat-app',
            resource_type: 'auto',
            quality: "auto:low",
            format: "webp",
            transformation: [
                { fetch_format: "auto", quality: "auto:low" }
            ]
        });

        fs.unlinkSync(localFilePath); // delete local file
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.error("Cloudinary upload error:", error);
        return null;
    }
};

const deleteFromCloudinary = async (url) => {
    try {
        if (!url) return;
        const publicId = url.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(`chat-app/${publicId}`);
    } catch (error) {
        console.error("Cloudinary delete error:", error);
    }
};

module.exports = {
    uploadOnCloudinary,
    deleteFromCloudinary
};
