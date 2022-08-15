const { JSONResponse } = require('../lib/helper')
const Items = require('../models/items.model')

/**
 * ### Description
 * Get all items
 */
exports.getAllItems = async (req, res) => {
	try {
		const items = await Items.find().populate('category')
    JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}

/**
 * ### Description
 * Get an individual item
 */

exports.getItem = async (req,res) => {
  try{
    const item = await Items.findOne({_id:req.params.id}).populate('category');
    if(item == null){
      let nonExistentErr = new Error("This item is not found within the database")
      return JSONResponse.error(res, "Item does not exist" , nonExistentErr.message , 404 );
    }
    JSONResponse.success(res, 'Sucesss' , item , 200)
  }catch(error){
    JSONResponse.error(res, "Internal server Error" , error , 500)
  }




}

/**
 * ### Description
 * Creating an item
 */
exports.createItem = async (req, res) => {
	try {
		const items = await Items.create(req.body)
		JSONResponse.success(res, 'Success.', items, 200)
	} catch (error) {
		JSONResponse.error(res, "Failure handling item model.", error, 500)
	}
}


/**
 * ### Description
 * Deleting items from list
 */
exports.deleteItemsById = async (req, res) => {
	try {
		const item = await Items.findById(req.params.id)
		if (item) await item.delete()
		JSONResponse.success(res, 'Successfully deleted', item, 200)
	} catch (error) {
		JSONResponse.error(res, 'Failure handling item model.', error, 500)
	}
}

/**
 * ### Description
 * Updating items by id
 */
exports.editItemById = async (req, res) => {
  try{

    let itemToEdit = await Items.findOne({_id:req.params.id})

    if(itemToEdit == null){
      let nonExistentErr = new Error("This item is not found within the database")
      return JSONResponse.error(res, "Item does not exist" , nonExistentErr.message , 404 );
    }

     await Items.findByIdAndUpdate(req.params.id, req.body);

    JSONResponse.success(res, 'Success' , itemToEdit , 200)

  }catch(err){
    JSONResponse.error(res, 'Failure editing item model.' , err.message , 500 )
  }
}
