import React from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Text,
    View,
    Image,
    ShadowPropTypesIOS
} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';

import ModalTester from "./ModalView";

const audio = [
    {
        title: 'Breathing exercise',
        tags : [{type:'over', value:'18'}, 'male', 'other', 6],
        url: require('../images/Sleep2.jpg')
    },
    {
        title: 'Breathing exercise',
        tags : [{type:'under', value:'18'}, 'male', 'other', 6],
        url: require('../images/Nature1.jpg')
    },
    {
        title: 'Breathing exercise',
        tags : [{type:'all', value:'0'}, 'male', 'other', 6],
        url: require('../images/Sleep3.jpg')
    },
    {
        title: 'Blizzard and snowy ambience',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Sleep2.jpg')
    },
    {
        title: 'Ocean sound',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Sleep1.jpg')
        
    },
    {
        title: 'Rain sound',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Nature3.jpg')
    },
    {
        title: 'Relaxing thunderstorm sounds',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Nature2.jpg')
    },
    {
        title: 'Tropical birds singing',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Nature1.jpg')
    },
    {
        title: 'Gentle waterfall in rainforest',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Nature1.jpg')
    },
    {
        title: 'Meditation 1',
        tags : [{type:'over', value:'25'}, 'male','other', 0],
        url: require('../images/Meditate1.jpg')
    },
    {
        title: 'Meditation 2',
        tags : [{type:'all', value:'0'}, 'male', 'other', 7],
        url: require('../images/Meditate2.jpg')
    },
    {
        title: 'Meditation 3',
        tags : [{type:'all', value:'0'}, 'female', 'other', 6],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'Meditation 4',
        tags : [{type:'all', value:'0'}, 'female', 'other', 7],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'Meditation 5',
        tags : [{type:'under', value:'25'}, 'female', 'other', 7],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'First harmony sound',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'Second harmony sound',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'Third harmony sound',
        tags : [{type:'all', value:'0'}, 'all', 0],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'Sleeping music',
        tags : [{type:'under', value:'25'}, 'male', 'other', 7],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'Another Sleeping music',
        tags : [{type:'over', value:'25'}, 'male', 'other', 5],
        url: require('../images/Meditate3.jpg')
    },
    {
        title: 'Third sleeping music',
        tags : [{type:'over', value:'25'}, 'female', 'other', 5],
        url: require('../images/Meditate3.jpg')
    },
]

const MeditateData = [
    {
        id: 2.1,
        title: 'First Picture for Mediate',
        url: require('../images/Meditate1.jpg')
    },
    {
        id: 2.2,
        title: 'Second Picture for Mediate',
        url: require('../images/Meditate2.jpg')
    },
    {
        id: 2.3,
        title: 'Third Picture for Mediate',
        url: require('../images/Meditate3.jpg')
    },
];
const SleepingData = [
    {
        id: 3.1,
        title: 'First Picture for Sleeping',
        url: require('../images/Sleep1.jpg')
    },
    {
        id: 3.2,
        title: 'Second Picture for Sleeping',
        url: require('../images/Sleep2.jpg')
    },
    {
        id: 3.3,
        title: 'Third Picture for Sleeping',
        url: require('../images/Sleep3.jpg')
    },
];
const NatureData = [
    {
        id: 4.1,
        title: 'First Picture for Nature',
        url: require('../images/Nature1.jpg')
    },
    {
        id: 4.2,
        title: 'Second Picture for Nature',
        url: require('../images/Nature2.jpg')
    },
    {
        id: 4.3,
        title: 'Third Picture for Nature',
        url: require('../images/Nature3.jpg')
    },
];

function Item({ title, selected, onSelect }) {
    return (
        <TouchableOpacity
            onPress={() => displayStuff()}
            style={[
                styles.item,
                { backgroundColor: selected ? '#978300' : '#ffd700' },
            ]}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default function CreateApp() {
    const [selected, setSelected] = React.useState(new Map());

    const onSelect = React.useCallback(
        id => {
            const newSelected = new Map(selected);
            newSelected.set(id, !selected.get(id));

            setSelected(newSelected);
        },
        [selected],
    );

    function shuffleArray(array) {
        let i = array.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      }
    const recommended = shuffleArray(audio);


    return (
        <SafeAreaView style={styles.container}>
            {//!this.props.user.global &&
                <Text style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 35,
                    fontStyle:'bold',
                    textAlign: 'left',
                    color: '#bf9d00'
                }}>Recommended</Text>}
                {//!this.props.user.global &&
                <FlatList
                    data={recommended}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                <Card style={{ width: 310, marginRight:15, borderRadius:10}}>
                                    <CardImage
                                        source={item.url}
                                        style={{borderRadius:10, backgroundColor:'white'}}
                                        resizeMode ='cover'
                                    />
                                    <CardTitle
                                        title={item.title}
                                    />
                                    <CardAction
                                        inColumn={false} style={{justifyContent:'center', paddingBottom:20}}>
                                            <ModalTester />
                                    </CardAction>
                                </Card>
                            </View>
                        )
                    }}
                    horizontal={true}
                />
}
            
            <Text style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 35,
                fontStyle:'bold',
                textAlign: 'left',
                color: '#bf9d00'
            }}>Meditation</Text>
            <FlatList
                data={MeditateData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Card style={{ width: 310, marginRight:15, borderRadius:10}}>
                                <CardImage
                                    source={item.url}
                                    style={{borderRadius:10}}
                                    resizeMode ='cover'
                                />
                                <CardTitle
                                    title={item.title}
                                />
                                <CardAction
                                    inColumn={false} style={{justifyContent:'center', paddingBottom:20}}>
                                        <ModalTester />
                                </CardAction>
                            </Card>
                        </View>
                    )
                }}
                horizontal={true}
            />
            
            <Text style={styles.section}>Nature</Text>
            <FlatList
                data={NatureData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Card style={{ width: 310, marginRight:15, borderRadius:10}}>
                                <CardImage
                                    source={item.url}
                                    style={{borderRadius:10}}
                                    resizeMode ='cover'
                                />
                                <CardTitle
                                    title={item.title}
                                />
                                <CardAction
                                    inColumn={false} style={{justifyContent:'center', paddingBottom:20}}>
                                        <ModalTester />
                                </CardAction>
                            </Card>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                extraData={selected}
                horizontal={true}
            />
            <Text style={styles.section}>Sleeping</Text>
            <FlatList
                data={SleepingData}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Card isDark={true} style={{ width: 310, marginRight:15, borderRadius:10, backgroundColor:'black'}}>
                                <CardImage
                                    source={item.url}
                                    style={{borderRadius:10}}
                                    resizeMode ='cover'
                                />
                                <CardTitle
                                    title={item.title}
                                />
                                <CardAction
                                    inColumn={false} style={{justifyContent:'center', paddingBottom:20}}>
                                        <ModalTester />
                                </CardAction>
                            </Card>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                extraData={selected}
                horizontal={true}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#bf9d00',
        padding: 20,
        marginVertical: 60,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 35,
        marginTop:30,
        textAlign: 'left',
        color: '#bf9d00'
    }
});
