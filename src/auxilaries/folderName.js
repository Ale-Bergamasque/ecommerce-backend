const folderName = (storeName) => {

    const folder = storeName.trim().replace(" ", "_");

    return folder;
}

module.exports = folderName;