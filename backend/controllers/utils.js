


module.exports = {
  resJson
}


function resJson(res,err,data){
  if(err) res.json({success:false,data:err})
  else if(!data) res.json({success:false,data:{name:"DataMissing",message:"Data Not Found"}})
  else res.json({success:true,data:data})
}
