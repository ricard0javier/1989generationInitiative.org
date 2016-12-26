const util = require('gulp-util');
const AWS = require('aws-sdk');
const gulp = require('gulp');

AWS.config.update({
  signatureVersion: 'v4'
});

const s3 = new AWS.S3();

gulp.task('cleanS3Bucket', cleanS3BucketTask);
gulp.task('cloneS3BucketContent', cloneS3BucketContentTask);

function cleanS3BucketTask(done) {
  cleanBucket(util.env.bucketName);
  done();
}

function cloneS3BucketContentTask(done) {
  const fromBucketName = util.env.fromBucketName;
  const toBucketName = util.env.toBucketName;

  cleanBucket(toBucketName);
  const objects = getObjects(fromBucketName);
  copyObjects(objects, fromBucketName, toBucketName);

  done();
}

/**
 * Delete all the S3 Bucket objects contained on the argv[bucketName] bucket
 */
function getObjects(bucketName) {

  const objects = [];

  console.log(`getting list of objects in the bucket '${bucketName}'`);
  // retrieve all objects
  const listPromise = s3.listObjects({Bucket: bucketName}).promise();

  listPromise.then(data => {
    data.Contents.map(object => {
      objects.push(object.Key);
    });
  }).catch((error) => {
    console.log(error);
  });

  return objects;
}

/**
 * Deletes all the S3 Bucket objects contained on the a given bucket
 */
function cleanBucket(bucketName) {

  const objects = [];

  getObjects(bucketName).map(object => {
    objects.push({Key: object});
    console.log(`Object '${object.Key}' marked for deletion`);
  });

  // delete them
  deleteObjects(bucketName, objects);
}

/**
 * Deletes objects from the bucket
 * @param bucketName
 * @param objects
 */
const deleteObjects = (bucketName, objects) => {
  if (objects.length === 0) {
    console.log("There are not objects to delete");
    return;
  }
  console.log(`deleting objects from the bucket '${bucketName}'`);
  const promise = s3.deleteObjects({Bucket: bucketName, Delete: {Objects: objects}}).promise();
  promise.then(() => {
    console.log(`${objects.length} elements deleted`)
  });
};

/**
 * Copies all the objects from one bucket to other
 * @param objects
 * @param fromBucketName
 * @param toBucketName
 */
const copyObjects = (objects, fromBucketName, toBucketName) => {
  if (objects.length === 0) {
    console.log("There are not objects to copy");
    return;
  }
  objects.map(key => {
    const copySource = `${fromBucketName}/${key}`;
    const copyPromise = s3.copyObject({Bucket: toBucketName, Key: key, CopySource: copySource}).promise();
    copyPromise.then(() => console.log(`Object '${copySource}' copied to bucket '${toBucketName}'`));
  });
  console.log(`${objects.length} elements copied`)
};
