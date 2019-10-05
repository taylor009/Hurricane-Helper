# All Outbound (codename)

## Required VS Code Extensions

* TSLint - real time linting
* Jasmine Test Explorer - Test Runner UI. Also allows you to step through code.

## Folder Structure

* spec
  * data
    * Contains test data to be sent to your unit tests.
    * Provides a way to test edge cases without having to stage it in a real environment
  * {name}.spec.ts
    * A unit test for a typescript object
    * Notice that the objects accept dependencies on their constructor - this allows us to pass custom inputs and mock objects
* src
  * lambda - A class for each of your lambdas. Implement your business logic here. Pass in configuration and dependency objects in on the constructor.
  * models - classes representing data structures
  * services - business logic and and data access helpers
  * functions.ts
    * Think of this as your lambda index. Since serverless expects static functions, this file initializes your class and calls its handler. Do not put business logic here.
* files
  * package.json
    * dependencies and scripts
  * serverless.yml
    * Configures your lambdas and any additional services
    * TODO: Service name, tags and environment variables
    * https://serverless.com/framework/docs/providers/aws/guide/serverless.yml
  * tslint.json
    * configure linting rules to enforce consistent code style
