# Hometask-E2E-Testing

## Installing the project

1. Clone this repository to your workstation.
2. Navigate to the project root.
3. Check ```package.json``` file to make sure ```yarn test``` command will trigger test execution
4. Make sure you have Babel installed to properly compile JS files. If not, use ```yarn add --dev @babel/core @babel/cli @babel/preset-env @babel/register``` command
5. Check ```babel.config.js```file to make sure it contains followed setup:
```
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: '14'
            }
        }]
    ]
}
```

## Test running
1. Run ```yarn install``` to install all dependencies.
2. Run ```yarn test``` to check test command output.

The console output will show you the result.

## Test console output example

```
[chrome 107.0.5304.110 mac os x #0-0] Running: chrome (v107.0.5304.110) on mac os x
[chrome 107.0.5304.110 mac os x #0-0] Session ID: f5e2d212d9b1bed73e0ebb072a98d11c
[chrome 107.0.5304.110 mac os x #0-0]
[chrome 107.0.5304.110 mac os x #0-0] » /features/bootcamp.feature
[chrome 107.0.5304.110 mac os x #0-0] Bootcamp E2E
[chrome 107.0.5304.110 mac os x #0-0] As a user, I can search for a single product
[chrome 107.0.5304.110 mac os x #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.110 mac os x #0-0]    ✓ And I can close the promo banner if it appears
[chrome 107.0.5304.110 mac os x #0-0]    ✓ When I type in a "Windows" in the search bar
[chrome 107.0.5304.110 mac os x #0-0]    ✓ And I click the search button
[chrome 107.0.5304.110 mac os x #0-0]    ✓ Then I am redirected to the appropriate page with the "Windows" results
[chrome 107.0.5304.110 mac os x #0-0]    ✓ And I can see at least one item was found
[chrome 107.0.5304.110 mac os x #0-0]
[chrome 107.0.5304.110 mac os x #0-0] As a user, I can go to Today's Best Deals tab and then go back to the home page by clicking on the Internet shop logo
[chrome 107.0.5304.110 mac os x #0-0]    ✓ Given I am on the home page
[chrome 107.0.5304.110 mac os x #0-0]    ✓ And I can close the promo banner if it appears
[chrome 107.0.5304.110 mac os x #0-0]    ✓ When I click on the Today's Best Deals tab
[chrome 107.0.5304.110 mac os x #0-0]    ✓ And I am redirected to the Today's Best Deals page
[chrome 107.0.5304.110 mac os x #0-0]    ✓ Then I click on the Internet page logo
[chrome 107.0.5304.110 mac os x #0-0]    ✓ And I am back on the home page
[chrome 107.0.5304.110 mac os x #0-0]
[chrome 107.0.5304.110 mac os x #0-0] 12 passing (27.1s)


Spec Files:	 1 passed, 1 total (100% completed) in 00:00:31 

2022-11-30T13:06:36.315Z INFO @wdio/local-runner: Shutting down spawned worker
2022-11-30T13:06:36.567Z INFO @wdio/local-runner: Waiting for 0 to shut down gracefully
2022-11-30T13:06:36.568Z INFO @wdio/local-runner: shutting down
✨  Done in 33.94s.
```