import { useState } from "react";

const ProductTabSelect = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="shadow-lg rounded-lg">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "description"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "specs"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("specs")}
          >
            Specifications
          </button>
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "reviews"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === "manual"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("manual")}
          >
            Instruction Manual
          </button>
        </nav>
      </div>

      <div className="bg-white p-6 rounded-b-lg shadow">
        {/* Description Tab */}
        <div
          id="description"
          className={`tab-content ${
            activeTab === "description" ? "block" : "hidden"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            About This Model
          </h2>
          <p className="text-gray-700 mb-4">
            The Tamiya 1/35 scale German Tiger I Mid Production is a highly
            detailed plastic model kit that recreates the iconic German heavy
            tank from World War II. This mid-production version features the
            distinctive features that made the Tiger I feared on the
            battlefield.
          </p>
          <p className="text-gray-700 mb-4">
            The kit includes finely molded parts with excellent detail,
            including accurate road wheels, tracks, and turret details. The
            model features movable tracks, a rotatable turret, and an elevating
            gun for dynamic display options.
          </p>
          <h3 className="font-bold text-gray-800 mt-6 mb-2">Features:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Highly detailed 1/35 scale plastic model kit</li>
            <li>Mid-production version with accurate details</li>
            <li>Includes 380+ parts for maximum realism</li>
            <li>Movable tracks and rotatable turret</li>
            <li>Elevating main gun for dynamic posing</li>
            <li>Includes decals for 3 different markings</li>
            <li>Detailed commander's cupola and hatches</li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                What's in the Box:
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Plastic sprue with parts</li>
                <li>Decal sheet</li>
                <li>Instruction manual</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Recommended Paints:
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Tamiya XF-60 Dark Yellow</li>
                <li>Tamiya XF-63 German Grey</li>
                <li>Tamiya XF-64 Red Brown</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications Tab */}
        <div
          id="specs"
          className={`tab-content ${
            activeTab === "specs" ? "block" : "hidden"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Model Details</h3>
              <table className="w-full text-sm text-gray-700">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Scale</td>
                    <td className="py-2 text-right">1:35</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Parts Count</td>
                    <td className="py-2 text-right">380+</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Length</td>
                    <td className="py-2 text-right">258mm</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Width</td>
                    <td className="py-2 text-right">95mm</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Skill Level</td>
                    <td className="py-2 text-right">Intermediate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">
                Historical Information
              </h3>
              <table className="w-full text-sm text-gray-700">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Vehicle</td>
                    <td className="py-2 text-right">
                      Panzerkampfwagen VI Tiger I
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Type</td>
                    <td className="py-2 text-right">Heavy Tank</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Country</td>
                    <td className="py-2 text-right">Germany</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Period</td>
                    <td className="py-2 text-right">World War II</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Manufacturer</td>
                    <td className="py-2 text-right">Henschel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Reviews Tab */}
        <div
          id="reviews"
          className={`tab-content ${
            activeTab === "reviews" ? "block" : "hidden"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center mb-6">
            <div className="flex items-center">
              <div className="flex text-yellow-400 text-2xl">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <span className="ml-2 text-gray-700 font-medium">
                4.5 out of 5
              </span>
            </div>
            <span className="ml-4 text-gray-500">24 reviews</span>
          </div>

          <div className="space-y-6">
            {/* Review 1 */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span className="ml-2 font-medium text-gray-900">
                  Excellent Detail
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>By John D. on August 15, 2023</span>
              </div>
              <p className="text-gray-700">
                This is one of the best Tamiya kits I've built. The detail is
                incredible and the fit is perfect. The tracks were a bit fiddly
                but look amazing when completed. Highly recommend for
                intermediate builders.
              </p>
            </div>

            {/* Review 2 */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <span className="ml-2 font-medium text-gray-900">
                  Great Kit
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <span>By Sarah M. on July 22, 2023</span>
              </div>
              <p className="text-gray-700">
                The detail on this model is fantastic. The instructions were
                clear and easy to follow. The only reason I didn't give 5 stars
                is that the decals were a bit fragile. Otherwise, a great build
                experience.
              </p>
            </div>
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
            Write a Review
          </button>
        </div>

        {/* Manual Tab */}
        <div
          id="manual"
          className={`tab-content ${
            activeTab === "manual" ? "block" : "hidden"
          }`}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Instruction Manual
          </h2>
          <p className="text-gray-700 mb-4">
            Download the instruction manual for this model kit to help with your
            build. The manual includes step-by-step assembly instructions,
            painting guides, and decal placement.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg flex items-center">
            <i className="fas fa-file-pdf text-red-500 text-3xl mr-4"></i>
            <div>
              <h3 className="font-medium text-gray-900">
                Tamiya_Tiger_I_Mid_Production_Manual.pdf
              </h3>
              <p className="text-sm text-gray-500">2.4 MB</p>
            </div>
            <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductTabSelect;
