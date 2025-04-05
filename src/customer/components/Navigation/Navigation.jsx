"use client"
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { 
  Bars3Icon, 
  MagnifyingGlassIcon, 
  ShoppingBagIcon, 
  XMarkIcon,
  ChevronDownIcon 
} from '@heroicons/react/24/outline'

const navigation = {
  categories: [
    {
      id: 'men',
      name: 'Men',
      sections: [
        {
          id: 'clothing',
          name: 'Shop by Category',
          items: [
            { 
              name: "Polos", 
              href: '/products/Mens Polos',
              category: 'Mens Polos',
              imageSrc: '/images/polo1.jpg'
            },
            { 
              name: "Tops", 
              href: '/products/Tops',
              category: 'Tops',
              imageSrc: '/images/top1.jpg'
            },
            { 
              name: "Shirts", 
              href: '/products/Shirts',
              category: 'Shirts',
              imageSrc: '/images/shirt1.jpg'
            },
            { 
              name: "Jeans", 
              href: '/products/Jeans',
              category: 'Jeans',
              imageSrc: '/images/jeans1.jpg'
            },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '/about' },
    { name: 'Stores', href: '/stores' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.categories[0].sections[0].items.map((item) => (
                <div key={item.name} className="flow-root">
                  <Link 
                    to={item.href} 
                    className="-m-2 flex items-center p-2 text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDownIcon className="ml-1 h-4 w-4 flex-shrink-0 text-gray-400" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <Link 
                    to={page.href} 
                    className="-m-2 block p-2 font-medium text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {page.name}
                  </Link>
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white z-50">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white">
          Get free delivery on orders over $100
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                    alt="Logo"
                  />
                </Link>
              </div>

              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  <Popover className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <PopoverButton className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 focus:outline-none">
                            Men
                            <ChevronDownIcon
                              className={`ml-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`}
                              aria-hidden="true"
                            />
                          </PopoverButton>
                        </div>

                        <PopoverPanel className="absolute inset-x-0 top-full z-10 bg-white shadow-lg">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-8">
                              {navigation.categories[0].sections[0].items.map((item) => (
                                <Link 
                                  key={item.name} 
                                  to={item.href}
                                  className="group relative text-center"
                                >
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75 h-32 w-32 mx-auto">
                                    <img
                                      src={item.imageSrc}
                                      alt={item.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <h3 className="mt-4 text-sm font-medium text-gray-900">
                                    <span className="absolute inset-0 z-10" />
                                    {item.name}
                                  </h3>
                                  <p className="mt-1 text-sm text-indigo-600">Shop now</p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </Popover>

                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link to="/register" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <Link to="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                      className="h-5 w-auto"
                      alt="Currency"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                  </Link>
                </div>

                <div className="flex lg:ml-6">
                  <Link to="/search" className="p-2 text-gray-400 hover:text-gray-500">
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </Link>
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}