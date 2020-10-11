# SecurityNewsSource API Doc

This directory contains the API Documentation for the SecurityNewsSource APIs. All files in this directory should 
be related to API documentation. The documentation in this directory is pre-generated, but there are also instructions
here for regenerating the documentation or viewing live documentation should the need arise.

## Running/Building using Redoc

*Redoc*: https://github.com/Redocly/redoc
*Redoc CLI*: https://github.com/Redocly/redoc/blob/master/cli/README.md

### Install Redoc CLI

```
npm i -g redoc-cli
```

### Serve API Doc

```
redoc-cli serve openapi.yaml
```

### Build HTML API Doc

```
redoc-cli bundle openapi.yaml -o sns-api.html
```