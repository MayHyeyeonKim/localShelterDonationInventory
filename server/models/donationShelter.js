// donationShelter.js
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class DonationShelter {
    constructor() {
        this.donations = [];
    }

    addDonation(newDonation) {
        this.donations.push(newDonation);
        console.log('New donation added:', newDonation);
    }

    getDonations() {
        return this.donations;
    }
}

const shelter = new DonationShelter();

export default shelter;
