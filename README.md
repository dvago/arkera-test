# Arkera Test

Arkera test fueled by VUE

The data are coming from a `mock.json` file within the data folder

## Goal
The webpage should display the table with rows sorted by a column specified in the url, i.e.:
- http://URL/city should display the table with rows ordered by the city names.
- http://URL/100+ should display the table with rows ordered by the "100+" column..

## Build Setup

``` bash
# install dependencies
npm i

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Notes

- The scaffolding comes from one of the main repo from VUE core team, has HOT reload for fast development, ES Lint in place and potential Unit test suite based on Jest **(I didn't implemented it as it was out of scope)**
- The dependecies have been tweaked to be able to implement SCSS correctly
- In dev mode you might find a repetition of CSS (it's pretty standard when a "common" scss is imported in each Component), the production build cleans up any duplicates.
- There is not so much responsiveness, however the table is visible across multiple viewports. However there is an example of how I work with responsiveness within the Header component (line 40).
- The current dependencies are facing a moderate vulnerability, however I didn't update the package as it has breaking changes and it's **out of scope**.
- An brief test on cross compatibility has been done on Safari, Firefox and Chrome (last build to date)

## Always remember:
![alt Time is golden](https://i.vimeocdn.com/video/646137606_960.jpg)
