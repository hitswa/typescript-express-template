import "dotenv-flow/config";


const _default = process.env.FILESYSTEM_DISK || "local";

const disks = {
    local: {
        "driver": "local",
        "root": "app",
        "throw": false,
    },

    public: {
        "driver": "local",
        "root": "app/public",
        "url": process.env.APP_URL || "/storage",
        "visibility": "public",
        "throw": false,
    },

    s3: {
        "driver": "s3",
        "key": process.env.AWS_ACCESS_KEY_ID,
        "secret": process.env.AWS_SECRET_ACCESS_KEY,
        "region": process.env.AWS_DEFAULT_REGION,
        "bucket": process.env.AWS_BUCKET,
        "url": process.env.AWS_URL,
        "endpoint": process.env.AWS_ENDPOINT,
        "use_path_style_endpoint": process.env.AWS_USE_PATH_STYLE_ENDPOINT || false,
        "throw": false,
    },

    ftp: {},

    sftp: {},

    ftps: {},

    ftpes: {},
};

const links = {
    "storage": "app/public"
};


export {
    _default,
    disks,
    links
}