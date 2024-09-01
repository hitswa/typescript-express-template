import "dotenv-flow/config";


const _default = process.env.LOG_CHANNEL || "stack";

const deprecations = {
    channel: process.env.LOG_DEPRECATIONS_CHANNEL || null,
    trace: process.env.LOG_DEPRECATIONS_TRACE || false
};

const channels = {

    stack: {
        "driver": "local",
        "root": "app",
        "throw": false,
    },

    single: {
        "driver": "local",
        "root": "app/public",
        "url": process.env.APP_URL || "/storage",
        "visibility": "public",
        "throw": false,
    },

    daily: {
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

    slack: {},

    papertrail: {},

    stderr: {},

    syslog: {},

    errorlog: {},

    null: {},

    emergency: {}
};


export {
    _default,
    deprecations,
    channels
}