const Blog = require("../models/Blog");
const blogController = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const cloudinary = require("../utils/cloudinary");
const Item = require("../models/Item");
const mongoose = require("mongoose");

// Get all blogs
// get all properties
blogController.get("/getAllBlogs", async (req, res) => {
  try {
    const blogs = await Blog.find().populate(
      "currentOwner",
      "-password"
    );
    return res.status(200).json(blogs);
  } catch (error) {
    console.error(error);
  }
});

// Get a specific blog by ID
blogController.get("/detail/:id", async (req, res) => {
  try {
     const blog = await Blog.findById(req.params.id).populate(
       "currentOwner",
       "-password"
     );
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add other routes as needed

blogController.put("/update/:id", verifyToken, async (req, res) => {
  console.log("Backend image >>>>>>>>.", req.body.img);

  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    console.log("Backend 22222222222222222222", blog);

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

      blog.img = cloudinaryUrl;
    }

    // Update other fields if present in the request
    if (req.body.title) {
      blog.title = req.body.title;
    }
    if (req.body.category) {
      blog.category = req.body.category;
    }
    if (req.body.technology) {
      blog.technology = req.body.technology;
    }
    if (req.body.link) {
      blog.link = req.body.link;
    }
    if (req.body.desc) {
      blog.desc = req.body.desc;
    }
    if (req.body.authorinfo) {
      blog.authorinfo = req.body.authorinfo;
    }
    if (req.body.subtitle) {
      blog.subtitle = req.body.subtitle;
    }
    if (req.body.subdescription) {
      blog.subdescription = req.body.subdescription;
    }

    // Save the updated blog
    const updatedBlog = await blog.save();
    console.log("Backend 333333333333333", updatedBlog);

    return res.status(200).json(updatedBlog);
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json(error);
  }
});

blogController.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});






// Auction

blogController.post("/createAuction", async (req, res) => {
  try {
    const {
      title,
      location,
      image,
      highestBidValue,
      highestBidder,
      seller,
      endTime,
    } = req.body;
     const result = await cloudinary.uploader.upload(image, {
       resource_type: "image",
     });

    const cloudinaryUrl = result.secure_url;
    const item = new Item({
      title: title,
      location: location,
      image: cloudinaryUrl,
      highestBidValue: highestBidValue,
      highestBidder: highestBidder,
      seller: new mongoose.Types.ObjectId(seller),
      endTime: endTime,
    });
    await item.save();
    res.status(201).json({ msg: "Auction Created" });
  } catch (error) {
    console.error("Error creating auction:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});
blogController.get("/getAuctions", async (req, res) => {
  console.log("innnnnnnnnnnn");
  try {
    const foundAuctions = await Item.find({}).populate("seller");
    console.log(foundAuctions);
    if (foundAuctions) {
      res.status(200).json(foundAuctions);
    } else {
      res.status(404).json({ err: "no items found" });
    }
  } catch {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
blogController.delete("/delete/:id", async (req, res) => {
  try {
    const auction = await Item.findByIdAndDelete(req.params.id);
    return res.status(200).json(auction);
  } catch (error) {
    console.error(error);
  }
});
blogController.post("/updateAuction", async (req, res) => {
  const { highestBid, winningBidder, auctionID } = req.body;

  console.log(("backend entered highest bid>>>>>", highestBid));
  console.log(("backend entered Winning bid>>>>>", winningBidder));
  console.log(("backend entered Auction id>>>>>", auctionID));

  try {
    const updatedAuction = await Item.findByIdAndUpdate(
      auctionID,
      {
        highestBidder: winningBidder,
        highestBidValue: highestBid,
      },
      { new: true }
    );
    console.log(" entered>>>>>>", updatedAuction);

    if (updatedAuction) {
      console.log("Successful");
      res.status(200).json({ message: "Auction updated successfully" });
    } else {
      res.status(404).console.log("Problem with updating the auction");
    }
  } catch (e) {
    res.status(500).send({ msg: "internal server error" });
  }
});
module.exports = blogController;
