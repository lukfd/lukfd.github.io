# UST Interdisciplinary Student Research in Croatia

Written by Luca Comba for STELAR UST ITS department

This README should give you the basic understanding of how this website works and how to add new pages or contents to an already existing page.

## Website Map

```
|- indexe.html
|- excavation.html
|- publications.html
|- publications.html
|- experience.html 
|- blank.html
|----+ /js/
|    |- scrolling-nav.js
|
|----+ /images/
|    |- images for the website
|
|----+ /student_projects/
|    |- documents of the student research projects
|----+ /css/
|    |- scrolling-nav.css
|    |- style.css
|
|- README.md
```

This is the map of the pages and files that the website need to have. In general we would like to avoid to have images displayed from outside sources. The best way, is to download an image, store it in the folder images and then in the html page we can reference to that folder. The hamburger button needed a local file to operate and expand the page, so we wrote the `scrolling-nav.js` and as well `scrolling-nav.css` files. Also, all the projects that are displayed in the website are stored in the folder called student_projects. To show them in the model make sure they are PDF files, because I did not think that it is possible to view them as .pptx.

## Template of a page

The `blank.html` is an empty page. At the top of a page there should be the navigation bar, with a hamburger button that is displayed if you view the website in a smaller window that could be a phone. 

Under the *navigation bar*, where the links to the other pages and the UST logo, there is the title of the page that is called again by the rest of all other pages.

After the image title of the website there is the content of each page, which changes based on the topic of the page.



**To create a new page:**
- copy `blank.html` and rename it.
- modify the content of the page by changing everything under the **<!-- SECTIONS -->**. You can also create new sections.

the content can be a paragraph, so it is in between the tags `<p></p>`.
```
<!-- SECTIONS -->
  <section id="">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <h2 id="headers-font">St. Clement excavations from 2008</h2>
          <p class="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
        </div>
      </div>
    </div>
  </section>
```

if you want to alternate the color of the background of each sections just add `class="bg-light"` in the `sections` tag like this : `<section id="" class="bg-light">`.

for more details about HTML and what other tags to use visit [https://www.w3schools.com/html/html_intro.asp](https://www.w3schools.com/html/html_intro.asp)

It is also important to know and understand the notion of the grid of each section that is based on the grid of Bootstrap of row and col. For more info [https://getbootstrap.com/docs/4.5/layout/overview/](https://getbootstrap.com/docs/4.5/layout/overview/)

## Existing pages:
#### Index page

#### Excavation page

#### Publications

#### Students Projects

#### Student Experience

---

## Technologies used to create the website

- BOOTSTRAP is a front-end library. We used it for creating navigation-bar, the grid of each page, the slide show for images, the toggles, the modals to show preview of PDF files. [https://getbootstrap.com/](https://getbootstrap.com/)

- JQUERY it is used by the bootstrap library. I think it is good to also included in the metatag. We are not using it directly other than in the file `/js/scrolling-nav.js`. For more information check [https://jquery.com/](https://jquery.com/)

- GOOGLE FONTS is used to get the UST Fonts. [https://fonts.google.com/](https://fonts.google.com/)

- Google Maps for the map in the `/index.html` page.

We are using these libraries through CDNs links. So it is important to have them in the meta tags for each html page.

#### Other information that were needed during production

for the index's top slide show [https://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/](https://tympanus.net/codrops/2012/01/02/fullscreen-background-image-slideshow-with-css3/)