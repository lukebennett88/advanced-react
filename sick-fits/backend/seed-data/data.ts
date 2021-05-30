function timestamp(): string {
  // sometime in the last 30 days
  const randomDay =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(randomDay).toISOString();
}

export const products = [
  {
    name: "Yeti Hondo",
    description: "So nice",
    status: "AVAILABLE",
    price: 3423,
    photo: {
      id: "5dfbed262849d7961377c2c0",
      filename: "hondo.jpg",
      originalFilename: "hondo.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5dfbed262849d7961377c2c0",
        version: 1_576_791_335,
        signature: "9f7d5115788b7677307a39214f9684dd827ea5f9",
        width: 750,
        height: 457,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 27_871,
        type: "upload",
        etag: "e1fdf84d5126b6ca2e1c8ef9532be5a5",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg",
        original_filename: "file",
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Airmax 270",
    description: "Great shoes!",
    status: "AVAILABLE",
    price: 5234,
    photo: {
      id: "5e2a13f0689b2835ae71d1a5",
      filename: "270-camo-sunset.jpg",
      originalFilename: "270-camo-sunset.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a13f0689b2835ae71d1a5",
        version: 1_579_815_920,
        signature: "a430b2d35f6a03dc562f6f56a474deb6810e393f",
        width: 960,
        height: 640,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 45_455,
        type: "upload",
        etag: "aebe8e9cc98ee4ad71682f19af85745b",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "KITH Hoodie",
    description: "Love this hoodie",
    status: "AVAILABLE",
    price: 23_562,
    photo: {
      id: "5e2a13ff689b2835ae71d1a7",
      filename: "kith-hoodie.jpg",
      originalFilename: "kith-hoodie.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a13ff689b2835ae71d1a7",
        version: 1_579_815_935,
        signature: "360df116020320a14845cf235b87a4a5cdc23f86",
        width: 2000,
        height: 2000,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 202_924,
        type: "upload",
        etag: "b6fbc18b196c68e2b87f51539b849e70",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Fanorak",
    description: "Super hip. Comes in a number of colours",
    status: "AVAILABLE",
    price: 252_342,
    photo: {
      id: "5e2a1413689b2835ae71d1a9",
      filename: "TNF-fanorak.png",
      originalFilename: "TNF-fanorak.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a1413689b2835ae71d1a9",
        version: 1_579_815_957,
        signature: "affd16fa20107a4d5399aab553ea77fff1c4b2ef",
        width: 1276,
        height: 1490,
        format: "png",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 2_454_948,
        type: "upload",
        etag: "ce0f36da93c60c5d4406657225206f70",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Nike Vapormax",
    description: "Kind of squeaky on some floor",
    status: "AVAILABLE",
    price: 83_456,
    photo: {
      id: "5e2a142c689b2835ae71d1ab",
      filename: "vapormax.jpg",
      originalFilename: "vapormax.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a142c689b2835ae71d1ab",
        version: 1_579_815_980,
        signature: "6dd95447407c06ba955164c4961bd4abc2fb9f4d",
        width: 1100,
        height: 735,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 183_071,
        type: "upload",
        etag: "5550566c7fab113ba32d85ed08f54faa",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Yeti Cooler",
    description: "Who spends this much on a cooler?",
    status: "AVAILABLE",
    price: 75_654,
    photo: {
      id: "5e2a143f689b2835ae71d1ad",
      filename: "coral-yeti.jpg",
      originalFilename: "coral-yeti.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a143f689b2835ae71d1ad",
        version: 1_579_815_999,
        signature: "97e8f27cdbb6a736062391b9ac3a5c689bd50646",
        width: 1300,
        height: 1144,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 286_643,
        type: "upload",
        etag: "3655bfd83998492b8421782db868c9df",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:40.526Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:40.526Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Naked and Famous Denim",
    description: "Japanese Denim, made in Canad",
    status: "AVAILABLE",
    price: 10_924,
    photo: {
      id: "5e2a145d689b2835ae71d1af",
      filename: "naked-and-famous-denim.jpg",
      originalFilename: "naked-and-famous-denim.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a145d689b2835ae71d1af",
        version: 1_579_816_030,
        signature: "76dec3670cc4a4c22723720bb94496a35945c626",
        width: 1024,
        height: 683,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 146_817,
        type: "upload",
        etag: "3d68591332785ae5273ed43b1aa91712",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579816030/sick-fits-keystone/5e2a145d689b2835ae71d1af.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:11.415Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:11.415Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Rimowa Luggage",
    description: "S T E A L T ",
    status: "AVAILABLE",
    price: 47_734,
    photo: {
      id: "5e2a147b689b2835ae71d1b1",
      filename: "rimowa.png",
      originalFilename: "rimowa.png",
      mimetype: "image/png",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a147b689b2835ae71d1b1",
        version: 1_579_816_060,
        signature: "a6161568d2d59a59e8dba9b15e705581198ea377",
        width: 800,
        height: 1004,
        format: "png",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 953_657,
        type: "upload",
        etag: "d89ab8ecc366bc63464a3eeef6ef3010",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579816060/sick-fits-keystone/5e2a147b689b2835ae71d1b1.png",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:47:41.358Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:47:41.358Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Black Hole ",
    description: "Butdoorsy",
    status: "AVAILABLE",
    price: 4534,
    photo: {
      id: "5e2a149b689b2835ae71d1b3",
      filename: "patagonia black hole.jpg",
      originalFilename: "patagonia black hole.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a149b689b2835ae71d1b3",
        version: 1_579_816_093,
        signature: "6ac148051cb4ba0227ee49fd61fa1348ab4a9870",
        width: 2000,
        height: 2000,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 515_360,
        type: "upload",
        etag: "8aed0984d37a3d12faa832860b29d24b",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579816093/sick-fits-keystone/5e2a149b689b2835ae71d1b3.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:13.812Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:13.812Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Nudie Belt",
    description: "Bick design",
    status: "AVAILABLE",
    price: 5234,
    photo: {
      id: "5e2a14b1689b2835ae71d1b5",
      filename: "nudie-belt.jpg",
      originalFilename: "nudie-belt.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a14b1689b2835ae71d1b5",
        version: 1_579_816_114,
        signature: "24f3ff4ae91dfcc8d1ddeb1a713215730e834be4",
        width: 650,
        height: 650,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 71_291,
        type: "upload",
        etag: "3a4b97ef88c550dcd6c2d399d1bc698e",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579816114/sick-fits-keystone/5e2a14b1689b2835ae71d1b5.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:34.398Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:34.398Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Goose",
    description: "Beep warm.",
    status: "AVAILABLE",
    price: 74_544,
    photo: {
      id: "5e2a14bf689b2835ae71d1b7",
      filename: "canada-goose.jpg",
      originalFilename: "canada-goose.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a14bf689b2835ae71d1b7",
        version: 1_579_816_128,
        signature: "bebf3d817e91cdbb91768e8c9c2133a78798a317",
        width: 800,
        height: 800,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 180_261,
        type: "upload",
        etag: "f9c8725f815a6873cbdc47ba3f869049",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579816128/sick-fits-keystone/5e2a14bf689b2835ae71d1b7.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:48:48.633Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:48:48.633Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: "Ultraboost",
    description: "Blacked out",
    status: "AVAILABLE",
    price: 6344,
    photo: {
      id: "5e2a14cc689b2835ae71d1b9",
      filename: "ultra-boost.jpg",
      originalFilename: "ultra-boost.jpg",
      mimetype: "image/jpeg",
      encoding: "7bit",
      _meta: {
        public_id: "sick-fits-keystone/5e2a14cc689b2835ae71d1b9",
        version: 1_579_816_141,
        signature: "18720c13b7f6d4fcde919dddb33d1c711a459c14",
        width: 565,
        height: 372,
        format: "jpg",
        resource_type: "image",
        created_at: timestamp(),
        tags: [],
        bytes: 50_754,
        type: "upload",
        etag: "44cf57f8218f135b82cfa5df0da92a49",
        placeholder: false,
        url: "http://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg",
        secure_url:
          "https://res.cloudinary.com/wesbos/image/upload/v1579816141/sick-fits-keystone/5e2a14cc689b2835ae71d1b9.jpg",
        original_filename: "file",
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:49:01.569Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:49:01.569Z',
    // createdAt_offset: '+00:00',
  },
];
