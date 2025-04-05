"use client";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ProductReviewCard from "./ProductReviewCard";
import { Box, Button, Grid, LinearProgress, Rating } from "@mui/material";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import products from "../../data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState();
  const [activeImage, setActiveImage] = useState(0);
  const { productId } = useParams();
  const location = useLocation();

  // Get product from location state or find from products array
  const product = location.state?.product || 
                 products.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Button 
          variant="contained" 
          onClick={() => navigate('/')}
          className="mt-4"
        >
          Back to Home
        </Button>
      </div>
    );
  }

  // Product details data
  const productDetails = {
    name: product.title,
    price: product.price,
    discountedPrice: product.discountedPrice,
    discountPersent: product.discountPersent,
    breadcrumbs: [
      { id: 1, name: "Home", href: "/" },
      { id: 2, name: product.category || "Category", href: "#" },
    ],
    images: [
      { src: product.image, alt: product.title },
      { src: product.image, alt: `${product.title} alternate view 1` },
      { src: product.image, alt: `${product.title} alternate view 2` },
    ],
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    ],
    sizes: [
      { name: "S", inStock: true },
      { name: "M", inStock: true },
      { name: "L", inStock: true },
    ],
    description: product.description || "No description available",
    highlights: [
      "High-quality material",
      "Comfortable fit",
      "Durable construction",
    ],
    details: "Product details not specified",
  };

  const reviews = { href: "#", average: 4, totalCount: 117 };

  // Similar products filtering
  const similarProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleSetActiveImage = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {productDetails.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <span className="font-medium text-gray-500">
                {productDetails.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Product Images */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 px-4 pt-10">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={productDetails.images[activeImage].src}
                alt={productDetails.images[activeImage].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center mt-4">
              {productDetails.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleSetActiveImage(index)}
                  className={`aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] cursor-pointer ${
                    activeImage === index ? 'ring-2 ring-indigo-500' : ''
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1 mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900">
                {product.brand}
              </h1>
              <h1 className="text-lg lg:text-xl tracking-tight text-gray-900 opacity-60 pt-1">
                {product.title}
              </h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <div className="flex space-x-5 items-center text-lg lg:text-xl tracking-tight text-gray-900 mt-6">
                <p className="font-semibold">
                  PKR {productDetails.discountedPrice}
                </p>
                <p className="opacity-50 line-through">
                  PKR {productDetails.price}
                </p>
                <p className="text-green-600 font-semibold">
                  {productDetails.discountPersent}% Off
                </p>
              </div>

              {/* Size Selection */}
              <form className="mt-10">
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  </div>

                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      {productDetails.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-1 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-1 px-1 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ padding: ".8rem 2rem", marginTop: "2rem" }}
                >
                  Add To Cart
                </Button>
              </form>
            </div>

            {/* Product Description */}
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {productDetails.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {productDetails.highlights.map((highlight, index) => (
                      <li key={index} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <section className="pt-10">
            <h1 className="py-5 text-xl font-bold">Similar Products</h1>
            <HomeSectionCarousel products={similarProducts} />
          </section>
        )}
      </div>
    </div>
  );
}