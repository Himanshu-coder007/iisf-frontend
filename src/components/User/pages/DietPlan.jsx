import React from 'react';
import Usernav from '../components/user/usernav';

const DietPlan = () => {
  const dietPlan = [
    {
      day: "Day 1",
      meals: {
        morning: "Warm water with lemon; 5 soaked almonds and 2 walnuts",
        breakfast: "Millet Porridge; 1 boiled egg or tofu scramble; A glass of fresh fruit juice",
        midMorning: "A small bowl of roasted makhana; Green tea or herbal tea",
        lunch: "Millet Khichdi with vegetables; A cup of curd; Mixed salad",
        evening: "Millet-based energy bar or chivda; A cup of buttermilk or coconut water",
        dinner: "Millet Roti; Dal; Steamed vegetables; A small bowl of fresh fruits",
      },
    },
    {
      day: "Day 2",
      meals: {
        morning: "Warm water with chia seeds; 5 soaked almonds",
        breakfast: "Millet Upma; A glass of fresh carrot and beetroot juice",
        midMorning: "Nuts or a small millet pancake with peanut butter",
        lunch: "Millet Pulav; A bowl of cucumber raita; Fresh salad",
        evening: "Roasted millet puffs or crackers; A cup of green tea",
        dinner: "Millet Dosa with coconut chutney; Steamed spinach or greens; A bowl of soup",
      },
    },
  ];

  return (
    <>
      <Usernav />
      <div className="container my-5">
        <h1 className="text-center mb-4">Millet-Based Diet Plan</h1>
        {dietPlan.map((dayPlan, index) => (
          <div key={index} className="card mb-4">
            <div className="card-header bg-warning text-white">
              <h4>{dayPlan.day}</h4>
            </div>
            <div className="card-body">
              {Object.entries(dayPlan.meals).map(([meal, details], idx) => (
                <p key={idx}>
                  <strong>{meal.charAt(0).toUpperCase() + meal.slice(1)}:</strong> {details}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DietPlan;