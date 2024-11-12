Volvo Automation Framework

This documentation provides an overview of the Volvo Automation Framework, including setup instructions and steps to run the tests.

Prerequisites
Before setting up the framework, ensure that you have the following tools installed on your system:

Docker: Used for containerization and managing the test environment.

Node.js: Required to run the automation tests.

Framework Overview

The framework has been designed to provide a scalable and efficient way to automate tests. Below is a description of the key components:

1. Basic Setup for Logic
   
The basic setup defines the overall test automation framework. This serves as the foundation for the logic, which is elaborated in the following sections.

2. Spec File for Test Logic
   
A specification (spec) file has been created to document the test logic and workflows. This file serves as a reference to understand the underlying test processes and can be used for troubleshooting or expanding test cases.

3. POM (Page Object Model) File for Selectors
   
A Page Object Model (POM) file has been created to store and manage all locators (selectors) used across the automation tests. This centralized approach helps improve the maintainability and scalability of the tests.

4. Environment File for Test and Production URLs
   
An environment configuration file has been added to the project to define the URLs for both the test and production environments. This allows you to easily switch between different environments while running the tests.

5. Local Browser Setup for Parallel Test Execution
   
The framework supports parallel test execution through a local browser configuration. This allows tests to run concurrently, improving the efficiency and speed of test execution.

6. Reporting with Allure
    
The framework integrates Allure, an open-source reporting tool, to generate detailed and visually appealing test reports. These reports make it easy to track test execution results and analyze the performance of the tests.

Steps to Run the Tests
Follow these steps to set up and run the automation tests.

1. Clone the Repository
   
First, clone the repository to your local machine:

git clone <repository-url>
cd <repository-folder>

2. Install Dependencies
   
Navigate to the project directory and install the required dependencies using npm:

npm install

3. Run the Tests
   
To run the tests for a specific environment, use one of the following commands:

For the devVolvo environment:

npm run test:Homepage

For the testVolvo environment:

npm run test:Homepagetest

4. Generate the Allure Report
   
After running the tests, you can generate a detailed Allure report to view the results:

allure serve allure-results

This will open a web server to display the test results in a user-friendly report format.

Notes

Ensure that the environment configuration file is properly set up with the correct URLs for your test and production environments.

Parallel test execution requires multiple browser instances to be set up on your local machine or within a Docker container.

If you encounter issues with Allure, ensure that it is properly installed and set up according to the official Allure documentation.


npm run test
npm run test:devVolvo
npm run test:testVolvo
npm run test:individual
npm run test:local
