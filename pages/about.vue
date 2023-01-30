<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="
              sm:text-3xl
              text-2xl
              font-medium
              title-font
              mb-4
              text-gray-900
            "
          >
            About Company
          </h1>
        </div>
        <div class="lg:w-4/6 mx-auto">
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div
                class="
                  w-20
                  h-20
                  rounded-full
                  inline-flex
                  items-center
                  justify-center
                  bg-gray-200
                  text-gray-400
                "
              >
                <img
                  src="https://avatars.githubusercontent.com/u/35134207?v=4"
                  class="rounded-full"
                />
              </div>
              <div
                class="flex flex-col items-center text-center justify-center"
              >
                <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">
                  Kiran Sai Subramanyam K
                </h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base">
                  Founder, Full Stack Software Engineer &amp; Managing Director
                </p>
              </div>
            </div>
            <div
              class="
                sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l
                border-gray-200
                sm:border-t-0
                border-t
                mt-4
                pt-4
                sm:mt-0
                text-center
                sm:text-left
              "
            >
              <p class="leading-relaxed text-lg mb-4">
                Sai started the company in 2017 to bring innovative solutions to
                businesses and startups.
                <br />
                <br />

                Sai started as a freelancer and acquired knowledge and expertise
                in the field. He helps startups turn their ideas into reality,
                working with clients globally. He is a top-rated freelancer on
                Upwork and has a vision to expand the team, solving problems
                innovatively together.
                <br />
                <br />

                With his experience and skills, he has become a sought-after
                resource for startups and businesses looking to bring their
                projects to life. He takes a hands-on approach to every project,
                working closely with clients to understand their needs and
                develop solutions that meet their unique requirements. His
                commitment to quality and customer satisfaction has earned him a
                reputation as a reliable and trustworthy professional. His
                ability to work with diverse clients has made him a valuable
                asset to any team. Whether he is leading a project or working
                with others, he brings a passion for innovation and a desire to
                push the boundaries of what is possible, making him a valuable
                asset to any organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "marketing",
});
</script>