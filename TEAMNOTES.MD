# Team notes
This is for maintaining communication about your team's working meetings to "ship" the project.

## Meeting notes
These are notes to be maintained PER date that you meet. What you did and what the next steps are
### Meeting Date

#### What we did:


#### What we'll do next


## Status check ins
These are dedicated status check-ins as this is a multi-week project
### Check-in 1
- We are doing [mark-the-words](https://github.com/elmsln/issues/issues/882)
- ![shitty mock-up](https://user-images.githubusercontent.com/32485432/140665102-15c1548c-80b8-4f27-a5b3-d474d2d71f26.png)
- Biggest question right now is how we are going to select words individually out of a paragraph. Heard mention of "word nodes" but aren't 100% how they work or how to use them
- Main elements would be the scaffolding, the body, the prompt, the button, and the results.
- Properties will probably be incorrect/correct for words/answers, Guessing vs checking state for button
- Slots: Prompt, Body, Button + results
- No CSS/styling concerns right now, but I'm sure that will change.
- Hover state, clicked state, check state (unineractable when checking answers)
- Prompt, body, and correct answers will need to be mapped to HAX / storybook.
### Check-in 2
- The project is currently working locally but has not been pushed to the main repo yet.
- Visually it is lacking, but overall we are on track and essentially almost done with the functionality portion.
### Check-in 3
- Project visuals in progress on local branch
- Need to refine and upgrade certain functionality (scoring, retry, editability, ect.)
### Check-in 4
- Working code has been pushed to the group repo
- Implemented functionality to exclude unwanted characters in words like periods, commas, etc.
- Currently working on the following functionalities: button to refresh; scoring; something to restrict checking more words after first attempt
- Need to work on aesthetics/visuals, prompt
