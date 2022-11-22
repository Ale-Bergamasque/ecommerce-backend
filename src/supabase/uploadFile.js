const supabase = require('./configurationsSB');
const folderName = require('../auxilaries/folderName');

const uploadFile = async (productPhoto, storeName, photoName) => {
    const photoRename = `${new Date().getTime()}_` + photoName.replace(' ', '_');

    const buffer = Buffer.from(productPhoto, 'base64');

    const folder = folderName(storeName);

    const { error } = await supabase
        .storage
        .from(process.env.SUPABASE_BUCKET)
        .upload(`${folder}/${photoRename}`, buffer);

    if (error) return {
        error
    }

    const { publicURL, error: errorPublicURL } = supabase
        .storage
        .from(process.env.SUPABASE_BUCKET)
        .getPublicUrl(`${folder}/${photoRename}`);

    if (errorPublicURL) return {
        errorPublicURL
    }

    return {
        publicURL,
        photoRename
    }
}

module.exports = uploadFile;