import fetch from 'node-fetch';
import fs from 'fs';

const URL = 'https://api.github.com/search/repositories?q=language:javascript&stars:%3E0&sort=stars&per_page=100';
const OUTPUT_FILE = 'code-results.txt';

const logger = fs.createWriteStream(OUTPUT_FILE, {
  flags: 'w'
});

const get_html_urls = json_blob => {
    const { items } = json_blob;
    try {
      const just_html_urls = items.map(project => project.html_url)
      return just_html_urls;
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
}

const writeOutHTMLLinks = json => {
  try{
    const jsonObject = get_html_urls(json)
    jsonObject.forEach(item => logger.write(item + '\n'))
  } catch (error) {
    console.log(error);
  }
}

const grabRepos = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    writeOutHTMLLinks(json);
  } catch (error) {
    console.log(error);
  }
};

grabRepos(URL);
