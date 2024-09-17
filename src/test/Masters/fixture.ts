export const insert_master_request = {
  validRequest: {
    id: 'api.master.create',
    ver: '1.0',
    ts: '2024-09-05T01:51:36Z',
    params: {
      msgid: 'c43785c4-d02a-411d-8466-466ad8ae6fba',
    },
    request: {
      boardData: [
        {
          name: { en: 'Board 9', ka: 'ಬೋರ್ಡ್ 9' },
          description: { en: 'Description for 9' },
        },
      ],
      classData: [
        {
          name: { en: 'Class One' },
          description: { en: 'Description for Class One' },
          prerequisites: ['Class Zero'],
        },
        {
          name: { en: 'Class Two', ka: 'ವರ್ಗ ಎರಡು' },
          description: { en: 'Description for Class Two' },
          prerequisites: ['Class One'],
        },
      ],
      subskillData: [
        {
          name: { en: 'x+0' },
          description: { en: 'Description for X+)' },
        },
      ],
    },
  },

  invalidSchema: {
    id: 'api.master.create',
    ver: '1.0',
    ts: '2024-09-05T01:51:36Z',
    params: {
      msgid: 'test-msg-id',
    },
    request: {
      board: [
        {
          name: '',
          description: 'Description for Board 1',
          class_id: [],
        },
      ],
      class: [],
    },
  },
};

export const search_master_request = {
  validequest: {
    id: 'api.master.search',
    ver: '1.0',
    ts: new Date().toISOString(),
    params: { msgid: 'test-msg-id' },
    request: {
      entityType: 'subSkill',
      filters: {
        name: { en: 'x+0' },
      },
      limit: 10,
      offset: 0,
    },
  },

  invalidSchemaRequest: {
    id: 'api.master.search',
    ver: '1.0',
    ts: '2024-09-03T12:34:56Z',

    request: {
      filters: {},
      limit: 10,
      offset: 0,
    },
  },
};
