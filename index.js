var ObsClient = require("esdk-obs-nodejs");
var obsClient = new ObsClient({
  access_key_id: "AKKKKKEYYYYYYYYY", // Configure the AK.
  secret_access_key: "SECUREKEYYYYY", // Configure the SK.
  server: "https://obs.ap-southeast-2.myhuaweicloud.com", // Configure the endpoint.
});
var https = require("https");

https.get(
  "https://gatsby.itopplus.com/static/213dd8e2551f9e5bf12042e5ec399ae1/a0177/banner-pic-01.png",
  res => {
    obsClient.putObject(
      {
        Bucket: "obs-itopplus-01",
        Key: "banner.png",
        Body: res
      },
      (err, result) => {
        if (err) {
          console.error("Error-->" + err);
        } else {
          console.log("Status-->" + result.CommonMsg.Status);
        }
      }
    );
  }
);
