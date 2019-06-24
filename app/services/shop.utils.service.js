const categoryList = require('../models/shop.model').CATEGORY_LIST;

module.exports = {
  generateRestId: () => {
    let letters = "ABCDEFGHJKMNPQRSTUXY";
    let text = "";
    for (var i = 0; i < 5; i++) {
      text += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return '011-' + text;
  },

  formatDataCategoryWise: () => {
    let shopInventoryData = {};

    for (let i = 0; i < categoryList.length; i++) {
      if (foodCategoryList[i].subCat) {
        for (let j = 0; j < foodCategoryList[i].subCat.length; j++) {

        }
      } else {
        shopInventoryData[foodCategoryList[i].category] = '';
      }


      return shopInventoryData;
    }
  }


};