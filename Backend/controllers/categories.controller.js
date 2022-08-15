const {JSONResponse} = require('../lib/helper');
const Categories = require('../models/categories.model')

/**
 * ### Description
 * Get all categories
 */

exports.getAllCategories = async (req, res) => {
  try{
    const categories = await Categories.find();
    JSONResponse.success(res, "Success" , categories , 200);
  }catch(error){
    JSONResponse.error(res, "Failure retreiving categories" , error , 500);
  }
}


/**
 * ### Description
 * Get an individual category
 */

 exports.getCategory = async (req, res) => {
  try{
    const category = await Categories.findOne({_id:req.params.id})

    if(category == null){
      let nonExistentErr = new Error("This category is not found within the database");
      return JSONResponse.error(res, "Category does not exist" , nonExistentErr.message , 404 );
    }

    JSONResponse.success(res, "Success" , category , 200);

  }catch(error){
    JSONResponse.error(res, "Failure retrieving categories" , error , 500);
  }
}


/**
 * ### Description
 * Creating an category
 */


 exports.createCategories = async (req, res) => {
  try{
    const newCategory = await Categories.create(req.body);
    JSONResponse.success(res, "Success" , newCategory , 201);
  }catch(error){
    JSONResponse.error(res, "Failure creating category" , error.message , 500);
  }
}

/**
 * ### Description
 * Deleting category from categories list
 */

 exports.deleteCategoryById = async (req, res) => {
	try {
		const category = await Categories.findById(req.params.id)
		if (category) await category.delete()
		JSONResponse.success(res, 'Successfully deleted', category, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling category model.', error, 500)
  }
}


 exports.editCategory = async (req , res) =>{
  try{
    const categoryToEdit = await Categories.findById(req.params.id);

    if(categoryToEdit == null){
      let nonExistentErr = new Error("This item is not found within the database")
      return JSONResponse.error(res, "Item does not exist" , nonExistentErr.message , 404 );
    }

    await Categories.findByIdAndUpdate(req.params.id, req.body)

    JSONResponse.success(res, "Success" , categoryToEdit , 201);
  }catch(error){
    JSONResponse.error(res, "Failure editing category" , error.message , 500);
  }
 }
