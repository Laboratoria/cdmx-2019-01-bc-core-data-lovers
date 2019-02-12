const getData = require('../src/data.js');
const INJURIES = {
  "Total_Injured_Persons": 3061790,
  "Total_Injured_Persons_Highway": 2125184,
  "Total_Injured_Persons_Bus_Occupants": 15427,
  "Total_Injured_Persons_Motorcyclists": 60236,
  "Total_Injured_Persons_Passenger_Car_Occupants": 1926625,
  "Total_Injured_Persons_Pedalcyclists": 45277,
  "Total_Injured_Persons_Pedestrians": 77619,
  "Year": "2001-01-04"
}

describe('getData', () => {
  it('is a object', () => {
    expect(typeof getData).toBe('object');
  });

  describe('data.getData', () => {
    it('is a function',() => {
      expect(typeof window.data.getData).toBe('function');
    });
  });

   it('should return 77619', () => {
    expect(window.data.getData(INJURIES)['Total_Injured_Persons_Pedestrians']).toEqual('77619');
   });
});
