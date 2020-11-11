module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('dnhvpukdu'),
        api_key: env('731936343928359'),
        api_secret: env('XgAF-P30T_IUmBAPqAm5omGGgbM'),
      },
    },
    // ...
  });


  //npm i strapi-provider-upload-cloudinary@3.2.0-beta.1