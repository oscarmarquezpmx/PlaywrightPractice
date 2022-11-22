

export class RandomValues {

  constructor() {};

  async fetchData(url: string){
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    } catch (error) {
      console.error('Unable to fetch data:', error);
    }
  }

    fetchNames(nameType: string){
      return this.fetchData(`https://www.randomlists.com/data/names-${nameType}.json`);
    }

    pickRandom (list : string[]) {
      return list[Math.floor(Math.random() * list.length)];
    }

    async generateName(gender: string){
      try {
        const response = await Promise.all([
          this.fetchNames(gender || this.pickRandom(['male', 'female'])),
          this.fetchNames('surnames')
        ]);

        const [firstNames, lastNames] = response;

        const firstName = this.pickRandom(firstNames.data);
        const lastName = this.pickRandom(lastNames.data);
        console.log("", firstName, lastName);
        return `${firstName} ${lastName}`;
      } catch (error) {
        console.error('Unable to generate name:', error);
      }
  }


  async test(){

    let gender = "male";
    console.log(gender);
    var response = await this.generateName("male");


    console.log(response);
  }
}