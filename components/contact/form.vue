<template>
  <div class="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-16">
    <div class="relative max-w-xl mx-auto">
      <!-- Contact form -->
      <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
        <h3 class="class=mt-4 text-lg uppercase text-gray-500 sm:mt-3">
          Send a message
        </h3>
        <div class="mt-12 border-t border-gray-700 pt-8"></div>
        <form
          ref="form"
          @submit.prevent="sendEmail"
          class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div>
            <label for="name" class="class=mt-4 text-lg text-gray-500 sm:mt-3"
              >Name</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="name"
                v-model="name"
                id="name"
                autocomplete="given-name"
                class="text-slate-800 border border-slate-200 block w-full py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label for="email" class="class=mt-4 text-lg text-gray-500 sm:mt-3"
              >Email</label
            >
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="email"
                type="email"
                autocomplete="email"
                class="text-slate-800 border border-slate-200 block w-full py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <label
              for="subject"
              class="class=mt-4 text-lg text-gray-500 sm:mt-3"
              >Subject</label
            >
            <div class="mt-1">
              <input
                id="subject"
                name="subject"
                v-model="subject"
                type="text"
                class="text-slate-800 border border-slate-200 block w-full py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              />
            </div>
          </div>

          <div class="sm:col-span-2">
            <div class="flex justify-between">
              <label
                for="message"
                class="class=mt-4 text-lg text-gray-500 sm:mt-3"
                >Message</label
              >
              <span
                id="message-max"
                class="class=mt-4 text-sm text-gray-500 sm:mt-3"
                >Max. 500 characters</span
              >
            </div>
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                v-model="message"
                rows="4"
                class="text-slate-800 border border-slate-200 block w-full py-3 px-4 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                aria-describedby="message-max"
              ></textarea>
            </div>
          </div>

          <div class="sm:col-span-2 sm:flex sm:justify-end">
            <div class="m-8">
              <input
                type="submit"
                value="Send"
                class="whitespace-nowrap mt-4 inline-flex w-36 items-center justify-center border border-white bg-slate-800 px-4 py-2 text-base font-medium uppercase text-white shadow-sm hover:bg-slate-700 hover:text-gray-500"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_kvzv3iw",
          "template_r3evzsx",
          e.target,
          "VtH4UYu0hF5AqMiZd",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }

      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>
