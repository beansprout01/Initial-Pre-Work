//I put into practice all what I've learned thus far

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (id == 5439) {
    collection[5439]["artist"] = "ABBA";
    collection[5439]["tracks"] = ["Take a Chance on Me"];
  } else if (id == 2548) {
    delete collection[2548]["artist"]
    delete collection[2548]["tracks"]
  } else if (id == 1245) {
    collection[1245]["tracks"] = ["Addicted to Love"];
    collection[1245]["album"] = "Riptide";
  } else if (id == 2468) {
    collection[2468]["tracks"] = ["1999", "Little Red Corvette", "Free"]
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
