export const StaticPath = (url: any) => {
    const staticPath = process.env.STATIC_URL;
    const isProd = process.env.ENV_TYPE === 'production';
    let staticUrl = isProd ? staticPath+url : url;
    return staticUrl;
}