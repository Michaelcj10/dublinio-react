# Getting Started with Dublinio React

## How to install

> npm install dublinio-react

**dublinio-react** is a set of React components that follow the **Dublinio** web design palette.
Check out our documentation site for live examples.

## Required Knowledge

You will need some knowledge of reactjs to use this component library. If you don't yet understand reactjs head
over to [reactjs documentation](https://reactjs.org/) and start learning!

## Usage

Unlike many component libraries you do not need to provide a theme object. Simply import the components as you wish.

```
  import { Button } from "dublinio-react";

  <Button
      text="My button"
      type="button"
      loading=
      onClick={() => {
            console.log("you clicked the button!");
      }}
  />
```
