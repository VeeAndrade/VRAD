import React from 'react';
import  { shallow } from 'enzyme';
import Listing from './Listing';

describe('Listing', () => {
  it('should match the snapshot with all the data passed in correctly', () => {
    const mockMatched = {
      listing_id: 3,
      area_id: 590,
      name: "Hip RiNo Party Spot",
      address: {
        street: "2250 Lawrence St",
        zip: "80205"
      },
      details: {
        neighborhood_id: 5124122,
        superhost: true,
        seller_source: "91jss1",
        beds: 3,
        baths: 2.5,
        cost_per_night: 420,
        features: [
          "hot tub",
          "espresso machine"
        ],
      },
      dev_id: "u4gh2j",
      area: "rino",
      db_connect: 834470
    }
    const mockFavorites = {
      listing_id: 3,
      area_id: 590,
      name: "Hip RiNo Party Spot",
      address: {
        street: "2250 Lawrence St",
        zip: "80205"
      },
      details: {
        neighborhood_id: 5124122,
        superhost: true,
        seller_source: "91jss1",
        beds: 3,
        baths: 2.5,
        cost_per_night: 420,
        features: [
          "hot tub",
          "espresso machine"
        ],
      },
      dev_id: "u4gh2j",
      area: "rino",
      db_connect: 834470
    }
    const wrapper = shallow(<Listing 
      matched={mockMatched}
      userFavorites={[mockFavorites]}
      removeFromFavorites={jest.fn()}
      addToFavorites={jest.fn()}
    />)
    expect(wrapper).toMatchSnapshot();
  })
})