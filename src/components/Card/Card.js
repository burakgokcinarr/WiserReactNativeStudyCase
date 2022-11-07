import { View, Text, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardStyles } from '../Card/CardStyle';
import { CustomText } from '../CustomText';
import UserAvatar from 'react-native-user-avatar';
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';

const Card = ({ data, index, postClicked }) => {
    
    return (
        <View style={CardStyles.container}>
            {
                data.post.likes.length > 0 ? (
                    <Text style={{margin: 10}}>
                        <FontAwesome5 name="hands-wash" size={15} color="#111827" />    
                        <Text style={CardStyles.tag}> {data.post.likes[0]} {(data.post.likes.length - 1) > 0 ? ('and ' + (data.post.likes.length - 1) + ' other') : ''}</Text>
                        <Text style={CardStyles.contentTitle}> liked is post</Text>
                    </Text>
                ) : null
            }
            <View style={{flexDirection: 'row', margin: 6}}>
                <UserAvatar size={40} name={data.user.data.name} src={data.user.data.profileImage} bgColor="#FFFFFF" style={CardStyles.profileImage} textColor="#111827" textStyle={CardStyles.profileText}/>
                <View style={CardStyles.userContainer}>
                    <View style={{flexDirection: 'column'}}>
                        <View style={CardStyles.profileContainer}>
                            <Text style={CardStyles.profileName}>{data.user.data.name}</Text>
                            <Text style={CardStyles.time}>  {data.post.timestamp}</Text>
                        </View>
                        <Text style={CardStyles.userJob}>  {data.user.data.jobs}</Text>
                    </View>
                    <TouchableOpacity onPress={() => postClicked(index)}>
                        <Entypo name="dots-three-horizontal" size={24} color="#111827" style={{marginRight: 15}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{marginLeft: 10}}>
                {data.post.title && <CustomText style={CardStyles.title} text={data.post.title} providerShare={false}/>}
            </View>
            <View style={CardStyles.card}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                        style={data.post.provider.includes("spotify") ? CardStyles.postImageSpotify : CardStyles.postImage}
                        source={{
                            uri: data.post.image,
                        }}
                    />
                    {!data.post.provider.includes("wiki") ? (
                        <TouchableOpacity style={CardStyles.playButton} onPress={() => alert(data.post.provider)}>
                            <AntDesign name="play" size={68} color="#FFFFFF"/>
                        </TouchableOpacity>
                    ) : null}
                </View>
                <View style={{margin: 6}}>
                    <CustomText style={CardStyles.contentTitle} text={data.post.contentTitle} providerShare={true}/>
                </View>
                <Text style={CardStyles.description}>{data.post.description}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                {
                    data.tags.map((tag) => {
                        return (
                            <View key={tag} style={CardStyles.tagContainer}>
                                <Text style={CardStyles.tag}>{tag}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Card;