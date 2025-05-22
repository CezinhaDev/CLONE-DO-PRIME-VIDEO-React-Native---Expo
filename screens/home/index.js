import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';

import PrimeVideoLogo from '../../assets/prime_video.png';
import AmazonLogo from '../../assets/amazon_logo.png';

import MovieTheWhell from '../../assets/movies/the_wheel_of_time.png';
import { MOVIESWATCHING } from '../../utils/moviesWaching';
import { MOVIESCRIME } from "../../utils/moviesCrimes"
import { MoviesCard } from '../../componentes/MoviesCards/index';
import { MOVIESLANGUAGE} from "../../utils/moviesLanguage"

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.primeLogImg} source={PrimeVideoLogo} />
        <Image style={styles.amazonLogImg} source={AmazonLogo} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Tv Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

  <ScrollView showsHorizontalScrollIndicator={false} style={styles.contentMovies}>
      <TouchableOpacity style={styles.movieImgThumbnail}>
        <Image source={MovieTheWhell} style={styles.movieImage} />
      </TouchableOpacity>

      <Text style={styles.moviText}>Continue Watching</Text>

      <FlatList
        data={MOVIESWATCHING}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MoviesCard movieURL={item.movieURL} />;
         
        }}
         horizontal
         contentConatiner style={styles.contentList}
         showsHorizontalScrollIndicator={false}
      />



      <Text style={styles.moviText}>Crimes Movies</Text>

      <FlatList
        data={MOVIESCRIME}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MoviesCard movieURL={item.moviesURL} />;
         
        }}
         horizontal
         contentConatiner style={styles.contentList}
         showsHorizontalScrollIndicator={false}
      />




      <Text style={styles.moviText}>Watch in your language</Text>

      <FlatList
        data={MOVIESWATCHING}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MoviesCard movieURL={item.movieURL} />;
         
        }}
         horizontal
         contentConatiner style={styles.contentList}
         showsHorizontalScrollIndicator={false}
      />
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232F3E',
    alignItems: 'flex-start',
  },

  header: {
    width: '100%',
    paddingTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },

  amazonLogImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },

  moviText:{
    color:"#fff",
    fontSize:20,
    fontWeight:"700",
    padding: 15,
  },

  movieImgThumbnail: {
    width: '100%',
    alignItems: 'center',
  },

  contentList:{
    paddingLeft:38,
    paddingRight:18,
  },
  contentMovies:{

  }
});
