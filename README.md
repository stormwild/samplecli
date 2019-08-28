# Sample CLI

Sample cli for computation of commission based on transaction input

## Pre-requisites

- Git
- NodeJs v10.15.3

## Setup

### Clone Repository

```
git clone git@github.com:stormwild/samplecli.git
cd samplecli
npm i
```

### Link

`npm link` will link the code specified in the `package.json`'s bin property to the user's node_modules directory making it available in the path of the system.

This will allow the call to `samplecli` command from anywhere in the terminal.

```
npm link
```

You can test this out by running:

```
cd ~
samplecli
```

