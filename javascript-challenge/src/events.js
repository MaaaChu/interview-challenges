const { parse, differenceInDays, addDays } = require('date-fns');

const DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'";
/** 
  An event could look like this:
  ```
  {
    id: 107,
    startsAt: '2021-01-27T13:01:11Z', 
    endsAt: '2021-01-27T15:01:11Z', 
    title: 'Daily walk',
  }
  ```
*/

/** 
  Take an array of events and return an object that is a  mapping from the 'day' to the events occuring on that day.
  The keys should be the day-difference to the earliest occuring event.
  Each days events should be sorted in ascending order of startsAt

  A result could look like:
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
      { id: 156, startsAt: '2021-01-27T17:01:11Z',  endsAt: '2021-01-27T22:01:11Z',  title: 'Dinner' },
    ],
    2: [
      { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },
    ]
  }
 ```

 Your solution should not modify any of the function arguments
*/
const events = [
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
  {
    id: 117,
    startsAt: '2021-01-28T13:01:11Z',
    endsAt: '2021-01-28T15:01:11Z',
    title: 'Daily walk',
  },
];

const parseStringToDate = (date) => parse(date, DATE_FORMAT, new Date());

const findDifferenceInDays = (dayA, dayB) =>
  differenceInDays(
    parseStringToDate(dayA.startsAt),
    parseStringToDate(dayB.startsAt),
  );

const sortEventsByStartDate = (events) =>
  events.sort((dateA, dateB) => findDifferenceInDays(dateA, dateB));

const groupByStartDate = (events) => {
  const firstStartDate = events[0];

  return events.reduce((acc, event) => {
    let daysToEvent = findDifferenceInDays(event, firstStartDate);
    acc[daysToEvent] = acc[daysToEvent] || [];
    acc[daysToEvent].push(event);
    return acc;
  }, {});
};

const groupEventsByDay = (events) => {
  const sortedStartDates = sortEventsByStartDate(events);
  const groupedEventsByDay = groupByStartDate(sortedStartDates);

  return groupedEventsByDay;
};

// groupEventsByDay(events);

/** 
  Adjust the start and end date of an event so it maintains its total duration, but is moved `toDay`.
  `eventsByDay` should be the same as the return value of `groupEventsByDay`
  `id` will be the event that should be moved
  `toDay` will be a number that indicates the key of `eventsByDay` that the target event should be moved to

  Example:
  ```
  eventsByDay(
    {
      0: [
        { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
      ],
      2: [
        { id: 5676, startsAt: '2021-01-29T13:01:11Z',  endsAt: '2021-01-29T15:01:11Z',  title: 'Daily walk' },
      ]
    },
    5676,
    3,
  )
  ```
  Should return something like 
  ```
  {
    0: [
      { id: 106, startsAt: '2021-01-27T13:01:11Z',  endsAt: '2021-01-27T15:01:11Z',  title: 'Daily walk' },      
    ],
    3: [
      { id: 5676, startsAt: '2021-01-30T13:01:11Z',  endsAt: '2021-01-30T15:01:11Z',  title: 'Daily walk' },
    ]
  },
  ```

  Your solution should not modify any of the function arguments
*/
const changeEventDate = (eventToBeUpdated, newDay) => {
  const newEventStartDate = addDays(
    parseStringToDate(eventToBeUpdated.startsAt),
    newDay,
  );
  const newEventEndDate = addDays(
    parseStringToDate(eventToBeUpdated.endsAt),
    newDay,
  );
  return (changedEvent = {
    ...eventToBeUpdated,
    startsAt: newEventStartDate.toISOString(),
    endsAt: newEventEndDate.toISOString(),
  });
};

const moveEventToDay = (eventsByDay, id, toDay) => {
  if (toDay < 0)
    throw new Error(
      `A toDay value of ${toDay} was given. This value should be 0 or greater`,
    );
  const copyEventsByDay = { ...eventsByDay };

  Object.keys(copyEventsByDay).map((key) => {
    copyEventsByDay[key].map((event, index) => {
      if (event.id === id) {
        const newDay = toDay - Number(key);
        const updatedEvent = changeEventDate(event, newDay);
        copyEventsByDay[toDay] = copyEventsByDay[toDay] || [];
        copyEventsByDay[toDay].push(updatedEvent);
        copyEventsByDay[key].splice(index, 1);
      }
    });
  });

  if (JSON.stringify(copyEventsByDay) === JSON.stringify(eventsByDay))
    throw new Error(`Did not find event id of ${id}`);
  else eventsByDay = { ...copyEventsByDay };

  return eventsByDay;
};

// const eventsByDay = groupEventsByDay(events);
// moveEventToDay(eventsByDay, 107, 6);

module.exports = { groupEventsByDay, moveEventToDay };
