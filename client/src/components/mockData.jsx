import React from 'react';

mockData = {
  'restaurants': [
    { 'id': 'molinari-delicatessen-san-francisco',
      'restaurant': 'Molinari Delicatessen',
      'priceRange': '$$',
      'rating': 4.5,
      'zip_code': '94133',
      'address1': '373 Columbus Ave'
    },
    { 'id': 'another-delicatessen-san-francisco',
      'restaurant': 'Another Delicatessen',
      'priceRange': '$$$',
      'rating': 3.5,
      'zip_code': '94132',
      'address1': '372 Columbus Ave'
    },
    { 'id': 'fake-delicatessen-san-francisco',
      'restaurant': 'Fake Delicatessen',
      'priceRange': '$$$$',
      'rating': 2.5,
      'zip_code': '94131',
      'address1': '371 Columbus Ave'
    }
  ],

  'users': [
    { 'id': 9876,
      'username': 'Dylan',
      'password': 'dylanspassword',
      'zip_code': '94131',
      'preferences': 'halal vegan italian chinese japanese filipino paleo gluten-free',
      'currentQuest': '12345'
    }
  ],

  'quests': [
    {
      'id': 8765,
      'creator': 'Dylan',
      'task1': 'Molinari Delicatessen',
      'task1Completed': true,
      'task2': 'Fake Delicatessen',
      'task2Completed': false,
      'task3': 'Another Delicatessen',
      'task3Completed': false
    },
    {
      'id': 8766,
      'creator': 'Maddy',
      'task1': 'Moody Delicatessen',
      'task1Completed': true,
      'task2': 'Last Delicatessen',
      'task2Completed': false,
      'task3': 'First Delicatessen',
      'task3Completed': false
    },
    {
      'id': 8767,
      'creator': 'Bevan',
      'task1': 'Mole Delicatessen',
      'task1Completed': true,
      'task2': 'Fakey Delicatessen',
      'task2Completed': false,
      'task3': 'Anotha Delicatessen',
      'task3Completed': false
    }
  ]
};

export default mockData;
