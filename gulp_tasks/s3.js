const util = require('gulp-util');
const AWS = require('aws-sdk');
const gulp = require('gulp');

AWS.config.update({
  signatureVersion: 'v4'
});

const s3 = new AWS.S3();

gulp.task('cleanS3Bucket', cleanS3Bucket);

/**
 * Delete all the S3 Bucket objects contained on the argv[bucketName] bucket
 */
function cleanS3Bucket(done) {

  const objectsToDelete = [];
  const bucketName = util.env.bucketName;

  console.log(`getting list of objects in the bucket '${bucketName}'`);
  // retrieve all objects
  const listPromise = s3.listObjects({Bucket: bucketName}).promise();

  listPromise.then(data => {
    data.Contents.map(object => {
      objectsToDelete.push({Key: object.Key});
      console.log(`Object '${object.Key}' marked for deletion`);
    });

    // delete them
    deleteS3Objects(bucketName, objectsToDelete);
    done();
  }).catch((error) => {
    console.log(error);
    done();
  });
}

/**
 * Delete and logs the total number of objects deleted
 * @param bucketName
 * @param objectsToDelete
 */
const deleteS3Objects = (bucketName, objectsToDelete) => {
  if (objectsToDelete.length === 0) {
    console.log("There are not objects to delete");
    return;
  }
  console.log(`deleting objects from the bucket '${bucketName}'`);
  const promise = s3.deleteObjects({Bucket: bucketName, Delete: {Objects: objectsToDelete}}).promise();
  promise.then(() => {
    console.log(`${objectsToDelete.length} elements deleted`)
  });
};
