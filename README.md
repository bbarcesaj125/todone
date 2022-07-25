# toDone - a Full Stack React/Node Todo App

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Repository Size](https://img.shields.io/github/repo-size/bbarcesaj125/todone)

<p align="center">
	<img width="200" src="https://raw.githubusercontent.com/bbarcesaj125/todone/main/images/Logo-Github.png" alt="toDone Logo">
</p>

This is a simple Todo application that is entirely written in Typescript.

## Introduction

`toDone` is a full stack Todo application that I wrote using the `PERN` stack (PostgreSQL, ExpressJS, ReactJS, NodeJS).
The `PERN` stack is one of the most widely used JavaScript stacks in the Web development industry.
I chose this stack because I have some familiarity with it as I already used it to create projects.

## Technical details

`toDone` is a hybrid Web application. By hybrid, I mean that the application has a dual operating mode. It can run either
as a client-side only application or as a typical full stack application with a client/server architecture.
This behavior is controlled by environments variables.
For example, if you want to run `toDone` as a client-side only application, you can put the following line in your `.env` file:

    REACT_APP_SERVER=false

On the other hand, if you want to run it as full stack application, you can set the `REACT_APP_SERVER` environment variable to `true`.

If `toDone` is used as client-side only application, it will uses Local Storage to store and update the tasks.
If you opted for the full stack option, the application will then store the tasks in a PostgreSQL database using a NodeJS server.

### Used technologies

- ReactJS
- NodeJS
- PostgreSQL
- ExpressJS
- Styled components
- TypeORM
- Jest

The application also has a Dark Mode which I implemented using `Styled Components`. I am a big fan of this mode, so I thought
it would be cool to have it in my application:

<p align="center">
	<img width="800" src="https://raw.githubusercontent.com/bbarcesaj125/todone/main/images/light-mode.webP" alt="toDone light mode">
</p>

<p align="center">
	<img width="800" src="https://raw.githubusercontent.com/bbarcesaj125/todone/main/images/dark-mode.webP" alt="toDone dark mode">
</p>
