<br />
<p align="center">
  <img src="https://assets.website-files.com/63443c840cfd046fe593bf33/636a7824b7ac60050f56493e_Linkedin%20-%20Open%20Graph%20Image%20URL.png" alt="Logo" width="200" height="100">
   
  <h3 align="center">Lightsoff Review Generator</h3>

  <p align="center">
    Generate Lightsoff Google reviews thanks to OpenAI GPT-3 text-generating language model
    <br />
    <a href="https://github.com/deuzu/openai-lightsoff/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/deuzu/openai-lightsoff/issues">Report Bug</a>
    ·
    <a href="https://github.com/deuzu/openai-lightsoff/issues">Request Feature</a>
    ·
    <a href="https://github.com/deuzu/openai-lightsoff/pulls">Send a Pull Request</a>
  </p>
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About The Project

To do

### Built With

- [OpenAI](https://openai.com/) & [GPT-3](https://beta.openai.com/docs/models/gpt-3)
- [NodeJS](https://nodejs.org)

## Getting Started

### Installation

```console
cp .env.example .env
# Then edit .env
npm install
```

### Start Reviews Generation

```console
npm start <method completion | rephrase(default: completion)> <iterations (default: 1)> <slugIdStarter (default: 1)>
```

### Shortcut with OpenAi method

```console
npm completion <iterations (default: 1)> <slugIdStarter (default: 1)>
```

### Shortcut with DeepL method

```console
npm rephrase <iterations (default: 1)> <slugIdStarter (default: 1)>
```

The review format is a `csv` compatible with Webflow's CMS import.
`slugIdStarter` should be the last id in Webflow's CMS + 1 in order to continue a sequence.

### Project Structure

`index.js` => main file  
`completion.js` => it queries OpenAI completion API  
`prompt.js` => build the prompt given to OpenAI completion API  
`results.txt` => where results are stored

## Contributing

To do

## License

To do

## Contact

To do
