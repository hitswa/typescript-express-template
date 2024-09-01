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

    ftp: {
        "driver": "ftp",
        "host": process.env.FTP_HOST || "127.0.0.1",
        "port": process.env.FTP_PORT || "21",
        "username": process.env.FTP_USERNAME || "anonymous",
        "password": process.env.FTP_PASSWORD || "",
        "root": process.env.FTP_ROOT || "",
        "timeout": process.env.FTP_TIMEOUT || 30,
        "throw": false,
    },

    ftps: {
        "driver": "ftp",
        "host": process.env.FTPS_HOST || "127.0.0.1",
        "port": process.env.FTPS_PORT || "21",
        "username": process.env.FTPS_USERNAME || "anonymous",
        "password": process.env.FTPS_PASSWORD || "",
        "root": process.env.FTPS_ROOT || "",
        "timeout": process.env.FTPS_TIMEOUT || 30,
        "secure": true,
        "throw": false,
    },

    ftpes: {
        "driver": "ftp",
        "host": process.env.FTPES_HOST || "127.0.0.1",
        "port": process.env.FTPES_PORT || "21",
        "username": process.env.FTPES_USERNAME || "anonymous",
        "password": process.env.FTPES_PASSWORD || "",
        "root": process.env.FTPES_ROOT || "",
        "timeout": process.env.FTPES_TIMEOUT || 30,
        "secure": "implicit", // Use 'implicit' or 'explicit' depending on your configuration
        "throw": false,
    },

    sftp: {
        "driver": "sftp",
        "host": process.env.SFTP_HOST || "127.0.0.1",
        "port": process.env.SFTP_PORT || "22",
        "username": process.env.SFTP_USERNAME || "user",
        "password": process.env.SFTP_PASSWORD || "",
        "privateKey": process.env.SFTP_PRIVATE_KEY || null,
        "root": process.env.SFTP_ROOT || "",
        "timeout": process.env.SFTP_TIMEOUT || 30,
        "throw": false,
    },
};

const links = {
    "storage": "app/public"
};


export {
    _default,
    disks,
    links
}