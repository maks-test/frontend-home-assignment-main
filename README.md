# Corti Frontend Home Assignment

Take all the time that you need to complete the assignment. We expect to see all the user stories fulfilled. Although there is no strict maximum, we do not expect you to spend more than 1 day on this.

## Task - Directory Browser

You have to build the application which displays a file system directory structure similar to the example wireframe provided. Items can only be one of two types - file or folder, which should be visually distinguishable.

**Folder is active**

![2](./example/2.png)

**File preview is active**

![2](./example/1.png)

### User story 1 - View tree

As a user I can see the files and folders rendered as a tree structure in the `sidebar`, where contents of the folder are **ordered alphabetically**.

### User story 2 - Expand/collapse

As a user I can click once on a folder in the `sidebar` to expand/collapse it's contents. The same click will also make the folder active. Expanding/collapsing a folder should not result in previously expanded/collapsed folders to change state.

### User story 3 - Activating a file/folder in sidebar

As a user I can click on a folder or file in the `sidebar` to make it active. Currently active file/folder should be displayed in the `main` area.

- Active folder should display it's contents in the `main` area.
- Active file should display it's name and type in the `main` area.

### User story 4 - Activating a file/folder in main area

As a user I can click on a file or folder in the `main` area to activate it. When activated, it should also expand the path to the folder in the `sidebar` tree.

### Non-functional requirements

- We prefer `typescript` but you can write your solution in `javascript` too.

- We do not require tests, but feel free to add it if you see the actual need.

- You can choose to use any third party libraries that you see the need for.

- We don't require the application to be beautifully styled, but we expect you to implement the layout as in the example.

- You only need to make it work on desktop screens, no mobile views required.

- You can use all modern css features (we will test on the newest chrome).

## How to work

We provide a `create-react-app` bootstraped project with `typescript` support (not mandatory to use). You should only need to write your implementation in the `src` directory, but feel free to add any supporting files, tools or configs outside the `src` if you see the need for it.

To run the frontend client:

```
npm start
```

There is an api server provided that will serve the data to your frontend application.

To run the api server locally:

```
npm run server:start
```

Api will be available from your client on the same port on `/api/v1/tree`

## How we review

- We value quality over feature-completeness. You don???t need to implement more than it???s asked for, instead imagine you were given these requirements by your product manager.

- It is fine to leave things aside provided you call them out in your project's README. The goal of this code sample is to help us understand how you approach a given problem and how you make decisions when writing the implementation. It does not need to be production ready code (all the edge cases or errors handled), but it needs to lay the initial foundation which can be extended further by you or your team. You should consider this code ready for a code review with your colleague.

- Don???t worry about having a super clean git history - some history is better than 1 squashed commit.

## How to submit

1. We appreciate if you give us some feedback on this assignment in this README file below. Is the task too difficult/easy? Is it easy to understand what's asked for you to do? Is the scope of the task too big? Any feedback is welcome.

1. Upload this project to a public or private github repository. If repo is private, do not forget to invite the list of people that are mentioned in the email you received. **IMPORTANT Don't forget to add a number of hours it took you to complete it!**

## Your notes

* The provided app seemed to be not 100% ready to use (at least in my case):
  * possibly package-lock.json was malformed ??? express wouldn't import in the server app
  * front-end was "complaining" about "version": "2.0" in package.json, so I had to update it to match SemVer
  * front-end app wouldn't compile without typescript so folks without this knowledge would need to search around
  to disable typescript checks
* I didn't figure out how to run back-end and front-end on the same port
* In general I should say that the test task is pretty good to test the knowledge, I liked it. Not too easy,
not too hard, and more than enough of space to show off skills.
* I didn't count the time spent with timer, but I tried to keep it closer to 4 hours. I think that it was around
5-6 though with all the accompanying routine (setting up separate github, etc).
