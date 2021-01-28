function sortSlice(array,slice) {
    return array.sort((first, second) => {
        return first.count > second.count ? -1 : 1; 
    }).slice(0,slice);
};

module.exports = {sortSlice};