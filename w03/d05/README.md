# Ajaxify Reddit

There's currently a little known gem out there called [Reddit](https://www.reddit.com). The developers are swamped and need your help. They want to test out the Reddit website as a single page application. They have some starter code but haven't had a chance to go much further than that. 

## API

Luckily, to access the data for the homepage and other landing pages, all you have to do is append `.json` to the end of the URL. 

For example: 

```
// Homepage URL
https://www.reddit.com/

// API for the homepage
https://www.reddit.com/.json
```

```
// New URL
https://www.reddit.com/new/

// API for the 'new' section
https://www.reddit.com/new/.json 
```

## Deliverables 

- Replicate the list of stories for each section
- Allow the user to click the story link or image to go to the actual URL of the story
- For now, **don't** worry about giving users the ability to upvote or downvote the story

## Bonus

- Refactor your code to be more object oriented or make use of prototypes
- Refactor your code to use ES6 features like template literals and arrow functions 

