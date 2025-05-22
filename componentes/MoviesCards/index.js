import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export const MoviesCard = (props) => {
  return (
    <TouchableOpacity>
      <Image style={styles.img} source={props.movieURL} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    marginLeft: 20,
    width: 140,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
});
