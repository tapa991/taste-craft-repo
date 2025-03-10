import React from "react";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 2rem;
  max-width: 50rem;
  height: 50rem;
  margin-bottom: 1rem;
`;

export default function RecipePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Recipe Content */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Chocolate Cake
        </h1>

        {/* Recipe Image */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-8">
          <Image src="/cakeHolder.jpg" alt="Apple Pie" />
        </div>

        {/* Instructions */}
        <h2 className="text-xl font-semibold mb-4">Instructions:</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>
    </div>
  );
}
