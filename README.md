# Automation test for QASE.IO

- Official site: https://qase.io
- Official application: https://app.qase.io

### Structure of project:

- [node_modules] - folder with installed modules
- [assets] - report of test
- [src/config] - configuration file of webdriverio
- [src/helpers] - additional constants for the test
- [src/img] - image for the test
- [src/test/pages] - page objects for test
- [src/test/specs] - automated tests
- .esintrc
- package
- tsconfig

### Instruction manual:

- Install project. command: npm i
- Run test. command: command: npm run start
- Create and open allure report. command: npm run report (before install Java and add Java to environment variables)
