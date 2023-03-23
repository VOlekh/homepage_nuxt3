<template>
  <footer class="bg-slate-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div
      class="mx-auto max-w-md py-12 px-4 sm:max-w-lg sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8 lg:pt-24 lg:pb-16"
    >
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8 xl:col-span-1">
          <div class="flex items-start">
            <div class="flex justify-start">
              <NuxtLink to="/">
                <span class="sr-only">VOLEKH</span>
                <img
                  class="h-8 w-auto sm:h-10 text-gray-400 hover:-rotate-90 hover:text-gray-300"
                  fill="currentColor"
                  src="/logovo_35_35_small_gray_400.svg"
                  alt="logo"
                />
              </NuxtLink>
            </div>
            <div class="flex justify-start">
              <NuxtLink
                to="/"
                class="mt-2 ml-2 text-base font-medium text-gray-400 hover:text-gray-300"
              >
                Valentina Olekhnovich
              </NuxtLink>
            </div>
          </div>
          <div class="mt-12 border-t border-gray-700 pt-8">
            <p class="text-base uppercase text-gray-400">
              Web Developer: JavaScript, HTML, CSS, React, Redux, Git, Node.js
              and Vue.js.
            </p>
          </div>
          <div class="flex space-x-6">
            <NuxtLink
              to="https://www.linkedin.com/in/valentina-olekhnovich-8b7483108/"
              class="text-gray-400 hover:text-gray-300"
            >
              <span class="sr-only">LinkedIn</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M21.1429 0H2.85714C1.28 0 0 1.28 0 2.85714V21.1429C0 22.72 1.28 24 2.85714 24H21.1429C22.72 24 24 22.72 24 21.1429V2.85714C24 1.28 22.72 0 21.1429 0ZM7.42857 9.14286V20H4V9.14286H7.42857ZM4 5.98286C4 5.18286 4.68571 4.57143 5.71429 4.57143C6.74286 4.57143 7.38857 5.18286 7.42857 5.98286C7.42857 6.78286 6.78857 7.42857 5.71429 7.42857C4.68571 7.42857 4 6.78286 4 5.98286ZM20 20H16.5714C16.5714 20 16.5714 14.7086 16.5714 14.2857C16.5714 13.1429 16 12 14.5714 11.9771H14.5257C13.1429 11.9771 12.5714 13.1543 12.5714 14.2857C12.5714 14.8057 12.5714 20 12.5714 20H9.14286V9.14286H12.5714V10.6057C12.5714 10.6057 13.6743 9.14286 15.8914 9.14286C18.16 9.14286 20 10.7029 20 13.8629V20Z"
                  clip-rule="evenodd"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="https://github.com/VOlekh"
              class="text-gray-400 hover:text-gray-300"
            >
              <span class="sr-only">GitHub</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2772 21.5821 21.7437 19.4881C23.2101 17.3942 23.9993 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="https://twitter.com/val_cody_jam"
              class="text-gray-400 hover:text-gray-300"
            >
              <span class="sr-only">Twitter</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M24 2.84684C23.1174 3.32792 22.1693 3.65297 21.1726 3.79989C22.201 3.0429 22.9704 1.85148 23.3373 0.447947C22.371 1.15395 21.3135 1.6509 20.2107 1.91719C19.4691 0.943152 18.4868 0.297546 17.4164 0.0806033C16.3459 -0.13634 15.2472 0.0875171 14.2907 0.71742C13.3343 1.34732 12.5737 2.34803 12.127 3.56417C11.6803 4.78031 11.5725 6.14385 11.8203 7.44309C9.86244 7.32216 7.94711 6.69618 6.19863 5.60576C4.45016 4.51535 2.90761 2.98487 1.6711 1.11366C1.2483 2.0108 1.0052 3.05097 1.0052 4.15875C1.00473 5.15601 1.20437 6.13799 1.58641 7.01757C1.96846 7.89715 2.52109 8.64713 3.19528 9.20098C2.4134 9.17037 1.64877 8.91049 0.965031 8.44295V8.52096C0.964952 9.91965 1.35827 11.2753 2.07823 12.3579C2.7982 13.4405 3.80048 14.1833 4.915 14.4603C4.18968 14.7018 3.42923 14.7374 2.69109 14.5644C3.00555 15.7678 3.61807 16.8203 4.44291 17.5742C5.26776 18.3282 6.26363 18.7461 7.29111 18.7692C5.5469 20.4535 3.39282 21.3672 1.17537 21.3632C0.782575 21.3633 0.39011 21.3351 0 21.2786C2.25083 23.0589 4.87097 24.0037 7.5469 24C16.6053 24 21.5573 14.7711 21.5573 6.76698C21.5573 6.50694 21.552 6.24429 21.5425 5.98425C22.5057 5.12738 23.3372 4.0663 23.9979 2.85074L24 2.84684Z"
                />
              </svg>
            </NuxtLink>

            <NuxtLink
              to="https://www.facebook.com/valentina.olekhnovich"
              class="text-gray-400 hover:text-gray-300"
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M21.1429 0H2.85714C1.28 0 0 1.28 0 2.85714V21.1429C0 22.72 1.28 24 2.85714 24H21.1429C22.72 24 24 22.72 24 21.1429V2.85714C24 1.28 22.72 0 21.1429 0ZM18.8571 8.57143H17.7143C16.4914 8.57143 16 8.85714 16 9.71429V11.4286H18.8571L18.2857 14.2857H16V22.8571H13.1429V14.2857H10.8571V11.4286H13.1429V9.71429C13.1429 7.42857 14.2857 5.71429 16.5714 5.71429C18.2286 5.71429 18.8571 6.28571 18.8571 6.28571V8.57143Z"
                  clip-rule="evenodd"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>

        <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <NuxtLink
                to="/"
                class="text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-300"
                >Home</NuxtLink
              >
            </div>
            <div class="mt-12 md:mt-0">
              <NuxtLink
                to="/about"
                class="text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-300"
                >About</NuxtLink
              >
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <NuxtLink
                to="/contact"
                class="text-sm font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-300"
                >Contact</NuxtLink
              >
            </div>
            <div class="mt-12 md:mt-0">
              <a
                href="/valentina.olekhnovich.cv.pdf"
                download
                class="whitespace-nowrap hover:text-gray-00 -mt-2 inline-flex items-center justify-end border border-gray-400 bg-slate-800 px-4 py-2 text-base font-medium text-gray-400 shadow-sm hover:bg-slate-700 hover:text-gray-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-700 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; 2023 V O L E K H. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script></script>
