QUESTIONS:

1. Write a polyfill function for Array.filter

2. Flatten the given array without using any inbuilt functions -
[4, [2,3], [5, [5, 6, 2]], [9,8, [23, 5]]]

3. Sort the giver array of objects by distance from your given location using Mongodb aggregate
query -
Your location object is -
 {
 name: "Shashank Saxena",
 latitude: "28.535517",
 longitude: "77.391029",
 }
Array -
[
 {
 name: "Abhishek",
 latitude: "26.449923",
 longitude: "80.331871",
 },
 {
 name: "Akhtar",
 latitude: "27.167641",
 longitude: "27.167641",
 },
 {
 name: "Raj",
 latitude: "28.632429",
 longitude: "77.218788",
 },
 {
 name: "Ravi",
 latitude: "25.435801",
 longitude: "81.846313",
 },
]

4. Sort the above given array of objects by distance from your given location in core javascript.

5. The given is a file url -
https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3
i) Create a read stream for the given file and when the data is available emit an mp3 event with
received data using the event emitter class.
ii) Attach an event handler on mp3 event and save the data in file system.

6. Write an HOC to check if user is authenticated using the redux/flux. If user is authenticated then
let the page load otherwise redirect to home/login page.
(Write only a single page for HOC, don’t have to setup whole project. You can assume that there is
a isAuthenticated key in redux store to identify whether user is logged in or not)





















TASK 1: polyfill function for Array.filter
ASSUMPTION: find values greater than 30 in array
INPUT : [11, 98, 31, 23, 944];
OUTPUT : [ 98, 31, 944 ]
COMMAND in terminal : node task1.js

#####################################################################################

TASK 2: Flatten the given array without using any inbuilt functions -
ASSUMPTION: none
INPUT : [4, [2,3], [5, [5, 6, 2]], [9,8, [23, 5]]]
OUTPUT : start [
  4, 2, 3, 5,  5,
  6, 2, 9, 8, 23,
  5
]
COMMAND in terminal : node task2.js

#########################################################################################

TASK 3: NOT DONE


TASK 4: Sort the above given array of objects by distance from your given location in core javascript.
ASSUMPTION: none
INPUT : Array -
[
 {
 name: "Abhishek",
 latitude: "26.449923",
 longitude: "80.331871",
 },
 {
 name: "Akhtar",
 latitude: "27.167641",
 longitude: "27.167641",
 },
 {
 name: "Raj",
 latitude: "28.632429",
 longitude: "77.218788",
 },
 {
 name: "Ravi",
 latitude: "25.435801",
 longitude: "81.846313",
 },
]
OUTPUT : Distance from Shashank in Ascending Order [
  {
    name: 'Raj',
    latitude: '28.632429',
    longitude: '77.218788',
    distance: 19.973249357418503
  },
  {
    name: 'Abhishek',
    latitude: '26.449923',
    longitude: '80.331871',
    distance: 371.33823724715836
  },
  {
    name: 'Ravi',
    latitude: '25.435801',
    longitude: '81.846313',
    distance: 559.9606986903653
  },
  {
    name: 'Akhtar',
    latitude: '27.167641',
    longitude: '27.167641',
    distance: 4902.96492203891
  }
]
COMMAND in terminal : node task2.js


#######################################################################################

TASK 5: . The given is a file url -
https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3
i) Create a read stream for the given file and when the data is available emit an mp3 event with
received data using the event emitter class.
ii) Attach an event handler on mp3 event and save the data in file system.

ASSUMPTION: Used a .txt local file to prevent buffer overloading 
INPUT : sample.txt;
OUTPUT : done
The length was: 9
mp3 event emitted:shashank

Write completed.
readStream2
done
The length was: 9
mp3 event emitted:shashank

mp3 event emitted:shashank

Write completed.
Write completed.
COMMAND in terminal : npm start

####################################################################################