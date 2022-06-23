/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

    innerContainer: {padding:10, flex:1, justifyContent: 'center'},

    title: {fontWeight: 'bold', fontSize:25},

    infoContainer: {flexDirection: 'row', flex:1, alignItems: 'center'},

    contentContainer: {flexDirection: 'row'},

    year: {marginLeft: 10, color: 'gray', fontWeight: 'bold', fontSize:12},

    soldoutContainer: {},
    soldoutText: {backgroundColor: 'white',borderRadius:2,color: '#ff3333', borderWidth:1, borderColor: '#ff3333', margin:3,padding:3},


});
