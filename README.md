# [Paper Dashboard Angular](https://www.creative-tim.com/product/paper-dashboard-angular)
![version](https://img.shields.io/badge/version-2.0.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg) [![GitHub issues open](https://img.shields.io/github/issues/creativetimofficial/paper-dashboard-angular.svg?maxAge=2592000)]() [![GitHub issues closed](https://img.shields.io/github/issues-closed-raw/creativetimofficial/paper-dashboard-angular.svg?maxAge=2592000)]()  [![Chat](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/E4aHAQy)

![Product Gif](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-angular/paper-dashboard-angular.gif)

Paper Dashboard Angular is a Bootstrap Admin Template which combines soft colors with beautiful typography and spacious cards and graphics. It was built on top of Google's [Angular Framework](https://angular.io/) and the HTML version of [Paper Dashboard](https://www.creative-tim.com/product/paper-dashboard). It is a powerful dashboard but it is light and easy to be used. It has enough features to allow you to get the job done, but it is not crowded to the point where you can't find the files for a specific component.

 We like consistency and design that blends into its purpose. Paper Dashboard Angular is a perfect example of our most thoughtful work. It combines over a dozen components and plugins, while looking like everything fits together. For an easy start or inspiration for you project, we have also create a set of example pages, like the user settings or usage graphics.

 Paper Dashboard Angular is built using the same design language as [Paper Kit](http://www.creative-tim.com/product/paper-kit), which you can use for the presentation pages of your website. You can easily use them together, or pick between them depending on the project you have.

 **Example Pages** We wanted to fully display the power of this dashboard, so the kit comes packed with examples showing you how to use the components.

 ## Table of Contents

 * [Versions](#versions)
 * [Demo](#demo)
 * [Quick Start](#quick-start)
 * [Documentation](#documentation)
 * [File Structure](#file-structure)
 * [Browser Support](#browser-support)
 * [Resources](#resources)
 * [Reporting Issues](#reporting-issues)
 * [Technical Support or Questions](#technical-support-or-questions)
 * [Licensing](#licensing)
 * [Useful Links](#useful-links)

 ## Versions

 [<img src="https://s3.amazonaws.com/creativetim_bucket/github/html.png" width="60" height="60" />](https://www.creative-tim.com/product/paper-dashboard-2)
 [<img src="https://s3.amazonaws.com/creativetim_bucket/github/angular.png" width="60" height="60" />](https://www.creative-tim.com/product/paper-dashboard-angular)
 [<img src="https://s3.amazonaws.com/creativetim_bucket/github/react.svg" width="60" height="60" />](https://www.creative-tim.com/product/paper-dashboard-react)

 | HTML | Angular | React |
 | --- | --- | --- |
 | [![Paper Dashboard 2 HTML](https://s3.amazonaws.com/creativetim_bucket/products/86/thumb/opt_pd2_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-2) | [![Paper Dashboard Angular](https://s3.amazonaws.com/creativetim_bucket/products/58/thumb/opt_pd_angular_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-angular) | [![Paper Dashboard React](https://s3.amazonaws.com/creativetim_bucket/products/98/thumb/opt_pd_react_thumbnail.jpg)](https://www.creative-tim.com/product/paper-dashboard-react) |

 ## Demo

 | Dashboard | User Profile | Tables | Icons | Notifications |
 | --- | --- | --- | --- | --- |
 | [![Start page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-angular/dashboard.png?raw=true)](https://demos.creative-tim.com/paper-dashboard-angular/#/dashboard) | [![User profile page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-angular/user-profile.png?raw=true)](https://demos.creative-tim.com/paper-dashboard-angular/#/user-profile) | [![Tables page ](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-angular/tables.png?raw=true)](https://demos.creative-tim.com/paper-dashboard-angular/#/table-list) | [![Icons Page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-angular/icons.png?raw=true)](https://demos.creative-tim.com/paper-dashboard-angular/#/maps) | [![Notifications page](https://raw.githubusercontent.com/creativetimofficial/public-assets/master/paper-dashboard-angular/notifications.png?raw=true)](https://demos.creative-tim.com/paper-dashboard-angular/#/notifications)

 [View More](https://demos.creative-tim.com/paper-dashboard-angular/#/dashboard).


## Quick start

Quick start options:

- [Download from Creative Tim](https://www.creative-tim.com/product/paper-dashboard-angular).

## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Go to your file project
4. Run in terminal: ```npm install -g @angular/cli```
5. Then: ```npm install```
6. And: ```ng serve```
7. Navigate to: [http://localhost:4200/](http://localhost:4200/)

### What's included

Within the download you'll find the following directories and files:

```
paper-dashboard-angular
├── CHANGELOG.md
├── ISSUES_TEMPLATE.md
├── LICENSE.md
├── README.md
├── angular.json
├── browserslist
├── documentation
│   └── tutorial-components.html
├── e2e
├── karma.conf.js
├── package-lock.json
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── layouts
│   │   │   └── admin-layout
│   │   │       ├── admin-layout.component.html
│   │   │       ├── admin-layout.component.scss
│   │   │       ├── admin-layout.component.spec.ts
│   │   │       ├── admin-layout.component.ts
│   │   │       ├── admin-layout.module.ts
│   │   │       └── admin-layout.routing.ts
│   │   ├── pages
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── icons
│   │   │   │   ├── icons.component.html
│   │   │   │   └── icons.component.ts
│   │   │   ├── maps
│   │   │   │   ├── maps.component.html
│   │   │   │   └── maps.component.ts
│   │   │   ├── notifications
│   │   │   │   ├── notifications.component.html
│   │   │   │   └── notifications.component.ts
│   │   │   ├── table
│   │   │   │   ├── table.component.html
│   │   │   │   └── table.component.ts
│   │   │   ├── typography
│   │   │   │   ├── typography.component.html
│   │   │   │   └── typography.component.ts
│   │   │   ├── upgrade
│   │   │   │   ├── upgrade.component.html
│   │   │   │   └── upgrade.component.ts
│   │   │   └── user
│   │   │       ├── user.component.html
│   │   │       └── user.component.ts
│   │   ├── shared
│   │   │   ├── fixedplugin
│   │   │   │   ├── fixedplugin.component.html
│   │   │   │   ├── fixedplugin.component.ts
│   │   │   │   └── fixedplugin.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.ts
│   │   │   │   └── footer.module.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.ts
│   │   │       └── navbar.module.ts
│   │   └── sidebar
│   │       ├── sidebar.component.html
│   │       ├── sidebar.component.ts
│   │       └── sidebar.module.ts
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── scss
│   │       ├── paper-dashboard
│   │       └── paper-dashboard.scss
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json
