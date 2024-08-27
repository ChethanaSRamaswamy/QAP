# QAP
What is [QAP](https://confluence.esteeonline.com/display/QAP/About+QA+Automation+Platform)? QA Automation Platform is a team, a methodology, and a technology suite that has a singular focus:
Improve the testing experience at ELC.

If you're new to QAP and don't know where to start, take a look at the [QAP - End to End Test Automation Platform](https://confluence.esteeonline.com/display/QAP/QAP+-+Methodology)

This repo includes ELCelerate, which is based on the Playwright framework. ELCelerate will work alongside our existing testing system Helix which is primarily used to monitor production sites for errors. ELCelerate gives us a modular, extensible, flexible framework to shift testing left so we get better at catching issues BEFORE they get to prod.

## Architecture
![QAP Architecture](./images/qap_architecture.png "QAP Architecture")
QAP is a multi tenant platform currently sharing resources and functionality between Helix, ELCelerate and Postman API testing platforms. This is done to minimize "Reinventing the wheel", and keep the code as [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) as possible.

## Getting Started - Installation
### Pre Requisites
1. Node > 14 installed
2. Access to to ELC github (gh cli preferred)
3. If you have not already, make sure MySQL is installed on your local machine.

**MacOS**
Install via homebrew and start mysql service
```
brew install mysql
mysql.server start
```

Verify access by starting mysql
```
mysql -uroot
```

4. Create a database named 'helix'
```
mysql -uroot
mysql> CREATE DATABASE helix;
```
5. Set root password and validate (Password is "root" as the **BY 'root'** is where it is set)
```
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY 'root';
mysql> quit;
> mysql -u root -p
```

### Setting up the QAP repo
Follow the steps given to setup and work on new QA Automation Platform (QAP).

1. Clone QAP repo - https://github.com/elc-online/qap
2. Run npm install, sometimes Playwright is not installed; in that case, execute the following commands
```
npx playwright install
```
3. Download and restore latest MySQL backup from https://github.com/elc-online/qap/blob/main/db_backup/qapdb.zip (Note: your local DB updates will be wiped out)

Run from the root qap directory to restore via command line:
```
npm run restore-prod-db
```
Use your root password set in the above mysql install steps

1. Copy the .env.example file and update the ENCRYPTIONKEY. Get the key from https://confluence.esteeonline.com/display/QAP/Helix+-+Getting+Started#:~:text=Update%C2%A0ENCRYPTIONKEY.

```
cp .env.example .env
```

### Running Existing Tests
A test in ELCelerate can be run in one of the following methods.

1.  ### **From UI**

    - As usual you can use our automation front-end to execute both Helix and ELCelerate tests. The system is smart enough to identify whether to execute Taiko or Playwright scripts based on the user inputs. Helix HTML report is alone generated if the we don't have test coverage in ELCelerate, and you can see ELCelerate HTML report if there is a coverage. To see what is currently covered in ELCelerate, see the [Test Coverage](https://confluence.esteeonline.com/display/QAP/ELCelerate+-+Test+Coverage) page.
2.  ### **From Dev nodes**

    - You can continue using your dev node. Follow the instructions given in [Updates to Jenkins jobs](https://confluence.esteeonline.com/pages/viewpage.action?pageId=424083944) section to modify your existing jobs to execute Taiko or Playwright
3.  ### **From GitHub Actions**

    - You can also trigger your tests from GitHub actions. Refer [Executing ELCelerate tests using GitHub Actions](https://confluence.esteeonline.com/display/QAP/ELCelerate+-+Execute+tests+using+GitHub+Actions) to learn more about it
4.  ### **From CLI**

    - Refer the steps given in the table below to execute your ELCelerate scripts from command line

<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.534 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Wed Oct 04 2023 10:45:41 GMT-0700 (PDT)
* Source doc: Untitled document
* Tables are currently converted to HTML tables.
----->

<table>
  <tr>
   <td>
   </td>
   <td><strong>Steps</strong>
   </td>
   <td><strong>Comments</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Go to <a href="https://github.com/elc-online/qap/tree/main/src/automation/elcelerate">elcelerate </a>folder
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>To execute any script, we need four information
<ol>

<li>brand prefix - ex: DA, AV, LM, BB

<li>market prefix - ex: US, FR, DE

<li>device - ex: PC, MOB

<li>scenario tag - Ex: GU, SANITYSEARCH

<p>
You must enter a value for the environment variable <strong>TAGS </strong>in the following format: (brand1|brand2) & (market1|market2) & (device). And scenario tag will be passed as an argument to Playwright test command.
<p>
Alternatively you can hardcode<a href="https://github.com/elc-online/qap/blob/main/src/automation/elcelerate/testSetup.js#L11"> TAGS in global setup</a> file. Please note, you should NOT commit this file with hardcoded values.
<p>
<strong>Note</strong>:
<ol>

<li>TAGS - for the time being, we do not allow complicated expressions; however, we will improve the platform to handle complex tags like <strong>!(TagA & TagB) | TagC</strong> in the next releases
<p>

    Here are some examples that are supported
<ol>

<li>
<ol>

<li>
<ol>

<li>(LM) & (US) & (PC)

<li>(LM) & (US) & (PC|MOB)

<li>(LM|AV|BB) & (US|CA) & (PC)
</li>
</ol>
</li>
</ol>

<li>We are including dotenv package in QAP, after that you can setup TAGS in .env file itself

<p>
We have one more variable named <strong>SCOPE </strong>which is dynamically generated by the system based on the scope matrix formed based on the TAGS (brand-market-device) provided. This <strong>SCOPE </strong>will be considered by Playwright to execute the tests for the given scenario.
</li>
</ol>
</li>
</ol>
</li>
</ol>
   </td>
   <td><strong>How do I set the env variable?</strong>
<p>
<strong>Windows Command Prompt \
</strong>// Set an env variable \
set TAGS='(LM) & (US) & (PC)'    \
// Display \
set TAGS
<p>
<strong>Windows Powsershell \
</strong>// Set an env variable \
$env:TAGS='(LM) & (US) & (PC)' \
// Display \
$env:TAGS
<p>
<strong>Linux \
</strong>// Set an env variable \
export TAGS='(LM) & (US) & (PC)' \
// Display \
echo $TAGS
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Run your scenario using the following command \
npx playwright test --grep "@scenario_annotation"
<p>
Ex:
<p>
npx playwright test --grep "@GU"
<p>

<ul>

<li>To exactly match a scenario tag use the command (can be helpful in cases where you have two scenarios having GU in its name)
<p>

    Ex. <em>npx playwright test --grep "(?=^<strong>@GU</strong>$)"</em>
<p>

    Use the annotation (@GU) in between ^ and $ prefixed with ?= and embracing with parenthesis.
<ul>

<li>To run the playwright tests with multiple scenario tags, use the following:
<ul>

<li>On the node/linux terminal => npx playwright test --grep '@tag1|@tag2'

<li>On GIT Bash => npx playwright test --grep "@tag1|@tag2"
</li>
</ul>

<li>Unexpected token u in JSON at position 0 in const { SITES } = process.env;
<ul>

<li>Ensure you are running the test from playwright folder
</li>
</ul>
</li>
</ul>
</li>
</ul>
   </td>
   <td>This following command will run Guest User scenario for the sites mentioned in TAGS env variable
<p>
For example, if <strong>TAGS </strong>is set to '(DA) & (US|IT) & (PC)'
<p>
then <strong>npx playwright test --grep "@GU"</strong> will execute Guest User scenario
<p>
for Darphin US and IT PC sites
   </td>
  </tr>
</table>

---





## GitHub Actions
GitHub action is included to run automation tests based on test tags and platform as input. This GitHub action is also callable from other repositories. More details at,
[GitHub Actions](https://confluence.esteeonline.com/display/QAP/ELCelerate+-+Execute+tests+using+GitHub+Actions)


## Helpful Links
- [General Guidelines](https://confluence.esteeonline.com/display/QAP/ELCelerate)
- [Installation and Setup](https://confluence.esteeonline.com/display/QAP/ELCelerate+-+Getting+Started)
- [Parallel test execution](https://confluence.esteeonline.com/display/QAP/ELCelerate+-+Parallel+Test+Execution)
- [Reports](https://confluence.esteeonline.com/pages/viewpage.action?pageId=424083948)

## Maintainers
This repo is maintained by the [QAP group](https://confluence.esteeonline.com/pages/viewpage.action?pageId=424083948#:~:text=9%2B-,QA%20Automation%20Platform,-Pages)
We welcome any feedback and questions. For now we are driving the development of this platform, but we want all ELC to participate in making this system best in class. If you have changes or features you would like to add, feel free to open a PR and/or contact us to discuss.
