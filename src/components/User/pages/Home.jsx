import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import RecipeCard from "../components/RecipeCard";
import WebsiteCard from "../components/WebsiteCard";
import YouTubeCard from "../components/YouTubeCard";
import MilletsCarousel from "../components/MilletsCarousel";
import Footer from "../components/Footer";
import ApplicationPortal from "../components/ApplicationPortal";
import SocialMediaJoin from "../components/SocialMediaJoin";

const recipes = [
  {
    id: 1,
    name: "Millet Pancakes",
    image: "/images/pancakes.jpg",
  },
  {
    id: 2,
    name: "Millet Salad",
    image: "/images/salad.jpg",
  },
  {
    id: 3,
    name: "Millet Khichdi",
    image: "/images/khichadi.jpg",
  },
];

const Home = () => {
  const websites = [
    {
      id: 1,
      title: "Millets Info Portal",
      url: "https://example.com/millets",
      previewImage: "/images/millets-info-preview.jpg",
    },
    {
      id: 2,
      title: "Healthy Millet Recipess",
      url: "https://example.com/recipes",
      previewImage: "/images/recipes-preview.jpg",
    },
    {
      id: 3,
      title: "Millet Farming Guide",
      url: "https://example.com/farming",
      previewImage: "/images/farming-preview.jpg",
    },
  ];
  const videos = [
    {
      id: 1,
      title: "IHow to Make #Rajasthani Special #Choorma with Millets",
      description: "Learn about the benefits of millets and their impact on health and the environment.",
      videoId: "D8gvBYgBSnE", // Replace with your video ID
    },
    {
      id: 2,
      title: "How to Make #Navratri #Bruschetta ",
      description: "Discover tasty and healthy millet recipes for your everyday meals.",
      videoId: "49mppzWhlqE", // Replace with your video ID
    },
    {
      id: 3,
      title: "Chicken Recipe with #Millets by Chef Shridula",
      description: "Explore sustainable millet farming techniques and practices.",
      videoId: "kMtfK29pr5g", // Replace with your video ID
    },
  ];

  const handleViewRecipe = (recipeName) => {
    alert(`You clicked on ${recipeName}`);
  };

  return (
    <>
    <Navbar />
    <div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Welcome to Millet Portal</h1>
      </div>

      {/* Carousel Section */}
      <Carousel />

      {/* Introduction Section */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4 text-center text-primary">Introduction to Millets</h2>
            <p className="lead text-justify">
              Millets have been an integral part of our diet for centuries. In addition to a plethora
              of health benefits, millets are also good for the environment with low water & input
              requirement. With the aim to create awareness and increase production & consumption of
              millets, United Nations, at the behest of the Government of India, declared 2023 the
              International Year of Millets. To commemorate this, Milletinfo portal is hosting
              various interactive activities around Millets.
            </p>
          </div>
        </div>

        {/* Recipe Cards Section */}
        <h3 className="mb-4 text-center text-primary">Recipes Of Day</h3>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ marginTop: "20px" }}
        >
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              image={recipe.image}
              name={recipe.name}
              onViewClick={() => handleViewRecipe(recipe.name)}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-center my-4">Types of Millets</h2>
        <MilletsCarousel />
      </div>

      <div className="container">
        <h2 className="mb-4 text-center text-primary">Government Website for Millets</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {websites.map((website) => (
            <WebsiteCard
              key={website.id}
              title={website.title}
              url={website.url}
              previewImage={website.previewImage}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <h2 className="text-center my-4">Millet Video Gallery</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {videos.map((video) => (
            <YouTubeCard
              key={video.id}
              title={video.title}
              description={video.description}
              videoId={video.videoId}
            />
          ))}
        </div>
      </div>

      <ApplicationPortal />
      <SocialMediaJoin />
      <Footer />
    </div>
  </>
);
};

export default Home;