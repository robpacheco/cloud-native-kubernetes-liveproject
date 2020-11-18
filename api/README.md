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

## Postman Examples and Tests

*Postman*: https://www.postman.com

Example API requests/responses have been provided for Postman. There is a collection export for `SecurityNewsSource` in 
the `postman` directory. This collection contains a folder for the `Payment` service and a folder for the `Subscription`
service. The requests in the `Subscription` folder can be used along with the API docs in this directory to ensure the 
proper implementation of the `subscription` api.

There are also a couple of sample Postman environments. These can be adjusted as necessary for your environment. All of the
requests in the SecurityNewSource collection container variables for the base part of the URL which are specified in the
environment. This allows the requests to be used and the configuration to 