# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

/* =========|| Media Queries ||========= */
@media only screen and (max-width:1200px) {
    .container{
        max-width:965px;
    }
    .stats-card__content{
        padding:70px 25px;
    }
}
@media only screen and (max-width: 992px) {
    .container{
        max-width:770px;
    }
    .stats-card{
        flex-direction:column-reverse;
    }
    .stats-card__content{
        flex:0 0 100%;
        padding:65px;
    }
    .stats-card__thumbnail{
        flex: 0 0 100%;
    }
    .stats-card__thumbnail-image,
    .stats-card__thumbnail.overlay:before{
        border-radius:6px 6px 0 0;
    }
}
@media (max-width: 768px) {
    .container{
        max-width: 100%;
        padding:0 15px;
    }
    .stats-card__content{
        text-align: center;
        padding:40px 0 20px;
    }
    .stats-card__title{
        font-size:30px;
        padding:0 30px;
    }
    .stats-card__text{
        padding: 0 45px;
    }
    .stats-card__data{
        display: block;
    }
    .stats-card__data-container{
        margin-top:40px;
        padding: 0;
    }
    .stats-card__data-item{
        margin-bottom:2rem;
    }
}
/* =========|| Media Queries ||========= */

### Screenshot

![](images/screenshot-2.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

