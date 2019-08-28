

class Compute {
  constructor(data) {
    if(!data) {
      throw new Error('Data not provided');
    }
    this.data = data;
  }

  displayCommission() {
    console.log(this.data);
  }
}

module.exports = Compute;
