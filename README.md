# Automation Test ToDo MVC

This is an automated web end-to-end (e2e) testing project for the ToDo Mvc website, simulating user interaction with the site

For this project, the Playwright framework was used

# Requirement
- [Node.js]
- [Yarn]

# Setup

- Install the project dependencies

```sh
yarn install
```

- Install the playwright dependencies

```sh
yarn setup
```

# Running

- To run all the tests:

```sh
yarn test
```

- To monitor the test execution:

```sh
yarn test:headed
```

- To run the tests in debug mode:
```sh
yarn test:debug
```

# CI/CD

The tests in this project are set to run automatically in the repository's pipeline under the Actions tab whenever a pull request is merged into the main branch. Another pipeline has been created to execute the tests automatically whenever necessary. To do this, simply follow these steps:

1- Click on the Actions tab.
2- Click on the Manual e2e execution pipeline.
3- Click on "Run Workflow".
4- Name the execution.
5- Click on "Run Workflow".

All tests will be executed, and the test report will be available at the end of the execution.