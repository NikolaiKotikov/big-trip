import {TransportationType} from '../enums';

/**
 *
 * @type {TravelItem[]}
 */
export const mockOffers = [
  {
    'type': TransportationType.TAXI,
    'offers': [
      {
        'id': '218e87ca-6a56-4caf-be3e-f713c68b763d',
        'title': 'Upgrade to a business class',
        'price': 108
      },
      {
        'id': 'bb2d0758-267d-4ebf-96f2-e9de40c173f7',
        'title': 'Choose the radio station',
        'price': 45
      },
      {
        'id': 'a674ff10-b55f-43ec-b27d-befca7de177f',
        'title': 'Choose temperature',
        'price': 91
      },
      {
        'id': '68314cb4-19c5-40fc-a5f0-8fde19ca32a3',
        'title': 'Drive quickly, I\'m in a hurry',
        'price': 144
      },
      {
        'id': '3829b640-11d0-4abd-889b-3a790f3ef937',
        'title': 'Drive slowly',
        'price': 94
      }
    ]
  },
  {
    'type': TransportationType.BUS,
    'offers': [
      {
        'id': '9441f374-9a90-409d-9ed5-86fcdaf9c4ea',
        'title': 'Infotainment system',
        'price': 74
      },
      {
        'id': '45fffbbf-fe25-42a4-ab5c-a8e77d975517',
        'title': 'Order meal',
        'price': 93
      },
      {
        'id': '56872a3e-863b-4471-92bc-d76d101462eb',
        'title': 'Choose seats',
        'price': 76
      }
    ]
  },
  {
    'type': TransportationType.TRAIN,
    'offers': [
      {
        'id': 'ba4f5b0d-1f87-4c31-927d-f0ab5a4cd75e',
        'title': 'Book a taxi at the arrival point',
        'price': 72
      },
      {
        'id': '9c210048-3258-4b79-9fe8-55df65c11a7c',
        'title': 'Order a breakfast',
        'price': 63
      },
      {
        'id': 'ce75bd79-fb58-4e1d-9cf5-3b7842c44a74',
        'title': 'Wake up at a certain time',
        'price': 131
      }
    ]
  },
  {
    'type': TransportationType.FLIGHT,
    'offers': [
      {
        'id': '57e8a39f-3505-4c69-85d5-4d4179ce8eb6',
        'title': 'Choose meal',
        'price': 161
      },
      {
        'id': '7c3d4a38-a98e-4b4f-aee2-359c0e5c7792',
        'title': 'Choose seats',
        'price': 96
      },
      {
        'id': '8eb3ab26-5637-42e3-a5df-8722632e19d6',
        'title': 'Upgrade to comfort class',
        'price': 93
      },
      {
        'id': '78817aef-8a7f-4d33-9adc-60f3c7f5bbad',
        'title': 'Upgrade to business class',
        'price': 150
      },
      {
        'id': 'e99253ac-6fe5-4b0b-a4e0-e9d6c9f90be3',
        'title': 'Add luggage',
        'price': 73
      },
      {
        'id': '1becf673-26e7-4bd8-9089-f3bb38e0e7e2',
        'title': 'Business lounge',
        'price': 52
      }
    ]
  },
  {
    'type': TransportationType.CHECK_IN,
    'offers': [
      {
        'id': 'a518ef53-9242-4257-ba41-370d688ffd7a',
        'title': 'Choose the time of check-in',
        'price': 41
      },
      {
        'id': '9dce4924-cd6b-4c37-966a-91ca7b7a35bb',
        'title': 'Choose the time of check-out',
        'price': 75
      },
      {
        'id': '821cbcc9-a29d-4b0c-be64-c56e85ce4bcd',
        'title': 'Add breakfast',
        'price': 198
      },
      {
        'id': '5f8ecc90-1898-4aee-b8dd-8637556b3099',
        'title': 'Laundry',
        'price': 148
      },
      {
        'id': '18a52b43-542c-4dd8-9e1c-86c4ea5b6dbb',
        'title': 'Order a meal from the restaurant',
        'price': 96
      }
    ]
  },
  {
    'type': TransportationType.SIGHTSEEING,
    'offers': []
  },
  {
    'type': TransportationType.SHIP,
    'offers': [
      {
        'id': 'e4882547-6b4b-4604-b15c-74413229aded',
        'title': 'Choose meal',
        'price': 153
      },
      {
        'id': 'b2f684d4-217f-4832-9109-061622a7f09d',
        'title': 'Choose seats',
        'price': 167
      },
      {
        'id': '729bdfde-ddf4-4bb5-b995-50330604d0ef',
        'title': 'Upgrade to comfort class',
        'price': 158
      },
      {
        'id': 'e831989a-303e-44f7-b659-377107592fcc',
        'title': 'Upgrade to business class',
        'price': 75
      },
      {
        'id': 'ad054dbe-2e32-4b23-91b8-115dd0ae4cff',
        'title': 'Add luggage',
        'price': 163
      },
      {
        'id': 'cdc79f7d-f7c7-4df8-b671-6d10c0d0ad52',
        'title': 'Business lounge',
        'price': 119
      }
    ]
  },
  {
    'type': TransportationType.DRIVE,
    'offers': [
      {
        'id': 'c38b9760-8d81-4e66-b741-69df2d5db1ee',
        'title': 'With automatic transmission',
        'price': 76
      },
      {
        'id': 'cc22f280-58be-4355-80bf-c28116ef6f50',
        'title': 'With air conditioning',
        'price': 128
      }
    ]
  },
  {
    'type': TransportationType.RESTAURANT,
    'offers': [
      {
        'id': 'ad3ee7f1-7ec7-4f00-b390-1ffd50f353b1',
        'title': 'Choose live music',
        'price': 70
      },
      {
        'id': '4f39ab85-757b-4c8a-af1c-0d9a6bd4f3ba',
        'title': 'Choose VIP area',
        'price': 54
      }
    ]
  }
];
