import React from 'react';
import Usernav from "../components/user/usernav";
import Carousel from "../components/Carousel";
import RecipeCard from "../components/RecipeCard";
import WebsiteCard from "../components/WebsiteCard";
import YouTubeCard from "../components/YouTubeCard";
import MilletsCarousel from "../components/MilletsCarousel";
import ApplicationPortal from "../components/ApplicationPortal";
import SocialMediaJoin from "../components/SocialMediaJoin";

const recipes = [
  { id: 1, name: "Millet Pancakes", image: "/images/pancakes.jpg" },
  { id: 2, name: "Millet Salad", image: "/images/salad.jpg" },
  { id: 3, name: "Millet Khichdi", image: "/images/khichdi.jpg" },
];

const User = () => {
  const websites = [
    { id: 1, title: "Millets Info Portal", url: "https://example.com/millets", previewImage: "/images/millets-info-preview.jpg" },
    { id: 2, title: "Healthy Millet Recipes", url: "https://example.com/recipes", previewImage: "/images/recipes-preview.jpg" },
    { id: 3, title: "Millet Farming Guide", url: "https://example.com/farming", previewImage: "/images/farming-preview.jpg" },
  ];

  const videos = [
    { id: 1, title: "How to Make #Rajasthani Special #Choorma with Millets", description: "Learn about the benefits of millets and their impact on health and the environment.", videoId: "D8gvBYgBSnE" },
    { id: 2, title: "How to Make #Navratri #Bruschetta", description: "Discover tasty and healthy millet recipes for your everyday meals.", videoId: "49mppzWhlqE" },
    { id: 3, title: "Chicken Recipe with #Millets by Chef Shridula", description: "Explore sustainable millet farming techniques and practices.", videoId: "kMtfK29pr5g" },
  ];

  const handleViewRecipe = (recipeName) => {
    alert(`You clicked on ${recipeName}`);
  };

  return (
    <>
      <Usernav />
      <div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h1>Welcome to Millet Portal</h1>
        </div>
        <Carousel />
        <div className="container mt-5">
          <h2 className="mb-4 text-center text-primary">Recipes of the Day</h2>
          <div className="d-flex flex-wrap justify-content-center">
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
              <WebsiteCard key={website.id} title={website.title} url={website.url} previewImage={website.previewImage} />
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
      </div>
    </>
  );
};

export default User;