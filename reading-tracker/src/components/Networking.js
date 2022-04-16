export default class Networking {
  async getMetaData(doi) {
    const response = await fetch(`https://api.crossref.org/works/${doi}`, {
      method: 'GET',
      headers: {
        'User-Agent': 'kiranaatkar@gmail.com',
      },
    });
    const data = response.status === 200 ? await response.json() : null;
    return data;
  }
}
