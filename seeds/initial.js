
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').del()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {joke_ID: "5001", joke: "My wife told me to stop impersonating a flamingo. I had to put my foot down.", like: 10, dislike: 1},
        {joke_ID: "5002", joke: "I went to buy some camo pants but couldn’t find any.", like: 6, dislike: 9},
        {joke_ID: "5003", joke: "I failed math so many times at school, I can’t even count.", like: 3, dislike: 3},
        {joke_ID: "5004", joke: "I used to have a handle on life, but then it broke.", like: 6, dislike: 1},
        {joke_ID: "5005", joke: "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me.", like: 3, dislike: 3},
        {joke_ID: "5006", joke: "I heard there were a bunch of break-ins over at the car park. That is wrong on so many levels.", like: 8, dislike: 1},
        {joke_ID: "5007", joke: "I want to die peacefully in my sleep, like my grandfather… Not screaming and yelling like the passengers in his car.", like: 4, dislike: 0},
        {joke_ID: "5008", joke: "When life gives you melons, you might be dyslexic.", like: 2, dislike: 5},
        {joke_ID: "5009", joke: "Don’t you hate it when someone answers their own questions? I do.", like: 9, dislike: 4},
        {joke_ID: "5010", joke: "I told him to be himself; that was pretty mean, I guess.", like: 1, dislike: 12},
        {joke_ID: "5011", joke: "I know they say that money talks, but all mine says is ‘Goodbye.’", like: 1, dislike: 19},
        {joke_ID: "5012", joke: "My father has schizophrenia, but he’s good people.", like: 1, dislike: 11},
        {joke_ID: "5013", joke: "The problem with kleptomaniacs is that they always take things literally.", like: 1, dislike: 15},
        {joke_ID: "5014", joke: "I can’t believe I got fired from the calendar factory. All I did was take a day off.", like: 1, dislike: 14},
        {joke_ID: "5015", joke: "Most people are shocked when they find out how bad I am as an electrician.", like: 1, dislike: 15},
        {joke_ID: "5016", joke: "Never trust atoms; they make up everything.", like: 1, dislike: 10},
        {joke_ID: "5017", joke: "My wife just found out I replaced our bed with a trampoline. She hit the ceiling!", like: 1, dislike: 13},
        {joke_ID: "5018", joke: "I was addicted to the hokey pokey, but then I turned myself around.", like: 1, dislike: 21},
        {joke_ID: "5019", joke: "I used to think I was indecisive. But now I’m not so sure.", like: 1, dislike: 10},
        {joke_ID: "5020", joke: "The easiest time to add insult to injury is when you’re signing someone’s cast.", like: 1, dislike: 12},
      ]);
    });
};
