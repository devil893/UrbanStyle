"use client"
import { Fragment, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const menButtonRef = useRef(null)

  return (
    <div className="bg-white">
      {/* Mobile Menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-black/25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative flex w-full max-w-xs flex-col bg-white shadow-xl">
            <div className="px-4 pt-5 pb-2 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="-m-2 p-2 text-gray-400"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 w-full max-w-xs ml-4">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 bg-transparent border-none focus:ring-0 text-sm w-full"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="border-b border-gray-200 px-4 py-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Men</h3>
                <div className="grid grid-cols-2 gap-4">
                  {navigation.categories[0].sections[0].items.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group block text-center hover:bg-gray-100 p-2 rounded-md transition"
                      onClick={() => setOpen(false)}
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="h-24 w-full object-cover rounded-md mx-auto group-hover:scale-105 transition-transform"
                      />
                      <p className="mt-2 text-sm font-medium text-gray-800">{item.name}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-200 px-4 py-6">
                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="block py-2 text-gray-900 font-medium hover:bg-gray-50 rounded-md px-2"
                    onClick={() => setOpen(false)}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-4">
              <Link to="/login" className="block text-sm text-gray-700 hover:text-gray-900 mb-2" onClick={() => setOpen(false)}>
                Sign in
              </Link>
              <Link to="/register" className="block text-sm text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
                Create account
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Header */}
      <header className="fixed top-0 inset-x-0 bg-white z-50 shadow-sm">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white">
          Get free delivery on orders over PKR 20,000
        </p>

        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="lg:hidden text-gray-400 p-2"
              >
                <Bars3Icon className="h-6 w-6" />
              </button>

              <div className="flex items-center">
                <Link to="/" className="text-2xl font-extrabold tracking-wide text-indigo-600">
                  Urban<span className="text-gray-900">Style</span>
                </Link>
              </div>

              <PopoverGroup className="hidden lg:flex space-x-8">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <PopoverButton ref={menButtonRef} className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Men
                        <ChevronDownIcon
                          className={`ml-1 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </PopoverButton>
                      <PopoverPanel className="absolute z-10 w-screen max-w-md mt-2 bg-white shadow-lg ring-1 ring-black/5 rounded-lg p-6">
                        <div className="grid grid-cols-2 gap-4">
                          {navigation.categories[0].sections[0].items.map((item) => (
                            <div
                              key={item.name}
                              className="text-center group cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                menButtonRef.current?.click();
                                setTimeout(() => {
                                  navigate(item.href);
                                }, 50);
                              }}
                            >
                              <img
                                src={item.imageSrc}
                                className="w-24 h-24 object-cover mx-auto rounded-md group-hover:scale-105 transition"
                                alt={item.name}
                              />
                              <p className="mt-2 text-sm font-medium text-gray-800 group-hover:text-indigo-600">
                                {item.name}
                              </p>
                            </div>
                          ))}
                        </div>
                      </PopoverPanel>
                    </>
                  )}
                </Popover>

                {navigation.pages.map((page) => (
                  <Link
                    key={page.name}
                    to={page.href}
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    {page.name}
                  </Link>
                ))}
              </PopoverGroup>

              <div className="flex items-center space-x-4">
                <Link to="/login" className="hidden lg:block text-sm text-gray-700 hover:text-gray-900">Sign in</Link>
                <span className="hidden lg:inline h-6 w-px bg-gray-200" />
                <Link to="/register" className="hidden lg:block text-sm text-gray-700 hover:text-gray-900">Create account</Link>

                <div className="hidden lg:flex items-center">
                  <img
                    src="https://flagcdn.com/w40/pk.png"
                    alt="Pakistan"
                    className="h-4 w-6 rounded-sm object-cover"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">PKR</span>
                </div>

                <Link to="/search" className="text-gray-400 hover:text-gray-600">
                  <MagnifyingGlassIcon className="h-6 w-6" />
                </Link>

                <Link to="/cart" className="flex items-center text-gray-700 hover:text-gray-900">
                  <ShoppingBagIcon className="h-6 w-6" />
                  <span className="ml-1 text-sm">0</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="h-[calc(2.5rem+4rem)]" />
    </div>
  )
}
