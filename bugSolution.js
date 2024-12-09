```javascript
//Correct usage of $inc operator, ensuring the field is numeric
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
//Check for numeric field before incrementing
db.collection('myCollection').findOne({"_id":ObjectId("someId")}).then(doc => {
if(typeof doc.field === 'number'){
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
}else{
console.log("Field is not a number")
}
})
```