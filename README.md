# Portfolio

My Portfolio App inspired by my weird creative taste

## Table of contents

1. Installation
2. Project structure
3. Usage/user story
4. Author
5. Features
6. Tech stack
7. Appendix

## Installation

- clone repo
  ```
      git clone https://github.com/AdamuAbba/myPortfolio.git
  ```
- install dependencies

  ```
      yarn
  ```

- build `locally`

  ```
      yarn run build
  ```

- run `locally`

  ```
      yarn run start
  ```

## Project structure

- Main Route
  - Home Screen
  - Projects Screen

Desktop

<img src="./demo/shy_X_desktop.png"  width="600" >

Mobile

<img src="./demo/shy_X_mobile.jpg" width="150" >

## User story

- A user can view all projects i have worked on
- A user can reach out to me by using the contact form in the footer

## Author

- [Abba Adamu](https://github.com/AdamuAbba)

## 🔗 Links

<a href="https://www.facebook.com/izshytypes" target="_blank">
<img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white" alt="facebook" />
</a>
<a href="https://www.instagram.com/shytypes1028/" target="_blank">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="instagram" />
</a>
<a href="https://twitter.com/shytypes1028">
<img alt="twitter" src="https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="twitter" />
</a>
<a href="https://abbaportfolio.netlify.app/"  target="_blank">
<img alt="portfolio" src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" />
</a>
<a href="https://www.linkedin.com/in/abba-adamu/">
<img alt="linkedIn" src="https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

## Features

- simplistic design
- Form state handling with [formik](https://formik.org)
- Form validation with [yup validation](https://github.com/jquense/yup)
- Contact form powered by [email js](https://www.emailjs.com/)
- Simple fluid animations with [framer motion](https://www.framer.com/motion/) animation library
- Lovely animated icons from [Lottie Animations](https://lottiefiles.com/)
- [Redux](https://redux-toolkit.js.org/) state management for global state management
- Dynamic backend data using [sanity.io](https://www.sanity.io/) headless CMS
- Some mild humour from the great CHUCK NORRIS [Chuck Norris API](https://api.chucknorris.io/)

## Tech Stack

**Client:**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue) ![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

**Server:** [sanity.io](sanity.io)

## Appendix

**Implementation summary:**

- RTKQuery for accessing api layer with data caching
- Each component is modularized

```
Component "folder level"
│   Component.styles.ts
│   Component.tsx
│   index.tsx

```

- Sanity is an amazing headless CMS and i would encourage developers looking for something secure and robust and easy to set up to take advantage of its awesome features.
