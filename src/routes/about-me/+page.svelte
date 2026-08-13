<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import UnderwaterRush from "$lib/assets/underwater_rush.png";

  const currentDate = new Date();
  const birthDate = new Date("2009/09/23");

  const age = Math.floor(
    Math.ceil(
      (Date.UTC(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
      ) -
        Date.UTC(
          birthDate.getFullYear(),
          birthDate.getMonth(),
          birthDate.getDate(),
        )) /
        (1000 * 60 * 60 * 24),
    ) / 365,
  );
</script>

<svelte:head>
  <title>About | Nilansh Sharma</title>
</svelte:head>

<div
  class="xl:mx-128 lg:mx-64 md:mx-32 sm:mx-16 mx-8 my-8 flex flex-col items-stretch gap-4 text-white text-xl"
>
  <Navbar />
  <div class="xl:text-2xl lg:text-xl md:text-lg sm:text-md text-sm font-bold text-orange-200">About Me</div>
  <div class="lg:text-lg sm:text-md text-sm">
    I'm a {age} year old from Delhi, India, really interested in what a computer
    does on the inside.
  </div>
  <div class="lg:text-lg sm:text-md text-sm">
    I started coding back in 2020, since I wanted to make minecraft mods, which
    how most people my age started taking an interest in computer science.
  </div>
  <div class="lg:text-lg sm:text-md text-sm">
    After that, I started making non-minecraft games, but didnt really make a
    real one until 2022. It was an infinite runner where you're a jellyfish
    dodging trash under the sea. Might have been subconciously inspired by
    #TeamSeas.
  </div>
  <img src={UnderwaterRush} alt="" class="w-full" />
  <div class="lg:text-lg sm:text-md text-sm">
    I've made multiple big projects in my time, including a social network,
    which had like 50 active users in its peak back in March 2025.
  </div>
  <div class="lg:text-lg sm:text-md text-sm">
    I'm currently contributing to <a
      href="https://hackclub.com"
      title=""
      target="_blank"
      rel="noopener noreferrer"
      class="text-orange-200 underline">Hack Club</a
    >. It's a pretty cool place. Check it out if you're a teenager. I'm not
    asking.
  </div>
  <div class="lg:text-lg sm:text-md text-sm">
    I do more things, yknow, not just programming. Please, I'm an interesting
    person, right? Here are more of my interests.
  </div>
  <ul class="list-disc pl-8 lg:text-lg sm:text-md text-sm">
    <li>Basketball</li>
    <li>Guitar</li>
    <li>Indie Games</li>
    <li>Indie Rock</li>
    <li>History</li>
    <li>Linguistics</li>
    <li>Quizzing</li>
    <li>Music in general</li>
  </ul>
  <div class="lg:text-lg sm:text-md text-sm">
    Yea, pretty nerdy interests, but I promise you, I'm fun in real life. I
    don't really talk about my interests, unless I am absolutely certain you
    share them, or can tolerate me yapping about them. That's pretty much it.
  </div>
  <Footer />
</div>
