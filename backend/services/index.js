async function read(req, res) {
    const {page} = req.params
    const limit = 10
    const skip = page*limit
    try{
        const records = await ordersModel.find().sort({"date": "desc"}).skip(skip).limit(limit);
        res.send({res:true, records:records})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function create(req, res) {

    if (!req.body) {
        return res.status(400).send({
          message: 'No Data sent',
        });
    }
    try{
        const record = new ordersModel(req.body);
        await record.save();
        res.send({res:true, newRecord:record})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
}
async function deleteOne(req, res) {
    try{
        const record = await ordersModel.findOneAndDelete( {_id: req.params.id});
        res.send({res:true, deletedData:record})

    } catch (error) {
        res.status(400).send({ res:false, error: error.message});
    }
   
}
async function edit(req, res) {
    if (!req.body) {
        return res.status(400).send({
          message: 'No Data sent',
        });
    }
    try{
        const record = await ordersModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true,useFindAndModify:false});
        
        if(record){
            res.send({res:true, newData:record})
        }else{
            return res.status(400).send({
                message: "We couldn't find this data to update",
            });
        }

    } catch (error) {
        res.status(400).send({  res:false, error: error.message});
    }
  
}

const ordersModel = require('../models');

module.exports = {read, create, deleteOne, edit}; 