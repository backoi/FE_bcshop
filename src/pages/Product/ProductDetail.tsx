<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Model Kit Details | ScaleModel World</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .product-gallery {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .main-image {
            grid-column: span 4;
            height: 400px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }
        .thumbnail {
            height: 80px;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
        }
        .thumbnail:hover, .thumbnail.active {
            border-color: #3b82f6;
        }
        .add-to-cart-btn {
            transition: all 0.3s ease;
        }
        .add-to-cart-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .tab-content {
            display: none;
        }
        .tab-content.active {
            display: block;
            animation: fadeIn 0.5s ease;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .scale-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-puzzle-piece text-blue-500 text-2xl"></i>
                <h1 class="text-xl font-bold text-gray-800">ScaleModel World</h1>
            </div>
            <div class="flex items-center space-x-6">
                <a href="#" class="text-gray-600 hover:text-blue-500"><i class="fas fa-search"></i></a>
                <a href="#" class="text-gray-600 hover:text-blue-500"><i class="fas fa-user"></i></a>
                <a href="#" class="text-gray-600 hover:text-blue-500 relative">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </a>
            </div>
        </div>
        <nav class="bg-blue-600 text-white">
            <div class="container mx-auto px-4 py-2">
                <ul class="flex space-x-6">
                    <li><a href="#" class="hover:bg-blue-700 px-3 py-2 rounded">Home</a></li>
                    <li><a href="#" class="hover:bg-blue-700 px-3 py-2 rounded">Model Kits</a></li>
                    <li><a href="#" class="hover:bg-blue-700 px-3 py-2 rounded">Tools & Paints</a></li>
                    <li><a href="#" class="hover:bg-blue-700 px-3 py-2 rounded">Accessories</a></li>
                    <li><a href="#" class="hover:bg-blue-700 px-3 py-2 rounded">New Releases</a></li>
                    <li><a href="#" class="hover:bg-blue-700 px-3 py-2 rounded">Sale</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <!-- Breadcrumbs -->
    <div class="container mx-auto px-4 py-4 text-sm text-gray-600">
        <a href="#" class="hover:text-blue-500">Home</a> > 
        <a href="#" class="hover:text-blue-500">Model Kits</a> > 
        <a href="#" class="hover:text-blue-500">Military</a> > 
        <a href="#" class="hover:text-blue-500">Tanks</a> > 
        <span class="text-gray-800">Tamiya German Tiger I</span>
    </div>

    <!-- Product Section -->
    <main class="container mx-auto px-4 py-8">
        <div class="flex flex-col md:flex-row gap-8">
            <!-- Product Gallery -->
            <div class="md:w-1/2">
                <div class="product-gallery bg-white p-4 rounded-lg shadow">
                    <div class="main-image rounded-lg bg-gray-100" style="background-image: url('https://images.unsplash.com/photo-1611591437281-460914d22819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')">
                        <span class="scale-badge">1:35 Scale</span>
                    </div>
                    <div class="thumbnail rounded bg-gray-100" style="background-image: url('https://images.unsplash.com/photo-1611591437281-460914d22819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"></div>
                    <div class="thumbnail rounded bg-gray-100" style="background-image: url('https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"></div>
                    <div class="thumbnail rounded bg-gray-100" style="background-image: url('https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"></div>
                    <div class="thumbnail rounded bg-gray-100" style="background-image: url('https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"></div>
                </div>
                
                <div class="mt-6 bg-white p-4 rounded-lg shadow">
                    <h3 class="font-bold text-lg mb-3">Product Video</h3>
                    <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                        <div class="w-full h-48 flex items-center justify-center bg-gray-100">
                            <i class="fas fa-play-circle text-5xl text-blue-500"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Product Info -->
            <div class="md:w-1/2">
                <div class="bg-white p-6 rounded-lg shadow">
                    <div class="flex justify-between items-start">
                        <div>
                            <h1 class="text-2xl font-bold text-gray-800">Tamiya German Tiger I Mid Production</h1>
                            <div class="flex items-center mt-2">
                                <div class="flex text-yellow-400">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <span class="text-gray-600 ml-2">(24 reviews)</span>
                            </div>
                        </div>
                        <div class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            In Stock
                        </div>
                    </div>

                    <div class="mt-6">
                        <div class="text-3xl font-bold text-gray-900">$39.99</div>
                        <div class="text-sm text-gray-500 mt-1">+ $5.99 Shipping</div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-sm font-medium text-gray-900">Brand</h3>
                        <div class="mt-1 flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Tamiya_logo.svg/1200px-Tamiya_logo.svg.png" alt="Tamiya" class="h-8">
                            <span class="ml-2 text-gray-700">Tamiya</span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-sm font-medium text-gray-900">Scale</h3>
                        <div class="mt-1">
                            <span class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800">1:35</span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-sm font-medium text-gray-900">Parts Count</h3>
                        <div class="mt-1">
                            <span class="text-gray-700">380+ parts</span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-sm font-medium text-gray-900">Skill Level</h3>
                        <div class="mt-1">
                            <div class="flex items-center">
                                <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-blue-600 h-2.5 rounded-full" style="width: 70%"></div>
                                </div>
                                <span class="ml-2 text-gray-700">Intermediate</span>
                            </div>
                        </div>
                    </div>

                    <div class="mt-6">
                        <h3 class="text-sm font-medium text-gray-900">Quantity</h3>
                        <div class="mt-2 flex items-center">
                            <button class="bg-gray-200 px-3 py-1 rounded-l-lg" id="decrement">-</button>
                            <input type="number" value="1" min="1" class="w-16 text-center border-t border-b border-gray-300 py-1" id="quantity">
                            <button class="bg-gray-200 px-3 py-1 rounded-r-lg" id="increment">+</button>
                        </div>
                    </div>

                    <div class="mt-8 flex space-x-4">
                        <button class="add-to-cart-btn flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center">
                            <i class="fas fa-shopping-cart mr-2"></i> Add to Cart
                        </button>
                        <button class="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <i class="far fa-heart text-gray-600 text-xl"></i>
                        </button>
                    </div>

                    <div class="mt-6 flex items-center text-sm text-gray-500">
                        <i class="fas fa-shield-alt text-gray-400 mr-2"></i>
                        <span>2-year warranty included</span>
                    </div>
                </div>

                <!-- Shipping Info -->
                <div class="mt-6 bg-white p-6 rounded-lg shadow">
                    <div class="flex items-start">
                        <div class="flex-shrink-0">
                            <i class="fas fa-truck text-blue-500 text-xl"></i>
                        </div>
                        <div class="ml-3">
                            <h3 class="text-sm font-medium text-gray-900">Shipping Information</h3>
                            <div class="mt-1 text-sm text-gray-600">
                                <p>Usually ships within 1-2 business days</p>
                                <p class="mt-1">Estimated delivery: 3-5 business days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Product Tabs -->
        <div class="mt-12">
            <div class="border-b border-gray-200">
                <nav class="-mb-px flex space-x-8">
                    <button class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-blue-500 text-blue-600" data-tab="description">
                        Description
                    </button>
                    <button class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="specs">
                        Specifications
                    </button>
                    <button class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="reviews">
                        Reviews
                    </button>
                    <button class="tab-button py-4 px-1 border-b-2 font-medium text-sm border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" data-tab="manual">
                        Instruction Manual
                    </button>
                </nav>
            </div>

            <div class="bg-white p-6 rounded-b-lg shadow">
                <!-- Description Tab -->
                <div id="description" class="tab-content active">
                    <h2 class="text-xl font-bold text-gray-800 mb-4">About This Model</h2>
                    <p class="text-gray-700 mb-4">
                        The Tamiya 1/35 scale German Tiger I Mid Production is a highly detailed plastic model kit that recreates the iconic German heavy tank from World War II. This mid-production version features the distinctive features that made the Tiger I feared on the battlefield.
                    </p>
                    <p class="text-gray-700 mb-4">
                        The kit includes finely molded parts with excellent detail, including accurate road wheels, tracks, and turret details. The model features movable tracks, a rotatable turret, and an elevating gun for dynamic display options.
                    </p>
                    <h3 class="font-bold text-gray-800 mt-6 mb-2">Features:</h3>
                    <ul class="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Highly detailed 1/35 scale plastic model kit</li>
                        <li>Mid-production version with accurate details</li>
                        <li>Includes 380+ parts for maximum realism</li>
                        <li>Movable tracks and rotatable turret</li>
                        <li>Elevating main gun for dynamic posing</li>
                        <li>Includes decals for 3 different markings</li>
                        <li>Detailed commander's cupola and hatches</li>
                    </ul>
                    <div class="mt-6 grid grid-cols-2 gap-4">
                        <div>
                            <h3 class="font-bold text-gray-800 mb-2">What's in the Box:</h3>
                            <ul class="list-disc pl-5 text-gray-700 space-y-1">
                                <li>Plastic sprue with parts</li>
                                <li>Decal sheet</li>
                                <li>Instruction manual</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800 mb-2">Recommended Paints:</h3>
                            <ul class="list-disc pl-5 text-gray-700 space-y-1">
                                <li>Tamiya XF-60 Dark Yellow</li>
                                <li>Tamiya XF-63 German Grey</li>
                                <li>Tamiya XF-64 Red Brown</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Specifications Tab -->
                <div id="specs" class="tab-content">
                    <h2 class="text-xl font-bold text-gray-800 mb-4">Technical Specifications</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="font-bold text-gray-800 mb-2">Model Details</h3>
                            <table class="w-full text-sm text-gray-700">
                                <tbody>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Scale</td>
                                        <td class="py-2 text-right">1:35</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Parts Count</td>
                                        <td class="py-2 text-right">380+</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Length</td>
                                        <td class="py-2 text-right">258mm</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Width</td>
                                        <td class="py-2 text-right">95mm</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Skill Level</td>
                                        <td class="py-2 text-right">Intermediate</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h3 class="font-bold text-gray-800 mb-2">Historical Information</h3>
                            <table class="w-full text-sm text-gray-700">
                                <tbody>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Vehicle</td>
                                        <td class="py-2 text-right">Panzerkampfwagen VI Tiger I</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Type</td>
                                        <td class="py-2 text-right">Heavy Tank</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Country</td>
                                        <td class="py-2 text-right">Germany</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Period</td>
                                        <td class="py-2 text-right">World War II</td>
                                    </tr>
                                    <tr class="border-b border-gray-200">
                                        <td class="py-2 font-medium">Manufacturer</td>
                                        <td class="py-2 text-right">Henschel</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- Reviews Tab -->
                <div id="reviews" class="tab-content">
                    <h2 class="text-xl font-bold text-gray-800 mb-4">Customer Reviews</h2>
                    <div class="flex items-center mb-6">
                        <div class="flex items-center">
                            <div class="flex text-yellow-400 text-2xl">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span class="ml-2 text-gray-700 font-medium">4.5 out of 5</span>
                        </div>
                        <span class="ml-4 text-gray-500">24 reviews</span>
                    </div>

                    <div class="space-y-6">
                        <!-- Review 1 -->
                        <div class="border-b border-gray-200 pb-6">
                            <div class="flex items-center mb-2">
                                <div class="flex text-yellow-400">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <span class="ml-2 font-medium text-gray-900">Excellent Detail</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-500 mb-3">
                                <span>By John D. on August 15, 2023</span>
                            </div>
                            <p class="text-gray-700">
                                This is one of the best Tamiya kits I've built. The detail is incredible and the fit is perfect. The tracks were a bit fiddly but look amazing when completed. Highly recommend for intermediate builders.
                            </p>
                        </div>

                        <!-- Review 2 -->
                        <div class="border-b border-gray-200 pb-6">
                            <div class="flex items-center mb-2">
                                <div class="flex text-yellow-400">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                                <span class="ml-2 font-medium text-gray-900">Great Kit</span>
                            </div>
                            <div class="flex items-center text-sm text-gray-500 mb-3">
                                <span>By Sarah M. on July 22, 2023</span>
                            </div>
                            <p class="text-gray-700">
                                The detail on this model is fantastic. The instructions were clear and easy to follow. The only reason I didn't give 5 stars is that the decals were a bit fragile. Otherwise, a great build experience.
                            </p>
                        </div>
                    </div>

                    <button class="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                        Write a Review
                    </button>
                </div>

                <!-- Manual Tab -->
                <div id="manual" class="tab-content">
                    <h2 class="text-xl font-bold text-gray-800 mb-4">Instruction Manual</h2>
                    <p class="text-gray-700 mb-4">
                        Download the instruction manual for this model kit to help with your build. The manual includes step-by-step assembly instructions, painting guides, and decal placement.
                    </p>
                    <div class="bg-gray-100 p-4 rounded-lg flex items-center">
                        <i class="fas fa-file-pdf text-red-500 text-3xl mr-4"></i>
                        <div>
                            <h3 class="font-medium text-gray-900">Tamiya_Tiger_I_Mid_Production_Manual.pdf</h3>
                            <p class="text-sm text-gray-500">2.4 MB</p>
                        </div>
                        <button class="ml-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Related Products -->
        <div class="mt-16">
            <h2 class="text-2xl font-bold text-gray-800 mb-6">You May Also Like</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Product 1 -->
                <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Product" class="w-full h-48 object-contain">
                        <span class="scale-badge">1:35 Scale</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-medium text-gray-900">Tamiya German Panther G</h3>
                        <div class="mt-1 flex items-center">
                            <div class="flex text-yellow-400 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-500 text-sm ml-1">(18)</span>
                        </div>
                        <div class="mt-2 flex items-center justify-between">
                            <span class="text-lg font-bold text-gray-900">$34.99</span>
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 2 -->
                <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Product" class="w-full h-48 object-contain">
                        <span class="scale-badge">1:48 Scale</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-medium text-gray-900">Revell P-51D Mustang</h3>
                        <div class="mt-1 flex items-center">
                            <div class="flex text-yellow-400 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                            <span class="text-gray-500 text-sm ml-1">(12)</span>
                        </div>
                        <div class="mt-2 flex items-center justify-between">
                            <span class="text-lg font-bold text-gray-900">$29.99</span>
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 3 -->
                <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Product" class="w-full h-48 object-contain">
                        <span class="scale-badge">1:72 Scale</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-medium text-gray-900">Airfix Spitfire Mk.I</h3>
                        <div class="mt-1 flex items-center">
                            <div class="flex text-yellow-400 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="far fa-star"></i>
                            </div>
                            <span class="text-gray-500 text-sm ml-1">(8)</span>
                        </div>
                        <div class="mt-2 flex items-center justify-between">
                            <span class="text-lg font-bold text-gray-900">$19.99</span>
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Product 4 -->
                <div class="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1580014312479-7f0ac173d3a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Product" class="w-full h-48 object-contain">
                        <span class="scale-badge">1:35 Scale</span>
                    </div>
                    <div class="p-4">
                        <h3 class="font-medium text-gray-900">Dragon Sherman M4A3</h3>
                        <div class="mt-1 flex items-center">
                            <div class="flex text-yellow-400 text-sm">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <span class="text-gray-500 text-sm ml-1">(21)</span>
                        </div>
                        <div class="mt-2 flex items-center justify-between">
                            <span class="text-lg font-bold text-gray-900">$42.99</span>
                            <button class="text-blue-600 hover:text-blue-800">
                                <i class="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white mt-16">
        <div class="container mx-auto px-4 py-12">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-bold mb-4">ScaleModel World</h3>
                    <p class="text-gray-400">
                        Your premier destination for high-quality scale models, tools, and accessories since 2005.
                    </p>
                    <div class="mt-4 flex space-x-4">
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4">Shop</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Model Kits</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Tools & Paints</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Accessories</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">New Releases</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Sale Items</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4">Customer Service</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">FAQs</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Shipping Info</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Returns Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Track Order</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-bold mb-4">Newsletter</h3>
                    <p class="text-gray-400 mb-4">
                        Subscribe to get updates on new products and special offers.
                    </p>
                    <div class="flex">
                        <input type="email" placeholder="Your email" class="px-4 py-2 w-full rounded-l-lg text-gray-900">
                        <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-400">© 2023 ScaleModel World. All rights reserved.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" class="text-gray-400 hover:text-white">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <script>
        // Thumbnail gallery functionality
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-image');
        
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const imgUrl = thumbnail.style.backgroundImage;
                mainImage.style.backgroundImage = imgUrl;
                
                // Update active thumbnail
                thumbnails.forEach(t => t.classList.remove('active'));
                thumbnail.classList.add('active');
            });
        });

        // Quantity selector
        const quantityInput = document.getElementById('quantity');
        const incrementBtn = document.getElementById('increment');
        const decrementBtn = document.getElementById('decrement');
        
        incrementBtn.addEventListener('click', () => {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });
        
        decrementBtn.addEventListener('click', () => {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        // Tab functionality
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                
                // Update active tab button
                tabButtons.forEach(btn => {
                    btn.classList.remove('border-blue-500', 'text-blue-600');
                    btn.classList.add('border-transparent', 'text-gray-500');
                });
                button.classList.add('border-blue-500', 'text-blue-600');
                button.classList.remove('border-transparent', 'text-gray-500');
                
                // Update active tab content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Add to cart animation
        const addToCartBtn = document.querySelector('.add-to-cart-btn');
        
        addToCartBtn.addEventListener('click', () => {
            // Animation effect
            addToCartBtn.innerHTML = '<i class="fas fa-check mr-2"></i> Added to Cart';
            addToCartBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
            addToCartBtn.classList.add('bg-green-500', 'hover:bg-green-600');
            
            // Reset after 2 seconds
            setTimeout(() => {
                addToCartBtn.innerHTML = '<i class="fas fa-shopping-cart mr-2"></i> Add to Cart';
                addToCartBtn.classList.remove('bg-green-500', 'hover:bg-green-600');
                addToCartBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
            }, 2000);
        });
    </script>
</body>
</html>