const supabase = require('./configurationsSB');
const folderName = require('../auxilaries/folderName');

const deleteFile = async (storeName, photoName) => {

    const folder = folderName(storeName);

    const { data, error } = await supabase
        .storage
        .from(process.env.SUPABASE_BUCKET)
        .remove([`${folder}/${photoName}`])

    if (error) return {
        error
    }

    return {
        data
    }
}

module.exports = deleteFile;