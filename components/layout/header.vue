<template>
  <header>
    <div class="relative bg-slate-800">
      <div
        class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start">
          <NuxtLink to="/">
            <span class="sr-only">VOLEKH</span>
            <img
              class="h-8 w-auto sm:h-10 hover:-rotate-90"
              src="logovo_35_35_small.svg"
              alt="logo"
            />
          </NuxtLink>
        </div>
        <div class="flex justify-start">
          <NuxtLink class="text-base font-medium text-white" to="/">
            Valentina Olekhnovich
          </NuxtLink>
        </div>
        <div class="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-expanded="false"
          >
            <span class="sr-only">Open menu</span>
            <!-- Heroicon name: outline/menu -->
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
          <NuxtLink
            to="/"
            class="whitespace-nowrap ml-8 text-base font-medium text-white hover:text-gray-500"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="whitespace-nowrap ml-8 text-base font-medium text-white hover:text-gray-500"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="whitespace-nowrap ml-8 text-base font-medium text-white hover:text-gray-500"
          >
            Contact
          </NuxtLink>

          <NuxtLink
            hto="valentina.olekhnovich_.cv.pdf"
            download="valentina.olekhnovich_.cv.pdf"
            class="whitespace-nowrap ml-8 inline-flex items-center justify-center border border-white bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700"
          >
            Download CV
          </NuxtLink>
        </div>
      </div>

      <!--
        Mobile menu, show/hide based on mobile menu state.
    
        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      -->
      <div
        class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="divide-y-2 divide-gray-50 bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="px-5 pt-5 pb-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center justify-between">
                <a
                  href="index.html"
                  class="whitespace-nowrap mr-4 inline-flex items-center justify-center border border-white bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm"
                >
                  V O L E K H
                </a>
                <div>
                  <img
                    class="h-8 w-auto hover:-rotate-90"
                    src="logovo_35_35_small.svg"
                    alt="VOLEKH"
                  />
                </div>
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center border border-white p-2 text-gray-400 hover:bg-slate-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span class="sr-only">Close menu</span>
                  <!-- Heroicon name: outline/x -->
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid grid-cols-1 gap-7">
                <a href="index.html" class="-m-3 flex items-center p-3">
                  <div
                    class="ml-4 text-base font-medium text-white hover:text-gray-500"
                  >
                    Home
                  </div>
                </a>

                <a href="about.html" class="-m-3 flex items-center p-3">
                  <div
                    class="ml-4 text-base font-medium text-white hover:text-gray-500"
                  >
                    About
                  </div>
                </a>

                <div class="mt-6">
                  <a
                    href="valentina.olekhnovich_.cv.pdf"
                    download="valentina.olekhnovich_.cv.pdf"
                    class="whitespace-nowrap ml-8 inline-flex items-center justify-center border border-white bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700"
                  >
                    Download CV
                  </a>
                  <p class="mt-6 text-center text-base font-medium text-white">
                    Have questions?
                    <a href="contact.html" class="text-gray-500 underline">
                      Contact me
                    </a>
                  </p>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script></script>
