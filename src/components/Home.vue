<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Pokémon(an abbreviation for Pocket Monsters in Japan) is a Japanese media franchise managed by The Pokémon Company,
      a company founded by Nintendo, Game Freak, and Creatures. The franchise was created by Satoshi Tajiri in 1996, and
      is centered on fictional creatures called "Pokémon". In Pokémon, humans, known as Pokémon Trainers, catch and train
      Pokémon to battle other Pokémon for sport.
    </p>
    <p>In 1998, Nintendo spent $25 million promoting Pokémon in the United States in partnership with Hasbro, KFC, and others.
      Nintendo initially feared that Pokémon was too Japanese for Western tastes but Alfred Kahn, then CEO of 4Kids Entertainment
      convinced the company otherwise. The one who spotted Pokemon's potential in the United States was Kahn's colleague Thomas Kenney.
    </p>
    <p>In November 2005, 4Kids Entertainment, which had managed the non-game related licensing of Pokémon, announced that
      it had agreed not to renew the Pokémon representation agreement. The Pokémon Company International oversees all
      Pokémon licensing outside Asia. In 2006, the franchise celebrated its tenth anniversary.
    </p>
    <p>In 2016, the Pokémon Company celebrated Pokémon's 20th anniversary by airing an ad during Super Bowl 50 in January and
      re-releasing the first Pokémon video games 1996 Game Boy games Pokémon Red, Green (only in Japan), and Blue,
      and the 1998 Game Boy Color game Pokémon Yellow for the Nintendo 3DS on February 26, 2016.
    </p>
    <p>The mobile augmented reality game Pokémon Go was released in July 2016. The first live-action film in the franchise,
      Pokémon Detective Pikachu, based on the 2018 Nintendo 3DS spin-off game Detective Pikachu, was released in 2019.
      The eighth generation of core series games began with Pokémon Sword and Shield, released worldwide on the
      Nintendo Switch on November 15, 2019.
    </p>
    <p>To celebrate its 25th anniversary, the company released two additional titles for the Nintendo Switch: Pokémon
      Brilliant Diamond and Shining Pearl, remakes of the Nintendo DS Pokémon Diamond and Pearl games, on November 19,
      2021 and its "premake" Pokémon Legends: Arceus, which was subsequently released on January 28, 2022.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Take a look at the world of Pokémon'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
