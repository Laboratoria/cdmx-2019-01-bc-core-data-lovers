
const getData = require('../src/data.js');
require('../src/data/injuries/injuries.js')

describe('getData', () => {
      it('is a object', () => {
        expect(typeof getData).toBe('object');
      });

      describe('data.getData', () => {
        it('is a function', () => {
          expect(typeof window.data.getData).toBe('function');
        });
      });

        it('should return [{"number": 77619, "year": "2001"}, {"number": 70664, "year": "2002"}, {"number": undefined, "year": "2003"}, {"number": undefined, "year": "2004"}, {"number": undefined, "year": "2005"}, {"number": undefined, "year": "2006"}, {"number": undefined, "year": "2007"}, {"number": undefined, "year": "2008"}, {"number": undefined, "year": "2009"}, {"number": undefined, "year": "2010"}, {"number": undefined, "year": "2011"}, {"number": undefined, "year": "2012"}, {"number": undefined, "year": "2013"}, {"number": undefined, "year": "2014"}, {"number": undefined, "year": "2015"}, {"number": undefined, "year": "2016"}]', () => {
          expect(window.data.getData(window.INJURIES,'2001-01-04','Total_Injured_Persons_Pedestrians')).toEqual([{"number": undefined, "year": "2001"}, {"number": undefined, "year": "2002"}, {"number": undefined, "year": "2003"}, {"number": undefined, "year": "2004"}, {"number": undefined, "year": "2005"}, {"number": undefined, "year": "2006"}, {"number": undefined, "year": "2007"}, {"number": undefined, "year": "2008"}, {"number": undefined, "year": "2009"}, {"number": undefined, "year": "2010"}, {"number": undefined, "year": "2011"}, {"number": undefined, "year": "2012"}, {"number": undefined, "year": "2013"}, {"number": undefined, "year": "2014"}, {"number": undefined, "year": "2015"}, {"number": undefined, "year": "2016"}]);
          });

      describe('data.consult', () => {
        it('is a function', () => {
          expect(typeof window.data.consult).toBe('function');
            });
          });
        it('should return [{Total_Injured_Persons_Bus_Occupants: 15427, Total_Injured_Persons_Motorcyclists: 60236, Total_Injured_Persons_Passenger_Car_Occupants: 1926625, Total_Injured_Persons_Pedalcyclists: 45277, Total_Injured_Persons_Pedestrians: 77619}', () => {
              expect(window.data.consult(window.INJURIES,'2001-01-04')).toEqual({'Total_Injured_Persons_Bus_Occupants': 15427, 'Total_Injured_Persons_Motorcyclists': 60236, 'Total_Injured_Persons_Passenger_Car_Occupants': 1926625, 'Total_Injured_Persons_Pedalcyclists': 45277, 'Total_Injured_Persons_Pedestrians': 77619});
              });



      });
