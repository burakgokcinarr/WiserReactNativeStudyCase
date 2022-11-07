import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

const windowWidth  = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const CardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        marginTop: 10
    },
    profileImage: {
        borderWidth: 0.5, 
        borderColor: "#D1D5DB"
    },
    profileText: {
        fontWeight: "700",
        fontSize: 26
    },
    userContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginLeft: 6
    },
    profileContainer: {
        flexDirection: "row",
        marginLeft: 6
    },
    profileName: {
        fontSize: 16,
        color: "#111827",
        fontWeight: "700"
    },
    userJob: {
        fontSize: 15,
        color: "#111827",
        fontWeight: "400"
    },
    time: {
        fontSize: 13,
        color: "#9CA3AF",
        fontWeight: "600"
    },
    card: {
        borderWidth: 0.5,
        borderColor: '#D1D5DB',
        margin: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: "400",
        color: "#111827",
        marginLeft: 10,
        textAlign: 'left'
    },  
    postImage: {
        width: windowWidth-20,
        height: 220,
        resizeMode: 'stretch'
    },
    postImageSpotify: {
        width: windowWidth/2,
        height: windowWidth/2,
        borderRadius: windowWidth/2,
        resizeMode: 'cover'
    },
    contentTitle: {
        fontSize: 12,
        fontWeight: "500",
        color: "#9CA3AF",
        margin: 6
    },
    description: {
        fontSize: 16,
        fontWeight: "700",
        color: "#111827",
        margin: 6
    },
    tagContainer: {
        justifyContent: 'space-around',
        backgroundColor: '#E5E7EB',
        borderRadius: 45,
        margin: 10,
        padding: 2
    },
    tag: {
        fontSize: 13,
        fontWeight: "600",
        color: "#111827",
        margin: 6,
        textAlign: 'center'
    },
    dataList: {
        width: '100%',
        height: '100%'
    },
    playButton: {
        position: 'absolute',
        opacity: 0.5
    }
});