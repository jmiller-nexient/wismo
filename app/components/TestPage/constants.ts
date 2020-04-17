export const fakeProductList = [
  {
    productType: 'RES_GAS',
    serviceDate: '2020-04-22'
  },
  {
    productType: 'RES_ELECTRIC',
    serviceDate: '2020-04-22'
  },
  {
    productType: 'IAC',
    serviceDate: '2020-04-22'
  }
];

export const fakeServiceRequest = {
  serviceRequestType: 'MIMO_START',
  premiseId: 'premise123',
  accountNumber: '111122233334', // possibly null until MIMO Doc is created
  serviceRequestStatusUpdates: [
  {
    serviceRequestStatus: 'REQUESTED',
    createdAt: '2020-03-19T13:15:30Z'
  },
],
  address: {
    line1: '123 Main',
    line2: null,
    city: 'Bloomfield',
    state: 'MI',
    zip: '48301'
},
  wantDate: '2020-04-22', // null until MIMO Doc is created
  products: [
  {
    productType: 'RES_GAS',
    serviceDate: '2020-04-22'
  },
  {
    productType: 'RES_ELECTRIC',
    serviceDate: '2020-04-22'
  },
  {
    productType: 'IAC',
    serviceDate: '2020-04-22'
  },
],
  advisements: [
  'OVER_18',
],
  verificationEvents: [
  {
    verificationEventStatus: 'ACTIVE',
    verificationCode: 'DR',
    verificationDescription: 'Additional Documentation Required',
    createdAt: '2020-03-19T13:15:30Z',
    verificationEventStatusUpdates: [
      {
        verificationEventStatus: 'ACTIVE',
        createdAt: '2020-03-19T13:15:30Z'
      },
    ]
  }
],
  serviceOrderEvents: [
  {
    serviceOrderId: '123456789',
    createdAt: '2020-03-05T13:15:30Z',
    status: 'COMPLETED',
    serviceOrderEventStatusUpdates: [
      {
        serviceOrderEventStatus: 'CREATED',
        createdAt: '2020-03-23T16:22:45Z'
      },
    ],
    products: [
      {
        productType: 'RES_ELECTRIC',
        serviceDate: '2020-04-22'
      },
    ],
    appointment: {
      date: '2020-04-17',
      appointmentWindow: {
        startTime: '10:00',
        endTime: '14:00',
      }
    },
    contactPhoneNumber: '7348675309',
  }
]
};
