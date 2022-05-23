
Hi, my name is Roman Badeschko and this is my small React TypeScript Project for Preply

I choose React because its simple and i'm like this library for fast rendering.

## My ask to author of these requirements 
- If the names are long, then what about the layout like in this app with "Chrysanthemum", looks not good with width 375px
- There is no photo for the chrysanthemum. Which one should I put on Default? I chose Tulip.

## If i'm improve App: 
- maybe it will be good to add a button with upload more (other 2) flowers. 
- write critical css path for no layout shift. For better speed upload
- upload Fonts in app folder, then clean it. For better speed upload
- may be will be better get images url with all dat from data array []

## My decision
- By the first i chose React + Typescript for base of App.
- in tsconfig i wrote baseurl for absolute paths in App
- with CSS i used BEM
- in App.tsx i made deep copy of data array for save of original data and for future use.
- to pass data from App to FlowersBlock i chose one Object with all 6 attributes, not 6 different props. 
  It will be better if we will have not only 3 FlowersBlock but 10+
- I imported images in App instead code it as background in CSS for better loading speed
- Component FlowerBlock have no self state because we have all control in main App for opening only one block in a same time, and it is only responsible for rendering.
 it can have a self state but only in case when FlowerBlock controlling open it or no.

I have started with React so like a bonus i chose Animation and only one opened block in one time.



