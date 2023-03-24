<template>
  <div class="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
    <div class="relative">
      <div
        class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2
          class="text-base font-semibold uppercase tracking-wider text-cyan-600"
        >
          Learn
        </h2>
        <p
          class="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
        >
          Certificates and Diploma
        </p>
      </div>
      <div
        class="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
      >
        <!-- Card -->
        <div class="flex flex-col overflow-hidden shadow-lg">
          <div class="flex-shrink-0">
            <img
              class="h-48 w-full object-cover"
              src="/Udacity.jpg"
              alt="Udacity"
            />
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <p class="text-sm font-medium text-cyan-600">
                <a href="https://www.udacity.com/"> Udacity </a>
              </p>
              <ul class="list-disc p-6">
                <li class="text-xl font-semibold text-gray-900">
                  React Nanodegree Program,
                </li>
                <li class="text-xl font-semibold text-gray-900">
                  Front End Web Developer Course,
                </li>
                <li class="text-xl font-semibold text-gray-900">
                  Intro to Programming
                </li>
              </ul>
            </div>
            <div class="mt-6 flex items-center">
              <div class="ml-3">
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16"> Jan 2020 - Jun 2021 </time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 1 yr 6 mos </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Card -->
        <div class="flex flex-col overflow-hidden shadow-lg">
          <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="/MADI.jpg" alt="MADI" />
          </div>
          <div class="flex flex-1 flex-col justify-between bg-white p-6">
            <div class="flex-1">
              <p class="text-sm font-medium text-cyan-600">
                Moscow State Automobile and Road Technical Institute (State
                TechnicalUniversity) (MADI)
              </p>
              <ul class="list-disc p-6">
                <li class="text-xl font-semibold text-gray-900">
                  Engineer, Computer Science
                </li>
              </ul>
            </div>
            <div class="mt-6 flex items-center">
              <div class="ml-3">
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-16"> 2001 - 2006</time>
                  <span aria-hidden="true"> &middot; </span>
                  <span> 5 yr </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
