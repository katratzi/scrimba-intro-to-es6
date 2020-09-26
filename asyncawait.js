const photos = [];

// here we mark the function as async...so we know that we have to wait for it to finish
async function photoUpload() {
  let uploadStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      photos.push("Profile Pic");
      resolve("Photo Uploaded");
    }, 3000);
  });

  // here we say wait til the upload status is done before continuing
  // essentially await for the primise to finish
  let result = await uploadStatus;

  console.log(result);
  console.log(photos.length);
}
