---
title: Test Driven Development for Beginners
slug: test-driven-development-for-beginners
date: 2022-11-05
---
# Test Driven Development for Beginners

In this post, I hope to present a gentle introduction to test driven development. I will explain what it is, why it is useful, how to apply it today, and when to avoid it. Best practices will be touched on, and hopefully you the reader will come out with a better understanding of what all the fuss is about. This post is not exhaustive by any means, and if you wish to read and learn more about test driven development, then I recommend you pick up a copy of Kent Beck’s seminal work on the topic, [“Test Driven Development: By Example.”](https://amzn.to/3sJBkQ4)

## What is TDD, anyway?

Test Driven Development, henceforth abbreviated as TDD is a design methodology for writing software against some pre-defined specification. Tests are used to enforce that specification, and are written before any actual production code is written. We can break TDD into three phases:

1. Gathering your requirements
2. Writing your test cases
3. Tracking all software changes against those test cases

Let’s take a look at each step here as we work through a simple “to-do” example. Note (no pun intended) that for this simple example we are going to stick with a plain old Kotlin app, not an Android app. We are also only going to focus on the presentation layer. No UI, no database. This will give us one specific unit to test, and will reduce the mental overhead of everything else.

## Gathering your requirements

In our newly minted, awe-inspiring to-do app, we will have a single screen that displays a list of notes. Each note is editable in-line, and updated on the fly as the user types.

1. When the user opens the application, they should see a list of notes, in reverse-chronological order.
2. When the user presses an add button, an empty note should be added as the head of the list.
3. When the user updates the name of a specific note, that change is reflected in their list of notes.
4. When the user delete a note, then that note is removed from the list.

## Writing your test cases

For each requirement we are going to design a test case. Doing so is going to help us determine the over-all shape of our solution. Remember here that the goal is not to have a working application at the end of this step, but to have a compilable set of tests. It is expected that all of these tests will fail. We can use our requirements to guide what tests to write and how to label them.

[https://gist.github.com/exallium/f592ec219ee41905cb1ecaef7b1c88b1](https://gist.github.com/exallium/f592ec219ee41905cb1ecaef7b1c88b1)

We now have a list of tests to implement. Running them compiles appropriately, but will obviously fail. From here, we need to decide on an API design. What do these tests tell us about the API we need? What does the presenter need to give us? Let us start at the top and work our way down.

### Getting a list of notes

For this specification, we need to see that we can get a list of notes back from the presenter in reverse chronological order. Given that this is an article concerning TDD and not one about reactive UI patterns, let us stick with simple mechanisms and assume for now that everything is to be single threaded. In a real world app, we may use a `State<T>` or a `Flow<T>` or any other number of containers depending on our UI framework and preferences. So, we will just expose a `List<T>`.

[https://gist.github.com/exallium/cd619030fe185acb83e089269a02b248](https://gist.github.com/exallium/cd619030fe185acb83e089269a02b248)

We now have a subject for our test that we can write assertions against. We can update our test to ensure that our list is in reverse chronological order. One such way to do this is to compare each pair of items in a sliding window:

[https://gist.github.com/exallium/0c61549d4099776d61a84887ddd6c6d3](https://gist.github.com/exallium/0c61549d4099776d61a84887ddd6c6d3)

We now need to initialize our list with some notes that should be displayed. This will generally come from some kind of data repository. We can modify our `TestPresenter` to take in a data repository that hands it a list of notes with randomized timestamps. We can create a `TodoRepository` interface, and then create a test fake inside our unit test class.

[https://gist.github.com/exallium/2a1339b030cb329f848ed08e5789dc97](https://gist.github.com/exallium/2a1339b030cb329f848ed08e5789dc97)

Finally, we need to enforce the ordering. This is the *actual* business logic under test here. Everything before this point was more along the lines of setup. This is simple enough to do right in the presenter.

[https://gist.github.com/exallium/7232b6b8c955815f1ddbbf2bebf0a22a](https://gist.github.com/exallium/7232b6b8c955815f1ddbbf2bebf0a22a)

Running the test again will present a green result. Hurray! First one down.

### Adding a note

Now let us tackle the second case here of adding a note. The specification says that when we add a new note, that note should be placed as the head of our list. One such specification test could look like this.

[https://gist.github.com/exallium/3ba0c84c8971e076236f9547a66e2017](https://gist.github.com/exallium/3ba0c84c8971e076236f9547a66e2017)

At this point, `addNote` is simply an empty method on `TodoPresenter`. Obviously, this will fail as expected. We can now add our implementation, changing pre-existing code as needed. The important thing to note here is that we are NOT modifying unit tests, and we are always running every test to ensure the ones that were passing still pass.

[https://gist.github.com/exallium/8155461d701e377614f6fb5df7306d61](https://gist.github.com/exallium/8155461d701e377614f6fb5df7306d61)

Using the same approach, we can add tests for both deletion and updating a name. All of the code for these steps will be provided in a GitHub repository linked at the bottom of this post.

## Track all software changes against those test cases

It is fairly plain to see that the implementation provided would not be sufficient in a real world product. For example, everything is done in memory. `TodoRepository` only provides notes, it doesn’t take them in. We could also probably design more performant methods to update and add new notes to our list. However, this is all ok. What we have done here is written a specification according to one set of requirements. If those requirements change, then our specifications change. As long as the requirements do not change, then we have a font of confidence in our tests. We can freely make changes and optimize things, and be sure that we have not broken our tests, because we will run our tests after each change.

> Make it work, make it right, make it fast - Kent Beck
> 

## Where do we go from here?

From here, we need to write real unit tests. We need to make sure we are testing edge cases, failure paths, and the like. TDD only serves as a design guide for our API, and helps ensure that our axioms are unabated. TDD can greatly aid in reducing bugs during the initial building out of new features. 

If our requirements change, then our specification tests must change with them. For example, if we need to store these in a database, then we need to build out a set of specification tests for how our presenter will interact with this database or an intermediary abstraction. If we want to add the ability to mark items off and have them reposition themselves to the end of the list, then our specifications about list ordering are no longer valid and those must change to.

Specification tests are a reflection of our requirements, and are only valid as long as those requirements remain in place. They should not be treated as unit tests, but as a design tool. You should have unit tests and integration tests in addition to these in order to remain as confident as possible. You should never be in a position where you need to guess whether your code works.

> In the face of ambiguity, resist the temptation to guess - Zen of Python
> 

All of the code for this post can be found on my Github, [here](https://github.com/exallium/TDDPost). If you have more questions regarding this topic, suggestions, or changes, then the best way to contact me is via [Twitter](https://twitter.com/Exallium) or [Mastodon](https://androiddev.social/@exallium)