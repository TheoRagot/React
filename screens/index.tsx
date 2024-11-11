import React = require('react');
import { View, Text, useColorScheme, StyleSheet, Pressable, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CColors} from "../constants/Colors";
import apiMethods from "../methods/api";
import MButton from "../components/button";
import PosterOne from '../components/posterOne';
import PosterTwo from '../components/posterTwo';
import { BlurView } from "@react-native-community/blur";

const IndexScreen = () => {
    const colorScheme = useColorScheme();
    const Colors = CColors[colorScheme]

    /**
     * Data
     */
    const [loading, setLoading] = React.useState(true);
    const [firstCarousel, setFirstCarousel] = React.useState({});
    const [secondCarousel, setSecondCarousel] = React.useState([]);
    const [thirdCarousel, setThirdCarousel] = React.useState([]);

    /**
     * Methods
     */
    const truncateString = (str, num) => {
        return str.length > num ? str.slice(0, num) + "..." : str;
    }

    React.useEffect(() => {
        apiMethods.getMovies().then(data => {
            setFirstCarousel(data[0]);
            setSecondCarousel([data[1],data[2],data[3],data[4],data[5]]);
            setThirdCarousel([data[6],data[7],data[8],data[9],data[10]]);
        });
    }, [])

    return (
        <ScrollView style={[styles.main, {backgroundColor: Colors.backgroundColor}]}>
            <View style={styles.topNavbar.main}>
                <Text style={[styles.topNavbar.inner, styles.topNavbar.active]}>All</Text>
                <Text style={styles.topNavbar.inner}>Romance</Text>
                <Text style={styles.topNavbar.inner}>Sport</Text>
                <Text style={styles.topNavbar.inner}>Kids</Text>
                <Text style={styles.topNavbar.inner}>Horoor</Text>
            </View>

            <Pressable style={styles.header.container}>
                <Image style={styles.header.picture} source={{uri: `https://image.tmdb.org/t/p/w500/${firstCarousel.poster_path}`}}/>
                <LinearGradient colors={[Colors.backgroundColor + "00", Colors.backgroundColor]} style={styles.header.gradient}/>
            </Pressable>

            <View style={styles.buttons.main}>
                <MButton style={styles.buttons.item} text="Wishlist" type="dark"/>
                <MButton style={styles.buttons.item} text="Details" type="default"/>
            </View>

            <View style={styles.padding}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, {color: Colors.textColor}]}>Dernières sorties</Text>

                    <Pressable><Text style={styles.titleCta}>Voir plus</Text></Pressable>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        secondCarousel.map((movie, index) => (
                            <PosterOne key={index} title={truncateString(movie.title, 14)} picture={movie.poster_path} style={{marginRight: 14}}/>
                        ))
                    }
                </ScrollView>
            </View>

            <View style={styles.padding}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.title, {color: Colors.textColor}]}>Dernières sorties</Text>

                    <Pressable><Text style={styles.titleCta}>Voir plus</Text></Pressable>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        thirdCarousel.map((movie, index) => (
                            <PosterTwo key={index} title={truncateString(movie.title, 10)} picture={movie.poster_path} note={movie.vote_average} style={{marginRight: 14}}/>
                        ))
                    }
                </ScrollView>
            </View>

            <View style={[styles.padding, styles.ad.main]}>
                <View style={styles.ad.image}/>
                <Text style={styles.ad.title}>Black friday is here!</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sociis pulvinar auctor nibh nibh iaculis id.</Text>
                <MButton style={{marginTop: 16}} text="Check Details" type="default"/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    padding: {
        paddingHorizontal: 14
    },
    topNavbar: {
        main: {
            position:"absolute",
            top: 20,
            left: 14,
            right: 14,
            zIndex: 1,
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "space-between",
            backgroundColor: "#000000bb",
            borderRadius: 99,
            padding: 3
        },
        inner: {
            paddingHorizontal: 18,
            paddingVertical: 8,
            borderRadius: 99,
            color: "#ffffff"
        },
        active: {
            backgroundColor: "#ffffff",
            color: "#000000"
        }
    },
    header: {
        container: {
            with: "100%",
            height: 430,
            position: 'relative'
        },
        picture: {
            with: "100%",
            height: "100%",
            object: "contain"
        },
        gradient: {
            position:"absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 100
        }
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 28,
        marginBottom: 20
    },
    title: {
        fontWeight: "bold",
        fontSize: 20
    },
    titleCta: {
        color: "#F2C94C"
    },
    buttons: {
        main: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        item: {
            flex: 1
        }
    },
    ad: {
        main: {
            marginTop: 20
        },
        image: {
            width: "100%",
            height: 165,
            backgroundColor: "#333333"
        },
        title: {
            fontWeight: "bold",
            fontSize: 16,
            marginTop: 16,
            marginBottom: 8
        }
    }
});

export default IndexScreen;