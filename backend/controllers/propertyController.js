const verifyToken = require("../middlewares/verifyToken");
const Property = require("../models/Property");
const Blog = require("../models/Blog");
const Review = require("../models/Review");
const Reservation = require("../models/ReservationSchema");
const User = require("../models/User");
const cloudinary = require('../utils/cloudinary')
const propertyController = require("express").Router();
const multer = require("multer");
// const upload = multer({ storage: multer.memoryStorage() });

// get all properties
propertyController.get("/getAll", async (req, res) => {
  try {
    const properties = await Property.find().populate(
      "currentOwner",
      "-password"
    );
    return res.status(200).json(properties);
  } catch (error) {
    console.error(error);
  }
});

// get featured
propertyController.get("/find/featured", async (req, res) => {
  try {
    // console.log("1122");
    const featuredProperties = await Property.find({ featured: true }).populate(
      "currentOwner",
      "-password"
    );
    // console.log(featuredProperties);
    return res.status(200).json(featuredProperties);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// get all from property-type
propertyController.get("/find", async (req, res) => {
  const type = req.query;
  let properties = [];
  try {
    if (type) {
      properties = await Property.find(type).populate("owner", "-password");
    } else {
      properties = await Property.find({});
    }

    return res.status(200).json(properties);
  } catch (error) {
    return res.status(500).json(error);
  }
});
propertyController.get("/find/types", async (req, res) => {
  try {

    const rentalType = await Property.countDocuments({ type: "rental" });
    const tokenizedType = await Property.countDocuments({ type: "tokenized" });
    const fullType = await Property.countDocuments({ type: "full" });
    return res.status(200).json({
      rental: rentalType,
      tokenized: tokenizedType,
      full: fullType,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});
// Specific users
// propertyController.get("/find/user/:name", async (req, res) => {
//   try {
//     console.log("111111111111");

//     const rentalType = await Property.countDocuments({ type: "rental" });
//     const tokenizedType = await Property.countDocuments({ type: "tokenized" });
//     const fullType = await Property.countDocuments({ type: "full" });
//     console.log("22222222222");
//     return res.status(200).json({
//       rental: rentalType,
//       tokenized: tokenizedType,
//       full: fullType,
//     });
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// });

// TODO FETCH INDIVIDUAL PROPERTY
propertyController.get("/find/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id).populate(
      "currentOwner",
      "-password"
    );

    if (!property) {
      throw new Error("No such property with that id");
    } else {
      return res.status(200).json(property);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// create estate
propertyController.post(
  "/",
  verifyToken,
  // upload.single("img"),
  async (req, res) => {
    const {
      title,
      type,
      desc,
      price,
      sqmeters,
      img,
      city,
      address,
      baths,
      document,
      rooms,
      featured,
      tokens,
    } = req.body;
    console.log("backend image>>>>>>>>>>>>.",req.body.img)

    try {
     
      console.log("backend22222222222222222222")
      const result = await cloudinary.uploader.upload(
        req.body.img,
        {
          resource_type: "image",
        },
        async (error, result) => {
          if (error) {
            console.log("Cloudinary Error:", error);
            return res.status(500).json(error);
          }
          console.log("backend333333333333333");

          const cloudinaryUrl = result.secure_url;
          console.log("cloudurlll", cloudinaryUrl);

          const newProperty = await Property.create({
            title,
            type,
            desc,
            img: cloudinaryUrl,
            price,
            sqmeters,
            city,
            address,
            baths,
            rooms,
            featured : false,
            tokens ,
            document :"",
            currentOwner: req.user.id,
          });

          return res.status(201).json(newProperty);
        }
      );
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).json(error);
    }
  }
);

// Create Blog 
// POST /blogs
propertyController.post("/blog/", verifyToken, async (req, res) => {
  const {
    title,
    category,
    technology,
    img,
    link,
    desc,
    authorinfo,
    subtitle,
    subdescription,
  } = req.body;

  try {
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(img, {
      resource_type: "image",
    });

    const cloudinaryUrl = result.secure_url;

    // Create a new Blog document
    const newBlog = await Blog.create({
      title,
      category,
      technology,
      img: cloudinaryUrl,
      link,
      desc,
      authorinfo,
      subtitle,
      subdescription,
      currentOwner: req.user.id,
    });

    return res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
propertyController.post("/review/", verifyToken, async (req, res) => {
  const {
    name,
    address,
    details,
    img,
    star,
   
  } = req.body;

  try {
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(img, {
      resource_type: "image",
    });

    const cloudinaryUrl = result.secure_url;

    // Create a new Blog document
    const newReview = await Review.create({
      name,
      address,
      details,
      star,
      img: cloudinaryUrl,
    });

    return res.status(201).json(newReview);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
propertyController.get("/getAllReviews", async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
  }
});
// create company  estate
propertyController.post(
  "/company/",
  verifyToken,
  // upload.single("img"),
  async (req, res) => {
    const {
      title,
      type,
      desc,
      price,
      sqmeters,
      img,
      city,
      address,
      baths,
      document,
      rooms,
      featured,
      tokens,
    } = req.body;
    console.log("backend image>>>>>>>>>>>>.",req.body.img)

    try {
     
      console.log("backend22222222222222222222")
      const result = await cloudinary.uploader.upload(
        req.body.img,
        {
          resource_type: "image",
        },
        async (error, result) => {
          if (error) {
            console.log("Cloudinary Error:", error);
            return res.status(500).json(error);
          }
          console.log("backend333333333333333");

          const cloudinaryUrl = result.secure_url;
          console.log("cloudurlll", cloudinaryUrl);

          const newProperty = await Property.create({
            title,
            type,
            desc,
            img: cloudinaryUrl,
            price,
            sqmeters,
            city,
            address,
            baths,
            rooms,
            featured,
            tokens ,
            document :"",
            currentOwner: req.user.id,
          });

          return res.status(201).json(newProperty);
        }
      );
    } catch (error) {
      console.log("Error:", error);
      return res.status(500).json(error);
    }
  }
);


propertyController.put("/update/:id", verifyToken, async (req, res) => {
  console.log("backend image >>>>>>>>.", req.body.img);
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    console.log("backend 22222222222222222222", property);

    // Upload the new image to Cloudinary
    if (req.body.img) {
      const cloudinaryResponse = await cloudinary.uploader.upload(
        req.body.img,
        {
          resource_type: "image",
        }
      );

      const cloudinaryUrl = cloudinaryResponse.secure_url;
      console.log("Cloudinary URL:", cloudinaryUrl);

      property.img = cloudinaryUrl;
    }

    // Update other fields if present in the request
    if (req.body.title) {
      property.title = req.body.title;
    }
    if (req.body.type) {
      property.type = req.body.type;
    }
    if (req.body.desc) {
      property.desc = req.body.desc;
    }
    if (req.body.price) {
      property.price = req.body.price;
    }
    if (req.body.sqmeters) {
      property.sqmeters = req.body.sqmeters;
    }
    if (req.body.city) {
      property.city = req.body.city;
    }
    if (req.body.address) {
      property.address = req.body.address;
    }
    if (req.body.baths) {
      property.baths = req.body.baths;
    }
    if (req.body.rooms) {
      property.rooms = req.body.rooms;
    }
    if (req.body.featured) {
      property.featured = true;
    }

    // Save the updated property
    const updatedProperty = await property.save();
    console.log("backend 333333333333333", updatedProperty);

    return res.status(200).json(updatedProperty);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json(error);
  }
});

propertyController.put("/changeowner", verifyToken, async (req, res) => {
  console.log("1111111111111111111")
  try {
    // const property = await Property.findById("646e03bb7379c7eb29aceacb");
    const property = await Property.findById(req.body._id);
    console.log("Entered",property)
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    console.log("backend 22222222222222222222", property);

   
   
    if (req.body.currentOwner) {
      property.currentOwner = req.body.currentOwner;
    }
   

    // Save the updated property
    const updatedProperty = await property.save();
    console.log("backend 333333333333333", updatedProperty);

    return res.status(200).json(updatedProperty);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json(error);
  }
});
// propertyController.put("/updatefeatured/:id", async (req, res) => {
//   console.log("1111111111111111111");
//   try {
//     const property = await Property.findById(req.params.id); // Use req.params.id to get the property ID from URL params
//     console.log("Entered", property);
//     if (!property) {
//       return res.status(404).json({ error: "Property not found" });
//     }

//     console.log("backend 22222222222222222222", property);

//     // Toggle the 'featured' property
//     property.featured = !property.featured;

//     // Save the updated property
//     const updatedProperty = await property.save();
//     console.log("backend 333333333333333", updatedProperty);

//     return res.status(200).json(updatedProperty);
//   } catch (error) {
//     console.log("Error:", error);
//     return res.status(500).json(error);
//   }
// });

propertyController.put("/changedoc", verifyToken, async (req, res) => {
  try {
    // const property = await Property.findById("646e03bb7379c7eb29aceacb");
    const property = await Property.findById(req.body._id);
    console.log("Entered",property)
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    console.log("backend 22222222222222222222", property);

   
   
    if (req.body.document) {
      property.document = req.body.document;
    }
   

    // Save the updated property
    const updatedProperty = await property.save();
    console.log("backend 333333333333333", updatedProperty);

    return res.status(200).json(updatedProperty);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json(error);
  }
});



// delete estate
// propertyController.delete("/:id", async (req, res) => {
//   const property = await Property.findByIdAndDelete(req.params.id);
   
//   if (!property) {
//     return res.status(500).json({
//       success: false,
//       message: "property not found",
//     });
//   }

//   res.status(200).json({
//     success: true,
//     message: "property deleted ",
//   });
// });
propertyController.delete("/:id", async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    return res.status(200).json(property);
  } catch (error) {
    console.error(error);
  }
});


propertyController.post("/reserveTokens", verifyToken, async (req, res) => {
  try {
    const { propertyId, userId, tokens } = req.body;

    // Check if the property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Check if there are enough tokens available for reservation
    if (property.tokens < tokens) {
      return res.status(400).json({ error: "Not enough tokens available" });
    }

    // Create a reservation
    const reservation = new Reservation({
      property: propertyId,
      user: userId,
      tokens,
    });

    // Update the property to reflect the reserved tokens
    property.reservedTokens += tokens;

    // Save the reservation and update the property
    await Promise.all([reservation.save(), property.save()]);

    return res.status(200).json({ message: "Tokens reserved successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
propertyController.get("/reserved", async (req, res) => {
  try {
    // Find all reservations and populate all fields for property and user
    const reservations = await Reservation.find()
      .populate("property") // Populate all fields for the property document
      .populate("user"); // Populate all fields for the user document

    res.status(200).json(reservations);
    console.log("Reservations", reservations)
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
propertyController.delete("/reserved/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    return res.status(200).json(reservation);
  } catch (error) {
    console.error(error);
  }
});


propertyController.put("/deductTokens/:id", verifyToken, async (req, res) => {
  try {
    console.log("innnn");
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Deduct the reserved tokens from the total tokens
    if (property.reservedTokens > 0) {
      property.tokens -= property.reservedTokens;
      property.reservedTokens = 0;

      // Retain the reserved tokens for future use
    }

    // Save the updated property
    const updatedProperty = await property.save();
    console.log("Tokens Deducted Successfully", updatedProperty);

    return res.status(200).json(updatedProperty);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json(error);
  }
});



propertyController.put("/deductPrice/:id", verifyToken, async (req, res) => {
  try {
    console.log("insiseeee")
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    // Deduct the reserved price based on the number of reserved tokens
    if (property.reservedTokens > 0) {
      const pricePerToken = property.price / property.tokens;
      property.price -= pricePerToken * property.reservedTokens;
      property.reservedTokens = 0;
    }

    // Save the updated property
    const updatedProperty = await property.save();
    console.log("Price Deducted Successfully", updatedProperty);

    return res.status(200).json(updatedProperty);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json(error);
  }
});







module.exports = propertyController;
