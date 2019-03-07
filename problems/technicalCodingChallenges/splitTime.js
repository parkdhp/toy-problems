/*
Design a data structure for a workout application that tracks the location,
distance ran, start time, end time, and pause times.
split times returns -> duration of each km
when going to work, subway = cheating
user has to hit pause, press continue
if clicking end -> has full workout summary excluding subway ride
total distance
total time
split time -> show time/1 km

timestamp available for gps
list of gps points
data structure
{
long_lat:[[long, lat, timestamp]]
pauses_start_end: [[starttime, endtime]]
}

split function, long lat -> calculate for each km of iteration, if there is
a pause, carry over, we dont want to use distance or time,if .5 km and another .5, add it up
calculation to get to the first km -> calculate distance until first km

split time fx will return an array of 3 numbers in time
if distance < 1 km return empty arr
duration: time/km
get_time_km => (long, lat, start, end)
sum_time => (time1, time2) => reutrns total_time
is_paused => (time) returns true/false
*/

const splitTime = (longLatArr, pausesArr) => {
  const output = [];
  const startIndex = 0;
  const endIndex = 0;

  let distance = 0;
  for (let i = 1; i < longLatArr.length; i++) {
    if (distance < 1) {
      const accumDistance = get_distance(
        longLatArr[i - 1][0],
        longLatArr[i - 1][1],
        longLatArr[i][0],
        longLatArr[i][1]
      );
      distance += accumDistance;
    } else {
      distance = 0;
      output.push(sum_time(longLatArr[startIndex], longLatArr[endIndex]));
    }
  }
  return output;
};
