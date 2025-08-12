# sonarscan-angular-app

## Create Angular application using below commands

```bash
npm install -g @angular/cli
ng new sonarscan-angular-app --style=css --routing=false

## Please provide answers for options as "No"
```

## Run code coverage

```bash
npx ng test --watch=false --browsers=ChromeHeadless --code-coverage
```

## Code Analysis using SonarQUbe

```bash
npx sonar-scanner \
  -Dsonar.projectKey=helloworld \
  -Dsonar.sources=src \
  -Dsonar.tests=src \
  -Dsonar.test.inclusions="**/*.spec.ts" \
  -Dsonar.typescript.lcov.reportPaths=coverage/<your-folder-name>/lcov.info \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=<sonar-project-token>
```

