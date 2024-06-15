import {TransportationType} from '../enums';

/**
 *
 * @type {Point[]}
 */
export const mockPoints = [
  {
    'id': '4f811ddf-c746-4f7c-b0d2-de0fb3584d07',
    'base_price': 4594,
    'date_from': '2024-06-05T20:58:08.225Z',
    'date_to': '2024-06-07T21:46:08.225Z',
    'destination': 'cfcb1b6e-d815-487c-8f35-a605d8f62001',
    'is_favorite': true,
    'offers': [],
    'type': TransportationType.BUS
  },
  {
    'id': '38b25563-9912-427b-99c6-dd126a3df43e',
    'base_price': 9260,
    'date_from': '2024-06-09T18:50:08.225Z',
    'date_to': '2024-06-10T04:27:08.225Z',
    'destination': 'cfcb1b6e-d815-487c-8f35-a605d8f62001',
    'is_favorite': false,
    'offers': [],
    'type': TransportationType.DRIVE
  },
  {
    'id': '51d54896-4e21-47bb-b74f-884d8829a78c',
    'base_price': 4725,
    'date_from': '2024-06-11T09:36:08.225Z',
    'date_to': '2024-06-12T06:19:08.225Z',
    'destination': '7f80f019-ba81-489e-bad1-ee902685795d',
    'is_favorite': false,
    'offers': [
      '7c3d4a38-a98e-4b4f-aee2-359c0e5c7792',
      '8eb3ab26-5637-42e3-a5df-8722632e19d6',
      '78817aef-8a7f-4d33-9adc-60f3c7f5bbad',
      'e99253ac-6fe5-4b0b-a4e0-e9d6c9f90be3',
      '1becf673-26e7-4bd8-9089-f3bb38e0e7e2'
    ],
    'type': TransportationType.FLIGHT
  },
  {
    'id': 'beebb2ba-8655-4ef1-85ad-721a7e28f5bc',
    'base_price': 7159,
    'date_from': '2024-06-14T04:06:08.225Z',
    'date_to': '2024-06-16T04:48:08.225Z',
    'destination': '7f80f019-ba81-489e-bad1-ee902685795d',
    'is_favorite': false,
    'offers': [
      '4f39ab85-757b-4c8a-af1c-0d9a6bd4f3ba'
    ],
    'type': TransportationType.RESTAURANT
  },
  {
    'id': '754b68a0-63f7-45de-9ebe-4443681fb753',
    'base_price': 5187,
    'date_from': '2024-06-17T11:56:08.225Z',
    'date_to': '2024-06-19T07:53:08.225Z',
    'destination': 'b81918ca-e4fc-41fc-a555-05a55bd356ad',
    'is_favorite': true,
    'offers': [],
    'type': TransportationType.SIGHTSEEING
  },
  {
    'id': 'a3ce32a7-25aa-4514-aff4-f356ead91537',
    'base_price': 7246,
    'date_from': '2024-06-20T02:46:08.225Z',
    'date_to': '2024-06-21T00:23:08.225Z',
    'destination': '41b55f13-653b-49b4-8b19-585881983aac',
    'is_favorite': false,
    'offers': [
      '56872a3e-863b-4471-92bc-d76d101462eb'
    ],
    'type': TransportationType.BUS
  },
  {
    'id': '41a27c38-c0e8-4248-9244-1ab717401d59',
    'base_price': 7851,
    'date_from': '2024-06-21T13:35:08.225Z',
    'date_to': '2024-06-21T23:06:08.225Z',
    'destination': '677d49ff-f60e-4280-819b-5819eb2019cf',
    'is_favorite': true,
    'offers': [],
    'type': TransportationType.BUS
  },
  {
    'id': 'b09cf48c-18ed-4f7e-9680-48f04a76889f',
    'base_price': 8549,
    'date_from': '2024-06-23T01:17:08.225Z',
    'date_to': '2024-06-24T04:14:08.225Z',
    'destination': 'cfcb1b6e-d815-487c-8f35-a605d8f62001',
    'is_favorite': true,
    'offers': [
      '57e8a39f-3505-4c69-85d5-4d4179ce8eb6',
      '7c3d4a38-a98e-4b4f-aee2-359c0e5c7792',
      '8eb3ab26-5637-42e3-a5df-8722632e19d6',
      '78817aef-8a7f-4d33-9adc-60f3c7f5bbad',
      'e99253ac-6fe5-4b0b-a4e0-e9d6c9f90be3',
      '1becf673-26e7-4bd8-9089-f3bb38e0e7e2'
    ],
    'type': TransportationType.FLIGHT
  },
  {
    'id': 'bda22163-0878-4a28-97fd-397a87bd3b34',
    'base_price': 1702,
    'date_from': '2024-06-25T00:59:08.225Z',
    'date_to': '2024-06-26T03:16:08.225Z',
    'destination': '41b55f13-653b-49b4-8b19-585881983aac',
    'is_favorite': true,
    'offers': [],
    'type': TransportationType.SIGHTSEEING
  },
  {
    'id': '04eca408-aec0-4f6d-b6b1-aff1a9d24418',
    'base_price': 6239,
    'date_from': '2024-06-28T00:31:08.225Z',
    'date_to': '2024-06-29T03:47:08.225Z',
    'destination': 'fc50f1f0-a909-48d7-add3-7564a1ea418c',
    'is_favorite': true,
    'offers': [],
    'type': TransportationType.SIGHTSEEING
  },
  {
    'id': '72ef1aa5-5509-4aa3-b6c6-732836d65991',
    'base_price': 6297,
    'date_from': '2024-06-30T04:33:08.225Z',
    'date_to': '2024-06-30T17:12:08.225Z',
    'destination': '8cbaa714-f5b6-470b-9cfa-91f5d259b308',
    'is_favorite': false,
    'offers': [
      'e4882547-6b4b-4604-b15c-74413229aded',
      'b2f684d4-217f-4832-9109-061622a7f09d',
      '729bdfde-ddf4-4bb5-b995-50330604d0ef',
      'e831989a-303e-44f7-b659-377107592fcc',
      'ad054dbe-2e32-4b23-91b8-115dd0ae4cff',
      'cdc79f7d-f7c7-4df8-b671-6d10c0d0ad52'
    ],
    'type': TransportationType.SHIP
  },
  {
    'id': '021153f3-76ef-4960-98eb-17ea7ad60ac2',
    'base_price': 8190,
    'date_from': '2024-07-01T03:06:08.225Z',
    'date_to': '2024-07-02T14:51:08.225Z',
    'destination': 'cfcb1b6e-d815-487c-8f35-a605d8f62001',
    'is_favorite': true,
    'offers': [
      'cc22f280-58be-4355-80bf-c28116ef6f50'
    ],
    'type': TransportationType.DRIVE
  },
  {
    'id': 'b1d46657-61c1-4800-805b-1862d9b4cf4e',
    'base_price': 1138,
    'date_from': '2024-07-04T12:57:08.225Z',
    'date_to': '2024-07-05T03:51:08.225Z',
    'destination': '677d49ff-f60e-4280-819b-5819eb2019cf',
    'is_favorite': false,
    'offers': [],
    'type': TransportationType.SIGHTSEEING
  },
  {
    'id': 'b9ef5fad-b362-488c-ae8f-a8e8a7d3286e',
    'base_price': 2026,
    'date_from': '2024-07-05T15:14:08.225Z',
    'date_to': '2024-07-07T01:56:08.225Z',
    'destination': 'cfcb1b6e-d815-487c-8f35-a605d8f62001',
    'is_favorite': false,
    'offers': [],
    'type': TransportationType.TAXI
  },
  {
    'id': '114a54fb-98c8-4858-8678-ff64e3f77edc',
    'base_price': 908,
    'date_from': '2024-07-07T16:16:08.225Z',
    'date_to': '2024-07-08T14:08:08.225Z',
    'destination': 'fc50f1f0-a909-48d7-add3-7564a1ea418c',
    'is_favorite': false,
    'offers': [
      '56872a3e-863b-4471-92bc-d76d101462eb'
    ],
    'type': TransportationType.BUS
  },
  {
    'id': 'cf135168-7690-4e41-8384-15c654e043e6',
    'base_price': 8337,
    'date_from': '2024-07-09T13:44:08.225Z',
    'date_to': '2024-07-11T10:13:08.225Z',
    'destination': '41b55f13-653b-49b4-8b19-585881983aac',
    'is_favorite': false,
    'offers': [
      'c38b9760-8d81-4e66-b741-69df2d5db1ee',
      'cc22f280-58be-4355-80bf-c28116ef6f50'
    ],
    'type': TransportationType.DRIVE
  },
  {
    'id': '1b29c4b8-24b3-4ada-8448-4d40dc855d4b',
    'base_price': 6343,
    'date_from': '2024-07-11T17:03:08.225Z',
    'date_to': '2024-07-12T14:57:08.225Z',
    'destination': 'fc50f1f0-a909-48d7-add3-7564a1ea418c',
    'is_favorite': true,
    'offers': [],
    'type': TransportationType.RESTAURANT
  },
  {
    'id': '3af46366-d0f5-44db-837e-f60d41327bd6',
    'base_price': 9919,
    'date_from': '2024-07-13T20:23:08.225Z',
    'date_to': '2024-07-15T07:46:08.225Z',
    'destination': '8cbaa714-f5b6-470b-9cfa-91f5d259b308',
    'is_favorite': false,
    'offers': [
      '218e87ca-6a56-4caf-be3e-f713c68b763d',
      'bb2d0758-267d-4ebf-96f2-e9de40c173f7',
      'a674ff10-b55f-43ec-b27d-befca7de177f',
      '68314cb4-19c5-40fc-a5f0-8fde19ca32a3',
      '3829b640-11d0-4abd-889b-3a790f3ef937'
    ],
    'type': TransportationType.TAXI
  },
  {
    'id': 'fce0c0af-caf8-49a0-9ae9-ed2bb12446a5',
    'base_price': 5619,
    'date_from': '2024-07-16T16:48:08.225Z',
    'date_to': '2024-07-17T02:30:08.225Z',
    'destination': '8cbaa714-f5b6-470b-9cfa-91f5d259b308',
    'is_favorite': true,
    'offers': [
      'b2f684d4-217f-4832-9109-061622a7f09d',
      '729bdfde-ddf4-4bb5-b995-50330604d0ef',
      'e831989a-303e-44f7-b659-377107592fcc',
      'ad054dbe-2e32-4b23-91b8-115dd0ae4cff',
      'cdc79f7d-f7c7-4df8-b671-6d10c0d0ad52'
    ],
    'type': TransportationType.SHIP
  },
  {
    'id': '78378906-90a7-49cc-9c77-1d1daf6433eb',
    'base_price': 3784,
    'date_from': '2024-07-17T22:20:08.225Z',
    'date_to': '2024-07-18T15:03:08.225Z',
    'destination': '8cbaa714-f5b6-470b-9cfa-91f5d259b308',
    'is_favorite': true,
    'offers': [
      '8eb3ab26-5637-42e3-a5df-8722632e19d6',
      '78817aef-8a7f-4d33-9adc-60f3c7f5bbad',
      'e99253ac-6fe5-4b0b-a4e0-e9d6c9f90be3',
      '1becf673-26e7-4bd8-9089-f3bb38e0e7e2'
    ],
    'type': TransportationType.FLIGHT
  },
  {
    'id': '649a48ef-fc53-448c-9903-3490ea71a814',
    'base_price': 472,
    'date_from': '2024-07-20T13:26:08.225Z',
    'date_to': '2024-07-20T19:51:08.225Z',
    'destination': 'b81918ca-e4fc-41fc-a555-05a55bd356ad',
    'is_favorite': true,
    'offers': [
      'e831989a-303e-44f7-b659-377107592fcc',
      'ad054dbe-2e32-4b23-91b8-115dd0ae4cff',
      'cdc79f7d-f7c7-4df8-b671-6d10c0d0ad52'
    ],
    'type': TransportationType.SHIP
  },
  {
    'id': '1cc93363-cb20-4de3-816b-1f8ddced0bdd',
    'base_price': 3967,
    'date_from': '2024-07-22T13:22:08.225Z',
    'date_to': '2024-07-24T13:41:08.225Z',
    'destination': 'dd55f14a-67ae-4cd4-b197-1ed36964d3b3',
    'is_favorite': false,
    'offers': [
      '821cbcc9-a29d-4b0c-be64-c56e85ce4bcd',
      '5f8ecc90-1898-4aee-b8dd-8637556b3099',
      '18a52b43-542c-4dd8-9e1c-86c4ea5b6dbb'
    ],
    'type': TransportationType.CHECK_IN
  },
  {
    'id': 'e8787559-6bb8-4153-be9d-277c8e449742',
    'base_price': 8538,
    'date_from': '2024-07-26T01:50:08.225Z',
    'date_to': '2024-07-27T01:48:08.225Z',
    'destination': '7f80f019-ba81-489e-bad1-ee902685795d',
    'is_favorite': true,
    'offers': [
      'c38b9760-8d81-4e66-b741-69df2d5db1ee',
      'cc22f280-58be-4355-80bf-c28116ef6f50'
    ],
    'type': TransportationType.DRIVE
  },
  {
    'id': '7142b3ef-ff45-4c5d-8a89-8c47bc9a09e4',
    'base_price': 7160,
    'date_from': '2024-07-27T17:11:08.225Z',
    'date_to': '2024-07-28T10:57:08.225Z',
    'destination': '8cbaa714-f5b6-470b-9cfa-91f5d259b308',
    'is_favorite': true,
    'offers': [],
    'type': TransportationType.RESTAURANT
  },
  {
    'id': 'cfc2cf45-aa34-49f6-88ac-3c6d7129cb0f',
    'base_price': 7651,
    'date_from': '2024-07-29T11:11:08.225Z',
    'date_to': '2024-07-30T15:06:08.225Z',
    'destination': 'cfcb1b6e-d815-487c-8f35-a605d8f62001',
    'is_favorite': true,
    'offers': [
      '4f39ab85-757b-4c8a-af1c-0d9a6bd4f3ba'
    ],
    'type': TransportationType.RESTAURANT
  }

];
