import React from "react";

const MilletsCarousel = () => {
  const millets = [
    {
      name: "Finger Millet (Ragi)",
      description:
        "Extensively grown in the dry areas of India, especially southern India, and is a staple for the rural population of south India. Contains high amounts of calcium, proteins, and fiber.",
      imgUrl: "https://artimg.gympik.com/articles/wp-content/uploads/2018/03/Ragi-Finger-Millets.jpg", 
    },
    {
      name: " Pearl Millet (Bajra)",
      description:
        "Pearl millet is gluten-free and retains its alkaline properties even after being cooked. Ideal for people suffering from gluten allergy and acidity.",
      imgUrl: "https://i0.wp.com/blog.bigbasket.com/wp-content/uploads/2018/11/bajra-peral-millet-featured-image.jpg?fit=1200%2C800&ssl=1://via.placeholder.com/300x200?text=Bajra", // Replace with actual image URL
    },
    {
      name: "Proso Millet (Chena)",
      description:
        "Important minor millet grown in India. It is drought-tolerant and rich in carbohydrates and fatty acids. Reduces cholesterol levels and heart disease risk.",
      imgUrl: "https://www.agmrc.org/media/cms/Millet_Photo_98EF0E3158A9C.jpg", 
    },
    {
      name: " Foxtail Millet (Kangni)",
      description:
        "Foxtail millet, scientific name Setaria italica (synonym Panicum italicum L.), is an annual grass cultivated for human consumption. It is the most commonly grown millet species in Asia and the second most commonly planted species worldwide..",
      imgUrl: "https://5.imimg.com/data5/SELLER/Default/2022/4/UP/BY/WC/150827512/kangni-foxtail-millet-bird-seed-1000x1000.jpg", 
    },
    {
      name: "Sorghum Millet (Jowar)",
      description:
        "The plant jowar is grown for its grain, which is fed to animals and consumed by humans. It originated in northern Africa. Jowar is often an annual plant, though certain cultivars are perennial.Jowar, also known as sorghum, is a gluten-free variety of millet.",
      imgUrl: "https://cdn.shopify.com/s/files/1/1751/6601/products/Jowar_DSC4967_800x.jpg?v=1527360677", 
    },
    {
      name: "Fonio millet",
      description:
        "Compared to other common grains or pseudo-grains, fonio (Digitaria Exilis), an ancient grain native to West and Central Africa, is thought to be healthier and more sustainable. It is the simplest grain to cook, taking only a few minutes to cook and yielding a tiny grain that resembles granulated sugar. It is also incredibly forgiving.",
      imgUrl: "https://tiimg.tistatic.com/fp/1/007/544/gluten-free-and-natural-taste-olc-organic-barnyard-millet-for-cattle-feed-cooking-408.jpg", 
    },
    {
      name: "Browntop Millet",
      description:
        "India is the native home of browntop millet, especially in the arid states of Karnataka and Andhra Pradesh. Dietary fibre, found in good amounts in Browntop Millet (12%), aids in the maintenance of a healthy digestive tract. Moreover, its low glycemic index aids in the management of diabetes. Browntop millet contains serotonin, which aids in nervous system relaxation.",
      imgUrl: "https://th.bing.com/th/id/OIP.Zg3Wk4BGnLSIvhUx8myPcAHaHa?rs=1&pid=ImgDetMain", 
    },
    {
      name: "Little Millet",
      description:
        "This millet is appropriate for individuals of all ages. It is primarily used as rice, and it can be used to make any recipe that calls for regular rice. The grains are minuscule. Compared to all other millets, it cooks substantially faster. In addition to other nutrients, little millet contains nutraceutical elements like phenols, tannins, and phytates.",
      imgUrl: "https://www.naatigrains.com/image/cache/catalog/naatigrains-products/NG141/unpolished-organic-little-millet-saame-samalu-samai-kutki-chama-naturally-grown-order-now-naati-grains-1000x1000.jpg", 
    },
    {
      name: "Amaranth Millet",
      description:
        "Although amaranth is less well-known than quinoa, its time will come. This gluten-free seed, once a mainstay of the Aztec diet, also caused quite a stir in the ancient Asian culinary scene, earning it the moniker “king seed.” It’s still a fantastic plant-based protein option even though it’s not strictly speaking a complete protein.",
      imgUrl: "https://jesvil.co.in/wp-content/uploads/2023/03/amaranth-millet-seeds-1655877750-6407812.jpg", 
    },
    {
      name: "Kodo Millets",
      description:
        "The botanical name Paspalum scrobiculatum, commonly known as kodo, koda, or arke millet, is an annual plant that can withstand drought and is widely grown throughout West Africa, India, Nepal, Vietnam, the Philippines, and Indonesia.",
      imgUrl: "https://cdn.shopify.com/s/files/1/1857/6931/products/download_1200x.jpg?v=1620801274", 
    },
  
  ];

  const chunkMillets = [];
  for (let i = 0; i < millets.length; i += 3) {
    chunkMillets.push(millets.slice(i, i + 3));
  }

  return (
    <div
      id="milletsCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ width: "80%", margin: "auto", marginTop: "20px" }}
    >
      <div className="carousel-inner">
        {chunkMillets.map((milletGroup, index) => (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
            <div className="row">
              {milletGroup.map((millet, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card" style={{ marginBottom: "20px" }}>
                    <img
                      src={millet.imgUrl}
                      className="card-img-top"
                      alt={millet.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{millet.name}</h5>
                      <p className="card-text">{millet.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#milletsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#milletsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MilletsCarousel;