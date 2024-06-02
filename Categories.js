import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";

const Categories = () => {
  return (
    <>
      <Text style={styles.mainText}>CATEGORIES</Text>
      <View style={styles.bigCont}>
        <ScrollView horizontal={true} style={styles.scroll}>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Exercises
              <Text style={styles.number}> 1</Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Exercises
              <Text style={styles.number}>2</Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Exercises
              <Text style={styles.number}>3</Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Exercises
              <Text style={styles.number}>4</Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>

          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Exercises
              <Text style={styles.number}>5</Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Exercises
              <Text style={styles.number}>6</Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Exercises
              <Text style={styles.number}>7</Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Report
              <Text style={styles.number}>2 </Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
          <View style={styles.categoryCont}>
            <Text style={styles.description}>
              Quizes
              <Text style={styles.number}>1 </Text>
              <ImageBackground
                source={require("./assets/Woman.jpg")}
                style={styles.img}
              />
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 3,
    alignSelf: "flex-start",
  },
  categoryCont: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30,
    width: 200,
    height: 320,

    backgroundColor: "white",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    ImageBackground: "url(./assets/picture1.jpg)",
  },
  scroll: {
    flexDirection: "row",
  },
  bigCont: {
    marginTop: 20,
    height: 380,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f0e8",
  },
  img: {
    height: 290,
    width: 200,
    position: "absolute",
    alignSelf: "center",
    zIndex: -1000,
    borderRadius: 10,
  },
  description: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    letterSpacing: 2,
  },
  number: {
    fontSize: 10,
    alignSelf: "flex-end",
    paddingLeft: 10,
    letterSpacing: 2,
  },
});

export default Categories;
