export default {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname:"macro-s3-images.s3.us-east-1.amazonaws.com",
        port:"",
        pathname: "/**",
      }
    ]
  }
};
