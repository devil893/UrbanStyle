"use client";
import { Fragment, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Pagination,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import products from "../../data";
import ProductCard from "./ProductCard";
import { filters, singleFilter, sortOptions } from "./FilterData";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const navigate = useNavigate();
  const { category, subcategory } = useParams();
  const location = useLocation();

  // Filter products based on URL params
  const filteredProducts = products.filter(product => {
    if (subcategory) {
      return product.category.toLowerCase() === category.toLowerCase() && 
             product.subcategory.toLowerCase() === subcategory.toLowerCase();
    } else if (category) {
      return product.category.toLowerCase() === category.toLowerCase();
    }
    return true;
  });

  const handleSortChange = (value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("sort", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleFilter = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);
    let filterValues = searchParams.getAll(sectionId);

    if (filterValues.length > 0 && filterValues[0].split(",").includes(value)) {
      filterValues = filterValues[0]
        .split(",")
        .filter((item) => item !== value);
      if (filterValues.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      searchParams.set(sectionId, filterValues.join(","));
    }

    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            {/* ... (keep existing mobile filter dialog code) ... */}
          </Dialog>
        </Transition.Root>

        <main className="mx-auto px-4 lg:px-14">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {subcategory 
                ? `${category} / ${subcategory.replaceAll('-', ' ')}` 
                : category 
                  ? category.replaceAll('-', ' ') 
                  : 'All Products'}
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                {/* ... (keep existing sort menu code) ... */}
              </Menu>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block border rounded-md p-5">
                {/* ... (keep existing filter form code) ... */}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4">
                <div className="flex flex-wrap justify-center bg-white py-5">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}