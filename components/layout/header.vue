<template>
  <header>
    <Popover class="relative bg-slate-800">
      <div
        class="flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start">
          <NuxtLink to="/">
            <span class="sr-only">VOLEKH</span>
            <img
              class="h-8 w-auto sm:h-10 hover:-rotate-90"
              src="/logovo_35_35_small.svg"
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
          <PopoverButton
            type="button"
            class="inline-flex items-center justify-center border border-white p-2 text-white hover:bg-slate-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-800"
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
          </PopoverButton>
        </div>
        <PopoverGroup
          class="hidden items-center justify-end md:flex md:flex-1 lg:w-0"
        >
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

          <a
            href="/valentina.olekhnovich.cv.pdf"
            download
            class="whitespace-nowrap ml-8 inline-flex items-center justify-center border border-white bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700"
          >
            Download CV
          </a>
        </PopoverGroup>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div
            class="divide-y-2 divide-gray-50 bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div class="flex items-center justify-between">
                  <NuxtLink
                    to="/"
                    class="whitespace-nowrap mr-4 inline-flex items-center justify-center border border-white bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-800"
                  >
                    V O L E K H
                  </NuxtLink>

                  <NuxtLink to="/">
                    <span class="sr-only">VOLEKH</span>
                    <img
                      class="h-8 w-auto sm:h-10 text-white hover:-rotate-90 hover:text-gray-300"
                      fill="currentColor"
                      src="/logovo_35_35_small.svg"
                      alt="logo"
                    />
                  </NuxtLink>
                </div>
                <div class="-mr-2">
                  <PopoverButton
                    type="button"
                    class="inline-flex items-center justify-center border border-white p-2 text-gray-400 hover:bg-slate-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-800"
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
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid grid-cols-1 gap-7">
                  <NuxtLink to="/" class="-m-3 flex items-center p-3">
                    <div
                      class="ml-4 text-base font-medium text-white hover:text-gray-500"
                    >
                      Home
                    </div>
                  </NuxtLink>

                  <NuxtLink to="/about" class="-m-3 flex items-center p-3">
                    <div
                      class="ml-4 text-base font-medium text-white hover:text-gray-500"
                    >
                      About
                    </div>
                  </NuxtLink>

                  <div class="mt-6">
                    <a
                      href="/valentina.olekhnovich.cv.pdf"
                      download
                      class="whitespace-nowrap ml-8 inline-flex items-center justify-center border border-white bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-slate-700"
                    >
                      Download CV
                    </a>
                    <p
                      class="mt-6 text-center text-base font-medium text-white"
                    >
                      Have questions?
                      <NuxtLink to="/contact" class="text-gray-500 underline">
                        Contact me
                      </NuxtLink>
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";

export default {
  name: "Header",
  components: {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  },
};
</script>
