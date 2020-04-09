<img  src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/70706303_10157461057676465_6761746745589235712_n.png?_nc_cat=111&_nc_sid=85a577&_nc_ohc=SWpzNbKEP7QAX98o3Z1&_nc_ht=scontent-ort2-1.xx&oh=bdfffa1017a3073c12e63bd63cd58f03&oe=5EA9612C" align="center" alt="DTE Energy" height="150"/>

# MIMO - WISMO Tracker
Move-In/Move-Out - Where is My Order Tracker is an interactive user interface displaying current status information for orders submitted by customers requesting service be turned on (started), turned off (stopped) or transferred between premises.

Azure DevOps project: [https://dev.azure.com/dteenergy/WISMO](https://dev.azure.com/dteenergy/WISMO)

---
**Contents**
+ [Prequisites](#prerequisites)
+ [Getting Started](#getting-started)
+ [Application Security](#application-security)
+ [Internationalization](#internationalization)
+ [Styling](#styling)
+ [Environments](#environments)
+ [See Also](#see-also)

## Prerequisites
Perform the following steps to setup your development environment:

- Install Git: [https://git-scm.com/downloads](https://git-scm.com/downloads)  
- If preferred, download and install a Git Client like [SourceTree](https://www.sourcetreeapp.com/), [GitKraken](https://www.gitkraken.com/), [ConEmu](https://conemu.github.io/), etc.
- Install node.js (LTS not current): [https://nodejs.org/en/download/](https://nodejs.org/en/download/) 
- Install IDE of choice
  - Visual Studio Code: [https://code.visualstudio.com/download](https://code.visualstudio.com/download)
  - WebStorm: [https://www.jetbrains.com/webstorm/download/](https://www.jetbrains.com/webstorm/download/)


## Getting Started
You can start coding on this project by following these steps:
+ Using the command-line:
  + Change the working directory to your local source control folder.  For instance, if all source code resides in a “git” folder on your C:-drive, type “cd /c/git”.  Be sure to include any subfolders, if applicable.
  + Clone your repository:
    ```shell
    git clone TBD
    ```
  + Change the working directory to the new “evolution-ui” folder where the repository was cloned.
    ```shell
    cd wismo-ui
    ```
  + Install all package dependencies using NPM:
    ```shell
    npm install
    ```
  + Start the application:
    ```shell
    npm start
    ```
  + View the application in a browser by navigating to http://localhost:3000

Commit changes often (daily).

When you are ready to submit your changes to the **master** branch, create a Pull Request.  This will initiate the code review process and the Pull Request will either be accepted, meaning your changes are merged into the **master** branch, or rejected so you can make additional changes.

#### Remember to Fetch/Pull from the remote repo to keep your code in-sync with other developers.

## Application Security

##### Non-Production Environments
To access the application in a non-production environment, ...

##### Production
To access the application in production, ...

## Internationalization
The solution uses the `react-intl` library to manage internationalization (i18n) support including multi-language support for both static text, number, date and currency formats, etc.  The complement react-intl docs can be found here:

    https://github.com/yahoo/react-intl/wiki

The (default) English language text for messages are defined in the `messages.ts` file associated with each component.  Text for other languages are defined in translation files located in the [app/translations](https://github.com/VetsFirstChoice/evolution-ui/tree/master/app/translations) folder.

> NOTE: An error will be written to the console when the application is
> unable to find the translation for a given message in the current
> language.  When this occurs, the default (English) value will be
> rendered.

### Extracting i18n JSON files
You can extract all messages within each component that require translating by running the following command:
```
  npm run extract-intl
```

This will extract all messages into JSON translation files located in the [app/translations](https://github.com/TBD/wismo-ui/tree/master/app/translations) folder corresponding to each language defined in the [app/i18n.js](https://github.com/TBD/wismo-ui/blob/master/app/i18n.js) file.

> NOTE: You can manually add items to the translation files, but running
> the script ensures you don't miss any.


### Adding a Language
You can add a language by running the generate command:
```
  npm run generate language
```

When prompted, enter the two character ISO 639-1 standard language code (e.g. "fr", "de", "es" - without quotes).  The full list of language codes can be found here: [https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

The [app/i18n.js](https://github.com/DTE/evolution-ui/blob/master/app/i18n.js) file will be updated to include the new language and a new JSON language file named `{code}.json` (where `{code}` is the language code you entered above) is created in the [app/translations](https://github.com/TBD/evolution-ui/tree/master/app/translations) folder with every message found in the application (see the previous topic).  All messages will be set to the default value specified in the messages file with the language code appended.

> Note: It is up to you to replace the default values with the actual
> translations for the language.


## Styling
TBD

## Environments

##### Local
When the application is built and deployed (raked) on a local machine, it can be accessed using the following URL:
```shell
http://localhost:3000
```
##### Dev
The application is automatically deployed to the Dev environment after each successful build. It can be accessed at the following URL:
```shell
TBD
```
To manually deploy a build to the Dev environment,
+ TBD

##### QA
To deploy the application to the QA environment,
+ TBD

After the application has been deployed, it can be accessed at the following URL:
```shell
TBD
```
##### Staging
To deploy the application into the Staging environment,
+ TBD

After the application has been deployed, it can be accessed at the following URL:
```shell
tbd
```
##### Production
To deploy the application to the Production environment,
+ TBD

After the application has been deployed, it can be accessed at the following URL:
```shell
tbd
```

## See Also

 - [Firebase](./docs/firebase.md)
 - https://github.com/yahoo/react-intl/wiki
 - https://ant.design/components
