
# GitHub User Search

This project is a coding exercise for This Dot. It is a simple tool that allows a user to query GitHub's public API to return all users based on a query string.


In this exercise I tried to give you a little glimpse of different aspects within my skillset. I'll give a brief explanation of why I did what I did in certain areas.

I tried not to over-engineer or go too far outside the scope of the exercise while still giving you a general idea of what I am capable of. I did this by sprinkling in a little bit of everything.

#### I Used TailwindCSS & CSS
I prefer to use a mix of my own custom CSS and TailwindCSS for the sake of speed, simplicity and customizability. I included my own CCS in order to show that I indeed can write my own CSS, but prefer to use TailwindCSS for speed.

I included TailwindCSS moreso to show that I am capable of using such libraries to increase my productivity.

#### Testing
I have never tested before, but I wanted to show you, and myself, that I'm capable of it. I am proud of what I achieved in my tests because testing for me has generally been where I've lacked the most in my developer skillset.

I used this exercise to learn how to get started with testing using Jest and React Testing Library which I will now implement in my current, future and past products.

#### Code I Borrowed & Libraries Used
For **pagination**, I used React-paginate. I've used this in past projects and it works well-enough so I included it for simplicity and to avoid reinventing a large wheel.

The other piece of code I borrowed is the Spinner found in **components/Spinner**. It's a CSS spinner that I used to show a loading state. I included where I found it.

The rest of the project is code I wrote aside from Create-React-App boilerplate.

#### What I'd Improve
My tests are not complete. I had a hard time testing the <IndexPage/> component because of the debounce methodology I used to avoid GitHub's rate limiting. I couldn't figure out how to properly test that when a user types in the search field, results are displayed eventually.

I'd improve:
- The design
- Extend search capabilities to repos, gists, etc.
- My test coverage

## Links
**Repo**: https://github.com/tyrelchambers/this-dot-exercise

**Site**: https://jolly-goldberg-76884f.netlify.app/
## Features

- Search GitHub for users
- Links to each user
- Displays handy information of each user


  
## Tech Stack

**Client:** React (Create React App), TailwindCSS, FontAwesome


  