const events = require('./events');

describe('groupEventsByDay', () => {
  const testEvents = [
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 101,
      startsAt: '2021-01-25T13:01:11Z',
      endsAt: '2021-01-25T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 162,
      startsAt: '2021-01-28T13:01:11Z',
      endsAt: '2021-01-28T15:01:11Z',
      title: 'Dinner',
    },
    {
      id: 184,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Dinner',
    },
  ];

  const expectedResult = {
    0: [
      {
        id: 101,
        startsAt: '2021-01-25T13:01:11Z',
        endsAt: '2021-01-25T15:01:11Z',
        title: 'Daily walk',
      },
    ],
    2: [
      {
        id: 107,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
      {
        id: 184,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Dinner',
      },
    ],
    3: [
      {
        id: 162,
        startsAt: '2021-01-28T13:01:11Z',
        endsAt: '2021-01-28T15:01:11Z',
        title: 'Dinner',
      },
    ],
  };

  test('Sort each event by day and group events by day', () => {
    const eventsByDay = events.groupEventsByDay(testEvents);
    expect(eventsByDay).toEqual(expectedResult);
  });

  const singleEvent = [
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
  ];

  const expectedSingleEventResult = {
    0: [
      {
        id: 107,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Daily walk',
      },
    ],
  };

  test('Returns a single JSON if single event is given', () => {
    const eventsByDay = events.groupEventsByDay(singleEvent);
    expect(eventsByDay).toEqual(expectedSingleEventResult);
  });

  const emptyEventList = [];

  test('Returns empty JSON if events list is empty', () => {
    const eventsByDay = events.groupEventsByDay(emptyEventList);
    expect(eventsByDay).toEqual({});
  });
});

describe('moveEvent', () => {
  const testEvents = [
    {
      id: 107,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 101,
      startsAt: '2021-01-25T13:01:11Z',
      endsAt: '2021-01-25T15:01:11Z',
      title: 'Daily walk',
    },
    {
      id: 162,
      startsAt: '2021-01-28T13:01:11Z',
      endsAt: '2021-01-28T15:01:11Z',
      title: 'Dinner',
    },
    {
      id: 184,
      startsAt: '2021-01-27T13:01:11Z',
      endsAt: '2021-01-27T15:01:11Z',
      title: 'Dinner',
    },
  ];

  const expectedMoveEventResult = {
    0: [
      {
        id: 101,
        startsAt: '2021-01-25T13:01:11Z',
        endsAt: '2021-01-25T15:01:11Z',
        title: 'Daily walk',
      },
    ],
    2: [
      {
        id: 184,
        startsAt: '2021-01-27T13:01:11Z',
        endsAt: '2021-01-27T15:01:11Z',
        title: 'Dinner',
      },
    ],
    3: [
      {
        id: 162,
        startsAt: '2021-01-28T13:01:11Z',
        endsAt: '2021-01-28T15:01:11Z',
        title: 'Dinner',
      },
    ],
    6: [
      {
        id: 107,
        startsAt: '2021-01-31T13:01:11.000Z',
        endsAt: '2021-01-31T15:01:11.000Z',
        title: 'Daily walk',
      },
    ],
  };

  test('Returns event list after event is moved forward', () => {
    const eventsByDay = events.groupEventsByDay(testEvents);
    const updatedEventsByDay = events.moveEventToDay(eventsByDay, 107, 6);
    expect(updatedEventsByDay).toEqual(expectedMoveEventResult);
  });

  test('Returns an error after a negative toDay value is given', () => {
    const toDay = -3;
    const eventsByDay = events.groupEventsByDay(testEvents);
    expect(() => events.moveEventToDay(eventsByDay, 107, toDay)).toThrow(
      `A toDay value of ${toDay} was given. This value should be 0 or greater`,
    );
  });

  test('Returns an error after a an invalid id id given', () => {
    const id = 1073;
    const eventsByDay = events.groupEventsByDay(testEvents);
    expect(() => events.moveEventToDay(eventsByDay, id, 3)).toThrow(
      `Did not find event id of ${id}`,
    );
  });
});
